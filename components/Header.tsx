"use client";
import React, { useState, useEffect } from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import FavoriteButton from "./FavoriteButton";
import OrdersButton from "./OrdersButton";
import SignIn from "./SignIn";
import MobileMenu from "./MobileMenu";
import { ClerkLoaded, SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const Header = () => {
  const { user } = useUser();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled 
          ? "py-2 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-sm border-b border-black/5" 
          : "py-4 bg-white/50 dark:bg-transparent backdrop-blur-md"
      )}
    >
      <Container className="flex items-center justify-between gap-4">
        {/* LEFT: Mobile Menu + Logo */}
        <div className="flex items-center gap-2 lg:gap-0 min-w-0">
          <div className="lg:hidden">
            <MobileMenu />
          </div>
          <Logo />
        </div>

        {/* CENTER: Desktop Menu */}
        <div className="hidden lg:flex">
          <HeaderMenu />
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center justify-end gap-1.5 md:gap-3">
          <div className="hidden sm:block">
            <SearchBar />
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <CartIcon />
            <FavoriteButton />
            <div className="hidden md:block">
              <OrdersButton />
            </div>
          </div>
          
          <ClerkLoaded>
            <SignedIn>
              <div className="pl-2 border-l border-gray-200 dark:border-zinc-800 ml-1">
                <UserButton appearance={{ elements: { userButtonAvatarBox: "w-9 h-9" } }} />
              </div>
            </SignedIn>
            {!user && <SignIn />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;