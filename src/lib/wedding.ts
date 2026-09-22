export const WEDDING = {
  groomsName: "Mohamed",
  bridesName: "Rahma",
  title: "Mohamed and Rahma",
  tagline: "The Wedding Celebration",
  quote:
    "Two souls, one heart. We invite you to witness the beginning of our forever.",
  blessing:
    "Your presence is the greatest blessing to our new journey. We are genuinely overjoyed to have you celebrate our magical night with us.",
  dateLabel: {
    weekday: "Friday",
    day: "23",
    month: "October",
    year: "2026",
    time: "7:00 PM",
  },
  /** Friday 23 October 2026, 7:00 PM Cairo (UTC+3). */
  startIso: "2026-10-23T19:00:00+03:00",
  endIso: "2026-10-24T01:00:00+03:00",
  icsStartUtc: "20261023T160000Z",
  icsEndUtc: "20261023T220000Z",
  hall: "Al Camellia",
  venueArabic: "الدفاع الجوي",
  venueEnglish: "Grand Tiba Rose",
  address: "El-Nozha Street, Nasr City, Cairo",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=%D8%AF%D8%A7%D8%B1+%D8%A7%D9%84%D8%AF%D9%81%D8%A7%D8%B9+%D8%A7%D9%84%D8%AC%D9%88%D9%8A+%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D9%84%D9%86%D8%B2%D9%87%D8%A9+%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D9%86%D8%B5%D8%B1",
  dressCode:
    "We invite you to complement our evening in shades of champagne, ivory, and warm gold.",
  palette: [
    { name: "Ivory Silk", color: "var(--color-ivory)" },
    { name: "Champagne", color: "var(--color-champagne)" },
    { name: "Antique Gold", color: "var(--color-gold-bright)" },
    { name: "Warm Bronze", color: "var(--color-gold-royal)" },
  ],
  gallery: [
    {
      src: "/images/venue-exterior.jpg",
      alt: "Grand Tiba Rose at الدفاع الجوي",
    },
    {
      src: "/images/venue-ballroom.jpg",
      alt: "Al Camellia ballroom aisle",
    },
    {
      src: "/images/venue-tables.jpg",
      alt: "Al Camellia reception tables",
    },
    {
      src: "/images/venue-florals.jpg",
      alt: "Floral centrepiece at Al Camellia",
    },
  ],
} as const;

export const WISHES_STORAGE_KEY = "mohamed-rahma-wedding-wishes";

export type GuestWish = {
  id: string;
  name: string;
  message: string;
  time: string;
};

export function loadWishes(): GuestWish[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(WISHES_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as GuestWish[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveWishes(wishes: GuestWish[]) {
  window.localStorage.setItem(WISHES_STORAGE_KEY, JSON.stringify(wishes));
}

export function buildCalendarFile() {
  const { title, hall, venueArabic, venueEnglish, address, icsStartUtc, icsEndUtc } =
    WEDDING;
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Mohamed and Rahma Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:wedding-mohamed-rahma-20261023@celebration",
    `DTSTAMP:${icsStartUtc}`,
    `DTSTART:${icsStartUtc}`,
    `DTEND:${icsEndUtc}`,
    `SUMMARY:${title} Wedding Celebration`,
    `DESCRIPTION:Join us to celebrate the wedding of Mohamed and Rahma at ${hall}, ${venueEnglish}, ${venueArabic}.`,
    `LOCATION:${hall}, ${venueEnglish}, ${venueArabic}, ${address}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
