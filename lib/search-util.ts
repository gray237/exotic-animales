import { legalData } from "@/app/(client)/exotic-pet-laws/legalData";
import { bioactiveData } from "@/app/(client)/bioactive-guides/bioactiveData";
import { vetData } from "@/app/(client)/vet-guide/vetData";
import { adoptionData, Pet } from "@/app/(client)/adopt/adoptionData";

export const performGlobalSearch = (query: string) => {
  const q = query.toLowerCase().trim();
  if (!q) return { laws: [], guides: [], vets: [], pets: [] };

  // Helper to safely check if a string contains the query
  const matches = (str: string | undefined | null) => 
    str ? str.toLowerCase().includes(q) : false;

  // Helper to check if any string in an array matches
  const matchesAny = (arr: string[] | undefined | null) => 
    arr ? arr.some(item => item.toLowerCase().includes(q)) : false;

  return {
    // 1. Search Legality Data
    laws: legalData.filter(item => 
      matches(item.state) ||
      matches(item.summary) ||
      matchesAny(item.legal) ||
      matchesAny(item.restricted) ||
      matchesAny(item.prohibited) ||
      matches(item.notes) ||
      item.faqs?.some(f => matches(f.question) || matches(f.answer))
    ),

    // 2. Search Bioactive Guides
    guides: bioactiveData.filter(guide => 
      matches(guide.title) ||
      matches(guide.description) ||
      matches(guide.category) ||
      matches(guide.introBlurb) ||
      guide.textSections?.some(s => matches(s.title) || matches(s.content)) ||
      guide.listSections?.some(l => matches(l.title) || matchesAny(l.items))
    ),

    // 3. Search Vets
    vets: vetData.filter(vet => 
      matches(vet.name) ||
      matches(vet.city) ||
      matches(vet.state) ||
      matches(vet.description) ||
      matchesAny(vet.specialties)
    ),

    // 4. Search Adoption Data (Assuming Pet structure has name/breed/description)
    pets: (adoptionData as any[]).filter(pet => 
      matches(pet.name) ||
      matches(pet.description) ||
      matches(pet.city) ||
      matches(pet.state) ||
      (pet.specialties && matchesAny(pet.specialties)) // Adoption data often shares Vet structure in your files
    )
  };
};