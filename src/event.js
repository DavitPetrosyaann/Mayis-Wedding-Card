import musicFile from "./assets/music.mp3";

const STORAGE_BASE = import.meta.env.VITE_FIREBASE_STORAGE_BASE_URL || "";

function resolveImage(fileName) {
  if (STORAGE_BASE) return `${STORAGE_BASE.replace(/\/$/, "")}/${fileName}`;
  return new URL(`./assets/images/${fileName}`, import.meta.url).toString();
}

export const eventDetails = {
  couple: "Մայիս և Գոհար",
  location: "Աղաբաբյանս ռեստորան",
  address: "Nazarbekyan 25/5",
  date: new Date("2026-06-20T17:30:00+04:00"),
  coverDate: "20.06.2026",
  heroDateLabel: "2026 թ. հունիսի 20, շաբաթ · 17:30",
  calendar: {
    month: "Հունիս",
    year: 2026,
    activeDay: 20,
    days: [
      ["", 1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12, 13],
      [14, 15, 16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25, 26, 27],
      [28, 29, 30, "", "", "", ""],
    ],
  },
  calendarNote: "Շաբաթ, ժամը 17:30",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Nazarbekyan%2025%2F5",
  audioSrc: musicFile,
  images: {
    cover: resolveImage("dzerqer.JPG"),
    hero: {
      src: resolveImage("IMG_8115.PNG"),
      alt: "Մայիս և Գոհար",
      position: "center top",
    },
    story: [
      {
        src: resolveImage("IMG_3318.PNG"),
        alt: "Մայիս և Գոհար՝ միասին",
        position: "center center",
      },
      {
        src: resolveImage("IMG_3215.JPG"),
        alt: "Մայիս և Գոհար՝ հայացքներ",
        position: "center center",
      },
    ],
  },
};
