export const Education = [
  { value: "", label: "All Education Levels" },
  { value: "slc", label: "SLC / SEE" },
  { value: "plus2", label: "10+2 / Higher Secondary" },
  { value: "diploma", label: "Diploma" },
  { value: "bachelor", label: "Bachelor Degree" },
  { value: "master", label: "Master Degree" },
  { value: "phd", label: "PhD" },
];

export const Quota = [
  { value: "", label: "All Quota" },
  { value: "open", label: "Open (खुला)" },
  { value: "women", label: "Women (महिला)" },
  { value: "janajati", label: "Janajati (जनजाति)" },
  { value: "madhesi", label: "Madhesi (मधेसी)" },
  { value: "dalit", label: "Dalit (दलित)" },
  { value: "disabled", label: "Disabled (अपाङ्ग)" },
  { value: "backward", label: "Backward Region (पिछडिएको क्षेत्र)" },
];

export const ServiceType = [
  { value: "", label: "All Services" },
  { value: "Civil Service", label: "Civil Service (निजामती सेवा)" },
  { value: "Health Service", label: "Health Service (स्वास्थ्य सेवा)" },
  { value: "Engineering", label: "Engineering (इञ्जिनियरिङ)" },
  { value: "Education", label: "Education (शिक्षा)" },
  { value: "Foreign Service", label: "Foreign Service (परराष्ट्र)" },
  { value: "Forest Service", label: "Forest Service (वन)" },
  { value: "Agriculture Service", label: "Agriculture (कृषि)" },
  { value: "Audit Service", label: "Audit (लेखापरीक्षण)" },
  { value: "Judicial Service", label: "Judicial (न्याय)" },
];

export const PostLevel = [
  { value: "", label: "All Levels" },
  { value: "Joint Secretary", label: "Joint Secretary (सहसचिव)" },
  { value: "Deputy Secretary", label: "Deputy Secretary (उपसचिव)" },
  { value: "Section Officer", label: "Section Officer (शाखा अधिकृत)" },
  { value: "Officer Level", label: "Officer (अधिकृत)" },
  { value: "Nayab Subba", label: "Nayab Subba (नायब सुब्बा)" },
  { value: "Kharidar", label: "Kharidar (खरिदार)" },
  { value: "First Class", label: "Non-Gazetted First Class (प्रथम श्रेणी)" },
  {
    value: "Second Class",
    label: "Non-Gazetted Second Class (द्वितीय श्रेणी)",
  },
  { value: "Third Class", label: "Non-Gazetted Third Class (तृतीय श्रेणी)" },
];

export const AgeGroup = [
  { value: "", label: "All Ages" },
  { value: "18-25", label: "18 - 25 years" },
  { value: "25-35", label: "25 - 35 years" },
  { value: "35-45", label: "35 - 45 years" },
  { value: "45+", label: "45+ years" },
];

export const AgeLimitByLevel = {
  Kharidar: { min: 18, max: 35 },
  "Nayab Subba": { min: 18, max: 35 },
  "First Class": { min: 18, max: 35 },
  "Second Class": { min: 18, max: 35 },
  "Third Class": { min: 18, max: 35 },
  "Section Officer": { min: 21, max: 35 },
  "Officer Level": { min: 21, max: 35 },
  "Deputy Secretary": { min: 21, max: 45 },
  "Joint Secretary": { min: 21, max: 45 },
};
