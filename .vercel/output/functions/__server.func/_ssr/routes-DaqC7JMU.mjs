import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as CalendarPlus, i as MapPin, n as Send, r as Music } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DaqC7JMU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function EnvelopeScreen({ opened, fading, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("envelope-screen", fading && "fade-out"),
		onClick: onOpen,
		role: "button",
		tabIndex: fading ? -1 : 0,
		"aria-label": "Tap the seal to open the invitation",
		onKeyDown: (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				onOpen();
			}
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("envelope-3d-wrapper", opened && "opened"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "envelope-base" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flap flap-left" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flap flap-right" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flap flap-bottom" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flap flap-top" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "wax-seal",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "wax-seal-letters",
						children: "M · R"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flying-butterfly",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						viewBox: "0 0 100 80",
						width: "60",
						height: "50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							className: "butterfly-wing",
							fill: "#FAF6EE",
							stroke: "#C5A059",
							strokeWidth: "1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M50 40 Q20 5 5 25 Q-5 45 25 55 Q45 60 50 40 Z",
									opacity: "0.95"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M50 40 Q80 5 95 25 Q105 45 75 55 Q55 60 50 40 Z",
									opacity: "0.95"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M50 40 Q30 50 25 68 Q38 75 48 55 Z",
									opacity: "0.85"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M50 40 Q70 50 75 68 Q62 75 52 55 Z",
									opacity: "0.85"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
									x1: "50",
									y1: "25",
									x2: "50",
									y2: "60",
									stroke: "#8C6D37",
									strokeWidth: "3",
									strokeLinecap: "round"
								})
							]
						})
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "open-tagline",
			children: "Tap The Seal To Open"
		})]
	});
}
var WEDDING = {
	groomsName: "Mohamed",
	bridesName: "Rahma",
	title: "Mohamed and Rahma",
	tagline: "The Wedding Celebration",
	quote: "Two souls, one heart. We invite you to witness the beginning of our forever.",
	blessing: "Your presence is the greatest blessing to our new journey. We are genuinely overjoyed to have you celebrate our magical night with us.",
	dateLabel: {
		weekday: "Friday",
		day: "23",
		month: "October",
		year: "2026",
		time: "7:00 PM"
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
	mapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AF%D8%A7%D8%B1+%D8%A7%D9%84%D8%AF%D9%81%D8%A7%D8%B9+%D8%A7%D9%84%D8%AC%D9%88%D9%8A+%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D9%84%D9%86%D8%B2%D9%87%D8%A9+%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D9%86%D8%B5%D8%B1",
	dressCode: "We invite you to complement our evening in shades of champagne, ivory, and warm gold.",
	palette: [
		{
			name: "Ivory Silk",
			color: "var(--color-ivory)"
		},
		{
			name: "Champagne",
			color: "var(--color-champagne)"
		},
		{
			name: "Antique Gold",
			color: "var(--color-gold-bright)"
		},
		{
			name: "Warm Bronze",
			color: "var(--color-gold-royal)"
		}
	],
	gallery: [
		{
			src: "/images/venue-exterior.jpg",
			alt: "Grand Tiba Rose at الدفاع الجوي"
		},
		{
			src: "/images/venue-ballroom.jpg",
			alt: "Al Camellia ballroom aisle"
		},
		{
			src: "/images/venue-tables.jpg",
			alt: "Al Camellia reception tables"
		},
		{
			src: "/images/venue-florals.jpg",
			alt: "Floral centrepiece at Al Camellia"
		}
	]
};
var WISHES_STORAGE_KEY = "mohamed-rahma-wedding-wishes";
function loadWishes() {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(WISHES_STORAGE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function saveWishes(wishes) {
	window.localStorage.setItem(WISHES_STORAGE_KEY, JSON.stringify(wishes));
}
function buildCalendarFile() {
	const { title, hall, venueArabic, venueEnglish, address, icsStartUtc, icsEndUtc } = WEDDING;
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
		"END:VCALENDAR"
	].join("\r\n");
}
function useCountdown(targetIso) {
	const [label, setLabel] = (0, import_react.useState)("Calculating days...");
	(0, import_react.useEffect)(() => {
		const target = new Date(targetIso).getTime();
		const tick = () => {
			const diff = target - Date.now();
			if (diff <= 0) {
				setLabel("Today is The Big Day");
				return;
			}
			const days = Math.floor(diff / 864e5);
			const hours = Math.floor(diff % 864e5 / 36e5);
			const minutes = Math.floor(diff % 36e5 / 6e4);
			const seconds = Math.floor(diff % 6e4 / 1e3);
			setLabel(`${days} days ${hours} hours ${minutes} min ${seconds} sec`);
		};
		tick();
		const id = window.setInterval(tick, 1e3);
		return () => window.clearInterval(id);
	}, [targetIso]);
	return label;
}
function OctoberCalendar() {
	const cells = (0, import_react.useMemo)(() => {
		const offset = (new Date(2026, 9, 1).getDay() + 6) % 7;
		const daysInMonth = 31;
		const items = [];
		for (let i = 0; i < offset; i++) items.push({ key: `e-${i}` });
		for (let day = 1; day <= daysInMonth; day++) items.push({
			key: `d-${day}`,
			day,
			wedding: day === 23
		});
		return items;
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "calendar-container",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "calendar-month-title",
			children: "October 2026"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "calendar-grid",
			children: [[
				"Mo",
				"Tu",
				"We",
				"Th",
				"Fr",
				"Sa",
				"Su"
			].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cal-header",
				children: d
			}, d)), cells.map((cell) => cell.day ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("cal-day", cell.wedding && "special-wedding"),
				"aria-label": cell.wedding ? "Wedding day, 23 October 2026" : void 0,
				children: cell.day
			}, cell.key) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}, cell.key))]
		})]
	});
}
function downloadCalendar() {
	const blob = new Blob([buildCalendarFile()], { type: "text/calendar;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = "Mohamed_and_Rahma_Wedding.ics";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}
function Invitation({ revealed }) {
	const countdown = useCountdown(WEDDING.startIso);
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	const [wishes, setWishes] = (0, import_react.useState)([]);
	const [name, setName] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [sending, setSending] = (0, import_react.useState)(false);
	const [sent, setSent] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setWishes(loadWishes());
	}, []);
	(0, import_react.useEffect)(() => {
		if (!revealed) return;
		const nodes = document.querySelectorAll(".reveal-on-scroll");
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) entry.target.classList.add("visible");
		}, { threshold: .12 });
		nodes.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, [revealed]);
	const submitWish = () => {
		const trimmedName = name.trim();
		const trimmedMessage = message.trim();
		if (!trimmedName || !trimmedMessage) {
			setError("Please enter your name and a sweet wish.");
			return;
		}
		setError("");
		setSending(true);
		const next = [{
			id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
			name: trimmedName,
			message: trimmedMessage,
			time: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
				month: "short",
				day: "numeric"
			})
		}, ...wishes];
		setWishes(next);
		saveWishes(next);
		setName("");
		setMessage("");
		setSent(true);
		window.setTimeout(() => {
			setSending(false);
			setSent(false);
		}, 1800);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "invite-shell",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: cn("hero-arch-card", revealed && "hero-revealed"),
				id: "heroCard",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-inner-content",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "tagline",
							children: WEDDING.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "couple-frame",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/couple.jpg",
								alt: "Mohamed and Rahma",
								width: 832,
								height: 1248
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							className: "royal-ornament",
							viewBox: "0 0 200 30",
							fill: "currentColor",
							"aria-hidden": "true",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M100 20 c-15 -18 -45 -18 -60 0 c15 -5 35 -5 60 0 Z" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M100 20 c15 -18 45 -18 60 0 c-15 -5 -35 -5 -60 0 Z" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "100",
									cy: "18",
									r: "3.5",
									fill: "currentColor"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "75",
									cy: "15",
									r: "2",
									fill: "currentColor"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "125",
									cy: "15",
									r: "2",
									fill: "currentColor"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "names-section",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bride-groom groom",
									children: WEDDING.groomsName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "and-sym",
									children: "&"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bride-groom bride",
									children: WEDDING.bridesName
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "invite-quote",
							children: [
								"“",
								WEDDING.quote,
								"”"
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "section-card reveal-on-scroll",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "reception-header",
						children: "Reception Info"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "reception-sub",
						children: "The reception will take place at:"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "date-split-box",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "date-label-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "sub-day",
									children: WEDDING.dateLabel.weekday
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "sub-time",
									children: WEDDING.dateLabel.time
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "big-day-number",
								children: WEDDING.dateLabel.day
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "date-label-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "sub-month",
									children: WEDDING.dateLabel.month
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "sub-year",
									children: WEDDING.dateLabel.year
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "time-slot-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "time-slot-title",
							children: "Welcome Reception"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "time-slot-val",
							children: WEDDING.dateLabel.time
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "countdown-title",
						children: "Countdown"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "countdown-display",
						children: countdown
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OctoberCalendar, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "section-card reveal-on-scroll",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "venue-title",
						children: WEDDING.hall
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "venue-arabic",
						lang: "ar",
						dir: "rtl",
						children: WEDDING.venueArabic
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "venue-english",
						children: WEDDING.venueEnglish
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "venue-address",
						children: WEDDING.address
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "btn-group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: WEDDING.mapsUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "btn btn-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 18 }), "View On Google Maps"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "btn btn-outline",
							onClick: downloadCalendar,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, { size: 18 }), "Add to Calendar"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "gallery-grid",
						children: WEDDING.gallery.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "gallery-item",
							onClick: () => setLightbox(item.src),
							"aria-label": `View ${item.alt}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.src,
								alt: item.alt
							})
						}, item.src))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "section-card reveal-on-scroll",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "section-title",
						children: "Dress Code"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "dresscode-desc",
						children: WEDDING.dressCode
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "palette-container",
						children: WEDDING.palette.map((swatch) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "color-swatch",
							style: { backgroundColor: swatch.color },
							title: swatch.name,
							"aria-label": swatch.name
						}, swatch.name))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rsvp-box reveal-on-scroll",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "rsvp-text",
					children: [
						"“",
						WEDDING.blessing,
						"”"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "rsvp-heart",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M12 21s-6.2-4.35-9.05-8.12C1.2 10.7 1.35 7.4 3.7 5.7c2.1-1.5 4.7-.7 6.05 1.15C11.1 5 13.7 4.2 15.8 5.7c2.35 1.7 2.5 5 0.75 7.18C18.2 16.65 12 21 12 21z",
						fill: "currentColor"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "section-card reveal-on-scroll",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "section-title",
						children: "Warm Wishes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "dresscode-desc",
						children: "Leave a sweet wish or blessing for Mohamed and Rahma"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wishes-input-group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "wishes-input",
								value: name,
								onChange: (e) => setName(e.target.value),
								placeholder: "Your Name",
								maxLength: 60,
								"aria-label": "Your name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								className: "wishes-textarea",
								value: message,
								onChange: (e) => setMessage(e.target.value),
								placeholder: "Write your warm wish here...",
								maxLength: 400,
								"aria-label": "Your wish"
							}),
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "form-error",
								children: error
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "btn btn-gold",
								onClick: submitWish,
								disabled: sending,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 16 }), sent ? "Sent with Love" : sending ? "Sending..." : "Send Wish"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "wishes-list",
						children: wishes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "wishes-empty",
							children: "Be the first to leave a wish."
						}) : wishes.map((wish) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "wish-item",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "wish-header",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "wish-author",
									children: wish.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "wish-time",
									children: wish.time
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "wish-body",
								children: wish.message
							})]
						}, wish.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "invite-footer",
				children: "WITH LOVE · MOHAMED AND RAHMA · 2026"
			}),
			lightbox ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lightbox",
				role: "dialog",
				"aria-modal": "true",
				"aria-label": "Venue photo",
				onClick: () => setLightbox(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: lightbox,
					alt: ""
				})
			}) : null
		]
	});
}
function Sparkles() {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const particles = [];
		const count = 24;
		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		resize();
		window.addEventListener("resize", resize);
		const reset = (p) => {
			p.x = Math.random() * canvas.width;
			p.y = canvas.height + Math.random() * 20;
			p.size = Math.random() * 2.5 + 1;
			p.speedY = Math.random() * .7 + .3;
			p.speedX = (Math.random() - .5) * .4;
			p.opacity = Math.random() * .6 + .2;
			p.color = Math.random() > .4 ? "#C69234" : "#F4E0C8";
		};
		for (let i = 0; i < count; i++) {
			const p = {};
			reset(p);
			p.y = Math.random() * canvas.height;
			particles.push(p);
		}
		let frame = 0;
		const draw = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			for (const p of particles) {
				p.y -= p.speedY;
				p.x += p.speedX;
				if (p.y < -10) reset(p);
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
				ctx.fillStyle = p.color;
				ctx.globalAlpha = p.opacity;
				ctx.fill();
			}
			ctx.globalAlpha = 1;
			frame = requestAnimationFrame(draw);
		};
		frame = requestAnimationFrame(draw);
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("resize", resize);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		id: "celebrationCanvas",
		ref: canvasRef,
		"aria-hidden": "true"
	});
}
var MUSIC_VOLUME = .78;
function Home() {
	const audioRef = (0, import_react.useRef)(null);
	const fadeRef = (0, import_react.useRef)(null);
	const [opened, setOpened] = (0, import_react.useState)(false);
	const [fading, setFading] = (0, import_react.useState)(false);
	const [hidden, setHidden] = (0, import_react.useState)(false);
	const [revealed, setRevealed] = (0, import_react.useState)(false);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const fadeTo = (0, import_react.useCallback)((target, ms = 700) => {
		const audio = audioRef.current;
		if (!audio) return;
		if (fadeRef.current) window.clearInterval(fadeRef.current);
		const start = audio.volume;
		const steps = 16;
		let i = 0;
		fadeRef.current = window.setInterval(() => {
			i += 1;
			const next = start + (target - start) * (i / steps);
			audio.volume = Math.min(1, Math.max(0, next));
			if (i >= steps) {
				audio.volume = target;
				if (fadeRef.current) window.clearInterval(fadeRef.current);
				fadeRef.current = null;
			}
		}, ms / steps);
	}, []);
	const startMusic = (0, import_react.useCallback)(async () => {
		const audio = audioRef.current;
		if (!audio) return false;
		try {
			audio.currentTime = audio.currentTime > 1 ? audio.currentTime : 0;
			audio.volume = .08;
			await audio.play();
			fadeTo(MUSIC_VOLUME, 900);
			setPlaying(true);
			return true;
		} catch {
			setPlaying(false);
			return false;
		}
	}, [fadeTo]);
	const openEnvelope = (0, import_react.useCallback)(() => {
		if (opened) return;
		setOpened(true);
		startMusic();
		window.setTimeout(() => {
			setFading(true);
			window.setTimeout(() => {
				setRevealed(true);
				setHidden(true);
			}, 300);
		}, 1200);
	}, [opened, startMusic]);
	const toggleMusic = (0, import_react.useCallback)(async (event) => {
		event.stopPropagation();
		const audio = audioRef.current;
		if (!audio) return;
		if (playing && !audio.paused) {
			audio.pause();
			setPlaying(false);
			return;
		}
		await startMusic();
	}, [playing, startMusic]);
	(0, import_react.useEffect)(() => {
		const audio = audioRef.current;
		if (!audio) return;
		const onEnded = () => {
			audio.currentTime = 0;
			audio.play();
		};
		audio.addEventListener("ended", onEnded);
		return () => audio.removeEventListener("ended", onEnded);
	}, []);
	(0, import_react.useEffect)(() => {
		return () => {
			if (fadeRef.current) window.clearInterval(fadeRef.current);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {}),
		hidden ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnvelopeScreen, {
			opened,
			fading,
			onOpen: openEnvelope
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: cn("music-btn", playing && "playing"),
			onClick: toggleMusic,
			title: playing ? "Pause music" : "Play music",
			"aria-label": playing ? "Pause music" : "Play music",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { size: 22 })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
			ref: audioRef,
			src: "/music/wedding.mp3",
			preload: "auto",
			loop: true,
			playsInline: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Invitation, { revealed })
	] });
}
//#endregion
export { Home as component };
