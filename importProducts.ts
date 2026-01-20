// importProducts.ts
import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";
import { products } from "./sanity/productsData.ts";


// --- Setup Sanity client ---
const client = createClient({
  projectId: "yu72rwpj", // e.g. "abcd1234"
  dataset: "production",
  token: "skmNhb3uZVC0fUgIVYbu1TLys3nbLSIYXYtQAMzSnc8TvtPoOyOprH4bleRezKZExKyZsPDUbJ6RPDYya6lQbQD3QrFxhi4TdGsx7e0YdRcxUX10r5oRGi6eBiqrnImb83FUC2K56DYbgRA1ZKkGJGlp3znoq437aeW06UjhaJDNSOOWeW7u", // must have write access
  apiVersion: "2023-01-01",
  useCdn: false,
});

const IMAGE_BASE_PATH = path.join(process.cwd(), "images/products/mammals");

// --- Helper: upload or find image ---
async function uploadImage(ref: string) {
  const filename = ref.replace(/^image-/, ""); // strip 'image-' prefix
  const filePath = path.join(IMAGE_BASE_PATH, filename);

  if (!fs.existsSync(filePath)) {
    console.log(`🚫 Missing local image: ${filePath}`);
    return null;
  }

  try {
    const asset = await client.assets.upload("image", fs.createReadStream(filePath), {
      filename,
    });
    console.log(`✅ Uploaded image: ${filename}`);
    return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
  } catch (err) {
    console.error(`❌ Error uploading ${filename}:`, (err as Error).message);
    return null;
  }
}

// --- Import main products ---
async function importProducts() {
  for (const product of products) {
    try {
      const productId =
        product.slug?.current ??
        product.name.toLowerCase().replace(/\s+/g, "-");

      // Upload main gallery images
      const images = [];
      for (const img of product.images || []) {
        const uploaded = await uploadImage(img.asset._ref);
        if (uploaded) images.push(uploaded);
      }

      // Upload banner image
      let bannerImage = null;
      if (product.bannerImage?.asset?._ref) {
        bannerImage = await uploadImage(product.bannerImage.asset._ref);
      }

      // Prepare document for Sanity
      const doc = {
        ...product,
        _id: productId,
        images,
        bannerImage,
      };

      await client.createOrReplace(doc);
      console.log(`✅ Imported: ${product.name}`);
    } catch (err) {
      console.error(
        `❌ Failed to import ${product.name}:`,
        (err as Error).message
      );
    }
  }
}

importProducts();
