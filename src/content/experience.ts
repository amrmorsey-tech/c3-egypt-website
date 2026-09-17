import panelShop from "@/assets/panel-shop.jpg";
import panelDine from "@/assets/panel-dine.jpg";
import panelEntertainment from "@/assets/panel-entertainment.jpg";
import panelExperiences from "@/assets/panel-experiences.jpg";
import entCinema from "@/assets/ent-cinema.jpg";
import entKids from "@/assets/ent-kids.jpg";
import entGames from "@/assets/ent-games.jpg";
import social1 from "@/assets/social-1.jpg";
import social2 from "@/assets/social-2.jpg";
import social3 from "@/assets/social-3.jpg";
import social4 from "@/assets/social-4.jpg";

export type Panel = {
  index: string;
  title: string;
  line: string;
  copy: string;
  to: string;
  image: string;
  imageAlt: string;
};

export const panels: Panel[] = [
  {
    index: "01",
    title: "Shop",
    line: "320 brands, one boulevard.",
    copy: "Fashion, beauty and design across four levels, from tailoring studios to the market hall.",
    to: "/stores",
    image: panelShop,
    imageAlt: "Two friends walking through a modern mall with shopping bags",
  },
  {
    index: "02",
    title: "Dine",
    line: "Come hungry.",
    copy: "Sixty kitchens and cafés — from a nine-seat sushi counter to a market hall of counters.",
    to: "/dining",
    image: panelDine,
    imageAlt: "Friends sharing plates on a warmly lit restaurant terrace",
  },
  {
    index: "03",
    title: "Entertainment",
    line: "Stay longer.",
    copy: "Eighteen cinema screens, bowling, free-roam VR and a family wing built for whole afternoons.",
    to: "/entertainment",
    image: panelEntertainment,
    imageAlt: "Cinema lobby at night with people queuing under a glowing screen",
  },
  {
    index: "04",
    title: "Experiences",
    line: "Something is always on.",
    copy: "Runway nights, live music, night markets and weekend workshops on the plaza.",
    to: "/events",
    image: panelExperiences,
    imageAlt: "Evening crowd enjoying live music on an outdoor plaza",
  },
];

export type Experience = {
  title: string;
  kicker: string;
  copy: string;
  detail: string;
  image: string;
  imageAlt: string;
  to: string;
};

export const experiences: Experience[] = [
  {
    kicker: "Cinema",
    title: "Eighteen screens",
    copy: "Recliners in every hall, Dolby Atmos throughout and two premium laser rooms for the big releases.",
    detail: "Level 3 · 10:00 — 02:00",
    image: entCinema,
    imageAlt: "Empty modern cinema auditorium with a glowing screen",
    to: "/stores/fc3-cinema",
  },
  {
    kicker: "Play",
    title: "Lanes & arcade",
    copy: "Sixteen bowling lanes, restored arcade cabinets and a bar that outlasts the last frame.",
    detail: "Level 3 · 12:00 — 02:00",
    image: entGames,
    imageAlt: "Friends laughing while bowling in a warmly lit alley",
    to: "/stores/pin-lane",
  },
  {
    kicker: "Family",
    title: "Little City",
    copy: "A soft-architecture play world for under-eights, with play leaders and parent seating throughout.",
    detail: "Level 2 · 10:00 — 21:00",
    image: entKids,
    imageAlt: "Children playing in a bright modern indoor play space",
    to: "/stores/little-city",
  },
];

export const socialWall = [
  { image: social1, alt: "Woman laughing with a coffee cup on a mall escalator", handle: "@nourhs" },
  { image: social2, alt: "Group of friends taking a selfie by a geometric wall", handle: "@thecityfive" },
  { image: social3, alt: "Hands holding paper shopping bags against a dark coat", handle: "@maison.day" },
  { image: social4, alt: "Father lifting a laughing child in a bright atrium", handle: "@abdo.k" },
];
