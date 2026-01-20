import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import HomeCategories from "@/components/HomeCategories";
import LatestBlog from "@/components/LatestBlog";
import ProductGrid from "@/components/ProductGrid";
import ShopByBrands from "@/components/ShopByBrands";
import WelcomeSection from "@/components/WelcomeSection";
import NewArrivals from "@/components/NewArrivals";
import PremiumSection from "@/components/PremiumSection";
import { getCategories } from "@/sanity/queries";

import React from "react";

const Home = async () => {
  const categories = await getCategories(6);

  return (
    <Container className="bg-shop-light-pink">
      <HomeBanner />
      <ProductGrid />
      <WelcomeSection />
      <HomeCategories categories={categories} />
      <NewArrivals />
      <PremiumSection />
      <ShopByBrands />
      <LatestBlog />
    </Container>
  );
};

export default Home;
