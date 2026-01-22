"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { drRachel1, drRachel2, eaBackground } from "@/images";

const images = [drRachel1, drRachel2];

const ExoticPetVet = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Automatic fade every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="max-w-[1400px] mx-auto px-12 py-16 rounded-2xl overflow-hidden"
      style={{
        backgroundImage: `url(${eaBackground.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="lg:flex lg:items-start lg:gap-12">
        {/* Text Section - 2/3 */}
        <div className="lg:w-2/3 space-y-6 text-gray-900">
          <h2 className="text-3xl md:text-4xl font-bold">
            Exotic Pet Vets for Small Animals, Reptiles, Birds & Other Furry Pets
          </h2>
          <p className="text-lg leading-relaxed">
            Locating the appropriate expertise for your exotic pet can pose a challenge. 
            At <strong>Exotic Animales Ranch</strong>, our experienced veterinary team provides 
            top-notch care for all types of exotic animals, ranging from the tiniest mammals 
            to the largest snakes. Our mission is to ensure your exotic companion thrives 
            in a safe, healthy, and enriched environment.
          </p>
          <p className="text-lg leading-relaxed">
            Our veterinarians understand the complex environmental requirements, dietary needs, 
            and species-specific health concerns of exotic pets. With extensive hands-on experience, 
            we can accurately diagnose, treat, and prevent a wide range of conditions, ensuring 
            each animal receives the comprehensive care it deserves.
          </p>
          <p className="text-lg leading-relaxed">
            <strong>Exotic pets we commonly care for include:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Birds (birds of prey, parrots, psittacine, cockatiels)</li>
            <li>Reptiles (tortoises, terrapins, snakes, lizards)</li>
            <li>Mammals (ferrets and other mustelids, rodents, marsupials)</li>
            <li>Amphibians (frogs, newts)</li>
            <li>Arthropods (spiders, snails)</li>
          </ul>
        </div>

        {/* Image Slider Section - 1/3 */}
        <div className="lg:w-1/3 mt-8 lg:mt-0 flex flex-col items-center gap-4">
          <div className="relative w-full h-[600px] md:h-[500px] lg:h-[full] rounded-2xl overflow-hidden shadow-lg">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out`}
                style={{ opacity: idx === currentImage ? 1 : 0 }}
              >
                <Image
                  src={img}
                  alt={`Dr. Rachel Exotic Pet Vet ${idx + 1}`}
                  fill
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            ))}
          </div>

          {/* Bio below slider */}
          <p className="mt-0 text-gray-900 text-sm leading-relaxed text-center">
            My name is Dr. Rachel Summers, a passionate exotic pet veterinarian with over a decade of experience. 
            Specializing in dogs, cats, birds, and exotic animal general care in E.A Ranch and Carrollton West Pet Hospital in Dallas, Texas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExoticPetVet;
