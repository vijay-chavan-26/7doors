// Centralised image map. All photos are sourced from Unsplash and are free to
// use under the Unsplash License (unsplash.com/license) — no attribution
// required. Replace these with 7 Doors' own photography when available.

const buildUrl = (id: string, params: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&${params}`;

export const images = {
  heroOffice: (w = 1600) =>
    buildUrl("photo-1745015446589-7ee6f702d8c1", `w=${w}&q=80`),
  officeInterior: (w = 1200) =>
    buildUrl("photo-1746021535489-00edc5efb203", `w=${w}&q=80`),
  warehouseInterior: (w = 1200) =>
    buildUrl("photo-1749244768351-2726dc23d26c", `w=${w}&q=80`),
  residentialExterior: (w = 1200) =>
    buildUrl("photo-1757970326337-95d7cca56fa1", `w=${w}&q=80`),
  hospitalityLobby: (w = 1200) =>
    buildUrl("photo-1759177715489-74112089de1a", `w=${w}&q=80`),
  retailMall: (w = 1200) =>
    buildUrl("photo-1761333482894-700fc6aebd47", `w=${w}&q=80`),
  landIndustrialAerial: (w = 1200) =>
    buildUrl("photo-1715026323215-a2dbb71272f6", `w=${w}&q=80`),
  handshake: (w = 1200) =>
    buildUrl("photo-1549923746-c502d488b3ea", `w=${w}&q=80`),
  skylineDusk: (w = 1800) =>
    buildUrl("photo-1696270804997-db649dc1d80b", `w=${w}&q=70`),
  teamCollaboration: (w = 1400) =>
    buildUrl("photo-1758873269276-9518d0cb4a0b", `w=${w}&q=80`),
};
