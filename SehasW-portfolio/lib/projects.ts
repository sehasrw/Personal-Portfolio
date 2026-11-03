export type Project = {
  slug: string;
  title: string;
  category: string;
  cover: string;
  presentation: string;
  presentationWidth: number;
  presentationHeight: number;
};

/** Update the cover path as finished homepage artwork becomes available. */
export const projects: Project[] = [
  { slug: 'aevix', title: 'AEVIX', category: 'BRAND IDENTITY & LOGO DESIGN', cover: '/assets/aevix.png', presentation: '/cases/aevix.webp', presentationWidth: 1400, presentationHeight: 2578 },
  { slug: 'nineleven-labs', title: 'Nineleven Labs', category: 'BRAND IDENTITY & LOGO DESIGN', cover: '/assets/nineleven-labs.png', presentation: '/cases/nineleven-labs.webp', presentationWidth: 1400, presentationHeight: 2578 },
  { slug: 'naturifresh', title: 'Naturi Fresh', category: 'SOCIAL MEDIA CAMPAIGN', cover: '/assets/naturifresh.png', presentation: '/cases/naturifresh.webp', presentationWidth: 1400, presentationHeight: 2497 },
  { slug: 'ccre-lands', title: 'CCRE Lands', category: 'SOCIAL MEDIA CAMPAIGN', cover: '/assets/ccre-lands.png', presentation: '/cases/ccre-lands.webp', presentationWidth: 1800, presentationHeight: 3423 },
  { slug: 'pearl-isle-foods', title: 'Pearl Isle Foods', category: 'SOCIAL MEDIA CAMPAIGN', cover: '/assets/pearl-isle-foods.png', presentation: '/cases/pearl-isle-foods.webp', presentationWidth: 1400, presentationHeight: 1838 },
  { slug: 'hotel-ravo', title: 'Hotel RAVO UI/UX Redesign', category: 'UI/UX DESIGN', cover: '/assets/hotel-ravo.png', presentation: '/cases/hotel-ravo.webp', presentationWidth: 1400, presentationHeight: 6755 }
];

export const archive = [
  { number: '01', category: 'Packaging & Identity', title: 'Sandila Cinnamon', slug: 'sandila-cinnamon' },
  { number: '02', category: 'Identity & Logo Design', title: 'Nineleven Labs', slug: 'nineleven-labs' },
  { number: '03', category: 'Brand Identity', title: 'AEVIX', slug: 'aevix' },
  { number: '04', category: 'Social Media Campaign', title: 'NaturiFresh', slug: 'naturifresh' }
];
