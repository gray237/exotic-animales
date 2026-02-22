import React from "react";
import { Title } from "./ui/text";

const AboutUs = () => {
  return (
    <section className="py-8 px-2 lg:px-24">
      {/* Constrain content to max width 1400px */}
      <div className="max-w-350 mx-auto">
        {/* Centered Title */}
        <div className="text-center mb-5">
          <Title>
            Exotic Animales Ranch: A Collection of Zoological Excellence
          </Title>
        </div>

        {/* Two-column text with 10px horizontal padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 lg:px-16 text-gray-700 leading-relaxed">
          {/* Left paragraph */}
          <p className="px-2.5">
            Deep in the emerald expanse of the <strong>Texas Hill Country</strong>, Jorge and Teresa Ovidio cultivated a sanctuary for biodiversity at <strong>Exotic Animales Ranch</strong>, spanning <strong>1,800 acres</strong> of pristine limestone ridges and rolling pastures. Our family-owned facility is a <strong>USDA licensed and Texas Parks &amp; Wildlife</strong> zoological estate dedicated to elite <strong>animal husbandry</strong> and the preservation of endangered species. We bridge the gap between passion and protection, offering a secure haven where the majesty of the wild meets a heritage of meticulous care. Our mission remains rooted in the belief that through specialized breeding and educational outreach, we can ensure a vibrant future for the world&apos;s most vulnerable wildlife.
          </p>

          {/* Right paragraph */}
          <p className="px-2.5">
            The ranch serves as a living tapestry of global fauna, premium lineage and ethical breeding practices. Beyond the towering silhouettes of our ungulate herds, the landscape teems with life, from <strong>African and European hoof stock</strong>, including zebras, deers, impala and <strong>Australian kangaroos</strong> enjoying sun-drenched walkabouts, with playful lemurs and fennec foxes thriving in enriched outdoor habitats. Even the most delicate nocturnal sugar gliders, vibrant chameleons, colorful snakes, lizards and exotic marmosets—find a permanent home within our sophisticated ecosystem. At E.A Ranch, we don&apos;t just rehome exotic pets for sale; we champion a legacy of conservation in <strong>Texas wildlife management</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
