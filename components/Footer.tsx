import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { SubText, SubTitle } from "./ui/text";
import { categoriesData, quickLinksData, informationData } from "@/constants/data";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <div className="space-y-4">
            <Logo />
            <SubText>
              Discover E.A Ranch, your trusted online exotic pet store for a curated selection of pure bred high-quality mammals, rare amphibians and colorful reptiles for sale. We're not just passionate about exotic animals; we're dedicated to sharing our knowledge and ensuring your satisfaction.
            </SubText>
            <SocialMedia
              className="pt-2" 
              iconClassName="bg-gray-100 dark:bg-zinc-800"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>
          <div>
            <SubTitle>Quick Links</SubTitle>
            <ul className="space-y-3 mt-4">
              {quickLinksData?.map((item) => (
                <li key={item?.title} className="transform transition-transform hover:translate-x-1">
                  <Link
                    href={item?.href}
                    className="font-medium transition-colors duration-200 hover:text-shop_light_green"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle>Top Categories</SubTitle>
            <ul className="space-y-3 mt-4">
              {categoriesData?.map((item) => (
                <li key={item?.title} className="transform transition-transform hover:translate-x-1">
                  <Link
                    href={`/category/${item?.href}`}
                    className="font-medium transition-colors duration-200 hover:text-shop_light_green"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle>Buyer Info</SubTitle>
            <ul className="space-y-3 mt-4">
              {informationData?.map((item) => (
                <li key={item?.title} className="transform transition-transform hover:translate-x-1">
                  <Link
                    href={`${item?.href}`}
                    className="font-medium transition-colors duration-200 hover:text-shop_light_green"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle>Newsletter</SubTitle>
            <SubText>
              Subscribe to our newsletter to receive announcements on new exotic pet litters (babies, pups and kits) plus exclusive
              offers!
            </SubText>
            <form className="space-y-3">
              <Input placeholder="Enter your email" type="email" required />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t text-center text-sm text-gray-600">
          <div>
            © {new Date().getFullYear()} <Link
                    href={`/`}
                    className="hover:text-shop_light_green hoverEffect font-medium"
                  >
                    Exotic Animals Ranch
                  </Link>. All Rights Reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
