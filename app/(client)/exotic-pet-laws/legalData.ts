export interface FAQ {
  question: string;
  answer: string;
}

export interface Comparison {
  title: string;
  content: string;
}

export interface ExoticLaw {
  state: string;
  summary: string;
  legal: string[];
  restricted: string[];
  prohibited: string[];
  permitRequired: boolean;
  notes: string;
  faqs?: FAQ[];        
  comparisons?: Comparison[]; 
}

export const legalData: ExoticLaw[] = [
  {
    state: "Texas",
    summary:
      "Texas has one of the most permissive approaches to exotic pet ownership in the U.S., but don’t let that fool you — it’s not a free-for-all. The Lone Star State gives a lot of freedom, but many municipalities have their own rules. County and city ordinances often dictate what’s allowed under “Dangerous Wild Animals” and special exotic permits. Some counties require registration, liability insurance, and specific enclosure standards before you can keep certain species.",
    legal: [
      "Sugar Gliders",
      "Hedgehogs",
      "Fennec Foxes (with local compliance)",
      "Capybaras (allowed but must meet enclosure standards)",
      "Many non-venomous reptiles",
      "Exotic birds like macaws, cockatoos, and toucans"
    ],
    restricted: [
      "Monkeys and some other primates — registration and permits required in many counties",
      "Wolves and wolf hybrids — often restricted or controlled",
      "Large carnivores like lions and tigers — usually county-regulated",
      "Venomous reptiles — permit and safety compliance needed"
    ],
    prohibited: [
      "Native endangered species without federal authorization",
      "Certain venomous species considered a public safety risk"
    ],
    permitRequired: true,
    notes:
      "Texas doesn’t have a single statewide exotic pet law — rules can vary county by county. You MUST check city/county ordinances before making a purchase. Some animal owners find out the hard way that what’s legal in one county is illegal 30 miles south. Always verify your local animal control rules.",
    faqs: [
      {
        question: "Are exotic pets legal in Texas?",
        answer:
          "Short answer: Usually, yes — but it depends on your county. Texas law allows many exotic animals as pets, but individual counties can add more restrictions. Always check your local code before bringing a critter home."
      },
      {
        question: "Can I own a monkey in Texas?",
        answer:
          "Primates are in a grey zone. Some counties allow them with a permit and registration. Others prohibit them entirely. There’s no single rule statewide — you need to check at the county level."
      },
      {
        question: "Is it legal to own a raccoon in Texas?",
        answer:
          "Texas does not generally prohibit raccoon ownership statewide, but many local jurisdictions do. Some counties require permits, special enclosures, and warnings about rabies and wildlife concerns."
      },
      {
        question: "Do I need a permit for exotic animals in Texas?",
        answer:
          "For certain species — especially “dangerous wild animals” like big cats, venomous reptiles, or primates — yes. Requirements vary by county and can include registration, liability insurance, and specific caging."
      }
    ],
    comparisons: [
      {
        title: "Texas vs. Other States",
        content:
          "Compared to states like California or New York, Texas is more permissive on exotic pets. However, that doesn’t mean everything is allowed — far from it. What makes Texas tricky is the patchwork of local laws. This makes personal research essential."
      }
    ],
  },

  {
    state: "California",
    summary:
      "California’s exotic pet laws are among the strictest in the nation. CDFW (California Department of Fish and Wildlife) draws up a Restricted Species List that bans private ownership of most non-domesticated animals that may pose ecological or public safety risks. Very few exceptions exist, and permits are almost always granted only to licensed facilities, research organizations, or educational institutions.",
    legal: [
      "Non-venomous snakes not on restricted lists",
      "Many non-native birds (excluding invasive or restricted species)",
      "Certain invertebrates and domesticated livestock breeds"
    ],
    restricted: [
      "Certain amphibians and reptiles with invasive potential",
      "Native wildlife requiring rehabilitation permits",
      "Some hybrid species where genetics complicate identification"
    ],
    prohibited: [
      "Primates",
      "Ferrets",
      "Hedgehogs",
      "Sugar Gliders",
      "Skunks",
      "Large exotic mammals (big cats, bears, etc.)"
    ],
    permitRequired: true,
    notes:
      "California’s CDFW Restricted Species List is extensive, and violations can lead to fines, confiscation of animals, and criminal charges. Unlike other states, California doesn’t generally ‘allow then restrict’ — it starts from a conservative position and permits are the exception rather than the rule.",
    faqs: [
      {
        question: "Exotic pets legal in California?",
        answer:
          "California only allows a narrow set of exotic animals legally. Most popular exotics like ferrets and sugar gliders are actually illegal. Always check the CDFW restricted species list before buying anything."
      },
      {
        question: "What states allow exotic pets that are illegal in California?",
        answer:
          "Many states like Texas, Florida, and Nevada allow pets that California bans — like hedgehogs, ferrets, and some primates — though each state still has its own rules you must follow."
      },
      {
        question: "Is a pet raccoon legal in California?",
        answer:
          "No. Raccoons are on the prohibited list in California due to disease risk and invasive species concerns, even though they are native animals."
      },
      {
        question: "Can I have a pet snake in California?",
        answer:
          "Non-venomous snakes not on restricted lists are allowed. Avoid species listed as invasive or restricted. Always check the up-to-date CDFW publications."
      }
    ],
    comparisons: [
      {
        title: "California vs. Texas Exotic Rules",
        content:
          "Where Texas is permissive and decentralized, California is centralized and restrictive. Species legal in Texas may be illegal in California — even if the animal is considered harmless. This contrast makes tourism or moving with exotic pets tricky."
      }
    ],
  },

  {
    state: "Florida",
    summary:
      "Florida uses a systematic classification for wildlife and exotic pets. The Florida Fish and Wildlife Conservation Commission (FWC) categorizes species into Class I, II, and III designations. These classifications determine who can own what, what permits are needed, and what veterinary, enclosure, and insurance requirements must be met. While Florida allows a broad array of animals, many high-risk species require experience documentation and facility inspections.",
    legal: [
      "Sugar Gliders",
      "Hedgehogs",
      "Capybaras (with permit)",
      "Many non-venomous reptiles",
      "Class III exotics with documented compliance",
      "Exotic birds not listed as restricted"
    ],
    restricted: [
      "Class II wildlife (requires documented experience and enclosures)",
      "Certain uplisted invasive reptile species",
      "Large carnivores requiring enhanced permit"
    ],
    prohibited: [
      "Class I wildlife (e.g., big cats, bears)",
      "Recently added invasive species without grandfather clauses"
    ],
    permitRequired: true,
    notes:
      "Florida’s exotic pet regulations are layered — Class III may require less paperwork than Class II or I. Inspections, experience documentation, enclosure standards, and financial responsibility (liability insurance) are commonly enforced for high-risk species.",
    faqs: [
      {
        question: "Exotic animals legal in FL?",
        answer:
          "Florida lets you own many exotic animals, but which ones you can keep depends on the class designation. Sugar gliders and hedgehogs are allowed without too much red tape, but large carnivores and big cats require special licensing."
      },
      {
        question: "Is it legal to own a pet raccoon in Florida?",
        answer:
          "Florida treats raccoons as regulated wildlife. You may need a Class III permit, proof of experience, and an approved enclosure before ownership is allowed."
      },
      {
        question: "Can I keep a python in Florida?",
        answer:
          "Non-venomous pythons may be permitted with the right documentation and enclosures, but due to invasive species concerns (burmese pythons in the Everglades), rules change often — you must verify current FWC policies."
      },
      {
        question: "Do I need insurance for exotic pets in Florida?",
        answer:
          "Yes — for high-risk species, FWC typically requires liability insurance as part of the permit process to protect public safety."
      }
    ],
    comparisons: [
      {
        title: "Florida vs. Other States’ Exotic Regulations",
        content:
          "Florida has more structure than Texas but is less restrictive than California. Because of its invasive species problems (especially with reptiles), FWC keeps a close eye on what’s allowed. If you’re moving here with exotics, plan for inspections and experience documentation."
      }
    ],
  }
];
