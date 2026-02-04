import { adoptAxolotls, adoptCoatimundis, adoptHoofstock, adoptFennecFoxes, adoptGeckos, adoptHedgehogs, adoptWallabies, adoptLemurs, adoptMarmoset, adoptPrarieDogs, adoptPorcupines, adoptSavannahCat, adoptSkunks, adoptSnakes, adoptSugarGliders, adoptTurtles, } from "@/images";
import { axolotlExclusive } from "@/images";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { boxRedEaredTurtles, capybarasPrairieDogs, cornSnakesBallPythons, fennecBatEaredFoxPups, HighparkHoofstock, crestedLeopardGeckos, platinumSugarGliders, pygmyMarmosetMonkey, prehensileTailedPorcupine, ringTailedCoati, hamstersHedgehogs, hybridSavannahKittens, skunksFerretsWeasels, triColorLemurs, bennetsWallaby,  } from "@/images";

import { adoptLeucisticAxolotl, adoptCopperAxolotl, adoptSugarGlider, adoptSugarGlider2, adoptFennecFox, adoptRingTaillemur, adoptF5SavannahCat, adoptFemaleSavannahCat, adoptPygmyMarmoset, adoptBabyCoati, adoptPrehensilePorcupine, adoptStripedWeasel, adoptHighparkBull, adoptBabyCapybaras, adoptBabyPrairieDog, adoptBoxTurtle, adoptSliderTurtle, adoptBabyleopardGecko, adoptBabyCrestedGecko, adoptBabyPygmyHedgehog, adoptBabyDwarfHamster, adoptBabyWallaby, adoptRedNeckWallaby, adoptAlbinoCornSnake, adoptPastelBallPython,  } from "@/images";

export interface Pet {
  name: string;
  image: StaticImageData;
  description: string;
  features: string[];
  price: number;
  sold?: boolean;
}

/* ================== NEW ================== */
export interface AdoptionAccordionItem {
  id: string;
  title: string;
  content: string;
}

export interface AdoptionCategory {
  slug: string;
  title: string;
  description: string;

  heroImage?: string | StaticImageData;
  categoryImage?: string | StaticImageData; // ✅ FIXED

  moreInfo?: string;

  twoColumnText?: {
    leftTitle: string;
    leftContent: string;
    rightTitle: string;
    rightContent: string;
  };

  textImageSection?: {
    title: string;
    content: string;
  };

  pets: Pet[];
  accordion?: AdoptionAccordionItem[];

  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
}

// ================== Adoption Data ==================
export const adoptionData: AdoptionCategory[] = [
  {
    slug: "axolotl-morphs",
    title: "Axolotl Morphs",
    description:
      "The best morph collection of Axolotls for sale from USDA-licensed breeders delivering rare water-dragons nationwide in the US & Canada. Rescue unique leucistic, copper, melanoid, to mosaic axolotls ethically sourced for collectors and first-time owners.",
    heroImage: axolotlExclusive,
    categoryImage: adoptAxolotls,
    moreInfo: "All axolotls come with health certificates and care sheets.",
    pets: [
      {
        name: "Leucistic Axolotl",
        image: adoptLeucisticAxolotl,
        description:
          "Bright white morph with pink gills, perfect for home aquariums.",
        features: ["Vet Checked", "Beginner Friendly"],
        price: 149.99,
        sold: false,
      },
      {
        name: "Copper Axolotl",
        image: adoptCopperAxolotl,
        description: "Vibrant copper morph, active and easy to care for.",
        features: ["Vet Checked", "Rare Morph"],
        price: 159.99,
        sold: true,
      },
    ],
    
    /* ========= TWO COLUMN TEXT ========= */
    twoColumnText: {
      leftTitle: "What are Axolotls",
      leftContent:
        "Axolotls (Ambystoma mexicanum), also known as 'Mexican walking fish', are unique aquatic salamanders native to the lake complexes of Mexico City. Unlike most amphibians that undergo metamorphosis to live on land, axolotls exhibit neoteny, meaning they retain juvenile traits—such as feathery external gills and a finned tail—throughout their entire lives while living underwater. They have extraordinary regenerative abilities, capable of perfectly regrowing lost limbs, hearts, spinal cords, and even parts of their brains without scarring. While they are highly popular as exotic pets and vital to scientific research, they are critically endangered in the wild due to habitat loss and pollution, with fewer than 1,000 left in their native canals.",
      rightTitle: "Axolotl Care & Adoption Guide",
      rightContent:
        "Axolotls are unique, fully aquatic salamanders known for their permanent larval state and remarkable regenerative abilities. Providing a home for these 'walking fish' requires a commitment to maintaining cool water temperatures and a high-protein diet of earthworms and specialized pellets. With proper care, an axolotl can live between 12 and 15 years and grow to a length of 9 to 18 inches. Axolotls are strictly carnivorous and require a meat-based diet, often swallowing food whole rather than chewing. These amphibians are highly sensitive to water quality and temperature, requiring stable, cool conditions to thrive. Hatchling and baby axolotls have different dietary needs, often requiring live food like brine shrimp due to their small size.",
    },

    /* ========= TEXT + IMAGE ========= */
    textImageSection: {
      title: "Nationwide Transport Available! Local Pickup in Liberty Hill, TX.",
      content:
        "<p>We offer safe, temperature-controlled shipping to all mainland U.S. states where these unique aquatic salamanders are legal. To protect local ecosystems, axolotls are currently illegal to own or import in: California, Maine, New Jersey, and Washington D.C. Additionally, states like New Mexico and Hawaii require special permits that we can facilitate.</p> <p>All of our <a href='/category/axolotls'>axolotls for sale</a> are captive-bred with a focus on strong genetics, vibrant health, and stunning color morphs. From classic Wild types to striking Lucys and Albinos, every 'water dragon' at E.A. Ranch is raised with meticulous care. Because they are sensitive to water quality, we ensure our juveniles are robust and well-started before they're adopted'. Every purchase includes a starter pack of high-protein sinking pellets and a lifetime of breeder support to help you with proper axolotl care.</p>",
    },

    /* ================== ACCORDION DATA ================== */
    accordion: [
      {
        id: "who-can-adopt",
        title: "WHO CAN ADOPT?",
        content:
          "Adoption is open to individuals who have researched the specific nitrogen cycle requirements of aquatic habitats. Because axolotls can live up to 15 years, potential owners must be prepared for a long-term commitment. We prioritize adopters who understand that axolotls are 'display pets' and should not be handled, as their skin is extremely delicate and protected by a sensitive slime coat.",
      },
      {
        id: "adoption-process",
        title: "ADOPTION PROCESS",
        content:
          "The process begins with an application to ensure your habitat is ready. A successful adoption typically requires proof of a 'cycled' tank—meaning the water has the beneficial bacteria necessary to process waste. Once the environment is verified as safe and cool, we coordinate the safe transport of your new companion.",
      },
      {
        id: "good-pets",
        title: "ARE AXOLOTLS GOOD AS PETS?",
        content:
          "Axolotls make excellent pets for those who enjoy observing unique biological behaviors. They are quiet, do not require UV lighting, and have distinct personalities. However, they are not suitable for those looking for a pet to hold or play with. Their environment requires weekly water changes and consistent monitoring of parameters like ammonia and nitrites.",
      },
      {
        id: "usual-cost",
        title: "WHAT'S THE COST OF OWNING AN AXOLOTL?",
        content:
          "The initial cost of an axolotl usually ranges from $40 to $300 depending on the morph, but the primary investment lies in the habitat. A 20-gallon long or 29-gallon tank, high-quality filtration, and cooling fans or chillers can cost between $200 and $500. Monthly costs for food (earthworms/pellets) are relatively low, typically under $20.",
      },
      {
        id: "pet-supplies",
        title: "DO YOU SELL TANKS AND AXOLOTL SUPPLIES?",
        content:
          "We offer starter kits that include essential components like the aquarium, stand, lights, filtration, and thermometers to set up a tank. While the initial setup is crucial, additional supplies like specialized filters, water testing kits, and cooling equipment may be necessary depending on the environment and desired tank size, which should be a minimum of 20 gallons long or preferably a 40-gallon breeder.",
      },
      {
        id: "what-they-eat",
        title: "AXOLOTLS NUTRITION AND FEEDING GUIDE",
        content:
          "Axolotls should be fed a variety of protein-rich foods. Adult staples include: <ul> <li><strong>Nightcrawlers/Earthworms:</strong> The most nutritionally complete option. </li> <li><strong>Soft Pellets: </strong>Specifically formulated for axolotls.</li> <li><strong>Occasional Treats: </strong>Bloodworms or brine shrimp (best for juveniles).</li></ul>",
      },
      {
        id: "important-info",
        title: "UNDERSTANDING AXOLOTL MORPHS",
        content:
          "Axolotls come in various \"morphs\" or color variations. Common types include: <ul> <li><strong>Wild Type Morphs:</strong> Dark brown, grey, or black with iridescent specks, designed for camouflage. </li> <li><strong>Leucistic Morphs: </strong>Translucent white skin with pink gills and black eyes.</li> <li><strong>Albino Morphs (White/Golden): </strong>Lack melanin; white or golden skin with pink eyes and gills</li> <li><strong>Copper Morphs: </strong>Light brown or tan with orange/red eyes and copper-toned spots.</li> <li><strong>Melanoid Morphs: </strong>Extremely dark, often solid black, lacking iridophores.</li> <li><strong>GFP (Green Fluorescent Protein): </strong>A genetic trait (not a color morph) that causes the axolotl to glow under black light. </li></ul>",
      },
      {
        id: "adoption-notice",
        title: "ADOPTION NOTICE",
        content:
          "<ul><li>Availability changes frequently, thus submitting a request does not guarantee adoption.</li> <li><strong>Solitary Sweethearts:</strong> Unlike many exotic pets, axolotls are perfectly content—and often safer—living a solitary life. While they can be housed together in very large tanks once they reach maturity, they are known to \"nip\" at each other's gills and limbs when young or crowded. For this reason, we recommend starting with a single axolotl to ensure a stress-free environment for your new friend.</li></ul> ",
      },
      {
        id: "requirements",
        title: "AXOLOTL ADOPTION REQUIREMENTS",
        content:
          "<ul> <li><strong>Tank Size:</strong> Start with at least a 20-gallon long aquarium for one adult. </li> <li><strong>Temperature Control: </strong>Keep water between 60°F and 68°F; temperatures above 72°F can cause heat stress and fungal infections.</li> <li><strong>Legal Check: </strong>Ensure axolotls are legal in your state (they are currently restricted in California, Maine, New Jersey, and D.C.).</li> <li><strong>Feeding Schedule:</strong> Feed adults every 2-3 days; juveniles require daily feeding.</li></ul>",
      },
      {
        id: "psa",
        title: "FRIENDLY PSA: DANGER OF GRAVEL",
        content:
          "A critical warning for all owners: <strong>Never use gravel or small stones in an axolotl tank.</strong> Axolotls feed by suction and will accidentally inhale substrate. Gravel causes life-threatening intestinal impactions. Use fine aquarium sand or leave the tank bottom bare for safety.",
      },
    ],
    seoTitle: "Vibrant Axolotl Morphs for sale",
    seoDescription:
      "Hand-raised axolotl morphs in dazzling colors, healthy and ready for your home aquarium. We offer expert care guidance with nationwide delivery when you buy axolotls online.",
    seoKeywords: [
      "Axolotl morphs",
      "Rare aquatic pets",
      "Hand-raised axolotls",
      "Exotic aquarium animals",
      "Healthy axolotls",
      "Lineaged axolotls"
    ],
  },

  /* ========= SUGAR GLIDER ========= */

  {
    slug: "sugar-gliders",
    title: "Sugar Gliders",
    description:
      "Adopt hand-tame, USDA-registered Sugar Gliders including rare white-face, mosaic, and platinum lineages. We specialize in bonded pairs and provide nationwide shipping. Our gliders are socialized from the pouch to ensure they are the perfect companion for dedicated exotic pet owners.",
    heroImage: platinumSugarGliders,
    categoryImage: adoptSugarGliders,
    moreInfo:
      "All sugar gliders come with cage setup guides, dietary recommendations, and bonding instructions.",
    pets: [
      {
        name: "Classic Sugar Glider",
        image: adoptSugarGlider,
        description: "Friendly and energetic, perfect for bonding.",
        features: ["Social", "Vet Checked"],
        price: 299.99,
      },
      {
        name: "Leucistic Sugar Glider",
        image: adoptSugarGlider2,
        description: "Rare white morph, highly prized among collectors.",
        features: ["Rare Morph", "Hand Tamed"],
        price: 399.99,
      },
    ],
    /* ========= TWO COLUMN TEXT ========= */
    twoColumnText: {
      leftTitle: "What are Sugar Gliders",
      leftContent:
        "They're fascinating arboreal marsupials native to the tropical and cool-temperate forests of Australia, Indonesia, and New Guinea. Often compared to flying squirrels due to their similar appearance and nocturnal foraging habits, sugar gliders are actually more closely related to kangaroos and koalas, raising their young—known as joeys—in maternal pouches. Their unique name stems from a \"sweet tooth\" for eucalyptus sap and flower nectar, combined with their remarkable ability to soar through the air using the patagium—a thin, stretchy membrane extending from their wrists to their ankles that acts like a parachute, allowing them to glide up to 150 feet.",
      rightTitle: "The Buddy System: One is Never Enough",
      rightContent:
        "Sugar gliders are highly social \"<a href='/category/marsupials'>pocket pets</a>\" thrive in colonies and communicate through a complex system of scent marking and vocalizations, including their signature crabbing or barking sounds. In the wild, they are never alone, and in a home environment, a solitary glider can quickly become depressed or even self-mutilate from loneliness. Because we prioritize the welfare of our animals above all else, we firmly believe in \"the buddy system\" and will not sell a single glider unless you already have a compatible companion at home. Whether you are starting a new colony or adding to an existing one, we are here to help you navigate successful introductions.",
    },

    /* ========= TEXT + IMAGE ========= */
    textImageSection: {
      title: "Nationwide Transport Available! Local Pickup in Liberty Hill, TX.",
      content:
        "<p>We offer safe, specialized transport to all mainland U.S. states where these pocket-sized marsupials are legal to own. To stay in compliance with regional wildlife regulations, please note that sugar gliders are currently illegal in: Alaska, California, Hawaii, Pennsylvania, and NYC. </p> <p>At E.A. Ranch, we don't just breed sugar gliders — we curate generations of happy, healthy companions. Every joey in our care is fully lineaged and selectively bred for superior health, stable temperament, and striking color conformations. To ensure your new family member arrives ready to bond, our babies are socialized daily by human hands. Every purchase comes with a curated <a href='/product/sugar-glider-pair-for-sale'>sugar glider starter kit</a> including a fleece cage pouch, a secure travel carrier, and our \"Breeder for Life\" support guarantee.</p>",
    },

    /* ========= ACCORDION DATA ========= */
    accordion: [
      {
        id: "who-can-adopt",
        title: "WHO CAN ADOPT A SUGAR GLIDER?",
        content:
          "Sugar glider adoption is ideal for dedicated exotic pet enthusiasts who can commit to their 12-15 year lifespan and understand their unique nocturnal lifestyle. Prospective owners must have several hours each evening for socialization and bonding, as sugar gliders are colony animals that require extensive interaction to prevent depression and self-mutilation. We prioritize adopters who work evening or night shifts, or those with flexible schedules who can accommodate their active nighttime behavior. <strong>Important:</strong> Sugar gliders are illegal in California, Hawaii, Pennsylvania, and Alaska. Additionally, they require specialized veterinary care from exotic animal vets, so access to qualified veterinary services in your area is mandatory before adoption approval.",
      },
      {
        id: "adoption-process",
        title: "OUR SUGAR GLIDER ADOPTION PROCESS",
        content:
          "Our adoption journey begins with a comprehensive application where you'll detail your experience with exotic pets, living situation, and daily schedule. We require proof of a properly equipped habitat including a tall cage (minimum 24'x24'x36'), multiple pouches, climbing branches, and a bonding pouch for carrying your glider. <strong>Pre-adoption education</strong> is mandatory—you'll receive detailed care guides covering diet preparation, bonding techniques, and common health issues. We conduct video consultations to review your setup and answer questions. Once approved, we provide a bonding period where you'll spend time with your chosen glider(s) to ensure compatibility. <strong>Post-adoption support</strong> includes a 30-day wellness check, access to our care community, and lifetime consultation for any concerns.",
      },
      {
        id: "good-pets",
        title: "ARE SUGAR GLIDERS GOOD PETS? (THE HONEST TRUTH)",
        content:
          "Sugar gliders can be extraordinarily rewarding pets for the right owner, but they're <strong>not</strong> for everyone. These pocket-sized marsupials form deep bonds with their humans and will literally sleep in your shirt pocket, but this comes with significant responsibilities. <strong>The Pros:</strong> Incredibly affectionate once bonded, entertaining to watch glide and play, relatively long-lived, and compact size makes them apartment-friendly. <strong>The Challenges:</strong> They are nocturnal and will be most active from 9 PM to 4 AM when you're trying to sleep. They make loud crabbing sounds when startled, their diet requires daily fresh food preparation, and they can be messy eaters who may fling food. Sugar gliders also have a distinct musky odor (though neutering males significantly reduces this). They absolutely <strong>cannot</strong> be left alone for extended periods—they need daily interaction or they will become depressed. Unlike cats or dogs, you can't simply hire a pet sitter; gliders require experienced handlers.",
      },
      {
        id: "total-cost",
        title: "SUGAR GLIDER OWNERSHIP COSTS (INITIAL & ONGOING)",
        content:
          "<strong>Initial Investment:</strong> <ul><li><strong>Sugar Glider(s):</strong> $200-$500 per glider (we recommend adopting bonded pairs, which ranges $400-$1,000)</li><li><strong>Cage & Setup:</strong> $150-$400 for appropriate tall cage with accessories</li><li><strong>Bonding Pouches & Toys:</strong> $50-$100</li><li><strong>Vet Exam & Neutering:</strong> $200-$400 (neutering males is highly recommended)</li><li><strong>Total Initial Cost:</strong> $600-$2,000+</li></ul><strong>Monthly Expenses:</strong><ul><li><strong>Diet (Fresh Produce, Protein, Supplements):</strong> $40-$80/month</li><li><strong>Treats & Enrichment:</strong> $15-$30/month</li><li><strong>Bedding & Cleaning Supplies:</strong> $10-$20/month</li><li><strong>Annual Vet Checkups:</strong> $150-$300/year (divide by 12 months)</li><li><strong>Estimated Monthly Total:</strong> $80-$155</li></ul><strong>Important:</strong> Emergency veterinary care for exotic animals can cost $300-$1,500, so we recommend establishing an emergency fund or pet insurance.",
      },
      {
        id: "health-requirements",
        title: "SUGAR GLIDER HEALTH & ADOPTION REQUIREMENTS",
        content:
          "<strong>Pre-Adoption Requirements:</strong><ul><li><strong>Legal Verification:</strong> Confirm sugar gliders are legal in your state/city (prohibited in CA, HI, PA, AK, and some municipalities)</li><li><strong>Exotic Vet Access:</strong> Locate an exotic animal veterinarian within 50 miles—regular vets cannot treat sugar gliders</li><li><strong>Proper Housing:</strong> Vertical cage minimum 24'x24'x36' for a pair (bigger is always better)</li><li><strong>Time Commitment:</strong> Minimum 2-3 hours nightly interaction required</li><li><strong>Temperature Control:</strong> Maintain room temperature 70-90°F; gliders cannot tolerate temperatures below 60°F</li></ul><strong>Common Health Concerns to Monitor:</strong><ul><li><strong>Hind Leg Paralysis (HLP):</strong> Caused by calcium/phosphorus imbalance—preventable with proper diet</li><li><strong>Stress-Related Issues:</strong> Hair loss, self-mutilation from inadequate socialization</li><li><strong>Obesity:</strong> Overfeeding fruits/treats; monitor weight weekly</li><li><strong>Dental Problems:</strong> Ensure diet includes crunchy items for natural teeth cleaning</li></ul><strong>Lifespan:</strong> 12-15 years in captivity with proper care. <strong>Annual Vet Visits:</strong> Mandatory wellness exams, fecal tests, and parasite screening recommended.",
      },
      {
        id: "diet-nutrition",
        title: "WHAT DO SUGAR GLIDERS EAT? (DIET & NUTRITION)",
        content:
          "Sugar gliders are omnivores requiring a carefully balanced diet replicating their wild intake of tree sap, nectar, insects, and occasional fruit. <strong>Daily Diet Components:</strong><ul><li><strong>Staple Diet (Choose One):</strong> HPW (High Protein Wombaroo), BML (Bourbon's Modified Leadbeater's), or TPG (The Pet Glider) diet—these provide essential calcium/phosphorus ratios</li><li><strong>Fresh Vegetables (40%):</strong> Leafy greens, carrots, sweet potato, green beans (avoid iceberg lettuce—no nutritional value)</li><li><strong>Fresh Fruits (30%):</strong> Apples, berries, mango, papaya. <strong>AVOID:</strong> Grapes and raisins (toxic to some gliders)</li><li><strong>Protein (15-20%):</strong> Mealworms, crickets, hard-boiled eggs, cooked chicken (unseasoned)</li><li><strong>Calcium Supplement:</strong> Critical for preventing Hind Leg Paralysis (HLP)—dust insects with calcium powder</li></ul><strong>Feeding Schedule:</strong> Offer fresh food each evening when they wake (around dusk). Remove uneaten fresh food after 12 hours to prevent spoilage. <strong>Foods to NEVER Feed:</strong> Chocolate, caffeine, raw meat, processed sugars, onions, garlic, and anything with artificial sweeteners. Fresh water must be available 24/7 in a water bottle.",
      },
      {
        id: "bonding-socialization",
        title: "SUGAR GLIDER BONDING & SOCIALIZATION",
        content:
          "Sugar gliders are <strong>colony animals</strong> who form lifelong bonds with their family unit—and that includes you! <strong>Why Pairs Are Better:</strong> We strongly recommend adopting at least two gliders. Single gliders can develop severe depression, self-mutilation, and behavioral issues despite human interaction. Bonded pairs provide each other companionship when you're unavailable, and contrary to myth, paired gliders bond with humans just as strongly. <strong>The Bonding Process (4-8 Weeks):</strong><ul><li><strong>Week 1-2:</strong> Tent time—sit in a small bathroom or tent with your gliders, letting them explore you at their pace</li><li><strong>Week 3-4:</strong> Bonding pouch training—carry them in a pouch against your body for scent familiarization</li><li><strong>Week 5-8:</strong> Hand feeding, gentle handling, and establishing trust through treats</li></ul><strong>Signs of a Bonded Glider:</strong> Sleeping on you voluntarily, grooming your hands, responding to your voice, and actively seeking your attention. <strong>Warning:</strong> Never grab or chase a sugar glider—this destroys trust. Always let them come to you.",
      },
      {
        id: "supplies-equipment",
        title: "DO YOU SELL SUGAR GLIDER SUPPLIES & STARTER KITS?",
        content:
          "Yes! We offer carefully curated <strong>Sugar Glider Starter Kits</strong> that include everything you need for a successful transition. Our kits include: <strong>Essential Package ($350-$500):</strong> Vertical cage (24'x24'x36' minimum), multiple sleeping pouches, natural wood branches, exercise wheel (safe for gliders), food/water dishes, bonding pouch, and a 2-week supply of our recommended diet. <strong>Premium Package ($600-$800):</strong> All essentials plus larger cage (30'x18'x36'), premium fleece cage sets (machine washable), variety toy pack, travel carrier, nail trimming kit, kitchen scale for diet portions, and our comprehensive care manual. We also stock ongoing supplies including fleece liners, specialized diets (HPW powder, BML mix), supplements, treat varieties, cage cleaning solutions, and replacement toys. <strong>Note:</strong> Sugar gliders require specific wheel types—we only sell wheels with solid surfaces and no center axle to prevent tail injuries. We provide guidance on proper cage setup during your adoption consultation.",
      },
      {
        id: "health-warning-signs",
        title: "RECOGNIZING SICKNESS: HEALTH WARNING SIGNS",
        content:
          "Sugar gliders are prey animals and instinctively hide illness until it is advanced. Owners must perform daily 'wellness checks' to spot subtle changes. <strong>Critical red flags</strong> include 'hind-leg paralysis' (often a sign of Calcium deficiency or MBD), lethargy, labored breathing, or a 'cloudy eye' appearance. Any change in stool consistency, such as diarrhea or constipation, requires immediate attention from an <strong>exotic animal veterinarian</strong>. Additionally, keep a close watch for 'self-mutilation' (biting at the tail or cloaca), which is often a physical manifestation of extreme stress or underlying pain. Early intervention is the key to survival, as their small size means their health can decline rapidly within 24–48 hours.",
      },
      {
        id: "habitat-enrichment",
        title: "TOYS TO KEEP YOUR GLIDER MENTALLY SHARP",
        content:
          "Because they are highly intelligent, sugar gliders require a dynamic environment to prevent boredom and stereotypical behaviors like pacing. A 'glider-safe' <strong>exercise wheel</strong> (one without a center axle to protect their tails) is a non-negotiable cage essential. We recommend a variety of <strong>foraging toys</strong> that mimic their natural behavior of hunting for insects and sap; hiding treats like mealworms inside reset-style puzzles provides vital mental stimulation. Utilize safe materials such as anti-pill fleece, eucalyptus branches, and BPA-free plastics. <strong>Safety Note:</strong> Avoid toys with loose threads, small bells, or open-link chains, as these can trap delicate limbs or cause strangulation. Rotating their toy selection every two weeks keeps the environment 'new' and engaging.",
      }
    ],
    seoTitle: "Friendly Sugar Gliders for sale",
    seoDescription:
      "Playful, lineaged sugar gliders available from USDA-licensed breeders. Socialized, healthy, and ready to join your family. Pickup or nationwide shipping.",
    seoKeywords: [
      "Sugar gliders for sale",
      "Exotic pet mammals",
      "Hand-raised sugar gliders",
      "USDA breeder sugar gliders",
      "Friendly sugar gliders",
      "Pet glider adoption"
    ],
  },

  /* ========= FENNEC & BAT-EARED FOXES ========= */

  {
    slug: "fennec-foxes",
    title: "Fennec & Bat-Eared Fox",
    description:
      "Rare Fennec and Bat-Eared Fox kits for sale from a specialized exotic ranch. These captive-bred vulpines are hand-raised for optimal temperament. We facilitate legal permit verification and offer nationwide delivery for these vocal, high-energy, and captivating exotic canids.",
    heroImage: fennecBatEaredFoxPups,
    categoryImage: adoptFennecFoxes,
    moreInfo:
      "Each fennec fox comes with diet plans, habitat setup guides, and behavioral tips.",
    pets: [
      {
        name: "Fennec Fox",
        image: adoptFennecFox,
        description: "Small, playful, and intelligent companion fox.",
        features: ["Vet Checked", "Rare Breed"],
        price: 4999.99,
      },
    ],

    /* ========= TWO COLUMN TEXT ========= */
    twoColumnText: {
      leftTitle: "Desert and Grassland Foxes",
      leftContent:
        "When exploring the wonders of the African wild, few creatures capture the imagination like the fennec fox and the bat-eared fox. While both are renowned for their oversized, heat-regulating ears, these two species are remarkably distinct in habitat, diet, and lineage. The fennec fox (Vulpes zerda) is the world's smallest canid, sporting a sandy-colored coat designed for camouflage in the Sahara Desert. In contrast, the bat-eared fox (Otocyon megalotis) is a larger, silver-grey insectivore found in the savannas of eastern and southern Africa. Interestingly, the bat-eared fox is the only canid that specializes in eating insects—specifically harvester termites—and possesses up to 50 teeth, more than any other non-marsupial mammal. ",
      rightTitle: "Understanding the 'Wild' at Home",
      rightContent:
        "Despite their similar 'bat-like' appearance due to convergent evolution, the fennec is a 'true fox' of the genus Vulpes, while the bat-eared fox occupies its own unique basal genus, Otocyon.Fennec and Bat-Eared foxes are not 'dogs in fox suits'—they are primitive, high-energy animals that require a deep understanding of their natural instincts. Our <a href='/category/placental-mammals'>fox kits for sale</a> are hand-raised from a young age to ensure they are as socialized and manageable as possible. We prioritize breeding for health and a curious, 'bold' temperament. Each fox comes with a specialized starter kit, a travel crate, and a comprehensive care manual, plus lifetime access to our expertise help in navigating the unique challenges of fennec fox ownership.",
    },

    /* ========= TEXT + IMAGE ========= */
    textImageSection: {
      title: "Bringing a Desert Fox Home: Transportation & Legalities.",
      content:
        "<p>While we offer nationwide transport and local pickup in Liberty Hill, TX, the rules for 'Big-Eared' foxes are quite specific. Fennec Foxes are highly regulated at the state and often county level. It is your responsibility to ensure you have the proper permits before purchase. Please note we cannot ship to states where they are prohibited (such as CA or NY). </p> <p>Whether it’s the insect-loving Bat-Eared fox or the high-jumping Fennec, these animals have specific dietary and environmental needs. They require secure, 'escape-proof' enclosures and a diet that mimics their wild intake (high protein and, for Bat-Eareds, specific chitin-based nutrients). Owning a fox is a 12-to-15-year commitment to a loud, sandy, and incredibly rewarding companion. We vet our wild fox owners to ensure your lifestyle matches the vibrant, nocturnal energy of these desert dwellers.</p>",
    },

    /* ================== ACCORDION DATA ================== */
    accordion: [
      {
        id: "adoption-suitability",
        title: "ARE YOU READY FOR AN EXOTIC FOX?",
        content:
          "Fennec and Bat-eared foxes are captivating but demanding companions that bridge the gap between wild instinct and domestic life. Unlike dogs, these foxes are 'voluntarily social'—they bond deeply but remain independent and easily startled. We look for adopters who understand that these are high-energy, vocal animals that communicate through 'screaming' or 'chirping,' especially at night. Ideal owners are those with experience in primitive dog breeds or exotic mammals who can provide a specialized environment that accommodates their digging and climbing instincts.",
      },
      {
        id: "legal-requirements",
        title: "IS IT LEGAL TO OWN A FOX IN MY STATE?",
        content:
          "Legality is the first hurdle in fox ownership. Fennec and Bat-eared foxes are regulated differently than domestic pets. States like <strong>Florida, Indiana, and Illinois</strong> generally allow them with permits, while they are strictly prohibited in states like <strong>California, New York, and Washington</strong>. Many municipalities have specific 'wildlife at home' ordinances that override state laws. We require all prospective adopters to provide proof of local legality and, where applicable, a copy of your state-issued captive wildlife permit before an application is processed.",
      },
      {
        id: "habitat-and-containment",
        title: "CREATING A FOX-PROOF HABITAT",
        content:
          "Standard fencing is insufficient for these master escape artists. Fennec foxes can jump up to 3 feet vertically, while Bat-eared foxes are prolific diggers. A successful habitat requires a <strong>fully enclosed outdoor aviary</strong> or a heavily modified indoor 'fox room' with easy-to-clean flooring. Substrate is crucial; we recommend deep sand pits to allow for natural digging behaviors. Indoor setups must be 'fox-proofed'—similar to puppy-proofing but more extreme—as they can chew through wires and squeeze into impossibly small crevices.",
      },
      {
        id: "diet-and-insectivory",
        title: "NUTRITION: THE INSECTIVORE ADVANTAGE",
        content:
          "While they are canids, their nutritional needs are highly specialized. Bat-eared foxes are primarily <strong>insectivorous</strong>; in the wild, termites make up 80% of their diet. In captivity, we utilize a base of high-quality exotic canine kibble or raw diets, supplemented heavily with live gut-loaded insects (dubia roaches, mealworms, and crickets). <strong>Taurine</strong> is a critical supplement for fennecs to prevent heart issues. Fresh water must always be available, though fennecs are remarkably efficient at hydrating through their food due to their Saharan origins.",
      },
      {
        id: "social-dynamics",
        title: "SOLITARY VS. PAIR HOUSING",
        content:
          "Fennecs and Bat-eared foxes are social creatures that live in family units in the wild. While a human can act as a surrogate 'pack,' they thrive best when housed in pairs. If you are adopting a single fox, you must be prepared to spend the majority of your evening hours providing <strong>social enrichment</strong>. However, introducing two intact adults can be complex; we prioritize the adoption of bonded pairs or provide specific guidance on slow-introduction techniques to prevent territorial aggression.",
      },
      {
        id: "the-scent-factor",
        title: "THE REALITY OF FOX ODOR",
        content:
          "Prospective owners must be prepared for the 'musky' reality of exotic foxes. Fennec foxes have a scent gland on the tip of their tail that activates when they are excited or stressed. Furthermore, like most vulpines, their urine has a strong, skunk-like ammonia scent used for <strong>territory marking</strong>. While they can sometimes be trained to use a litter box with high-walled pans and puppy pads, they are never 100% reliable. Maintaining a clean habitat requires daily spot cleaning and specialized enzymatic cleaners to break down odors.",
      },
      {
        id: "veterinary-specialization",
        title: "ACCESS TO EXOTIC VETERINARY CARE",
        content:
          "A standard small-animal vet is usually unequipped to handle exotic foxes. Before adoption, you must identify a vet capable of performing <strong>exotic sedation</strong> and specialized dental work. Foxes require standard canine vaccinations (Rabies, Distemper, Parvovirus), but the use of 'modified live' vaccines can be fatal in some exotic species; only 'killed' virus vaccines should be administered. We require the contact information of your designated exotic vet to verify they are currently accepting new vulpine patients.",
      },
      {
        id: "nocturnal-lifestyle",
        title: "MANAGING THE NIGHTTIME 'ZOOMIES'",
        content:
          "Fennec foxes are largely nocturnal, meaning their peak activity occurs while you are sleeping. This includes high-speed running, digging at carpets, and vocalizing. We suggest 'shifting' their schedule slightly by engaging in heavy <strong>interactive play</strong> in the late evening and feeding their main meal at night. If you are a light sleeper or live in an apartment with thin walls, an exotic fox may not be the right fit for your living situation.",
      },
      {
        id: "enrichment-strategies",
        title: "MENTAL STIMULATION & ENRICHMENT",
        content:
          "A bored fox is a destructive fox. To keep their sharp minds engaged, we recommend <strong>foraging puzzles</strong>, snuffle mats, and \"dig boxes\" filled with safe sterilized play sand or felt strips. Scent work is also highly effective—hiding small amounts of spice or different animal scents around their enclosure encourages natural exploratory behavior. Rotate toys weekly to prevent habituation and ensure they remain mentally sharp and physically fit.",
      },
      {
        id: "adoption-investment",
        title: "LONG-TERM FINANCIAL COMMITMENT",
        content:
          "Adopting an exotic fox is a 12-to-15-year financial commitment. Beyond the initial adoption fee (which can range from $2,500 to $5,000), owners should budget for <strong>emergency funds</strong>. Exotic vet visits often start at $200 for a basic exam, and specialized diets plus fresh insects can cost $100+ per month. We encourage adopters to look into <strong>exotic pet insurance</strong> providers, such as [Nationwide](https://www.petinsurance.com), which is one of the few carriers that offers coverage for fennec foxes.",
      },
    ],

    seoTitle: "Fennec & Bat-Eared Foxes for Sale",
    seoDescription:
      "Adopt hand-raised fennec foxes and bat-eared fox babies with playful personalities. Healthy, socialized, and USDA-licensed, perfect for exotic pet lovers seeking small, intelligent, and affectionate companions. Nationwide delivery available.",
    seoKeywords: [
      "Fennec fox for sale",
      "Bat-eared fox adoption",
      "Exotic pets for sale",
      "Hand-raised foxes",
      "USDA licensed exotic animals",
      "Socialized fennec fox"
    ],
  },

  /* ========= RING-TAILED LEMURS ========= */
  {
    slug: "lemurs",
    title: "Ring-Tailed Lemurs",
    description:
      "Adopt captive-bred Ring-Tailed Lemurs from a USDA-licensed facility specializing in primate conservation and care. Our lemurs are socialized in matriarchal troops to ensure natural behaviors. Available for delivery to legal states with full post-adoption husbandry support.",
    heroImage: triColorLemurs,
    categoryImage: adoptLemurs,
    moreInfo:
      "All lemurs come with habitat recommendations, care sheets, and health certifications.",
    pets: [
      {
        name: "Ring-Tailed Lemur",
        image: adoptRingTaillemur,
        description:
          "Active and social, requires a spacious and enriched environment.",
        features: ["Vet Checked", "Rare Breed"],
        price: 7499.99,
      },
    ],

    /* ========= TWO COLUMN TEXT ========= */
    twoColumnText: {
      leftTitle: "Madagascar’s Ring-Tailed & Brown Lemurs",
      leftContent:
        "The ring-tailed lemur (Lemur catta) is the most iconic, easily identified by its 13 alternating black and white bands on a long, non-prehensile tail used for balance and visual communication. Uniquely, they are the most terrestrial lemurs, spending up to 50% of their time on the ground in matriarchal troops where females hold absolute dominance. In contrast, brown lemurs (genus Eulemur) are primarily arboreal specialists that navigate the upper forest canopy. Unlike their ring-tailed cousins, many brown lemur species exhibit cathemeral activity, meaning they are active during both the day and night.",
      rightTitle: "Life with a Social Primate",
      rightContent:
        "Lemurs are not monkeys, but they are primates, and that means they have a highly complex social hierarchy. In a lemur’s world, females are the bosses, understanding this matriarchal structure is key to a successful bond. They are intensely social creatures that communicate through a fascinating array of chirps, purrs, and scent-marking. Because they rely so heavily on social grooming and interaction, we strongly encourage housing lemurs in pairs or small groups. Living with a lemur is a 20-to-30-year journey that requires a commitment to specialized diets, and an owner who respects their wild, ancient spirit.",
    },

    /* ========= TEXT + IMAGE ========= */
    textImageSection: {
      title: "The Crown Jewels of Madagascar: Ring-Tailed vs. Brown Lemurs",
      content:
        "<p>At E.A. Ranch, we work with two distinct and captivating species. Our Ring-Tailed Lemurs are the \"yogis\" of the ranch—famous for their sun-worshipping poses, high-intelligence, and striking black-and-white striped tails. Meanwhile, our Brown Lemurs offer a more understated beauty with their soft, caramel-colored coats and deep, expressive orange eyes. Our baby lemurs are mum raised with a focus on genetic diversity and robust health. When you bring a lemur home from us, you aren’t just getting a pet; you’re receiving a hand-reared animal that has been socialized with both humans and its own 'troop' to ensure a balanced temperament.</p> <p>Lemurs may only be sold to residents within states where they are legal, and often require a USDA-licensed breeder to facilitate the transfer. </p>",
    },

    /* ================== ACCORDION DATA ================== */
    accordion: [
      {
        id: "primates-as-pets",
        title: "ARE YOU PREPARED FOR A PRIMATE?",
        content:
          "Adopting a Ring-tailed or Brown Lemur is a profound lifestyle shift, not just a pet acquisition. These are highly intelligent, social primates with a 20-25 year lifespan. Unlike 'lower' mammals, lemurs require constant mental engagement and a social hierarchy. We prioritize adopters who have a deep understanding of <strong>primate husbandry</strong> and the time to commit to an animal that views you as a member of its troop. Because they are social grooming animals, they require significant daily interaction to prevent the development of stereotypical behaviors or psychological distress.",
      },
      {
        id: "legal-and-usda",
        title: "LEGAL REQUIREMENTS & USDA REGULATIONS",
        content:
          "The private ownership of lemurs is strictly regulated. Many states require a <strong>Captive Wildlife Permit</strong>, and federal law (under the Captive Wildlife Safety Act) may restrict the transport of primates across state lines for commercial purposes. Furthermore, your local zoning must allow for exotic primates. We require all adopters to verify their local ordinances and provide a copy of their state permit where applicable. Note: We strictly adhere to [USDA APHIS](https://www.aphis.usda.gov) standards to ensure all our lemurs go to homes capable of meeting federal welfare guidelines.",
      },
      {
        id: "iron-storage-disease",
        title: "DIETARY SENSITIVITY: IRON STORAGE DISEASE",
        content:
          "Lemurs are biologically predisposed to <strong>Hemochromatosis (Iron Storage Disease)</strong>. Their bodies are hyper-efficient at absorbing iron, which can lead to toxic buildup in the liver. A specialized \"low-iron\" primate diet is mandatory. Their meals should consist of <strong>Mazuri Primate Biscuits</strong> supplemented with low-iron vegetables like sweet potatoes and leafy greens. Avoid citrus fruits, as Vitamin C increases iron absorption. Providing a carefully balanced diet is the single most important factor in ensuring your lemur's long-term health and preventing premature organ failure.",
      },
      {
        id: "habitat-vertical-space",
        title: "THE NEED FOR VERTICAL ENCLOSURES",
        content:
          "Lemurs are arboreal and require significant vertical space to thrive. A standard cage is insufficient; they need a dedicated <strong>primate troop room</strong> or a large outdoor aviary (minimum 10'x10'x15') equipped with swinging ropes, climbing branches, and elevated sleeping platforms. For Ring-tailed lemurs, floor space is also important as they are the most terrestrial of the lemur species. All enclosures must have double-entry safety locks to prevent escapes, as lemurs are incredibly dexterous and can easily manipulate simple latches.",
      },
      {
        id: "social-needs",
        title: "TROOP DYNAMICS & SOCIAL HOUSING",
        content:
          "In the wild, lemurs live in female-dominant troops. A solitary lemur is often an unhappy one. We strongly recommend adopting lemurs in pairs or small groups to allow for natural behaviors like <strong>allogrooming</strong> (social grooming) and huddling. If you must house a lemur alone, you must become their surrogate troop, which involves several hours of direct physical interaction daily. Be aware that during \"<strong>breeding season</strong>\" or '\"<strong>stink fighting</strong>\" periods (for males), even the most bonded lemur can exhibit hormonal aggression.",
      },
      {
        id: "scent-marking",
        title: "UNDERSTANDING SCENT MARKING & ODOR",
        content:
          "Prospective owners must be comfortable with scent marking. Ring-tailed lemurs, in particular, use <strong>brachial and spur glands</strong> to mark their territory. This is a natural, healthy behavior but it results in a distinct, pungent odor on cage furniture and walls. While they can be trained to use certain areas for waste, they generally do not \"housebreak\" in the traditional sense. You will need to use primate-safe, non-toxic enzymatic cleaners daily to maintain a sanitary environment without stripping away their \"scent security\" entirely.",
      },
      {
        id: "diurnal-rhythms",
        title: "DIURNAL ACTIVITY & SUN BATHING",
        content:
          "Unlike many exotic pets, lemurs are <strong>diurnal</strong> (active during the day). Ring-tailed lemurs are famous for their \"sun-worshipping posture\", where they sit upright to expose their bellies to the sun. Access to natural sunlight or high-quality full-spectrum UVB lighting is essential for Vitamin D3 synthesis and bone health. A lack of proper lighting can lead to metabolic issues and depression. Their daytime activity makes them wonderful display animals, but they require a strictly enforced \"lights out period\" to mimic their natural circadian rhythms.",
      },
      {
        id: "veterinary-care",
        title: "FINDING A PRIMATE VETERINARIAN",
        content:
          "Standard veterinarians cannot treat primates. You must secure a relationship with an <strong>avian and exotic specialist</strong> who has specific experience with Malagasy primates. Annual exams must include fecal checks for parasites and bloodwork to monitor iron levels. Because primates can share many diseases with humans (zoonotic transfer), maintaining a rigorous vaccination and deworming schedule is vital for both the animal's safety and your own. We recommend checking the [Association of Exotic Mammal Veterinarians (AEMV)](https://aemv.org) to find a qualified provider near you.",
      },
      {
        id: "enrichment-complexity",
        title: "COGNITIVE ENRICHMENT & PUZZLES",
        content:
          "A lemur's intelligence is its most defining trait. To prevent boredom-induced self-harm, you must provide <strong>cognitive enrichment</strong>. This includes foraging boards where they must use their fingers to extract treats, puzzle feeders, and a constantly rotating selection of primate-safe toys. Mirrors, varied textures, and even 'primate-friendly' television or music can provide auditory and visual stimulation. If a lemur isn't challenged mentally, they will often find their own 'entertainment' by dismantling their enclosure or household items.",
      },
      {
        id: "adoption-commitment",
        title: "LONG-TERM FINANCIAL & TIME INVESTMENT",
        content:
          "The cost of a lemur extends far beyond the initial adoption. Between high-quality primate diets, custom-built enclosures, and specialized veterinary care, owners should expect to spend between $1,500 and $3,000 annually. Additionally, you must consider the \"vacation factor\" — it is extremely difficult to find qualified 'pet sitters' for primates. Adopting a lemur means committing to a lifestyle where your schedule revolves around their social and nutritional needs for the next two decades.",
      }
    ],

    seoTitle: "Ring-Tailed Lemurs for Adoption",
    seoDescription:
      "Discover playful and social ring-tailed lemurs hand-raised for home environments. Healthy, USDA-licensed exotic pets ready for adoption with nationwide delivery or local pickup.",
    seoKeywords: [
      "Ring-tailed lemurs for sale",
      "Exotic pet lemurs",
      "Hand-raised lemurs",
      "Social exotic animals",
      "USDA exotic pets",
      "Healthy pet lemurs"
    ],
  },

  /* ========= SAVANNAH CAT ========= */
  {
    slug: "hybrid-savannah-cats",
    title: "Savannah Cat Kittens",
    description:
      "Exclusive F1 to F6 Savannah kittens for sale from a premier USDA-licensed breeder. Own a piece of the wild with these highly intelligent, serval-hybrid felines. Our kittens are home-raised, socialized with dogs, and delivered nationwide with full health certifications.",
    heroImage: hybridSavannahKittens,
    categoryImage: adoptSavannahCat,
    moreInfo:
      "All savannah cats come with vet records, diet plans, and socialization guidance.",
    pets: [
      {
        name: "Savannah Cat F1",
        image: adoptF5SavannahCat, 
        description: "Striking wild-look kitten, extremely social.",
        features: ["Vet Checked", "Rare Morph"],
        price: 12000.0,
      },
      {
        name: "Savannah Cat F2",
        image: adoptFemaleSavannahCat,
        description: "Beautiful patterned kitten with friendly personality.",
        features: ["Vet Checked", "Beginner Friendly"],
        price: 7000.0,
      },
    ],

    /* ========= TWO COLUMN TEXT ========= */
    twoColumnText: {
      leftTitle: "Hybrid Serval Savannah Cats",
      leftContent:
        "Savannahs are often described as \"<strong>dog-like</strong>\" because of their loyalty, high intelligence, and unique ability to play fetch or walk on a leash. They are exceptionally athletic and can jump up to eight feet from a standing position, making vertical space like cat trees and shelves a necessity. Ownership is categorized by filial generations (F1 to F8), indicating how closely related they are to their wild ancestors; earlier generations (F1-F2) are typically larger and more intense, while later generations (F4-SBT) are better suited for typical households. We specialize in delivering <a href='/category/placental-mammals'><strong>expert bred hybrid savannah kittens</strong></a> to you safely.",
      rightTitle: "What to Expect from Savannah Kittens",
      rightContent:
        "Owning a Savannah is less like owning a cat and more like living with a highly-intelligent toddler. These are not 'nap all day' felines; they are active, vocal, and often obsessed with water. They can jump eight feet into the air, learn to play fetch, and many even enjoy walking on a harness and leash. Because of their high prey drive and athletic needs, we provide every new owner with a \"Savannah Success Guide\", covering everything from high-protein diets to the \"<strong>best 'escape-proof' toys</strong>\". If you're looking for a \"<strong>living room baby leopard</strong>\" or an adventurous companion, a Savannah cat from E.A. Ranch is unmatched.",
    },

    /* ========= TEXT + IMAGE ========= */
    textImageSection: {
      title: "The Peak of Feline Elegance: Breeding for the \"Wild\" Look",
      content:
        "<p>At E.A. Ranch, our Savannah kittens are the result of a sophisticated breeding program that balances the striking, exotic appearance of the African Serval with the lovable, loyal nature of a domestic cat. We breed kittens with bold spotting, \"serval-like\" tall ears, and the incredible leggy stature the breed is known for. Because Savannahs are exceptionally intelligent, we start socialization from day one, ensuring our kittens are curious, confident, and ready to bond with their human families. Every kitten comes with a full health guarantee, up-to-date vaccinations, and TICA registration paperwork.</p> <p>Though states like New York City or Georgia have restrictions on \"F1 through F4\" generations, we stay up-to-date on all state-by-state hybrid laws to ensure your new companion is fully legal before leaving our ranch. </p>",
    },

    /* ==================ACCORDION DATA ================== */
    accordion: [
      {
        id: "savannah-generations",
        title: "UNDERSTANDING F1-F5 GENERATIONS",
        content:
          "The \"F\" in Savannah generations stands for \"Filial\", indicating how many generations removed the cat is from its <strong>African Serval</strong> ancestor. An F1 Savannah has a Serval parent (50% wild blood), making them the largest and most demanding, while an F5 has a great-great-great grandparent Serval. As the generation number increases, the cats generally become more domestic in size and temperament. We prioritize adopters who understand these distinctions, as higher-generation cats (F1-F2) require significantly more vertical space and experienced handling than lower-generation (F4-F5) companions.",
      },
      {
        id: "legal-restrictions",
        title: "IS A SAVANNAH CAT LEGAL IN MY AREA?",
        content:
          "Because Savannahs are hybrid cats, they face unique legal restrictions. States like <strong>Georgia, Hawaii, and Nebraska</strong> have strict bans, while others like New York and Massachusetts only allow specific generations (typically F5 or lower). Some cities require a \"dangerous animal\" permit or have specific containment laws. We require all applicants to check their local ordinances and verify that their specific generation is permitted. You can consult the [Hybrid Law database](https://www.hybridlaw.com) for a general overview of regulations in your jurisdiction.",
      },
      {
        id: "hybrid-nutrition",
        title: "OPTIMAL NUTRITION: BEYOND STANDARD KIBBLE",
        content:
          "Savannah cats thrive on a diet that mirrors their wild heritage. While high-quality, grain-free commercial wet food is acceptable for lower generations, many owners and breeders recommend a <strong>balanced raw meat diet</strong> for F1-F3 cats. Taurine is a non-negotiable supplement to prevent hypertrophic cardiomyopathy (HCM). Avoid \"filler-heavy\" grocery store brands; instead, look for diets rich in whole proteins like poultry, rabbit, and venison. Proper nutrition is the foundation for their lean, muscular build and signature \"spotted coat luster\".",
      },
      {
        id: "high-energy-behavior",
        title: "LIVING WITH AN EXOTIC HYBRID",
        content:
          "A Savannah is not a \"lap cat\" in the traditional sense. They are famously high-energy, often described as \"dog-like\" for their willingness to <strong>play fetch</strong> and walk on a leash. They are highly intelligent and can learn to open doors, cabinets, and even turn on faucets. Without 2-3 hours of daily interactive play, a Savannah can become destructive. We recommend a home with plenty of vertical \"cat trees\", wall shelves, and an exercise wheel (like the One Fast Cat) to help them burn off their intense athletic energy.",
      },
      {
        id: "water-obsession",
        title: "THE SAVANNAH WATER OBSESSION",
        content:
          "One of the most unique traits of the Savannah cat is their fascination with water. Do not be surprised if your cat joins you in the shower or \"fishes\" in their water bowl. This trait comes directly from the Serval, which hunts in wetlands. To keep them entertained, many owners provide shallow splash pools or automated pet fountains. <strong>Pro tip:</strong> Ensure your toilet lids are kept closed, as Savannahs are notorious for exploring the bowl, which can be a safety hazard for smaller kittens.",
      },
      {
        id: "vertical-territory",
        title: "VERTICAL SPACE & CAT-PROOFING",
        content:
          "Savannahs are incredible jumpers, capable of leaping 8 feet into the air from a standing position. Your home must be \"cat-proofed\" for a three-dimensional environment. This means securing breakables on high shelves and ensuring window screens are reinforced—standard screens are no match for a Savannah's strength. We look for adopters who are willing to install <strong>cat-walks</strong> or floor-to-ceiling scratching posts. Providing adequate vertical territory is essential for their confidence and reduces territorial anxiety in multi-pet households.",
      },
      {
        id: "social-compatibility",
        title: "COMPATIBILITY WITH OTHER PETS",
        content:
          "Savannahs are highly social and often bond deeply with other high-energy pets. They typically get along well with dogs and other active cat breeds like Abyssinians or Bengals. However, due to their <strong>strong prey drive</strong>, they are generally not recommended for homes with small \"prey animals\" like hamsters, birds, or small reptiles. When introducing a Savannah to a new home, we advocate for a slow, scent-based introduction process to ensure a peaceful integration into your existing pack.",
      },
      {
        id: "tica-registration",
        title: "TICA REGISTRATION & ETHICAL BREEDING",
        content:
          "All our Savannah kittens are registered with <strong>The International Cat Association (TICA)</strong>. This ensures the lineage is documented and the breeding follows ethical standards for health and temperament. An ethical breeder will provide a \"blue slip\" or registration papers and a health guarantee against genetic defects. We encourage all prospective owners to research the [TICA Savannah Breed Section] to understand the breed standards and what to look for in a healthy, well-socialized kitten.",
      },
      {
        id: "veterinary-and-vaccines",
        title: "VETERINARY CARE & KETAMINE SENSITIVITY",
        content:
          "Savannahs require the same core vaccinations as domestic cats, but there is a critical medical note: many Savannahs (especially higher generations) are <strong>sensitive to Ketamine</strong>, a common anesthetic. You must find a veterinarian who is comfortable working with hybrids and who uses alternative anesthesia protocols like Isoflurane or Sevoflurane. Always mention your cat's hybrid heritage before any surgical procedure. Regular check-ups should focus on heart health and dental hygiene, as their high-protein diets can sometimes lead to tartar buildup.",
      },
      {
        id: "adoption-cost",
        title: "LONG-TERM COST & COMMITMENT",
        content:
          "Owning a Savannah is a premium experience with matching costs. Initial adoption fees range from $1,000 for an F5 to over $15,000 for a rare F1. Beyond the purchase price, you should budget for high-quality nutrition, large-scale enrichment furniture, and specialized vet care. These cats live 15-20 years, so the <strong>lifetime cost</strong> is significant. We are looking for forever homes where the owner views the Savannah as a family member and is financially prepared for their long-term wellness and happiness.",
      }
    ],

    seoTitle: "Hybrid Savannah Cats & Kittens",
    seoDescription:
      "Explore exotic savannah cats and kittens with lineage and stunning markings. Socialized, healthy, and ready for your home. We're a licensed breeder of rare hybrid feline pets with safe delivery options.",
    seoKeywords: [
      "Savannah cats for sale",
      "Exotic hybrid cats",
      "Lineaged savannah kittens",
      "Rare pet cats",
      "Healthy exotic felines",
      "Socialized savannah cats"
    ],
  },

  /* ========= MARMOSET MONKEY ========= */
  {
  slug: "finger-monkeys",
  title: "Marmoset Finger Monkeys",
  description: "Hand-reared Common and Black-Tufted Marmoset \"Finger Monkeys\" for sale. Our primates are raised in a nursery environment to ensure they are well-adjusted to human interaction. We offer secure delivery and mandatory pre-adoption education for these complex, social companions.",
  heroImage: pygmyMarmosetMonkey,
  categoryImage: adoptMarmoset,
  moreInfo:
    "Enclosure setup, diet, and socialization guides included for all marmosets.",
  pets: [
    {
      name: "Common Marmoset",
      image: adoptPygmyMarmoset,
      description:
        "Small, agile primate perfect for experienced exotic pet owners.",
      features: ["Vet Checked", "Socialized"],
      price: 4999.99,
    },
  ],
  
  /* ========= TWO COLUMN TEXT ========= */
  twoColumnText: {
    leftTitle: "Marmoset Finger Monkeys",
    leftContent:
        "Don't let the \"finger-sized\" nickname fool you—Marmosets are high-intelligence animals with complex emotional lives. They are highly vocal, using a series of high-pitched whistles and chirps to communicate their needs. In the wild, they live in tight-knit family groups, and in captivity, they require near-constant social interaction, <strong>a Marmoset is unhappy when lonely</strong>. They also require a very specific diet high in Vitamin D3 and protein to prevent metabolic issues. Owning a Marmoset is a 15-to-20-year commitment to a creature that will view you as part of its troop. We vet our families carefully to ensure you have the time, space, and patience these tiny treasures deserve.",
    rightTitle: "Hand-Raised Pocket Companions",
    rightContent:
        "Commonly known as Finger Monkeys, Marmosets are among the smallest primates in the world, but they have massive personalities. At E.A. Ranch, we specialize in hand-rearing these delicate creatures to ensure they are well-adjusted to human interaction. Our breeding program emphasizes genetic health and social stability. Because they are so tiny, they require a gentle touch and a specialized environment. When you adopt marmoset monkeys from us, you receive a <strong>\"New Parent kit\"</strong> including a specialized heating source, a starter supply of Marmoset diet/gum arabic, and our unwavering breeder support to guide you through their unique care requirements.",
  },

  /* ========= TEXT + IMAGE ========= */
  textImageSection: {
    title: "Big Journeys for Little Primates: National Shipping & Legalities",
    content:
      "<p>From our home base in Liberty Hill, TX, we provide specialized, climate-controlled transport for our Marmosets. However, <strong>owning a Finger Monkey</strong> is a major legal responsibility. Primate ownership is strictly prohibited in many states, and others require specific permits or specialized veterinary registries. We strictly adhere to USDA regulations and will only transition our <a href='/category/placental-mammals'>baby marmoset monkeys</a> to homes where they are 100% legal.</p> <p>All of our axolotls for sale These arboreal wonders—such as the <a href='/category/axolotls'><strong>tiny pygmy marmoset monkey for sale</strong></a> , which weighs less than a stick of butter—possess unique claw-like nails instead of flat nails, allowing them to cling vertically to tree trunks or your finger.</p>",
  },

  /* ================== ACCORDION DATA ================== */
    accordion: [
      {
        id: "finger-monkey-myth",
        title: "WHAT IS A \"FINGER MONKEY\"?",
        content:
          "The term Finger Monkey is a popular nickname for the <strong>Pygmy Marmoset</strong>, the smallest monkey in the world. While they are tiny enough to cling to a human finger as infants, they grow into active, complex primates that require a permanent, high-commitment home. We prioritize adopters who look past the cute viral trend and understand that marmosets are intelligent New World monkeys with specific social and biological needs that span a 15-20 year lifespan.",
      },
      {
        id: "marmoset-legality",
        title: "LEGALITY & PERMIT REQUIREMENTS",
        content:
          "Marmoset ownership is strictly governed by state and local laws. They are legal in states like <strong>Florida, Texas, and Ohio</strong> (often with a permit), but are strictly banned in many others, including California and the Northeast. Because they are primates, they fall under the [USDA Animal Welfare Act] for breeding and transport. We require all prospective owners to provide a <strong>letter of legality</strong> from their local animal control or state wildlife agency before we can proceed with an adoption application.",
      },
      {
        id: "social-dependency",
        title: "THE NECESSITY OF SOCIAL HOUSING",
        content:
          "In the wild, marmosets live in tight-knit family groups and communicate through high-pitched vocalizations and scent marking. A solitary marmoset is prone to severe depression and self-harming behaviors. We strongly advocate for <strong>adopting in pairs</strong>. If you are adopting a single marmoset, you must be prepared to be their constant companion; they cannot be left alone for long workdays. They thrive on \"social grooming\" and require a stable, predictable social environment to feel secure.",
      },
      {
        id: "dietary-gumivores",
        title: "SPECIALIZED NUTRITION: THE GUMIVORE DIET",
        content:
          "Marmosets are \"gumivores\", meaning their natural diet heavily involves tree sap and gum. In captivity, this must be replicated using <strong>Arabic Gum</strong> powder mixed into their food. Their primary diet should consist of a high-quality <strong>New World Primate biscuit</strong> (like Mazuri), supplemented with fresh vegetables, limited fruits, and protein sources like hard-boiled eggs or gut-loaded insects. <strong>Crucial:</strong> They have a very high requirement for Vitamin D3 and Vitamin C, which must be strictly monitored to prevent skeletal issues.",
      },
      {
        id: "metabolic-bone-disease",
        title: "PREVENTING METABOLIC BONE DISEASE (MBD)",
        content:
          "Marmosets are highly susceptible to <strong>Metabolic Bone Disease</strong> and Simian Bone Disease if they do not receive adequate UVB lighting and Vitamin D3. Without 10-12 hours of specialized full-spectrum lighting or natural unfiltered sunlight, their bones can become brittle, leading to fractures and paralysis. We require proof of a high-output <strong>UVB lighting system</strong> (designed specifically for primates or reptiles) as part of your habitat setup verification process.",
      },
      {
        id: "wasting-syndrome",
        title: "UNDERSTANDING MARMOSET WASTING SYNDROME",
        content:
          "A major health concern in captive marmosets is <strong>Wasting Marmoset Syndrome (WMS)</strong>, characterized by chronic weight loss, muscle atrophy, and diarrhea. This is often triggered by stress, poor diet, or underlying parasites. Preventing WMS requires a low-stress environment and regular fecal screenings by an <strong>exotic veterinarian</strong>. Because their metabolism is so fast, a marmoset that stops eating for even 24 hours is in a life-threatening emergency.",
      },
      {
        id: "habitat-and-environment",
        title: "ENCLOSURE SIZE & ESCAPE PREVENTION",
        content:
          "Despite their small size, marmosets are incredibly active and require a large <strong>vertical enclosure</strong> (minimum 3'x3'x6' for a pair). The enclosure should be filled with natural branches, ropes, and hammocks to encourage their natural leaping behavior. Because of their high intelligence and \"hand dexterity\", cages must be secured with <strong>primate-safe locks</strong>—they can easily learn to slide latches and open doors. Indoor habitats should be kept in a draft-free room with a consistent temperature between 75°F and 85°F.",
      },
      {
        id: "scent-marking-odor",
        title: "SCENT MARKING & HOUSEHOLD CLEANING",
        content:
          "Marmosets communicate through scent. Both males and females have specialized glands used to mark their territory, which produces a distinct musky odor. While you can spot-clean their environment, <strong>over-cleaning</strong> can actually cause them to mark more aggressively as they try to re-establish their scent. We recommend using specialized [enzymatic cleaners](https://www.naturemiracle.com) that neutralize odors without using harsh chemicals that could irritate their sensitive respiratory systems.",
      },
      {
        id: "primate-vet-care",
        title: "MANDATORY EXOTIC VET ACCESS",
        content:
          "You must have an <strong>Exotic Animal Veterinarian</strong> nearby who is willing to treat New World Primates. Routine care includes annual blood work and strictly following a primate-specific vaccination schedule. Note that marmosets are highly susceptible to the <strong>Human Herpes Simplex Virus (cold sores)</strong>, which is fatal to them. Adopters must be extremely cautious about hygiene and avoid contact with their marmoset if they have any signs of illness.",
      },
      {
        id: "long-term-commitment",
        title: "LIFESTYLE & FINANCIAL INVESTMENT",
        content:
          "Adopting a marmoset is a 20-year commitment that limits your ability to travel and requires a significant budget. Beyond the initial cost (which can exceed $4,000–$6,000), monthly expenses for specialized diets, heating, and enrichment total roughly $150–$200. Furthermore, finding a qualified \"pet sitter\" for a primate is nearly impossible. We look for dedicated individuals who are prepared to integrate these tiny, complex beings into their daily lives for the long haul.",
      }
    ],

  seoTitle: "Marmoset Finger Monkeys for Sale",
    seoDescription:
      "Tiny marmoset finger monkeys with sparkling personalities! Hand-raised, socialized, and vet-checked, these exotic primates are ready to become your new companion.",
    seoKeywords: [
      "Marmoset for sale",
      "Finger monkeys adoption",
      "Exotic pet primates",
      "Hand-raised marmosets",
      "Socialized exotic monkeys",
      "Healthy small primates"
    ],
},

/* ========= COATIMUNDI ========= */
{
  slug: "coatimundis",
  title: "Ring-Tailed Coatis",
  description: "Energetic and intelligent White-Nose Coatimundi pups for sale. These South American procyonids are captive-bred and hand-raised at our ranch to be exceptionally social. Nationwide delivery available for owners ready for a curious, high-intelligence exotic companion.",
  heroImage: ringTailedCoati,
  categoryImage: adoptCoatimundis,
  moreInfo:
    "Care instructions and enrichment materials provided for all coatimundis.",
  pets: [
    {
      name: "White-Nose Coatimundi",
      image: adoptBabyCoati,
      description: "Energetic and curious, great for experienced keepers.",
      features: ["Vet Checked", "Socialized"],
      price: 1999.99,
    },
  ],

  /* ========= TWO COLUMN TEXT ========= */
  twoColumnText: {
    leftTitle: "Living with a Pet Coatimundi",
    leftContent:
        "Living with a coati is a whirlwind of activity (diurnal mammals), as they’re awake when you are—and they spend every waking second investigating. Whether it’s unzipping your backpack, figuring out how to open the fridge, or climbing to the highest point in your living room, a coati is a 15-year commitment to adventure. They are intensely social and form deep, affectionate bonds with their owners, often <strong>\"chirping\" at you for attention</strong>. However, they require a home that is 'coati-proofed' (think toddler-proofing, but for a pet that can climb walls). If you're looking for a pet that wants to be involved in everything you do, our <a href='/category/placental-mammals'>baby coatis for sale</a> will be your best companion.",
    rightTitle: "Nature’s Little Excavators",
    rightContent:
        "If you’re looking to own a pet that's like a \"<strong>Swiss Army Knife on Four Legs</strong>\", a Coatimundi would be the best pick. At E.A. Ranch, we breed for two things: health and curiosity. Our <a href='/product/baby-coatimundis-for-sale'>coati cubs are hand-raised and socialized</a> from the moment they are weaned to ensure they view humans as part of their band. With their incredibly long, flexible snouts and powerful digging claws, they are the engineers of the animal world. We focus on vibrant color phases and, most importantly, a steady temperament. When you take home an E.A. Ranch coati, you’re getting a <strong>starter kit of their favorite foraging snacks and lifetime breeder support</strong> to help you keep up with their busy minds.",
  },

  /* ========= TEXT + IMAGE ========= */
  textImageSection: {
    title: "Texas Born & Nationwide Bound: Is a Coati Legal in Your Backyard?",
    content:
      "<p>We’re proud to raise our baby coatis right here in Liberty Hill, TX, but these \"<a href='/category/placental-mammals'><strong>South American racoons</strong></a>\" have a legal footprint that varies wildly from state to state. Because they are cousins to the raccoon, some areas view them as \"native wildlife\" and others as \"exotic pets\", each with its own permit requirements. Before you get your heart set on one of our cubs, please verify your local and state ordinances. We’ve navigated these waters many times and can help guide you through the Transport & Legal Paperwork to ensure your new friend arrives 100% by the book. </p> <p>They're easily recognized by their long, ringed tails and highly mobile, pig-like snouts used for rooting out insects and tubers. Unlike their solitary raccoon cousins, female coatis are intensely social, living in organized groups called \"bands\", while adult males typically lead a solitary lifestyle.</p>",
  },

  /* ================== ACCORDION DATA ================== */
  accordion: [
    {
      id: "coati-suitability",
      title: "WHO CAN ADOPT A COATIMUNDI? (THE REALITY CHECK)",
      content:
        "Adopting a Coatimundi (or Coati) is a massive undertaking suited only for highly experienced exotic pet owners. Unlike domestic pets, Coatis are \"full-contact\" animals that retain their wild instincts, including a high prey drive and a complex social hierarchy. They are incredibly intelligent, frequently compared to a toddler on caffeine with the climbing ability of a monkey and the curiosity of a raccoon. We prioritize adopters who have a secure, dedicated space for an animal that can live up to 15 years and who understand that Coatis require several hours of active supervision daily. <strong>Important:</strong> Coatis are not 'set and forget' pets; if they are not mentally and physically engaged, they will become destructive and aggressive. You must have a lifestyle that accommodates an animal that needs constant cognitive stimulation and a sturdy, escape-proof environment.",
    },
    {
      id: "legal-and-permits",
      title: "LEGALITY, PERMITS, AND REGULATION",
      content:
        "Coatimundis are regulated as \"Class III\" or \"dangerous\" wildlife in many jurisdictions. Their legality varies wildly by state and even by county. States like <strong>Florida, Texas, and Illinois</strong> generally allow them with specific captive wildlife permits, while they are strictly prohibited in states like <strong>California, Hawaii, and much of the Northeast</strong>. We require all prospective adopters to provide a written statement from their local animal control or wildlife agency confirming that Coatis are legal in their specific municipality. Additionally, if you plan to exhibit or breed, you must comply with [USDA APHIS] regulations. We will not process any adoption without first verifying your state-issued permits and ensuring your containment setup meets or exceeds legal safety standards.",
    },
    {
      id: "habitat-and-enclosures",
      title: "HOUSING REQUIREMENTS: VERTICAL SPACE & SECURITY",
      content:
        "A standard dog crate or even a large cat room is insufficient for a Coatimundi. Coatis are semi-arboreal and require significant <strong>vertical space</strong> to climb and forage. <strong>Minimum Requirements:</strong> We recommend a custom-built outdoor aviary or a dedicated 'Coati room' at least 8'x8'x8' in size. The enclosure must be constructed with heavy-duty gauge wire (as they can rip through standard chicken wire) and must have \"dig-proof flooring\" or buried fencing, as Coatis are prolific diggers. Your habitat must include multi-level platforms, heavy-duty climbing ropes, and varied nesting boxes. Indoor setups require \"extreme proofing\" — Coatis can open cabinets, refrigerators, and even unscrew lightbulbs. A safe Coati habitat is not just a cage; it is a complex environment designed to withstand the strength and ingenuity of a determined procyonid.",
    },
    {
      id: "diet-and-nutrition",
      title: "COATIMUNDI NUTRITION: THE OMNIVORE ADVANTAGE",
      content:
        "Coatis are opportunistic omnivores with a high metabolic rate. Their diet must be varied and protein-rich to prevent obesity and nutritional deficiencies. <strong>Daily Diet Breakdown:</strong> <ul><li><strong>High-Quality Protein (50%):</strong> Lean meats (poultry/rabbit), hard-boiled eggs, and gut-loaded insects like Dubia roaches or hornworms. Many owners use a base of high-quality grain-free dog food or [Mazuri Exotic Canine Diet].</li><li><strong>Fresh Vegetables & Fruits (40%):</strong> Focus on root vegetables like carrots and sweet potatoes, along with leafy greens. Fruits like melons, berries, and bananas should be used primarily as training rewards due to sugar content.</li><li><strong>Foraging Enrichment (10%):</strong> Nuts and seeds scattered in substrate to encourage natural rooting behavior.</li></ul> <strong>Warning:</strong> Never feed your Coati chocolate, caffeine, onions, garlic, or avocado, as these are toxic. Fresh, filtered water must be available in heavy ceramic crocks, as Coatis will tip over standard plastic bowls.",
    },
    {
      id: "behavior-and-temperament",
      title: "UNDERSTANDING COATI BEHAVIOR & \"THE SNORT\"",
      content:
          "Coatis are incredibly vocal and expressive. They communicate through a series of chirps, snorts, and tail-waggling. While they can be affectionate, they are also prone to \"mood swings\", particularly as they reach sexual maturity (around age 2). During this time, even a well-socialized Coati may become territorial or aggressive. <strong>The Social Bond:</strong> In the wild, females live in \"bands\" while males are more solitary. In captivity, they view their human family as their band. This means they will often groom you with their teeth and long claws—which can be painful if not managed. They are not animals that enjoy being restrained; bonding is built through interactive play and positive reinforcement training rather than forced cuddling.",
    },
    {
      id: "foraging-and-enrichment",
      title: "MENTAL STIMULATION: THE WORKING BRAIN",
      content:
        "A bored Coati is a destructive Coati. They possess a long, flexible snout and sharp claws designed for one thing: finding food in hard-to-reach places. To keep them healthy, you must provide <strong>daily foraging puzzles</strong>. Hide their meals inside PVC pipes with holes, scatter insects in a deep sand-pit, or use heavy-duty [KONG toys] stuffed with healthy treats. Scent work is also vital; they have a sense of smell superior to many dogs. Introducing new scents (like cinnamon, lavender, or even the scent of other animals) into their enclosure provides essential sensory enrichment. Without at least 2-3 hours of active mental engagement daily, Coatis can develop stereotypical behaviors like pacing or over-grooming.",
    },
    {
      id: "veterinary-care-specialization",
      title: "EXOTIC VET CARE & COMMON HEALTH ISSUES",
      content:
          "Coatimundis require specialized veterinary care from a provider experienced in procyonid medicine. Standard dog/cat clinics are generally not equipped to handle them. <strong>Preventative Care:</strong> Coatis require annual vaccinations for Rabies and Distemper (using killed-virus vaccines only). They are also prone to dental issues due to their varied diet, so regular oral exams are a must. <strong>Common Health Risks:</strong> Obesity is the #1 killer of captive Coatis, leading to heart disease and joint pain. They are also susceptible to internal parasites and \"ringtail\" (a circulatory issue in the tail). We require all adopters to provide the contact information of an <strong>exotic animal hospital</strong> that has agreed to treat the animal before adoption approval. Expect annual vet costs to range from $300 to $600, excluding emergencies.",
    },
    {
      id: "handling-and-training",
      title: "TRAINING & THE IMPORTANCE OF LEASH WORK",
      content:
        "While they aren't 'trainable' in the way a Golden Retriever is, Coatis are highly motivated by food and can learn basic commands like \"crate\", \"no\",' and \"target\". We strongly recommend <strong>harness training</strong> from a very young age. Because of their unique body shape, a specialized \"H-style\" or \"spook-proof\" harness is required—standard cat or dog harnesses are easily slipped. Leash training allows you to safely provide outdoor enrichment, which is vital for their mental health. However, you should never take a Coati to a public dog park; their high energy and wild appearance can cause stress for both the Coati and other domestic pets.",
    },
    {
      id: "scent-marking-claws",
      title: "MANAGING CLAWS AND SCENT MARKING",
      content:
        "Coatis have non-retractable claws that are essential for digging and climbing, but they can be devastating to furniture and human skin. <strong>Important:</strong> We do not support declawing, as it is a painful procedure that can lead to permanent mobility issues and aggression. Instead, owners must provide ample wooden logs and scratching surfaces to help naturally wear down the claws. Additionally, male Coatis (and some females) will <strong>scent mark</strong> their territory by rubbing their musk glands on objects. While not as pungent as a fox, it is a distinct musk that requires frequent cleaning with enzymatic neutralizers. Neutering/spaying can help reduce the intensity of scent marking and hormonal aggression.",
    },
    {
      id: "ownership-costs",
      title: "THE TOTAL COST OF COATI OWNERSHIP",
      content:
        "<strong>Initial Investment:</strong> <ul><li><strong>Adoption Fee:</strong> $1,000–$2,500 depending on age and socialization.</li><li><strong>Outdoor Aviary/Room Build:</strong> $1,500–$5,000+.</li><li><strong>Initial Vet Exam & Vaccines:</strong> $250–$500.</li><li><strong>Total Startup:</strong> $2,750–$8,000.</li></ul> <strong>Monthly Maintenance:</strong> <ul><li><strong>Fresh Diet & Supplements:</strong> $100–$200.</li><li><strong>Enrichment/Toys:</strong> $40–$60 (they destroy toys quickly).</li><li><strong>Emergency Fund:</strong> We recommend a standing \"exotic pet fund\" of at least $2,000 for unexpected surgeries or illnesses.</li></ul> Adopting a Coati is a premium commitment; ensure you are financially prepared for their entire 15-year lifespan.",
    }
  ],
  seoTitle: "White Nose Coatimundi for Sale",
    seoDescription:
      "Friendly hand-raised bottle baby coatimundi for sale. Healthy, playful, and lineaged. We are a USDA-licensed breeder of pet coatis, offering both nationwide transport and local pickup.",
    seoKeywords: [
      "Coatimundi for sale",
      "Bottle baby coati",
      "Exotic pet coatis",
      "Lineaged coatimundi",
      "Hand-raised coati",
      "USDA breeder exotic pets"
    ],
},

/* ========= PREHENSILE PORCUPINES ========= */
{
  slug: "prehensile-porcupines",
  title: "Prehensile Porcupines",
  description:
    "Unique Prehensile-Tailed Porcupettes for sale, these slow-moving, docile arboreal mammals are famous for their \"muppet-like\" appearance and calm nature. Ethically bred and hand-socialized, we offer nationwide shipping for this rare and rewarding exotic species.",
  heroImage: prehensileTailedPorcupine,
  categoryImage: adoptPorcupines,
  moreInfo:
    "Diet, habitat, and safety instructions included with all porcupines.",
  pets: [
    {
      name: "Prehensile Porcupine",
      image: adoptPrehensilePorcupine,
      description: "Unique rodent requiring specialized care and diet.",
      features: ["Vet Checked", "Rare Breed"],
      price: 899.99,
    },
  ],

  /* ========= TWO COLUMN TEXT ========= */
  twoColumnText: {
    leftTitle: "What Makes E.A. Ranch Porcupine Different?",
    leftContent:
        "We focus on social stability and health above all else. When you adopt from us, you aren't just getting a quilled friend; you’re joining a community. Every purchase comes with a specialized starter diet and a direct line to us for the lifetime of the animal. If you have a question about their \"grumbling noises\", we’re here to help. Unlike their terrestrial cousins, they possess a remarkable long, hairless tail that acts as a fifth limb, allowing them to securely grip branches while navigating. Their bodies are covered in short, thick quills that lie flat until threatened, and they lack the longer \"guard hairs\" found on North American species.",
    rightTitle: "Life with a Prehensile-Tail Companion",
    rightContent:
        "If you're looking for a quiet, arboreal roommate who spends their evenings hanging by their tail and munching on sweet potatoes, you've found your match. These porcupines are famously docile—they don't shoot their quills, and they'd much rather wrap their tail around your arm for a snuggle than act defensively. They're nocturnal herbivores spend their days sleeping in hollow trees, have a distinct wild scent (often compared to sweaty socks or corn chips!) and they need plenty of climbing space to stay happy. Living with one is a 15-to-20-year commitment to a creature that is as weird as it is wonderful.",
  },

  /* ========= TEXT + IMAGE ========= */
  textImageSection: {
    title: "Prehensile-Tailed Porcupines: Navigating the Legal Side of Quills",
    content:
      "<p>Finding out if you can legally own a pet \"<strong>Coendou</strong>\" usually brings a pleasant surprise. Unlike primates or large carnivores, these guys are often welcomed in states where other exotics are banned. That said, the paperwork can still be a bit of a maze depending on your specific county. We’ve become experts at the logistics of getting these slow-moving sweethearts from our ranch in Liberty Hill to their new homes across the country. We handle the heavy lifting on the transit permits so you can focus on getting your vertical habitat ready.</p> <p>We’ve found that the secret to a great pet porcupine is all in the early days. These aren't \"look but don't touch\" animals for us; we spend hours hand-rearing our babies so they grow up to be the curious, <strong>'muppet-face companions</strong> they are meant to be.</p>",
  },
  /* ================== ACCORDION DATA ================== */
  accordion: [
    {
      id: "porcupine-suitability",
      title: "IS A PREHENSILE-TAILED PORCUPINE RIGHT FOR YOU?",
      content:
          "Prehensile-Tailed Porcupines (Coendous) are among the most unique arboreal mammals available to exotic enthusiasts, but they are \"look-but-don't-touch\" companions. Unlike their ground-dwelling cousins, these porcupines use their powerful, <strong>prehensile tails</strong> as a fifth limb for life in the canopy. We prioritize adopters who appreciate a slow-paced, nocturnal observer. They are generally quiet and emit a unique 'dog-like' odor, but they are not cuddly; a single defensive maneuver can result in a painful quill impaction. Ideal owners are those with large vertical spaces and the patience to build a bond based on treats and trust rather than physical handling.",
    },
    {
      id: "legal-and-usda-status",
      title: "LEGALITY AND CAPTIVE WILDLIFE PERMITS",
      content:
          "As an exotic rodent, the Prehensile-Tailed Porcupine is subject to varying state laws. They are generally legal in states with unregulated exotic lists, but many require a <strong>Captive Wildlife Permit</strong> or a specific exotic animal license. States like <strong>Florida and Texas</strong> are common hubs for these animals, but they are strictly prohibited in several others. Because they are often sold under [USDA APHIS] regulations, we require all adopters to verify their county and city zoning ordinances. We will not ship or release a porcupine without documented proof that your local laws allow for the private possession of a \"New World Porcupine.\"",
    },
    {
      id: "quill-safety-management",
      title: "MANAGING THE QUILLS: SAFETY AND DEFENSE",
      content:
        "A common myth is that porcupines \"shoot their quills\"; in reality, quills are released upon physical contact. A Prehensile-Tailed Porcupine's quills are shorter and thicker than those of the African Crested variety, but they are heavily barbed, making removal difficult and painful. When stressed, they will \"rattle\" their quills and stomp their feet as a warning. We educate all adopters on <strong>safe handling techniques</strong>, which typically involve the use of thick, puncture-resistant welding gloves and specialized transport tubs. Understanding their body language is vital to avoid accidental \"quilling\" incidents during cage cleaning or health checks.",
    },
    {
      id: "vertical-habitat-needs",
      title: "ARBOREAL HOUSING: THE NEED FOR HEIGHT",
      content:
          "Horizontal floor space is secondary to vertical climbing area for this species. A successful habitat requires a <strong>large vertical enclosure</strong>, ideally a minimum of 6'x4'x8'. The enclosure must be filled with non-toxic climbing branches (such as kiln-dried pine or fruitwood), sturdy ropes, and elevated nesting boxes. Because they have incredibly strong, orange-enameled teeth, they will chew through wood and thin plastic; we recommend <strong>powder-coated metal enclosures</strong>. Proper ventilation is critical to manage their distinct musky scent, and a \"soft-fall\" substrate like thick mulch or fleece is recommended in case of accidental tumbles during active night climbing.",
    },
    {
      id: "specialized-dietary-needs",
      title: "NUTRITION: THE NEW WORLD RODENT DIET",
      content:
        "Prehensile-Tailed Porcupines are specialized herbivores. In the wild, they consume bark, leaves, and fruits. In captivity, their staple should be a <strong>low-iron primate biscuit</strong> or a specialized rodent block like [Mazuri Rodent Pellets]. <strong>Daily Meal Components:</strong> <ul><li><strong>Fresh Greens (60%):</strong> Romaine, kale, and collard greens.</li><li><strong>Starchy Vegetables (30%):</strong> Sweet potatoes, carrots, and squash (critical for maintaining weight).</li><li><strong>Fruit (10%):</strong> Used sparingly as treats to prevent obesity and dental decay.</li></ul> They also require constant access to <strong>fresh browse</strong> (safe tree branches with bark) to satisfy their instinctive need to gnaw and keep their ever-growing incisors worn down.",
    },
    {
      id: "the-prehensile-tail",
      title: "THE BIOLOGY OF THE PREHENSILE TAIL",
      content:
        "The tail of the Coendou is an incredible evolutionary tool. The underside of the tail is hairless and calloused, providing a \"velcro-like\" grip on branches. It is strong enough to support the animal's entire body weight, though they rarely hang completely free. When adopting, it is crucial to perform \"tail checks\" to ensure there are no sores or \"tail-tip necrosis\", which can happen if the environment is too dry. Maintaining a <strong>humidity level of 50-60%</strong> is essential for their skin and tail health, as well as ensuring smooth quill growth and shedding.",
    },
    {
      id: "nocturnal-enrichment",
      title: "ENRICHMENT FOR THE MIDNIGHT CLIMBER",
      content:
        "Because they are strictly nocturnal, you will need to provide enrichment that engages their senses in the dark. <strong>Scent enrichment</strong> is highly effective; rubbing safe spices or essential oils on climbing branches encourages exploratory behavior. Foraging puzzles that require them to manipulate objects with their paws and teeth keep their active minds occupied. We recommend <strong>heavy-duty hanging toys</strong> designed for large parrots or primates. Without mental stimulation, porcupines can become lethargic or develop stereotypical rocking behaviors, so rotating their furniture and climbing paths every few weeks is mandatory.",
    },
    {
      id: "health-and-vet-care",
      title: "VETERINARY CARE AND LONGEVITY",
      content:
        "Prehensile-Tailed Porcupines can live up to 15-20 years, making them a long-term commitment. They are generally hardy but require an <strong>exotic veterinarian</strong> who is comfortable with sedation, as even a basic exam is impossible without it. <strong>Common Health Issues:</strong> Respiratory infections due to poor ventilation, overgrown incisors requiring dental burring, and skin fungal issues if the enclosure is not kept clean. We require all adopters to identify a vet with <strong>radiology and dental equipment</strong> capable of treating exotic rodents. Regular fecal exams are recommended to screen for internal parasites common in arboreal mammals.",
    },
    {
      id: "scent-and-vocalizations",
      title: "VOCALIZATIONS AND THE \"DOGGY\" ODOR",
      content:
      "Be prepared for a vocal pet! Coendus make a variety of sounds, from \"soft moos\" and whines to loud, piercing screams when they are frightened or in heat. They also have a very distinct natural odor that many describe as \"wet dog\" or \"musty cheese\". This is not a sign of poor hygiene; it is a natural part of their biology used for communication. While <strong>air purifiers</strong> can help, you should never use chemical air fresheners or candles near their enclosure, as their respiratory systems are extremely sensitive to aerosols.",
    },
    {
      id: "adoption-investment",
      title: "INVESTMENT: COSTS OF PORCUPINE OWNERSHIP",
      content:
        "<strong>Initial Setup:</strong> <ul><li><strong>Adoption Fee:</strong> Typically $1,500–$3,500.</li><li><strong>High-End Vertical Cage:</strong> $800–$1,500.</li><li><strong>Lighting & Climate Control:</strong> $200.</li></ul> <strong>Ongoing Costs:</strong> <ul><li><strong>Specialized Pellets & Fresh Produce:</strong> $60–$100/month.</li><li><strong>Veterinary Fund:</strong> We suggest setting aside $500/year for specialized exams.</li></ul> Owning a Prehensile-Tailed Porcupine is a premium experience for the collector who values observing the wonders of <strong>South American biodiversity</strong> from the comfort of their home.",
    }
  ],

  seoTitle: "Prehensile-Tail Porcupines for Sale",
    seoDescription:
      "Curious and gentle prehensile-tailed porcupines, hand-raised with premium lineage and ready for loving homes. Healthy, socialized, and delivered nationwide by our USDA-licensed breeding program.",
    seoKeywords: [
      "Prehensile porcupines for sale",
      "Exotic pet porcupines",
      "Hand-raised porcupines",
      "USDA exotic pets",
      "Social exotic mammals",
      "Healthy pet porcupines"
    ],
},

/* ========= SKUNKS WEASELS ========= */
{
  slug: "skunks-ferrets",
  title: "Skunks & ferrets",
  description: "Captive-bred, de-scented Pet Skunks and inquisitive Weasels for sale in a variety of unique coat patterns. Our small carnivores are raised for temperament and health. We provide nationwide delivery to all legal states and comprehensive care guides for these playful pets.",
  heroImage: skunksFerretsWeasels,
  categoryImage: adoptSkunks,
  moreInfo:
    "Health checks, diet, and habitat guidance provided for all skunks.",
  pets: [
    {
      name: "Striped Baby African Weasel",
      image: adoptStripedWeasel,
      description: "Friendly and social, suitable for experienced owners.",
      features: ["Vet Checked", "Socialized"],
      price: 499.99,
    },
  ],

  /* ========= TWO COLUMN TEXT ========= */
  twoColumnText: {
    leftTitle: "Fur-Bearer Skunks & Ferrets",
    leftContent:
      "While often grouped together due to their slender builds and musk glands, skunks and ferrets (weasels) actually belong to different families: Mephitidae and Mustelidae, respectively. The skunk is North America’s most famous defense specialist, utilizing a dual-scented spray that can reach targets up to 15ft away.  In contrast, weasels are high-octane carnivorous predators with an incredibly fast metabolism for hunting. However, there is a massive difference between a wild animal and one that has been hand-raised with intention. We focus on nurturing our skunk kits and spending hours socialising baby weasels so they are actually excited to see you everytime.",
    rightTitle: "Adopt a Ferret/Striped Companion",
    rightContent:
      "If you've ever wanted a pet that is half-cat, half-toddler, and entirely hilarious, a skunk or ferret fits the bill. Skunks are surprisingly \"<strong>mellow rug-hugs</strong>\" that love to be scratched behind the ears and can be taught to use a litter box just like a cat. On the flip side, members of the ferret family are pure liquid energy—they will find every hidden corner of your house and turn it into a toy stash. They both require a high-protein, specialized diet to keep their coats shiny and their hearts healthy. It’s a 10-to-12-year commitment to a life that is never boring, and we love helping families figure out if they’re ready for that kind of beautiful, busy chaos.",
  },

  /* ========= TEXT + IMAGE ========= */
  textImageSection: {
    title: "Baby Skunks & Weasels: Finding the Right Home Nationwide",
    content:
      "<p>It's a common surprise for people to learn that a skunk or weasel can be a legal member of the family, but the rules change from state to state. Some places see them as wildlife, and others as pets, so we spend a lot of time staying on top of which states are welcoming and which ones aren't. As <a href='/about-us'></a>trusted ferret breeders we take the guesswork out of the adoption process for you, handling the permits and the safe travel details so your only job is getting the house ready for a new set of paws. Since these animals have very specific legal statuses, we make sure every box is checked long before they leave our hands in Liberty Hill.</p> <p>Skunk adoption package includes a custom-formulated nutrition guide and our <strong>Breeder for Life support</strong> to help you through every milestone.</p>",
  },

  /* ================== ACCORDION DATA ================== */
  accordion: [
    {
      id: "adoption-suitability",
      title: "ARE YOU READY FOR A SKUNK OR FERRET? (MUSTELID REALITY)",
      content:
        "Adopting a member of the Skunk or ferret family—including minks, stoats, and domesticated skunks—is a commitment to a high-energy, inquisitive, and occasionally mischievous companion. These animals are famous for their \"liquid bodies\", allowing them to squeeze into impossible spaces, and their high intelligence, which requires constant mental stimulation. We look for adopters who understand that while skunks are often calm and cat-like, ferrets and minks are \"perpetual motion machines\" with high metabolisms. Both require a home that is 100% \"escape-proofed\", as their instinct to explore and cache food is relentless. If you value a sedentary pet, a mustelid is likely not the right fit; however, for the active owner, they offer a playful, bond-heavy experience unlike any other.",
    },
    {
      id: "legal-and-descenting",
      title: "LEGALITY, PERMITS, AND DESCENTING PROCEDURES",
      content:
        "The legality of owning skunks and ferrets is highly complex and varies significantly by state. Most captive-bred skunks are <strong>descented</strong> (anal scent glands removed) at a very young age, but they are still illegal in states like <strong>California, New York, and Hawaii</strong>. States like <strong>Florida, Indiana, and Ohio</strong> generally allow them with a permit. For weasels and minks, many jurisdictions classify them as \"fur-bearers\" or \"exotic predators\", requiring specific wildlife licenses. We require all adopters to verify their local [Domestic Skunk Laws] and provide proof of legality. Note: We strictly adopt out only captive-bred animals; taking these species from the wild is illegal and dangerous.",
    },
     {
      id: "skunk-nutrition",
      title: "SKUNK DIET: PREVENTING OBESITY & SEIZURES",
      content:
        "Skunks are opportunistic omnivores with a biological quirk: they are prone to obesity and metabolic issues if fed standard cat or dog food. Their diet must be low-fat and high-protein. <strong>The Ideal Skunk Plate:</strong> <ul><li><strong>Vegetables (60%):</strong> Fresh greens, cooked squash, and bell peppers.</li><li><strong>Protein (30%):</strong> Cooked poultry, eggs, and insects like mealworms.</li><li><strong>Dairy/Fiber (10%):</strong> Small amounts of plain yogurt for calcium.</li></ul> <strong>Critical Warning:</strong> Skunks require a specific taurine intake but are sensitive to the high mineral content in many kibbles, which can lead to kidney stones or seizures. We recommend specialized diets like [Exotic Nutrition's Skunk Diet] to ensure they receive the proper nutrient ratios without the caloric bloat.",
    },
    {
      id: "weasel-mink-nutrition",
      title: "WEASEL & MINK DIET: THE OBLIGATE CARNIVORE",
      content:
        "Unlike skunks; weasels, minks, are <strong>obligate carnivores</strong> with incredibly short digestive tracts. They cannot process plant matter, fibers, or sugars. Their metabolism is so fast they must eat every few hours to prevent hypoglycemia. A proper diet consists of <strong>whole-prey items</strong> (frozen-thawed mice or chicks) or high-protein, meat-based kibble specifically formulated for mustelids. <strong>Never</strong> feed them fruits or vegetables, as these can cause life-threatening intestinal blockages or insulinoma (pancreatic tumors). Fresh, clean water must be provided via a heavy bowl, as minks especially love to \"snorkel\" and play in their water.",
    },
    {
      id: "habitat-and-proofing",
      title: "ENCLOSURE NEEDS & \"FERRET-PROOFING\" YOUR HOME",
      content:
        "Housing for this category must be extremely secure. For skunks, a large multi-level ferret cage or a dedicated \"skunk room\" with plenty of blankets and hides is sufficient. However, weasels and minks require <strong>solid-floored cages</strong> with very narrow bar spacing (1/2 inch or less), as they can fit through any gap their head can pass through. <strong>Home Safety:</strong> You must seal off under-appliance gaps, secure cabinets with child locks, and ensure there are no reclining chairs, which are notorious for injuring inquisitive mustelids. Provide plenty of <strong>foraging pipes</strong> and tunnels to mimic their natural burrowing instincts. If allowed out of their enclosure, they must be supervised at all times to prevent \"stashing\" — the habit of hiding raw food in your furniture.",
    },
    {
      id: "behavior-and-socialization",
      title: "SOCIAL DYNAMICS: SOLITARY VS. SOCIAL",
      content:
        "Understanding the social vibe of your pet is key. <strong>Skunks:</strong> Generally solitary in the wild but bond deeply to their owners; they can be litter-box trained and enjoy \"denning\" with their humans. <strong>Weasels/Minks:</strong> Often more independent and \"bitey during play\". They have a high prey drive and may view smaller pets (birds, hamsters) as food. Weasels are best kept by owners who appreciate an animal that is busy rather than cuddly. Both species use <strong>scent marking</strong> and vocalizations (like the ferret \"dooking\" or \"skunk stomping\") to communicate. Proper socialization from a young age is mandatory to ensure they are comfortable with human handling and do not become overly territorial.",
    },
    {
      id: "veterinary-care-mustelids",
      title: "VETERINARY CARE: VACCINES & ADRENAL DISEASE",
      content:
        "Finding an <strong>exotic veterinarian</strong> is the most important step before adoption. Skunks and weasels require Rabies and Distemper vaccinations, but you must use vaccines specifically labeled as safe for their species to avoid vaccine-induced illness. <strong>Common Concerns:</strong> Mustelids are highly prone to <strong>Adrenal Disease</strong> and Insulinoma, which often require hormonal implants (like Deslorelin) or lifelong medication. Skunks also need regular nail trims, as they have non-retractable claws designed for digging. We require proof that your local vet is willing to treat \"non-traditional\" small carnivores and has experience with mustelid anesthesia protocols.",
    },
    {
      id: "odor-management",
      title: "MANAGING THE \"MUSK\": ODOR CONTROL TIPS",
      content:
        "Even a descented skunk or a clean weasel will have a natural \"musky\" scent—this is the hallmark of the mustelid family. This odor is produced by skin oils and is not the same as a spray. To manage this, we recommend using <strong>air purifiers with HEPA filters</strong> and washing their bedding at least twice a week. <strong>Do not over-bathe</strong> your pet; stripping their skin of natural oils actually causes them to produce <i>more</i> musk to compensate. Instead, use a damp cloth for spot cleaning and focus on using [enzymatic cleaners] on their litter areas to neutralize ammonia smells without irritating their sensitive noses.",
    },
    {
      id: "enrichment-activities",
      title: "ENRICHMENT: THE ART OF THE \"DIG BOX\"",
      content:
        "Both skunks and weasels are natural diggers and hunters. To prevent destructive behaviors, you must provide <strong>dig boxes</strong> filled with safe materials like sterilized play sand, long-strand coconut fiber, or even large plastic ball-pit balls. Hide high-value treats (like dried minnows or mealworms) inside these boxes to encourage foraging. For minks, a swimming area (like a bathtub or shallow bin) is essential for their physical and mental health. Interactive play using <strong>cat wands or \"chase toys\"</strong> helps burn off the frantic energy of a weasel, while skunks prefer puzzle feeders and scent trails hidden throughout the room.",
    },
    {
      id: "lifetime-commitment",
      title: "LIFESPAN AND FINANCIAL COMMITMENT",
      content:
        "<strong>Average Lifespan:</strong> Skunks (10–12 years), Weasels/Minks (7–10 years). <strong>Financial Breakdown:</strong> <ul><li><strong>Initial Cost:</strong> $500–$2,000 (including habitat and initial vet visit).</li><li><strong>Monthly Expenses:</strong> $60–$120 for specialized meat-based diets or fresh produce.</li><li><strong>Emergency Fund:</strong> Mustelid healthcare can be expensive due to the prevalence of endocrine issues; we recommend a $1,500 emergency reserve.</li></ul> Adopting one of these unique carnivores is a journey into the world of wild intelligence—ensure you are ready for the \"organized chaos\" they bring into a home.",
    }
  ],

  seoTitle: "Friendly Skunks & Exotic Weasels",
    seoDescription:
      "Hand-raised skunks and exotic weasels with playful personalities. Healthy, vet-checked, and USDA-licensed, perfect for exotic pet enthusiasts seeking unusual companions with charm and character.",
    seoKeywords: [
      "Skunks for sale",
      "Ferrets for sale",
      "Exotic weasels adoption",
      "Hand-raised skunks",
      "Friendly exotic pets",
      "USDA exotic animals",
      "Vet-checked skunks and weasels"
    ],
},

/* ========= EXOTIC HOOFSTOCK ========= */
{
  slug: "exotic-hoofstock",
  title: "Exotic Hoofstock",
  description: "Boutique Exotic Hoofstock for sale including Highpark Miniature Cattle, Alpacas, and Miniature Goats. Perfect for hobby farms and estate grazing. Our livestock is halter-trained, healthy, and delivered via professional transport to your pasture nationwide.",
  heroImage: HighparkHoofstock,
  categoryImage: adoptHoofstock,
  moreInfo:
    "Feeding, enrichment, and space requirements included for all hoofstock.",
  pets: [
    {
      name: "Miniature Hoofstock",
      image: adoptHighparkBull,
      description: "Small exotic hoofed animal suitable for large enclosures.",
      features: ["Vet Checked", "Rare Breed"],
      price: 2999.99,
    },
  ],

  /* ========= TWO COLUMN TEXT ========= */
  twoColumnText: {
    leftTitle: "Elite Highpark Cows & Miniature Goats",
    leftContent:
      "The Highpark cow is the crown jewel of the miniature cattle world, a designer crossbreed combining the long, \"iconic fluff\" of the Scottish Highland with the striking white coat and \"pointed black or red markings\" of the British White Park. These cattle are bred specifically for their smaller stature and exceptionally docile temperaments, making them more like giant pasture puppies than traditional livestock. Because of their thick double coats, they are remarkably cold-hardy and thrive in various climates, provided they have shade and wind protection. \n\nIn contrast, our miniature goats—specifically Nigerian Dwarf goats for sale and Pygmies—are the high-energy comedians of the ranch. While the Highparks provide a stoic, picturesque presence, these goats are the \"social directors\" of the pasture. Nigerian Dwarfs are particularly prized for their high-quality milk production in a compact size, while Pygmies offer a stockier, robust build. Both breeds are highly intelligent and require vertical enrichment, such as climbing platforms, to satisfy their natural curiosity and desire for play.",
    rightTitle: "Life with Gentle Grazers & Alpacas",
    rightContent:
      "Living with exotic hoofstock is a lifestyle choice that transforms a simple backyard into a functioning sanctuary. Alpacas (both Huacaya and Suri) and our other gentle grazers are communal animals that operate on a strict herd hierarchy. They communicate through soft hums, body posturing, and a unique alert call that keeps the group safe. Because they are prey animals, their trust must be earned through consistent, gentle interaction. They have a \"soft footprint\", making them ideal for smaller acreages where preserving the integrity of the pasture is a priority. \n\nChoosing to adopt hoofstock from our ranch is a 15-to-25-year journey that requires a commitment to proper pasture rotation, parasitic management, and annual shearing for fleece-bearing species. Unlike traditional commercial livestock, our animals are handled daily from birth to ensure they are \"halter-ready\" and comfortable with human touch. We focus on \"multi-species grazing\" compatibility, ensuring that your new Highpark calf or Alpaca cria will integrate seamlessly into a diverse and peaceful home herd.",
  },

  /* ========= TEXT + IMAGE ========= */
  textImageSection: {
    title: "Pasture Elegance: From Highpark Royalty to Playful Alpacas",
    content:
      "<p>Our Highpark calves are the \"living lawn ornaments\" everyone dreams of—famous for their teddy-bear appearance, high-intelligence, and gentle disposition. We focus on breeding for the perfect \"<strong>park markings</strong>\" and that signature long fringe that makes them so photogenic. Meanwhile, our Alpacas and Miniature Goats offer a more interactive experience, with soft fleece and a playful nature that brings any farm to life. </p> <p>Our hoofstock are only available to homes that meet our strict acreage and fencing requirements to ensure their safety from local predators. Whether you are looking for a show-quality Highpark heifer or a pair of fiber-producing Alpacas, we provide the pre-adoption education needed to manage a thriving pasture. When you adopt from us, you’re joining a community of exotic hoofstock enthusiasts dedicated to preserving these miniature and designer breeds for generations to come.</p>",
  },

  /* ================== ACCORDION DATA ================== */
  accordion: [
    {
      id: "what-is-exotic-hoofstock",
      title: "WHAT DOES \"EXOTIC HOOFSTOCK\" ACTUALLY MEAN?",
      content:
        "Exotic hoofstock refers to domesticated or semi-domesticated grazing animals that are uncommon in standard livestock operations and are often raised for companionship, conservation, education, or boutique farming. In our program, this includes <strong>Highland and Highpark cows</strong>, <strong>miniature and specialty goats</strong>, and other <strong>calm, people-friendly grazers</strong>. These animals are prized not just for utility, but for temperament, appearance, and their ability to integrate into small farms, homesteads, and lifestyle properties. Unlike commercial cattle or production goats, our hoofstock are selected for gentle disposition, manageable size, and adaptability to human environments.",
    },
    {
      id: "why-highland-cows",
      title: "WHY HIGHLAND & HIGHPARK COWS ARE DIFFERENT",
      content:
        "Highland and Highpark cows are among the most sought-after grazing cattle in the world—and for good reason. Originating from the rugged Scottish Highlands, these cattle are naturally hardy, cold-tolerant, and extremely efficient grazers. Their long hair is not just aesthetic; it protects them from weather extremes and reduces insect stress. <strong>Temperament-wise</strong>, Highland cattle are widely known for being calm, curious, and highly tolerant of human interaction when properly socialized. Highpark cows, bred for even smaller stature and gentle handling, are ideal for boutique farms and acreage owners who want the presence of cattle without the scale of commercial breeds. They are excellent for pasture management, educational settings, and long-term companion livestock.",
    },
    {
      id: "land-space-needs",
      title: "HOW MUCH LAND DO YOU REALLY NEED?",
      content:
        "One of the biggest misconceptions about hoofstock is that they require massive acreage. While space is important, <strong>management matters more than raw size</strong>. Miniature goats can thrive on smaller, well-managed properties with browse access and secure fencing. Highland and Highpark cows typically require <strong>1–2 acres per animal</strong> depending on pasture quality, rainfall, and rotational grazing practices. These cattle are exceptional forage converters, meaning they maintain healthy body condition on grass where other breeds struggle. We help buyers evaluate their land honestly—factoring in soil quality, seasonal growth, and shelter—so animals thrive instead of merely surviving.",
    },
    {
      id: "temperament-handling",
      title: "TEMPERAMENT, HANDLING & HUMAN INTERACTION",
      content:
        "All of our hoofstock are selected with temperament as a top priority. This is especially critical for Highland and Highpark cows, which are often kept in close proximity to people. These animals are naturally docile, intelligent, and responsive to routine. When raised with consistent human contact, they recognize caretakers, respond to feeding schedules, and tolerate basic handling with minimal stress. Miniature goats, on the other hand, are highly social, playful, and interactive—often following owners around the property. Proper handling, calm energy, and predictable routines are key to maintaining safe, respectful relationships with large grazing animals.",
    },
    {
      id: "daily-care-reality",
      title: "WHAT DAILY CARE ACTUALLY LOOKS LIKE",
      content:
        "Daily care for exotic hoofstock is straightforward but non-negotiable. Tasks include visual health checks, fresh water access, pasture or hay management, and routine observation of movement and behavior. Highland and Highpark cows are low-maintenance compared to many cattle breeds—they do not require grain-heavy diets and are extremely resilient. Miniature goats require more frequent interaction, hoof checks, and enrichment due to their curiosity. Owners should expect to spend <strong>30–60 minutes daily</strong> on routine care, with additional time for seasonal maintenance such as hoof trimming, parasite control, and shelter upkeep.",
    },
    {
      id: "feeding-grazing",
      title: "FEEDING, GRAZING & BODY CONDITION",
      content:
        "Proper nutrition is the foundation of hoofstock health. Our grazing animals are primarily grass-fed, supplemented only when necessary. <strong>Highland and Highpark cows</strong> excel on pasture and quality grass hay, requiring minimal concentrate feed. Overfeeding grain can actually cause health issues in these breeds. <strong>Miniature goats</strong> are browsers and benefit from shrubs, weeds, and varied plant material alongside hay and minerals. Loose mineral access is essential for all hoofstock to prevent deficiencies. We educate every buyer on body condition scoring so animals stay fit, not fat.",
    },
    {
      id: "health-longevity",
      title: "HEALTH, HARDINESS & LONGEVITY",
      content:
        "One of the greatest advantages of Highland and Highpark cattle is their exceptional health profile. These breeds have strong immune systems, fewer calving complications, and excellent longevity—often living 18–25 years with proper care. Miniature goats typically live 12–18 years. Routine veterinary care includes annual exams, parasite management, and periodic vaccinations depending on region. Hoof care is essential across all species and should be maintained every 6–8 weeks. Because these animals are long-term commitments, we prioritize placing them with owners who plan for years, not seasons.",
    },
    {
      id: "legal-zoning",
      title: "ZONING, LEGAL & TRANSPORT CONSIDERATIONS",
      content:
        "Before purchasing hoofstock, buyers must confirm local zoning laws and livestock regulations. Many rural and semi-rural areas allow cattle and goats, while suburban municipalities may have restrictions based on acreage or animal size. Transport logistics are also important—large animals require safe, low-stress hauling methods. We assist buyers with documentation, health certificates, and transport coordination to ensure a smooth and compliant transition.",
    },
    {
      id: "pre-purchase-checklist",
      title: "PRE-PURCHASE CHECKLIST FOR HOOFSTOCK OWNERS",
      content:
        "Before committing to exotic hoofstock, every buyer should run through a practical readiness check. Ask yourself the following: <strong>Do I have secure, livestock-grade fencing?</strong> (Goats test fences daily, and cattle require strength, not just height.) <strong>Is my pasture sustainable year-round?</strong> Seasonal forage loss means hay storage and budgeting are essential. <strong>Do I have access to a large-animal veterinarian?</strong> Even hardy breeds like Highland cows require professional care. <strong>Am I prepared for routine maintenance?</strong> This includes hoof trimming, parasite control, and shelter upkeep. <strong>Do I have backup care?</strong> Livestock still need attention during travel or emergencies. Buyers who can confidently answer yes to these questions tend to have the healthiest animals and the most rewarding ownership experience.",
    },
    {
    id: "who-this-is-not-for",
    title: "WHO EXOTIC HOOFSTOCK IS *NOT* RIGHT FOR",
    content:
      "<ul> <li><strong>People seeking low-effort animals:</strong> Exotic hoofstock require daily care, observation, and routine management. They are not set-and-forget animals.</li> <li><strong>Short-term or impulse buyers:</strong> Highland cows and miniature goats are long-lived animals, often requiring 15–25+ years of commitment.</li> <li><strong>Properties without proper fencing or land planning:</strong> Inadequate fencing or overcrowded pasture leads to stress, escape issues, and health problems.</li> <li><strong>Owners unwilling to provide veterinary care:</strong> Access to a large-animal or farm veterinarian is essential, even for hardy breeds.</li> <li><strong>Those seeking purely decorative animals:</strong> These are living, intelligent grazers—not lawn ornaments or temporary attractions.</li> <li><strong>Anyone unable to manage seasonal responsibilities:</strong> Hoof care, parasite control, pasture rotation, and shelter maintenance are non-negotiable.</li> </ul> <p><strong>That said:</strong> For prepared owners who value responsible land stewardship, calm animal companionship, and long-term investment, exotic hoofstock can be one of the most rewarding animal experiences available.</p>",
  }
  ],
  seoTitle: "Exotic Hoofstock for Sale",
    seoDescription:
      "Explore our selection of exotic hoofstock including miniature goats, highpark cows, and gentle grazers. USDA-licensed hoofstock for safe interaction — perfect for farms, ranches, or private collections.",
    seoKeywords: [
      "Exotic hoofstock for sale",
      "Miniature goats adoption",
      "Pet deer for sale",
      "USDA exotic animals",
      "Hand-raised hoofstock",
      "Socialized exotic grazers"
    ],
},

/* ========= PRAIRIE DOGS CAPYBARAS ========= */
{
  slug: "prairie-dogs-capybaras",
  title: "Prairie Dogs & Capybaras",
  description: "Adopt the world’s most social rodents—from whistling Prairie Dog pairs to gentle, swimming Capybaras. All our rodents are USDA-licensed and captive-bred. We offer climate-controlled delivery and specialized starter kits to ensure your ranch-raised pet thrives in its new home.",
  heroImage: capybarasPrairieDogs,
  categoryImage: adoptPrarieDogs,
  moreInfo: "Care guides, diet plans, and habitat enrichment included.",
  pets: [
    {
      name: "Baby Prairie Dog for sale",
      image: adoptBabyPrairieDog,
      description: "Active and social, ideal for experienced keepers.",
      features: ["Vet Checked", "Socialized"],
      price: 299.99,
    },
    {
      name: "Baby Capybara for sale",
      image: adoptBabyCapybaras,
      description:
        "Large social rodent, requires spacious aquatic and terrestrial setup.",
      features: ["Vet Checked", "Socialized"],
      price: 2499.99,
    },
  ],

  /* ========= TWO COLUMN TEXT ========= */
  twoColumnText: {
    leftTitle: "The World’s Largest & Loudest Rodents",
    leftContent:
      "The Capybara (Hydrochoerus hydrochaeris) is the undisputed \"friend to everyone\" in the animal kingdom. As the world’s largest rodent, they are semi-aquatic specialists that thrive when they have access to swimming areas and plenty of sun. They are incredibly docile, often forming bonds with other household pets and their human keepers through soft chirps and whistles. \n\nIn contrast, our Black-Tailed Prairie Dogs are the social dynamos of the rodent world. Famous for their \"jump-yip communication\", these highly intelligent burrowers live in complex family groups called coteries. They are intensely affectionate and require significant daily interaction to stay happy. Because they are colony animals, we exclusively offer them in pairs to ensure their mental well-being and prevent loneliness-induced stress.",
    rightTitle: "Care, Socialization & Nationwide Delivery",
    rightContent:
      "Capybaras need a wet and dry environment with UV access to maintain their skin and dental health. Prairie Dogs, on the other hand, need deep substrate or specialized tunnel enclosures to satisfy their innate urge to burrow. Both species are herbivores, requiring a strict diet of high-quality grasses, Timothy hay, and specialized pellets. \n\nWe understand that traveling to our ranch isn't always possible, which is why we offer <strong>safe, climate-controlled delivery</strong> across the United States where legal. Our transport team is experienced in handling exotic rodents, ensuring your new companion arrives stressed-free and healthy. Every animal is USDA-certified and comes with a health certificate, transition food, and a detailed care guide to help you start your journey as a \"mega-rodent keeper\".",
  },

  /* ========= TEXT + IMAGE ========= */
  textImageSection: {
    title: "From Tunnel Builders to River Swimmers",
    content:
      "<p>At E.A. Ranch, our Prairie Dogs and Capybaras are raised in a social, high-enrichment environment. Our Capys are famous for their 'chill' attitudes, having been socialized around water and various ranch sounds from birth. Meanwhile, our Prairie Dog pups are hand-raised during their weaning phase to ensure they are 'pocket-tame' and ready for life in a human home. We focus on healthy genetics and robust social foundations, making our rodents some of the most sought-after exotic pet companions.</p> <p>Shipping and delivery are handled with the utmost care, utilizing specialized carriers that meet all USDA requirements. Whether you are adding a pair of whistling Prairie Dogs to your family or a swimming Capybara to your estate, we facilitate the entire process from permit verification to front-door drop-off. Please note that these species are restricted in several states; we will assist you in verifying your local laws before finalizing any adoption.</p>",
  },

  /* ================== ACCORDION DATA ================== */
  accordion: [
    {
      id: "who-can-own",
      title: "BEST OWNERS OF PRAIRIE DOGS & CAPYBARAS",
      content:
        "Prairie dogs and capybaras are best suited for owners who genuinely enjoy animals that think, observe, and react to their environment. These are not novelty pets or hands-off displays. Prairie dogs thrive with owners who are present daily and comfortable with vocal, curious, sometimes opinionated animals. Capybaras require calm, patient caretakers with the space and lifestyle to accommodate a semi-aquatic grazer that forms deep social bonds. We prioritize homes that value routine, land stewardship, and long-term responsibility. If you enjoy watching natural behaviors unfold rather than forcing interaction, these animals can be incredibly rewarding companions.",
    },

    {
      id: "are-they-good-pets",
      title: "ARE PRAIRIE DOGS & CAPYBARAS GOOD PETS? (THE HONEST ANSWER)",
      content:
        "They can be exceptional animals for the right home—and deeply challenging for the wrong one. Prairie dogs are intelligent, vocal, and emotionally expressive. They recognize caretakers, develop preferences, and can become anxious if ignored or overstimulated. Capybaras are gentle and calm, but their size, strength, and environmental needs are often underestimated. <strong>The Pros:</strong> strong social bonds, fascinating behaviors, long lifespans, and a unique presence unlike traditional pets. <strong>The Challenges:</strong> space requirements, specialized care, legal considerations, and the reality that these animals adapt poorly to frequent changes or impulse ownership. Success depends less on experience and more on patience and consistency.",
    },

    {
      id: "space-requirements",
      title: "SPACE REQUIREMENTS: WHY MORE IS ALWAYS BETTER",
      content:
        "Space isn’t just about comfort—it directly impacts behavior and health. Prairie dogs need room to dig, tunnel, retreat, and observe from elevated points. When confined, they often develop stress behaviors such as excessive vocalization or withdrawal. Capybaras require both land and water space to regulate body temperature, joint health, and mental well-being. A shallow pond or pool isn’t optional—it’s a biological necessity. Properties that allow animals to move naturally see calmer temperaments, healthier bodies, and easier handling over time.",
    },

    {
      id: "social-needs",
      title: "SOCIAL STRUCTURE IS NOT OPTIONAL",
      content:
        "Both prairie dogs and capybaras are intensely social species. Prairie dogs live in complex colonies where communication is constant. Isolated individuals often develop anxiety, depression, or aggression—even with human interaction. Capybaras rely on companionship for emotional regulation and safety; a solitary capybara is almost always a stressed one. <strong>We strongly recommend:</strong> <ul> <li>Keeping prairie dogs in compatible pairs or groups</li> <li>Housing capybaras with at least one companion (another capybara or compatible hoofstock)</li> </ul> Social fulfillment dramatically improves temperament, appetite, and overall health.",
    },

    {
      id: "diet-nutrition",
      title: "DIET & NUTRITION: WHERE MOST MISTAKES HAPPEN",
      content:
        "Feeding these species correctly is less about variety and more about consistency. Prairie dogs are strict herbivores requiring high-fiber grasses, hay, and leafy greens. Excess fruit or processed feeds often lead to obesity and dental disease. Capybaras are grazers designed for near-constant intake of grasses and aquatic plants. Poor diets show up quickly as digestive issues, joint strain, or lethargy. Owners who succeed long-term treat feeding as a daily rhythm rather than a once-a-day task.",
    },

    {
      id: "water-needs",
      title: "WATER ACCESS FOR CAPYBARAS (NON-NEGOTIABLE)",
      content:
        "Capybaras are semi-aquatic animals, and water access is essential for both physical and mental health. Swimming supports joint mobility, skin health, and natural cooling. A proper setup includes: <ul> <li>A shallow-entry pool or pond for easy access</li> <li>Clean, regularly refreshed water</li> <li>Dry areas nearby for resting and sunning</li> </ul> Capybaras without adequate water often develop skin problems, stress behaviors, and reduced activity levels.",
    },

    {
      id: "handling-expectations",
      title: "HANDLING & INTERACTION: SETTING REALISTIC EXPECTATIONS",
      content:
        "These animals are not cuddly in the traditional sense, and forcing interaction almost always backfires. Prairie dogs prefer predictable routines and gradual trust-building. They may approach on their own terms, especially during feeding or quiet observation periods. Capybaras tolerate touch once trust is established but are rarely affectionate in a dog-like way. Owners who allow interaction to develop naturally often experience far deeper bonds than those who rush physical contact.",
    },

    {
      id: "legal-considerations",
      title: "LEGAL & ZONING REQUIREMENTS YOU MUST VERIFY",
      content:
        "Prairie dogs and capybaras are regulated differently depending on state, county, and even city zoning laws. Some areas require permits, inspections, or specific enclosure standards. Others prohibit ownership entirely. Legal verification should happen before purchase, enclosure construction, or transport. We require buyers to confirm legality in their jurisdiction to protect both the animal and the owner from future complications.",
    },

    {
      id: "cost-reality",
      title: "THE REAL COST OF OWNERSHIP (BEYOND THE ANIMAL)",
      content:
        "Initial purchase is only a fraction of the total investment. Ongoing costs include enclosure maintenance, fencing, feed, water management, veterinary care, and seasonal adjustments. Capybaras in particular require infrastructure—ponds, drainage, shade structures—that many first-time owners overlook. Planning financially from the start prevents compromised care later.",
    },

    {
      id: "long-term-commitment",
      title: "A LONG-TERM COMMITMENT THAT CHANGES YOUR DAILY LIFE",
      content:
        "Prairie dogs and capybaras are long-lived animals that become part of your daily routine. Travel requires experienced caretakers. Weather affects feeding and habitat management. These animals notice when routines change. For owners who enjoy structure, land-based living, and meaningful animal relationships, this commitment is deeply fulfilling. For those seeking convenience, it can quickly become overwhelming. Being honest with yourself before committing is the most responsible decision you can make.",
    },
  ],

  seoTitle: "Baby Prairie Dogs & Capybaras for Sale",
    seoDescription:
      "Discover playful prairie dogs and gentle capybaras hand-raised for homes or hobby farms. Healthy, socialized, and USDA-licensed exotic pets ready for adoption nationwide.",
    seoKeywords: [
      "Prairie dogs for sale",
      "Capybara adoption",
      "Exotic pets for sale",
      "Hand-raised prairie dogs",
      "USDA exotic animals",
      "Socialized capybaras"
    ],
},

/* ========= TURTLES ========= */
{
  slug: "pet-turtles",
  title: "Pet Turtles",
  description: "Healthy aquatic and semi-aquatic Pet Turtles for sale, from small Musk turtles to iconic Painted and Map turtles. We focus on shell health and robust genetics. Shipped nationwide with our industry-leading live-arrival guarantee and specialized filtration advice.",
  heroImage: boxRedEaredTurtles,
  categoryImage: adoptTurtles,
  moreInfo: "Tank setup, diet, and care instructions provided for all turtles.",
  pets: [
    {
      name: "Red-Eared Slider",
      image: adoptSliderTurtle,
      description: "Popular aquatic turtle, beginner-friendly.",
      features: ["Vet Checked", "Easy Care"],
      price: 49.99,
    },
    {
      name: "Box Turtle",
      image: adoptBoxTurtle,
      description:
        "Semi-aquatic turtle requiring varied diet and habitat setup.",
      features: ["Vet Checked", "Socialized"],
      price: 99.99,
    },
  ],

  /* ================== ACCORDION DATA ================== */
  accordion: [
    {
    id: "longevity-commitment",
    title: "THE 50-YEAR PET: ARE YOU READY FOR THE LONG HAUL?",
    content:
      "Turtles are not \"disposable pets\"; they are generational companions. Depending on the species, a healthy aquatic turtle can live anywhere from 30 to over 50 years. <ul><li><strong>Growth Reality:</strong> That cute, quarter-sized hatchling will eventually grow into a 10-to-12-inch powerhouse.</li><li><strong>The Commitment:</strong> You aren't just buying a pet for a child; you are likely buying a pet that will follow that child to college and beyond.</li><li><strong>Estate Planning:</strong> It sounds extreme, but many dedicated keepers actually include their turtles in their wills.</li></ul> We prioritize adopters who view a turtle as a permanent family member rather than a temporary curiosity.",
    },
    {
      id: "species-selection",
      title: "WHICH TURTLE FITS YOUR TANK? (SPECIES GUIDE)",
      content:
        "Not all turtles require a massive backyard pond. Selecting the right species for your available space is the first step to success. <ul><li><strong>Red-Eared Sliders:</strong> The most popular, but also the largest and messiest. They require at least a 75-100 gallon tank as adults.</li><li><strong>Painted Turtles:</strong> Beautifully colored and slightly smaller than sliders, making them a great \"intermediate\" choice.</li><li><strong>Musk & Mud Turtles:</strong> Our top recommendation for apartment dwellers. They stay small (4-5 inches) and are more \"bottom-walkers\" than open-water swimmers.</li><li><strong>Map Turtles:</strong> Stunning \"sawback shells\" but can be quite skittish and require very high water quality.</li></ul> At the ranch, we can help you choose a species that won't outgrow your living room in three years.",
    },
    {
      id: "the-10-gallon-rule",
      title: "HABITAT SIZING: THE \"10 GALLONS PER INCH\" RULE",
      content:
        "One of the biggest causes of turtle stress and illness is cramped quarters. To thrive, an aquatic turtle needs space to swim, dive, and explore. <ul><li><strong>The Formula:</strong> The industry standard is 10 gallons of water for every 1 inch of shell length. A 6-inch turtle needs a 60-gallon tank at minimum.</li><li><strong>Depth Matters:</strong> Most aquatic turtles are strong swimmers and enjoy deep water, provided there are resting spots near the surface.</li><li><strong>Floor Strength:</strong> Remember that a 100-gallon setup weighs over 1,000 lbs. We advise our adopters to ensure their flooring or stands are rated for that kind of weight.</li></ul>",
    },
    {
      id: "filtration-secrets",
      title: "WATER QUALITY: WHY YOU NEED TO \"OVER-FILTER\"",
      content:
        "Turtles are significantly messier than fish. They eat in the water and waste in the water, which leads to rapid ammonia spikes. <ul><li><strong>Canister Filters:</strong> Don't bother with internal \"hang-on-back\" filters. For turtles, you need a high-quality canister filter rated for 2-3 times the size of your tank.</li><li><strong>Biological Load:</strong> A powerful filter isn't just about clear water; it’s about housing the beneficial bacteria that keep the water chemistry safe.</li><li><strong>Water Changes:</strong> Even with a great filter, a 25% weekly water change is mandatory to remove nitrates and keep the environment \"ranch-fresh\".</li></ul>",
    },
    {
      id: "basking-science",
      title: "THE BASKING STATION: HEAT, UVA, AND UVB",
      content:
        "A turtle cannot digest its food or maintain its shell without a proper \"dry\" basking area. <ul><li><strong>The Dual-Bulb System:</strong> You need a heat lamp to bring the basking area to 90-95°F and a specialized 10.0 UVB bulb to prevent Metabolic Bone Disease.</li><li><strong>Total Dryness:</strong> The turtle must be able to get its entire body—including its plastron (belly)—completely out of the water to prevent shell rot.</li><li><strong>Day/Night Cycle:</strong> Lights should be on for 10-12 hours a day. We recommend smart timers so your turtle gets a consistent \"sun\" schedule even when you aren't home.</li></ul>",
    },
    {
      id: "turtle-diet",
      title: "NUTRITION: IT'S NOT JUST TURTLE PELLETS",
      content:
        "In the wild, turtles are opportunistic omnivores. A diet of only pellets leads to vitamin deficiencies and \"pyramiding\" (deformed shell growth). <ul><li><strong>The 50/50 Rule:</strong> For adult turtles, half their diet should be high-quality pellets, and the other half should be fresh greens (Collard greens, Dandelion greens, Red leaf lettuce).</li><li><strong>Protein Boosts:</strong> Occasional treats of feeder fish, ghost shrimp, or earthworms provide essential minerals and hunting enrichment.</li><li><strong>Calcium:</strong> We recommend keeping a \"cuttlebone\" (the kind used for birds) floating in the tank at all times for the turtle to munch on for shell strength.</li></ul>",
    },
    {
      id: "shell-health",
      title: "RECOGNIZING SHELL ROT & HEALTH RED FLAGS",
      content:
        "The shell is a living part of the turtle's ribcage; if it’s sick, the turtle is sick. <ul><li><strong>Shell Rot (Ulcerative Shell Disease):</strong> Look for soft spots, white fuzzy patches, or a foul odor. This is usually caused by poor water quality or a lack of UVB.</li><li><strong>Respiratory Infections:</strong> If your turtle is swimming lopsided, floating uncontrollably, or has bubbles coming from its nose, it needs an exotic vet immediately.</li><li><strong>Metabolic Bone Disease (MBD):</strong> Signs include a soft/pliable shell or \"beak deformities\". This is a direct result of improper lighting and diet.</li></ul>",
    },
    {
      id: "salmonella-safety",
      title: "THE SALMONELLA FACTOR: KEEPING YOUR FAMILY SAFE",
      content:
        "It is a reality of reptile keeping: all turtles can carry Salmonella. However, with basic hygiene, the risk is incredibly low. <ul><li><strong>Hand Washing:</strong> Always wash your hands with antibacterial soap after handling your turtle or touching the tank water.</li><li><strong>No Kitchen Cleaning:</strong> Never clean turtle filters or decor in the kitchen sink where food is prepared. Use a dedicated utility sink or an outdoor hose.</li><li><strong>Children:</strong> We advise that children under five be closely supervised and taught not to kiss or put turtles in their mouths.</li></ul>",
    },
    {
      id: "outdoor-ponds",
      title: "MOVING OUTDOORS: THE ULTIMATE TURTLE RETIREMENT",
      content:
        "If you live in a climate that allows it, an outdoor pond is the gold standard for turtle care. <ul><li><strong>Natural Sunlight:</strong> Nothing beats the sun for UVB and Vitamin D3 synthesis.</li><li><strong>Predator Proofing:</strong> Outdoor enclosures must have secure lids or \"overhang\" fencing to keep out raccoons, hawks, and stray cats.</li><li><strong>Hibernation (Brumation):</strong> Only advanced keepers should attempt outdoor hibernation. We offer consultation on how to safely overwinter your turtles in deeper, non-freezing pond zones.</li></ul>",
    },
    {
      id: "turtle-starter-kits",
      title: "TURTLE STARTER BUNDLES & SUPPLIES",
      content:
        "We take the guesswork out of setup with our \"Ranch-Tested\" turtle kits. <ul><li><strong>The \"Micro-Pond Kit\" ($350-$500):</strong> Includes a 40-75 gallon tank, a high-output canister filter, a floating basking dock, a dual-dome light fixture, and a 3-month supply of our \"Ranch Mix pellets\".</li><li><strong>Water Conditioning Pack ($45):</strong> Includes dechlorinator, \"sludge-busting\" beneficial bacteria, and a pH testing kit to keep your water crystal clear.</li><li><strong>Custom Basking Platforms:</strong> We sell heavy-duty, naturalistic basking ramps that won't sink under the weight of an adult turtle.</li></ul>",
    }
  ],

  seoTitle: "Aquatic & Land Pet Turtles for Sale",
    seoDescription:
      "Healthy aquatic and semi-aquatic turtles available for adoption. Hand-raised, vet-checked, and USDA-licensed, perfect for home aquariums or terrariums. Delivery available nationwide.",
    seoKeywords: [
      "Pet turtles for sale",
      "Aquatic turtles adoption",
      "Exotic reptiles for sale",
      "Hand-raised turtles",
      "USDA licensed reptiles",
      "Healthy pet turtles"
    ],
},

/* ========= LEOPARD CRESTED GECKOS ========= */
{
  slug: "geckos",
  title: "Leopard & Crested Geckos",
  description:
    "Explore premium captive-bred Leopard and Crested Geckos for sale. From high-contrast designer Leopard morphs to crested eyelash geckos, our reptiles are established feeders with a live-arrival guarantee. Perfect for bioactive terrarium enthusiasts and beginner keepers alike.",
  heroImage: crestedLeopardGeckos,
  categoryImage: adoptGeckos,
  moreInfo:
    "Each gecko comes with care sheets, diet recommendations, and enclosure setup guidance.",
  pets: [
    {
      name: "Baby Leopard Gecko for Sale",
      image: adoptBabyleopardGecko,
      description: "Classic spotted morph, friendly and easy to care for.",
      features: ["Vet Checked", "Beginner Friendly"],
      price: 49.99,
    },
    {
      name: "Crested Gecko - Harlequin",
      image: adoptBabyCrestedGecko,
      description:
        "Striking color pattern, active and healthy, perfect for first-time owners.",
      features: ["Rare Morph", "Hand Tamed"],
      price: 79.99,
    },
  ],

  /* ================== ACCORDION DATA ================== */
  accordion: [
    {
    id: "leo-vs-crestie",
    title: "LEOPARD VS. CRESTED GECKOS: WHICH IS YOUR MATCH?",
    content:
      "Choosing between these two species depends entirely on the type of environment you want to maintain. <ul><li><strong>The Leopard Gecko:</strong> A terrestrial (ground-dwelling) lizard from the dry regions of Afghanistan and India. They are famous for their smiles, movable eyelids, and fat storage tails. Best for those who want a handleable pet that thrives in an arid setup.</li><li><strong>The Crested Gecko:</strong> An arboreal (tree-climbing) lizard from New Caledonia. They have \"eyelash scales\", no eyelids (they lick their eyes to hydrate them!), and sticky toe pads for walking on glass. Best for those who want a vertical tropical display and a pet that doesn't strictly require live bugs.</li><li><strong>Lifespan:</strong> Both can live 15-20 years with proper care. We ensure every adopter understands that these \"little lizards\" are a long-term commitment.</li></ul>",
    },
    {
      id: "enclosure-orientation",
      title: "HORIZONTAL VS. VERTICAL: HABITAT ARCHITECTURE",
      content:
        "You cannot house these two species the same way. Their skeletal structures and natural behaviors require specific enclosure orientations. <ul><li><strong>Leopard Gecko (The Long Setup):</strong> They need floor space, not height. We require a minimum 20-gallon \"Long tank\" (30x12x12 inches) for juveniles, but a 40-gallon breeder is our ranch standard for adults to allow for a proper heat gradient.</li><li><strong>Crested Gecko (The Tall Setup):</strong> They need height for climbing. A minimum of 18x18x24 inches is required for an adult. We recommend front-opening glass terrariums to make misting and feeding easier without startling the gecko from above.</li><li><strong>Security:</strong> Both are prone to \"glass dancing\" if they feel exposed. We advocate for covering three sides of the tank with backgrounds to help them feel secure in their territory.</li></ul>",
    },
    {
      id: "diet-and-mrp",
      title: "FEEDING: BUGS VS. FRUIT REPLACEMENT POWDERS",
      content:
        "Nutrition is where these two geckos diverge significantly. <ul><li><strong>Leopard Gecko (Strict Insectivores):</strong> They *only* eat bugs. A variety is key: Dubia roaches, crickets, and the occasional hornworm. We strictly advise against a mealworm-only diet as it lacks the necessary protein-to-fat ratio.</li><li><strong>Crested Gecko (Frugivores/Omnivores):</strong> In the wild, they eat rotting fruit and insects. In captivity, they thrive on <strong>Meal Replacement Powders (MRP)</strong> like Pangea or Repashy. While they can live on MRP alone, offering live insects once a week provides vital enrichment and growth boosts.</li><li><strong>The Golden Rule:</strong> Always \"gut-load\" your feeder insects with high-quality veggies 24 hours before feeding them to your gecko to ensure maximum nutrient transfer.</li></ul>",
    },
    {
      id: "thermal-and-uvb",
      title: "THE UVB MYTH & CREPUSCULAR HEAT NEEDS",
      content:
        "For years, people thought geckos didn't need light because they are \"nocturna\"l. We now know they are actually <strong>crepuscular</strong> (active at dawn and dusk) and benefit immensely from low-level UVB. <ul><li><strong>Leopard Geckos:</strong> They need a \"hot spot\" of 90°F created by an overhead Deep Heat Projector. We recommend a 2-7% Shadedweller UVB kit to help with Vitamin D3 synthesis and prevent Metabolic Bone Disease.</li><li><strong>Crested Geckos:</strong> They are heat-sensitive. Room temperature (72-78°F) is usually fine. If your home exceeds 82°F, you must use cooling methods, as Cresties can suffer heatstroke very quickly.</li><li><strong>Night Cycles:</strong> Both species require a total blackout at night. No \"red\" or \"blue\" moon lamps—these actually disrupt their circadian rhythms and can cause long-term stress.</li></ul>",
    },
    {
      id: "humidity-and-shedding",
      title: "HUMIDITY CYCLES & STUCK SHED PREVENTION",
      content:
        "Proper hydration isn't just about a water bowl; it's about the air they breathe. <ul><li><strong>Arid vs. Tropical:</strong> Leopard geckos need low ambient humidity (30-40%) but MUST have a \"humid hide\" filled with damp moss to help them peel off their old skin. Crested geckos need a \"dry out cycle\": mist heavily at night (80% humidity) and let it drop to 50% during the day.</li><li><strong>Stuck Shed (Dysecdysis):</strong> Keep a close eye on toes and tail tips. If skin stays stuck after a shed, it can cut off circulation and lead to necrosis (loss of limbs).</li><li><strong>Hydration:</strong> Crested geckos often won't drink from a bowl; they prefer to lick water droplets off leaves and glass, making daily misting mandatory.</li></ul>",
    },
    {
      id: "tail-drops",
      title: "TAIL AUTOTOMY: THE SELF-AMPUTATION DEFENSE",
      content:
        "Both species can drop their tails if they feel threatened, a process called <strong>caudal autotomy</strong>. <ul><li><strong>Leopard Geckos:</strong> Their tail will grow back, but it will never look the same—it will be bulbous and lack the original rings. Since they store fat in their tails, a drop is a major health setback that requires supplemental feeding.</li><li><strong>Crested Geckos:</strong> They are \"one and done\". If they drop their tail, it **never** grows back. They become \"frog butts\". This doesn't hurt their quality of life, but it does change their look forever.</li><li><strong>Prevention:</strong> Never grab a gecko by the tail, and avoid loud noises or sudden movements near their enclosure. If a drop occurs, keep the area clean and move the gecko to a \"quarantine\" paper towel substrate to prevent infection.</li></ul>",
    },
    {
      id: "mbd-warning",
      title: "PREVENTING METABOLIC BONE DISEASE (MBD)",
      content:
        "MBD is the leading cause of death for captive geckos, and it is entirely preventable with proper supplementation. <ul><li><strong>Calcium + D3:</strong> Leopard geckos need their insects dusted with calcium and D3 at almost every feeding. We also recommend a small dish of pure calcium (without D3) in the tank for them to lick at will.</li><li><strong>Crested Gecko Safety:</strong> Most high-quality MRPs already contain D3, but if you don't use UVB lighting, you must ensure your powder is not expired, as vitamins degrade over time.</li><li><strong>Signs of MBD:</strong> \"Rubber jaw\", curved limbs, shaking while walking, or an inability to stick to glass. If you see these signs, it is a veterinary emergency.</li></ul>",
    },
    {
      id: "substrate-impaction",
      title: "THE SUBSTRATE DEBATE: AVOIDING IMPACTION",
      content:
        "Using the wrong flooring can kill your gecko via \"impaction\" (intestinal blockage). <ul><li><strong>The Sand Trap:</strong> Never use calcium sand or play sand for Leopard Geckos. They \"taste\" their environment with their tongues and will ingest the sand, which clumps in their gut.</li><li><strong>Better Alternatives:</strong> For Leos, use a 70/30 mix of organic topsoil and play sand, or textured slate tile. For Cresties, use coco-coir or a bioactive soil mix that holds moisture.</li><li><strong>The Paper Towel Method:</strong> For new adoptions, we recommend 30 days on paper towels. This allows you to monitor their \"output\" (poop) and ensures they are healthy before you move them to a decorative substrate.</li></ul>",
    },
    {
      id: "bioactive-gecko",
      title: "GOING BIOACTIVE: A LIVING MINI-JUNGLE",
      content:
        "Geckos are the perfect candidates for bioactive setups. <ul><li><strong>The Ecosystem:</strong> By adding a drainage layer, live soil, and \"Clean Up Crew\" (Isopods and Springtails), you create a system that processes waste naturally.</li><li><strong>Plant Choices:</strong> Crested geckos love Pothos and Snake Plants, which are sturdy enough to hold their weight. Leopard geckos benefit from drought-tolerant succulents like Aloe or Haworthia.</li><li><strong>Lower Maintenance:</strong> While a bioactive tank has a higher upfront cost, it requires significantly less cleaning and provides the highest level of mental enrichment for your reptile.</li></ul>",
    },
    {
      id: "gecko-kits",
      title: "GECKO ADOPTION BUNDLES & SUPPLIES",
      content:
        "We want to make sure your gecko thrives from Day 1. Our ranch-exclusive kits include: <ul><li><strong>The \"Leo Desert Pro Kit\" ($225):</strong> 20-gallon long tank, Shadedweller UVB, Deep Heat Projector with thermostat, three hides (warm, cool, humid), and a 500-count starter colony of Dubia roaches.</li><li><strong>The \"Crestie Canopy Kit\" ($275):</strong> 18x18x24 glass terrarium, magnetic feeding ledge, 2-pack of Pangea fruit mix, a pressure mister, and a variety of \"jungle vines\" for climbing.</li><li><strong>Lifetime Support:</strong> Every gecko adopted from us comes with a \"Hatchling Certificate\" and direct access to our ranch experts for any husbandry questions you have as they grow.</li></ul>",
    }
  ],
  seoTitle: "Leopard & Crested Geckos for Sale",
  seoDescription:
    "Adopt beautifully patterned leopard and baby crested geckos from E.A Ranch. Socialized, healthy, and ready to thrive in your terrarium. Nationwide transport available.",
  seoKeywords: [
    "Leopard gecko adoption",
    "Crested gecko for sale",
    "Exotic reptiles",
    "Captive-bred geckos",
    "Pet gecko care",
    "Healthy reptiles"
  ],
},

/* ========= HEDGEHOGS HAMSTERS ========= */
{
  slug: "hedgehogs-hamsters",
  title: "Hedgehogs & Hamsters",
  description:
    "Find healthy African Pygmy Hedgehogs and ethical Syrian Hamsters for sale. Our micro-mammals are raised with superior genetics and high-quality nutrition to prevent common health issues. Nationwide delivery available for these hand-friendly, inquisitive small pets.",
  heroImage: hamstersHedgehogs,
  categoryImage: adoptHedgehogs,
  moreInfo:
    "All hedgehogs come with care sheets, diet plans, and socialization instructions.",
  pets: [
    {
      name: "African Pygmy Hedgehog",
      image: adoptBabyPygmyHedgehog,
      description:
        "Small, friendly, and curious, perfect for indoor enclosures.",
      features: ["Vet Checked", "Beginner Friendly"],
      price: 149.99,
    },
    {
      name: "Roborovski Hamster",
      image: adoptBabyDwarfHamster,
      description:
        "Tiny and fast, great for observation and small cages, very low-maintenance.",
      features: ["Vet Checked", "Easy Care"],
      price: 29.99,
    },
  ],

  /* ================== ACCORDION DATA ================== */
  accordion: [
    {
    id: "not-a-toy",
    title: "THE 'STARTER PET' MYTH: UNDERSTANDING MICRO-MAMMALS",
    content:
      "Hedgehogs and hamsters are frequently marketed as \"<strong>easy pets for children</strong>\", but at our ranch, we view them as complex exotic species that require specialized husbandry. <ul><li><strong>Hedgehog Reality:</strong> African Pygmy Hedgehogs are solitary, nocturnal insectivores. They don't cuddle like puppies; they require patient bonding to move past their defensive \"balling reflex\".</li><li><strong>Hamster Reality:</strong> Unlike the tiny cages sold in most shops, hamsters are high-energy foragers that can travel miles in a single night.</li><li><strong>Longevity:</strong> Hedgehogs typically live 4-6 years, while hamsters live 2-3 years. We prioritize adopters who understand that \"small\" doesn't mean \"short-term\" or \"disposable\".</li></ul> We evaluate our adopters based on their willingness to provide an environment that mimics the natural behaviors of these fascinating creatures.",
  },
  {
    id: "habitat-size",
    title: "SQUARE FOOTAGE MATTERS: ESCAPING THE CRITTER TRAIL",
    content:
      "The most common mistake in small pet ownership is inadequate housing. \"Colorful plastic cages\" are almost always too small and poorly ventilated. <ul><li><strong>Hedgehog Enclosures:</strong> We require a minimum of 4 square feet of flat floor space (e.g., a 2'x4' setup). Multi-level cages are dangerous as hedgehogs have poor depth perception and can fall.</li><li><strong>Hamster Enclosures:</strong> Forget the tubes. A Syrian hamster needs at least 800-1000 square inches of unbroken floor space to prevent \"cage rage\" and stress-induced pacing.</li><li><strong>Solid Floors Only:</strong> Wire flooring causes \"bumblefoot\" (ulcerative pododermatitis). We only approve habitats with solid, flat surfaces that protect delicate paw pads.</li><li><strong>Security:</strong> Both species are escape artists. Lids must be ventilated but securely latched to prevent a midnight disappearance.</li></ul>",
  },
  {
    id: "thermal-stability",
    title: "THE HIBERNATION DANGER: TEMPERATURE CONTROL",
    content:
      "Temperature is life or death for a hedgehog. Domestic hedgehogs <strong>cannot</strong> hibernate; if they get too cold, their bodies attempt to shut down, which is often fatal. <ul><li><strong>The 75-80°F Rule:</strong> Hedgehogs must be kept in a room that stays consistently between 75°F and 80°F. If your home drops below this, a Ceramic Heat Emitter (CHE) with a thermostat is mandatory.</li><li><strong>Hibernation Signs:</strong> A cold belly, lethargy, and a \"wobbly\" walk are emergencies. We teach all our adopters how to safely perform an emergency warm-up.</li><li><strong>Hamster Sensitivity:</strong> While less prone to hibernation than hedgehogs, hamsters can enter a state of torpor if temperatures drop below 65°F. Proper bedding depth and room stability are key to their metabolic health.</li></ul>",
  },
  {
    id: "diet-and-insectivores",
    title: "NUTRITION: BEYOND THE PELLET BAG",
    content:
      "A healthy micro-mammal is built in the kitchen, not just the pet store aisle. <ul><li><strong>The Hedgehog Diet:</strong> They are insectivores. While a high-quality, low-fat cat kibble can be a base, they <em>require</em> live or canned insects (mealworms, dubia roaches, crickets) for essential chitin and mental stimulation.</li><li><strong>The Hamster Diet:</strong> They are omnivores. We recommend a high-variety seed mix (not just pellets) supplemented with fresh proteins like hard-boiled eggs or dried mealworms, and small amounts of leafy greens.</li><li><strong>Obesity Management:</strong> Both species are prone to weight gain. We provide a \"Safe Foods\" list to ensure your pet stays lean and active, preventing fatty liver disease.</li><li><strong>Water Delivery:</strong> We advocate for water bowls over drip bottles, as bottles can damage teeth and force an unnatural neck position.</li></ul>",
  },
  {
    id: "wheel-safety",
    title: "EXERCISE & THE DANGERS OF WIRE WHEELS",
    content:
      "Exercise is the primary enrichment for these species, but the wrong equipment is a death trap. <ul><li><strong>No Wire/Mesh Wheels:</strong> These can catch tiny toes and snap legs. We only allow solid-surface wheels.</li><li><strong>Hedgehog Wheel Requirements:</strong> They need a large (12-inch) diameter wheel to prevent spinal curvature. Because they \"poop-and-run\", the wheel must be easy to sanitize daily.</li><li><strong>Hamster Wheel Requirements:</strong> Syrians need a 11-12 inch wheel so their backs remain perfectly flat while running. If the back curves, it causes permanent spinal damage.</li><li><strong>The \"Flying Saucer\" Myth:</strong> While cute, these often cause unnatural running gaits and are only recommended as secondary enrichment, not a primary wheel.</li></ul>",
  },
  {
    id: "bonding-techniques",
    title: "QUILLS & TEETH: BONDING WITH YOUR NEW FRIEND",
    content:
      "Bonding with a hedgehog or hamster requires a \"low and slow\" approach. <ul><li><strong>Scent Recognition:</strong> We recommend placing a worn t-shirt near their sleeping area so they associate your scent with safety.</li><li><strong>The \"Snuggle Sack\":</strong> For hedgehogs, use a fleece bonding bag. This allows them to feel covered while they get used to the sound of your voice and your movement.</li><li><strong>Hamster Taming:</strong> Use the \"bathtub method\" — sit in a dry tub with your hamster and let them climb over you. This creates a safe, enclosed space for interaction.</li><li><strong>Respecting the Nap:</strong> Both are nocturnal/crepuscular. Waking them up mid-day for playtime is like someone pulling you out of bed at 3 AM; it leads to grumpy, defensive pets.</li></ul>",
  },
  {
    id: "bedding-and-substrate",
    title: "SAFE BEDDING: AVOIDING TOXIC OILS",
    content:
      "Many commercial beddings are actually toxic to small mammals' respiratory systems. <ul><li><strong>Avoid Cedar & Pine:</strong> These contain phenols (aromatic oils) that cause respiratory distress and liver damage.</li><li><strong>Paper-Based Bedding:</strong> High-quality, unscented paper bedding is great for hamsters, as it holds burrows well.</li><li><strong>Fleece Liners:</strong> Many hedgehog owners prefer anti-pill fleece liners. They are eco-friendly, washable, and eliminate the risk of dust allergies.</li><li><strong>Dig Boxes:</strong> Both species benefit from a \"dig box\" filled with safe materials like sterilized coco-husk or pom-poms to encourage natural foraging instincts.</li></ul>",
  },
  {
    id: "health-concerns",
    title: "CRITICAL HEALTH RED FLAGS",
    content:
      "Because they are small, their health can decline in hours, not days. <ul><li><strong>Wobbly Hedgehog Syndrome (WHS):</strong> A progressive neurological disease. We screen our breeding lines, but owners must know the early signs of ataxia.</li><li><strong>Wet Tail in Hamsters:</strong> A severe, stress-induced bacterial diarrhea that is nearly always fatal without immediate vet intervention.</li><li><strong>Tumors & Cysts:</strong> Both species are prone to growths. Monthly \"lump checks\" during handling are vital.</li><li><strong>Quilling:</strong> Young hedgehogs go through a \"quilling phase\" (like teething) where they lose baby quills and grow adult ones. They are extra grumpy during this time, and we provide soothing oat-bath guides to help.</li></ul>",
  },
  {
    id: "sand-baths",
    title: "THE NECESSITY OF THE SAND BATH",
    content:
      "Hamsters—especially Dwarfs and Roborovskis—and some hedgehogs require sand for hygiene. <ul><li><strong>Oil Control:</strong> Hamsters use sand to strip excess oils from their fur. Without it, they become greasy and prone to skin infections.</li><li><strong>What to Use:</strong> Use calcium-free reptile sand or heat-treated play sand. <strong>NEVER</strong> use \"chinchilla dust\", as the fine particles cause deadly respiratory infections.</li><li><strong>Litter Training:</strong> Many hedgehogs will instinctively use a sand box as a litter tray, making cage cleaning significantly easier for you.</li></ul>",
  },
  {
    id: "small-pet-kits",
    title: "HEDGEHOG & HAMSTER ADOPTION KITS",
    content:
      "We want to ensure you leave the ranch with the right gear, not just the right pet. <ul><li><strong>Hedgehog Deluxe Kit ($300):</strong> Includes a 12-inch Carolina Storm Wheel, a digital thermostat, a CHE heat setup, a bonding pouch, and a 1-month supply of our custom insectivore kibble mix.</li><li><strong>The \"Burrower Hamster Kit\" ($200):</strong> Includes a large format habitat, 11-inch solid wheel, 10 pounds of safe paper substrate, a sand bath container, and a foraging seed mix.</li><li><strong>Health Guarantee:</strong> All our ranch-raised small pets come with a 14-day health guarantee and lifetime support for husbandry questions.</li></ul>",
  }
],

  seoTitle: "Baby Hedgehogs & Hamsters for Sale",
    seoDescription:
      "Tiny, charming hedgehogs and playful hamsters ready for loving homes. Socialized, vet-checked, and hand-raised for happy, healthy pets. Nationwide shipping available.",
    seoKeywords: [
      "Hedgehogs for sale",
      "Hamsters for adoption",
      "Exotic small pets",
      "Hand-raised hedgehogs",
      "Healthy small mammals",
      "Socialized pet hamsters"
    ],
},

/* ========= KANGAROOS WALLABIES ========= */
{
  slug: "kangaroos-wallabies",
  title: "Kangaroos & Wallabies",
  description:
    "Premium hand-reared Red Kangaroo and Bennett’s Wallaby joeys available for adoption. We offer expert guidance on macropod husbandry and secure, climate-controlled transport across the US. Own a gentle grazer from a ranch dedicated to ethical breeding and socialized \"mob dynamics\".",
  heroImage: bennetsWallaby,
  categoryImage: adoptWallabies,
  moreInfo:
    "Enclosure, diet, and enrichment guidance included for all wallabies.",
  pets: [
    {
      name: "Red-Necked Wallaby Baby",
      image: adoptRedNeckWallaby,
      description: "Friendly, social wallaby, perfect for experienced keepers.",
      features: ["Vet Checked", "Socialized"],
      price: 1999.99,
    },
    {
      name: "Swamp Baby Wallaby",
      image: adoptBabyWallaby,
      description:
        "Larger wallaby species requiring spacious outdoor habitat, intelligent and active.",
      features: ["Vet Checked", "Rare Breed"],
      price: 2499.99,
    },
  ],

  /* ========= TWO COLUMN TEXT ========= */
  twoColumnText: {
    leftTitle: "Baby Pouch Kangaroos & Wallabies",
    leftContent:
      "Our Red and Grey Kangaroos are the iconic giants of the Australian outback, known for their incredible power and social intelligence. They significant require open space and high-quality fencing to satisfy their natural grazing instincts. As joeys, they are incredibly affectionate, forming deep, lifelong bonds with their human keepers during the critical pouch-rearing phase. \n\nIn contrast, Wallabies—such as the Bennett’s or Dama species—offer a more manageable size for those with slightly less acreage. These \"miniature\" cousins are prized for their hardy nature and docile temperaments. While smaller, they are equally athletic and thrive in environments with plenty of natural \"browse and secure\", climate-controlled shelters to protect them from the elements.",
    rightTitle: "Social Mob Dynamics & Expert Delivery",
    rightContent:
      "Living with a macropod is an immersive experience that centers around the \"mob mentality\". These animals are intensely social and should never be housed alone; we prioritize adoptions of pairs to ensure their mental well-being. Their care involves a diet rich in specialized fiber and Vitamin E, along with plenty of vertical space to hop and play during their active dawn and dusk hours. \n\nBringing a joey home is simple with our <strong>nationwide, climate-controlled delivery service</strong>. We handle all transport logistics to ensure your new companion arrives safely and stress-free. Every delivery includes a health certificate, a transition supply of specialized milk or pellets, and a dedicated \"pouch kit\" to help you continue the bonding process the moment they arrive at your door.",
  },

  /* ========= TEXT + IMAGE ========= */
  textImageSection: {
    title: "The Magnificent Macropods: From Our Pouch to Your Pasture",
    content:
      "<p>At E.A. Ranch, our joeys are hand-reared with expert care, ensuring they are perfectly socialized and comfortable with human touch. We focus on early pouch-training, which makes our babies exceptionally docile and easy to handle during the transition to their new homes. Whether you are looking for the stately presence of a Kangaroo or the playful charm of a Wallaby, our animals are bred for health, temperament, and a long life of companionship.</p> <p>We offer professional delivery to all legal states, utilizing USDA-approved transport methods to maintain a calm environment for the animal. We also provide assistance with permit verification and a comprehensive care manual to ensure you have everything you need for success. From our ranch to your pasture, we are dedicated to providing the highest quality exotic marsupials and ongoing support for our community of owners.</p>",
  },
  
  /* ========= ACCORDION DATA ========= */
  accordion: [
  {
    id: "legal-requirements",
    title: "IS IT LEGAL TO OWN A KANGAROO OR WALLABY?",
    content:
      "Before you fall in love with a joey, you must navigate the complex web of exotic animal legislation. Legality varies wildly by state, county, and even city. <ul><li><strong>USDA Licensing:</strong> If you plan to exhibit your animal or use it for commercial purposes, a USDA Class C license is mandatory.</li><li><strong>Prohibited States:</strong> Generally, macropods are illegal in states like California, Georgia, and many parts of the Northeast.</li><li><strong>Permit Processes:</strong> States like Florida or Texas often require specialized permits that involve facility inspections and proof of experience.</li><li><strong>Acreage Requirements:</strong> Many local municipalities have \"minimum land\" requirements (often 1-2 acres) to house large exotic mammals.</li></ul> We require all prospective adopters to provide written confirmation from their local zoning board before we proceed with an application. Don't skip this step—nothing is more heartbreaking than a seizure of an animal due to paperwork errors.",
    },
    {
      id: "space-and-fencing",
      title: "ENCLOSURE & FENCING: BEYOND THE BACKYARD",
      content:
        "A standard 4-foot chain-link fence will not hold a kangaroo. These animals are built for explosive movement and can clear obstacles with ease when startled. <strong>Your enclosure is your primary safety tool.</strong> <ul><li><strong>Fencing Height:</strong> For wallabies, a minimum of 5-6 feet is required. For large Red or Grey Kangaroos, you need 8-foot non-climb fencing.</li><li><strong>Ground Security:</strong> Fencing should be buried or have a \"skirt\" to prevent predators from digging in and macropods from trying to push under.</li><li><strong>Shelter:</strong> They require a climate-controlled barn or shed. While they are hardy, they are susceptible to frostbite on their tails and ears in temperatures below freezing.</li><li><strong>Substrate:</strong> Natural grass is best, but high-traffic areas should have gravel or sand to prevent the ground from becoming a mud pit, which contributes to foot rot.</li></ul> We offer consultation on \"Macropod-Safe\" layout designs to ensure your ranch setup prevents \"fence-pacing\" and stress-related injuries.",
    },
    {
      id: "social-structure",
      title: "THE POWER OF THE MOB: WHY THEY CAN'T BE ALONE",
      content:
        "Kangaroos and wallabies are intensely social \"mob\" animals. Raising a lone macropod is one of the most common mistakes new keepers make, and it almost always leads to behavioral issues. <ul><li><strong>Psychological Health:</strong> A single kangaroo often becomes overly dependent on humans, leading to \"separation anxiety\" or, conversely, aggression as they reach sexual maturity.</li><li><strong>Safety in Numbers:</strong> In the wild, they rely on each other to watch for predators. A lone animal is a stressed animal, constantly on high alert.</li><li><strong>Bonded Pairs:</strong> We strongly prioritize adopters who take two joeys (usually two females or a neutered male and a female).</li></ul> If you cannot commit to at least two animals, we may recommend a different exotic species that is better suited to a solitary lifestyle.",
    },
    {
      id: "dietary-needs",
      title: "MACROPOD NUTRITION & LUMPY JAW PREVENTION",
      content:
        "Feeding a kangaroo isn't as simple as throwing down some hay. Their digestive systems are highly specialized and sensitive to mineral imbalances. <ul><li><strong>Specialized Pellets:</strong> They require a low-iron, high-fiber pellet specifically formulated for macropods (like Mazuri or LabDiet). Cattle or horse feed can be fatal due to incorrect mineral ratios.</li><li><strong>The Importance of \"Browse\":</strong> Access to fresh, non-toxic branches (Willow, Elm, or Mulberry) provides essential tannins and keeps their teeth worn down.</li><li><strong>Fresh Forage:</strong> High-quality Timothy or Orchard grass hay should be available 24/7. Avoid Alfalfa as it is too high in protein and calcium for daily maintenance.</li><li><strong>Vitamin E:</strong> Supplementation is often necessary to prevent \"White Muscle Disease\", a common and fatal condition in captive macropods.</li></ul> <strong>Warning:</strong> Never feed bread, sugary fruits, or soft vegetables, as these are the leading causes of \"Lumpy Jaw\" (necrobacillosis), a bacterial infection that can erode the jawbone.",
    },
    {
      id: "health-and-myopathy",
      title: "UNDERSTANDING CAPTURE MYOPATHY & STRESS",
      content:
        "One of the biggest risks in owning a macropod is \"Capture Myopathy\". This is a complex physiological reaction to extreme stress or over-exertion. <ul><li><strong>The Symptoms:</strong> Muscle stiffness, paralysis, and tea-colored urine (due to muscle breakdown products hitting the kidneys).</li><li><strong>The Cause:</strong> Being chased by a dog, excessive handling by strangers, or a botched transport.</li><li><strong>The Outcome:</strong> Once symptoms appear, the prognosis is often grim, even with veterinary intervention.</li></ul> Because of this, we train our adopters on \"Low-Stress Handling\". You cannot force a kangaroo to do something; you must work with their natural rhythm and provide a sanctuary environment where they feel safe from pursuit.",
    },
    {
      id: "temperament-realities",
      title: "THE HONEST TRUTH ABOUT TEMPERAMENT",
      content:
        "Joeys are incredibly affectionate—they will climb into your lap and \"pouch into your sweater\". However, you must be prepared for when they grow up. <ul><li><strong>Males vs. Females:</strong> Un-neutered males can become \"punchy\" and territorial as they hit puberty. They will view their human keepers as rivals to be wrestled.</li><li><strong>The Kick:</strong> Even a friendly wallaby has powerful legs and sharp claws. Accidental scratches are a part of the job.</li><li><strong>Nocturnal Rhythms:</strong> While they aren't strictly nocturnal, they are crepuscular (most active at dawn and dusk). This is when you'll see the most \"zooming\" and play-fighting.</li></ul> We spend extensive time during our video consultations discussing the transition from \"cute baby\" to \"strong adult\" to ensure you are physically and mentally prepared for the change.",
    },
    {
      id: "veterinary-access",
      title: "VETERINARY CARE: THE \"EXOTIC\" CHALLENGE",
      content:
        "Finding a vet for a dog is easy; finding one who can safely anesthetize a 60lb kangaroo is a different story. <ul><li><strong>Specialized Knowledge:</strong> You need a vet comfortable with macropod-specific issues like coccidiosis, lumpy jaw, and dental abscesses.</li><li><strong>Travel Logistics:</strong> Does your vet come to you, or do you have a trailer safe enough to transport a stressed kangaroo?</li><li><strong>Emergency Fund:</strong> A single emergency surgery or hospital stay for an exotic mammal can easily exceed $2,000.</li></ul> We maintain a database of macropod-friendly vets across the country and will help you find the closest one to your home during the vetting process.",
    },
    {
      id: "indoor-vs-outdoor",
      title: "CAN KANGAROOS LIVE INSIDE THE HOUSE?",
      content:
        "While many \"Instagram influencers\" show joeys living in living rooms, this is not a sustainable or healthy long-term solution. <ul><li><strong>The Joey Phase:</strong> Yes, young joeys need \"pouch time\" and can be kept indoors for socialization and bottle feeding.</li><li><strong>House-Training:</strong> Macropods <strong>cannot</strong> be potty trained. They will eliminate wherever they stand.</li><li><strong>Destructive Behavior:</strong> As they grow, their powerful kicks can damage drywall, and their curiosity leads to chewing on electrical cords.</li><li><strong>The Transition:</strong> By 6-8 months of age, they should be transitioned to a secure outdoor enclosure for their physical and mental well-being.</li></ul> We provide \"Indoor-to-Outdoor\" transition guides to help your joey adapt to the ranch life once they are weaned.",
    },
    {
      id: "ongoing-costs",
      title: "THE TOTAL COST OF MACROPOD OWNERSHIP",
      content:
        "The purchase price of the animal is only the beginning. Macropods are expensive to maintain correctly. <ul><li><strong>Feed:</strong> Expect to spend $60-$120 per month on specialized pellets and high-end hay.</li><li><strong>Land Maintenance:</strong> Fencing repairs, shelter heating, and pasture management can add $500-$1,000 annually.</li><li><strong>Supplements:</strong> Essential Vitamin E and Selenium supplements cost around $100 per year.</li><li><strong>Vet Care:</strong> Annual exams and fecal tests average $300-$500, not including emergency visits.</li></ul> We want our adopters to be financially stable so that the animal's care never suffers during economic shifts.",
    },
    {
      id: "joey-starter-kits",
      title: "OUR JOEY CARE KITS & SUPPLIES",
      content:
        "To ensure your new arrival has everything they need, we offer <strong>Joey Essential Bundles</strong> that we use ourselves on the ranch. <ul><li><strong>The \"Nursery Kit\" ($450):</strong> Includes a hanging \"mock pouch\" stand, three washable fleece liners, specialized macropod milk replacer (Wombaroo), calibrated feeding bottles, and a digital gram scale for weight monitoring.</li><li><strong>The \"Juvenile Upgrade\" ($600):</strong> Adds a 50lb bag of starter pellets, a Vitamin E supplement kit, a specialized grooming brush, and a \"Low-Stress\" transport crate.</li><li><strong>Custom Pouch Liners:</strong> We sell hand-sewn, heavy-duty fleece pouches designed to mimic the mother's natural environment, available in various sizes as your joey grows.</li></ul> All supplies are tested for safety and durability right here on our exotic animal ranch.",
    }
  ],
  seoTitle: "Pet Kangaroos & Baby Wallabies for Sale ",
    seoDescription:
      "Hand-raised kangaroos and wallabies available for adoption. Playful, healthy, and socialized for life as a companion animal. USDA-licensed breeder, nationwide delivery offered.",
    seoKeywords: [
      "Kangaroos for adoption",
      "Wallabies for sale",
      "Exotic pet mammals",
      "Hand-raised marsupials",
      "USDA exotic pets",
      "Socialized kangaroo pets"
    ],
},

/* ========= SNAKES PYTHONS ========= */
{
  slug: "snakes-pythons",
  title: "Snakes & Pythons",
  description:
    "Shop rare Ball Python morphs, Corn Snakes, and King Snakes from an elite exotic ranch. We offer nationwide climate-controlled delivery on all captive-bred constrictors. Each snake is hand-socialized, healthy, and comes with a documented feeding history for guaranteed success.",
  heroImage: cornSnakesBallPythons,
  categoryImage: adoptSnakes,
  moreInfo:
    "Includes care instructions, habitat setup, and feeding guidance for all snakes.",
  pets: [
    {
      name: "Pastel Ball Python for Sale",
      image: adoptPastelBallPython,
      description:
        "Gentle and manageable snake, excellent for first-time reptile keepers.",
      features: ["Vet Checked", "Beginner Friendly"],
      price: 199.99,
    },
    {
      name: "Baby Albino Striped Corn Snake",
      image: adoptAlbinoCornSnake,
      description:
        "Striking color morph, docile, and easy to handle, ideal for beginners.",
      features: ["Vet Checked", "Easy Care"],
      price: 149.99,
    },
  ],

  /* ========= TWO COLUMN TEXT ========= */
  twoColumnText: {
    leftTitle: "Constrictor Boa Pythons & Colubrids",
    leftContent:
      "Ball Pythons are the \"gentle giants\" of the reptile world, famous for their docile temperaments and incredible \"<strong><morph color variations/strong>\". They are the ultimate low-maintenance companion, preferring to spend their days in a secure hide and their evenings exploring their habitat with slow, deliberate movements. \n\nFor those seeking more activity, our African Green Snakes, Corn Snakes and King Snakes offer vibrant patterns and inquisitive personalities. These hardy colubrids are active explorers that utilize vertical space, making them a fantastic choice for enthusiasts who enjoy a dynamic and visible display in their terrarium.",
    rightTitle: "Precision Husbandry & Secure Delivery",
    rightContent:
      "Success with snakes relies on a perfect \"thermal gradient\" — a dedicated hot side for digestion and a cool side for rest. We provide every adopter with a species-specific care guide to help you master the humidity and lighting requirements necessary for perfect sheds and long-term health. \n\nWe take the stress out of logistics with our <strong>guaranteed live-arrival delivery</strong>. Using specialized, climate-controlled packaging and overnight couriers, we ensure your new reptile arrives in peak condition regardless of the season. Our team handles all legal verifications and tracks your exotic pet shipment from our ranch directly to your door.",
    },

  /* ========= TEXT + IMAGE ========= */
  textImageSection: {
    title: "Hand-Raised Reptiles for Adoption: From Hatchling to Home",
    content:
      "<p>At E.A. Ranch, all our snakes are captive-bred and established feeders, meaning they have already successfully completed multiple meals and sheds before being listed. We prioritize regular handling to ensure a balanced temperament, significantly reducing the stress-responses often found in wild-caught reptiles. From rare designer morphs to classic species, our animals are selected for robust health and genetic vitality.</p> <p>Our professional delivery service covers the continental United States, adhering strictly to all state and local regulations. Every adoption includes a health guarantee, a detailed feeding record, and the option to add a complete starter kit to your order. Whether you are a first-time keeper or a seasoned herpetologist, we provide the premium quality and expert support needed for a successful journey into the world of snakes.</p>",
  },

  /* ========= ACCORDION DATA ========= */
  accordion: [
    {
      id: "species-selection",
      title: "WHICH SNAKE IS RIGHT FOR YOUR LIFESTYLE?",
      content:
        "Choosing a snake is a 20-to-30-year commitment, so it's vital to look beyond aesthetics and consider temperament and adult size. For first-time keepers, we highly recommend <strong>Ball Pythons, Corn Snakes, or King Snakes</strong>. These species are famously hardy and more forgiving of \"beginner husbandry mistakes\". If you prefer a sedentary, \"chill pet\" that will sit with you while you watch a movie, a Ball Python is a perfect match. If you want an active, inquisitive explorer that utilizes every inch of its cage, a Corn Snake or an Indonesian Carpet Python might be more your speed. <strong>Important:</strong> Always research local ordinances, as some large constrictors or hot (venomous) species are restricted in specific municipalities. We specialize in matching our reptiles to your experience level to ensure a successful long-term partnership.",
    },
    {
      id: "captive-bred-vs-wild",
      title: "THE ETHICS OF ADOPTION: WHY CAPTIVE-BRED MATTERS",
      content:
        "At our ranch, we strictly advocate for <strong>Captive-Bred (CB)</strong> reptiles over wild-caught (WC) individuals. Wild-caught snakes often arrive with heavy parasite loads, extreme stress, and a refusal to eat frozen-thawed prey, which can lead to heartbreak for a new owner. Our snakes are hatched on-site or sourced from ethical breeders, meaning they are already established. This means they have had multiple successful sheds, are confirmed \"mousers\" (eating consistently), and are acclimated to human interaction. When you adopt a captive-bred python, you are investing in a healthier animal with a documented lineage and a much higher likelihood of a long, disease-free life. Plus, it protects wild populations from over-collection.",
    },
    {
      id: "thermal-regulation",
      title: "MASTERING THE GRADIENT: HEATING & LIGHTING",
      content:
        "Snakes are ectothermic, meaning they cannot produce their own body heat; they rely entirely on their environment to regulate their metabolism and digestion. A common mistake is heating the entire enclosure to one temperature. Instead, you must create a <strong>thermal gradient</strong>. This requires a \"hot side\" (88-92°F for most pythons) and a \"cool side\" (75-80°F). We recommend using overhead heat sources like Ceramic Heat Emitters (CHE) or Deep Heat Projectors (DHP) controlled by a high-quality <strong>dimming thermostat</strong>. Avoid \"heat rocks\" at all costs, as they are notorious for malfunctioning and causing severe belly burns. Proper thermoregulation is the \"secret sauce\" to preventing respiratory infections and ensuring your snake has the energy to thrive and grow.",
    },
    {
      id: "humidity-shedding",
      title: "HUMIDITY SECRETS FOR THE PERFECT SHED",
      content:
        "Nothing indicates a healthy snake like a complete, one-piece shed (the \"eye caps\" and tail tip included). For tropical species like Ball Pythons or Rainbow Boas, maintaining a humidity level of 60%–80% is non-negotiable. Low humidity causes \"stuck shed\" (dysecdysis), which can lead to infection or even the loss of a tail tip. To maintain these levels, we suggest using moisture-retentive substrates like <strong>coconut husk, cypress mulch, or sphagnum moss</strong>. Avoid aspen for high-humidity species as it molds quickly. Pro-Tip: Adding a \"humid hide\"—a plastic box filled with damp moss—provides a micro-climate where your snake can go whenever they feel their skin tightening. This mimics the natural burrows they would use in the wild to facilitate a clean shed cycle.",
    },
    {
      id: "enclosure-security",
      title: "THE \"TWO-HIDE\" RULE & HABITAT SECURITY",
      content:
        "A snake that is constantly visible is often a stressed snake. In the wild, snakes are prey for birds and larger mammals, so their instinct is to stay hidden. To make your python feel safe enough to eat and socialize, you must provide a <strong>minimum of two identical hides</strong>—one on the warm end and one on the cool end. If the hides are different, the snake may choose \"security over temperature\", staying in the hide they feel safest in even if they are too cold. Enclosures should also be \"escape-proof\". Snakes are incredible muscle-bound escape artists; they can push through loose lids or squeeze through gaps you’d never think possible. We recommend PVC enclosures or glass tanks with <strong>locking screen clips</strong> to ensure your scaly friend stays exactly where they belong.",
    },
    {
      id: "feeding-etiquette",
      title: "ETHICAL FEEDING: THE FROZEN-THAWED DEBATE",
      content:
        "We strongly encourage all our adopters to use <strong>Frozen-Thawed (F/T)</strong> rodents rather than live prey. While \"live feeding\" may seem more natural, it poses a significant risk to your pet; a defensive rat can cause permanent scarring, eye loss, or even fatal infections with a single bite. F/T feeding is safer, more humane, and allows you to stock up on food in bulk. If your snake is a \"picky eater\", we can teach you \"scent-triggering\" techniques or \"braining\" to entice a strike. <strong>Crucial Rule:</strong> Never handle your snake for at least 48 hours after they eat. Handling too soon can cause stress-induced regurgitation, which is physically taxing for the snake and can lead to long-term health complications.",
    },
    {
      id: "defensive-vs-aggressive",
      title: "IS MY SNAKE AGGRESSIVE? (UNDERSTANDING BEHAVIOR)",
      content:
        "New keepers often mistake \"defensive behavior\" for aggression. Snakes aren't mean; they are occasionally scared! A young snake \"S-curving\" or hissing is simply saying, \"I’m worried you’re a predator\". Most nipping behavior is outgrown as the snake learns your scent and realizes you aren't a threat. To build trust, we recommend <strong>short, frequent handling sessions</strong> (10-15 minutes) twice a week. Use a snake hook for \"tap-training\" to let the snake know it’s time for interaction, not time for food. Over time, pythons especially become incredibly docile, often content to simply drape over your shoulders and explore your movements with their tongue-flicking (which is how they smell and get to know you!).",
    },
    {
      id: "bioactive-future",
      title: "BIOACTIVE SETUPS: THE ULTIMATE LIVING ECOSYSTEM",
      content:
        "For the advanced hobbyist, we offer supplies for <strong>Bioactive Terrariums</strong>. This is the pinnacle of snake husbandry, involving a \"Clean-Up Crew\" (CUC) of isopods and springtails that live in the soil and break down waste naturally. When paired with live, snake-safe plants like Pothos, Snake Plants, or Bromeliads, you create a self-sustaining ecosystem that looks like a slice of the rainforest. Bioactive setups significantly reduce the need for substrate changes and provide the most naturalistic environment possible for your snake. Not only does this provide incredible mental enrichment for the animal, but it also creates a stunning, living piece of art for your home. We carry specific \"bio-shot bacteria\" and drainage layer materials to get your ecosystem started right.",
    },
    {
      id: "veterinary-care",
      title: "HEALTH RED FLAGS & EXOTIC VET REQUIREMENTS",
      content:
        "Snakes are masters of hiding illness until it is quite advanced. Because of this, it is mandatory for our adopters to locate a certified <strong>Exotic Animal Veterinarian</strong> before bringing their snake home. General dog/cat vets are rarely trained in reptilian physiology. <strong>Warning Signs:</strong> Watch for 'star-gazing' (looking straight up for long periods), bubbles from the nose, audible wheezing/clicking sounds, or \"scale rot\" (discoloration on the belly). These are signs of respiratory infections or poor husbandry and require immediate medical attention. We recommend an annual fecal exam to check for internal parasites, especially if you have other reptiles in the house. Early detection is the key to a long life, as snakes have a slow metabolism and can take a long time to recover once they become symptomatic.",
    },
    {
      id: "snake-supplies",
      title: "SNAKE STARTER KITS & ESSENTIAL EQUIPMENT",
      content:
        "To set you up for success, we offer <strong>Custom Snake Starter Kits</strong> tailored to the specific species you are adopting. <strong>The Essentials Kit ($250-$400):</strong> Includes a 20-40 gallon front-opening tank, heat mat or DHP, thermostat, two hides, water dish, and substrate. <strong>The Pro-Keeper Kit ($500-$900):</strong> Upgrades you to a 4-foot PVC enclosure (standard for adult Ball Pythons), high-end UVB lighting (which can improve immune function and coloration), premium wood enrichment (cork bark and ghost wood), and a specialized feeding tong set. We also stock frozen rodents in various sizes, from \"pinkies\" to \"jumbo rats\". Every kit comes with our 50-page digital care manual, covering everything from troubleshooting a hunger strike to identifying a healthy shed.",
    }
  ],
  seoTitle: "Exotic Snakes & Pythons for Sale",
  seoDescription:
    "Discover snakes and pythons for sale from USDA-licensed breeders. From vibrant corn snakes to majestic ball pythons, our exotic reptiles are socialized, captive-bred, and ready for responsible exotic pet owners.",
  seoKeywords: [
    "Snakes for sale",
    "Pythons for adoption",
    "Exotic reptiles",
    "Hand-raised snakes",
    "USDA licensed exotic pets",
    "Ball python breeder",
    "Corn snake for sale"
  ],
},
];
