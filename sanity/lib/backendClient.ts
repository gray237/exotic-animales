import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const backendClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // ❗ REQUIRED for create/update mutations
  token: process.env.SANITY_API_WRITE_TOKEN, // ✅ Editor-level write token
});
