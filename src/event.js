import coverImage from "./assets/images/dzerqer.JPG";
import heroImage from "./assets/images/IMG_8115.PNG";
import storyImageOne from "./assets/images/IMG_3318.PNG";
import storyImageTwo from "./assets/images/IMG_3215.JPG";
import musicFile from "./assets/music.mp3";

export const eventDetails = {
  couple: "Մայիս և Գոհար",
  location: "Աղաբաբյանս ռեստորան",
  address: "Nazarbekyan 25/5",
  date: new Date("2026-06-20T18:00:00+04:00"),
  coverDate: "20.06.2026",
  heroDateLabel: "2026 թ. հունիսի 20, շաբաթ · 18:00",
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
  calendarNote: "Շաբաթ, ժամը 18:00",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Nazarbekyan%2025%2F5",
  audioSrc: musicFile,
  images: {
    cover: coverImage,
    hero: {
      src: heroImage,
      alt: "Մայիս և Գոհար",
      position: "center top",
    },
    story: [
      {
        src: storyImageOne,
        alt: "Մայիս և Գոհար՝ միասին",
        position: "center center",
      },
      {
        src: storyImageTwo,
        alt: "Մայիս և Գոհար՝ հայացքներ",
        position: "center center",
      },
    ],
  },
};
