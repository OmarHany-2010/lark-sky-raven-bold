import { useEffect, useMemo, useState } from "react";
import { CalendarPlus, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  WEDDING,
  buildCalendarFile,
  loadWishes,
  saveWishes,
  type GuestWish,
} from "@/lib/wedding";

function useCountdown(targetIso: string) {
  const [label, setLabel] = useState("Calculating days...");

  useEffect(() => {
    const target = new Date(targetIso).getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) {
        setLabel("Today is The Big Day");
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setLabel(`${days} days ${hours} hours ${minutes} min ${seconds} sec`);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [targetIso]);

  return label;
}

function OctoberCalendar() {
  const cells = useMemo(() => {
    const first = new Date(2026, 9, 1);
    const offset = (first.getDay() + 6) % 7;
    const daysInMonth = 31;
    const items: Array<{ key: string; day?: number; wedding?: boolean }> = [];
    for (let i = 0; i < offset; i++) items.push({ key: `e-${i}` });
    for (let day = 1; day <= daysInMonth; day++) {
      items.push({ key: `d-${day}`, day, wedding: day === 23 });
    }
    return items;
  }, []);

  return (
    <div className="calendar-container">
      <div className="calendar-month-title">October 2026</div>
      <div className="calendar-grid">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
          <div className="cal-header" key={d}>
            {d}
          </div>
        ))}
        {cells.map((cell) =>
          cell.day ? (
            <div
              key={cell.key}
              className={cn("cal-day", cell.wedding && "special-wedding")}
              aria-label={cell.wedding ? "Wedding day, 23 October 2026" : undefined}
            >
              {cell.day}
            </div>
          ) : (
            <div key={cell.key} />
          ),
        )}
      </div>
    </div>
  );
}

function downloadCalendar() {
  const blob = new Blob([buildCalendarFile()], {
    type: "text/calendar;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Mohamed_and_Rahma_Wedding.ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function Invitation({ revealed }: { revealed: boolean }) {
  const countdown = useCountdown(WEDDING.startIso);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [wishes, setWishes] = useState<GuestWish[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setWishes(loadWishes());
  }, []);

  useEffect(() => {
    if (!revealed) return;
    const nodes = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }
      },
      { threshold: 0.12 },
    );
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
    const wish: GuestWish = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: trimmedName,
      message: trimmedMessage,
      time: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    };
    const next = [wish, ...wishes];
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

  return (
    <div className="invite-shell">
      <section className={cn("hero-arch-card", revealed && "hero-revealed")} id="heroCard">
        <div className="hero-inner-content">
          <div className="tagline">{WEDDING.tagline}</div>
          <div className="couple-frame">
            <img
              src="/images/couple.jpg"
              alt="Mohamed and Rahma"
              width={832}
              height={1248}
            />
          </div>
          <svg className="royal-ornament" viewBox="0 0 200 30" fill="currentColor" aria-hidden="true">
            <path d="M100 20 c-15 -18 -45 -18 -60 0 c15 -5 35 -5 60 0 Z" />
            <path d="M100 20 c15 -18 45 -18 60 0 c-15 -5 -35 -5 -60 0 Z" />
            <circle cx="100" cy="18" r="3.5" fill="currentColor" />
            <circle cx="75" cy="15" r="2" fill="currentColor" />
            <circle cx="125" cy="15" r="2" fill="currentColor" />
          </svg>
          <div className="names-section">
            <div className="bride-groom groom">{WEDDING.groomsName}</div>
            <div className="and-sym">&</div>
            <div className="bride-groom bride">{WEDDING.bridesName}</div>
          </div>
          <p className="invite-quote">“{WEDDING.quote}”</p>
        </div>
      </section>

      <section className="section-card reveal-on-scroll">
        <div className="reception-header">Reception Info</div>
        <div className="reception-sub">The reception will take place at:</div>

        <div className="date-split-box">
          <div className="date-label-left">
            <div className="sub-day">{WEDDING.dateLabel.weekday}</div>
            <div className="sub-time">{WEDDING.dateLabel.time}</div>
          </div>
          <div className="big-day-number">{WEDDING.dateLabel.day}</div>
          <div className="date-label-right">
            <div className="sub-month">{WEDDING.dateLabel.month}</div>
            <div className="sub-year">{WEDDING.dateLabel.year}</div>
          </div>
        </div>

        <div className="time-slot-card">
          <div className="time-slot-title">Welcome Reception</div>
          <div className="time-slot-val">{WEDDING.dateLabel.time}</div>
        </div>

        <div className="countdown-title">Countdown</div>
        <div className="countdown-display">{countdown}</div>
        <OctoberCalendar />
      </section>

      <section className="section-card reveal-on-scroll">
        <div className="venue-title">{WEDDING.hall}</div>
        <div className="venue-arabic" lang="ar" dir="rtl">
          {WEDDING.venueArabic}
        </div>
        <div className="venue-english">{WEDDING.venueEnglish}</div>
        <div className="venue-address">{WEDDING.address}</div>

        <div className="btn-group">
          <a
            href={WEDDING.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-gold"
          >
            <MapPin size={18} />
            View On Google Maps
          </a>
          <button type="button" className="btn btn-outline" onClick={downloadCalendar}>
            <CalendarPlus size={18} />
            Add to Calendar
          </button>
        </div>

        <div className="gallery-grid">
          {WEDDING.gallery.map((item) => (
            <button
              key={item.src}
              type="button"
              className="gallery-item"
              onClick={() => setLightbox(item.src)}
              aria-label={`View ${item.alt}`}
            >
              <img src={item.src} alt={item.alt} />
            </button>
          ))}
        </div>
      </section>

      <section className="section-card reveal-on-scroll">
        <div className="section-title">Dress Code</div>
        <p className="dresscode-desc">{WEDDING.dressCode}</p>
        <div className="palette-container">
          {WEDDING.palette.map((swatch) => (
            <div
              key={swatch.name}
              className="color-swatch"
              style={{ backgroundColor: swatch.color }}
              title={swatch.name}
              aria-label={swatch.name}
            />
          ))}
        </div>
      </section>

      <section className="rsvp-box reveal-on-scroll">
        <p className="rsvp-text">“{WEDDING.blessing}”</p>
        <svg className="rsvp-heart" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 21s-6.2-4.35-9.05-8.12C1.2 10.7 1.35 7.4 3.7 5.7c2.1-1.5 4.7-.7 6.05 1.15C11.1 5 13.7 4.2 15.8 5.7c2.35 1.7 2.5 5 0.75 7.18C18.2 16.65 12 21 12 21z"
            fill="currentColor"
          />
        </svg>
      </section>

      <section className="section-card reveal-on-scroll">
        <div className="section-title">Warm Wishes</div>
        <p className="dresscode-desc">Leave a sweet wish or blessing for Mohamed and Rahma</p>
        <div className="wishes-input-group">
          <input
            className="wishes-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            maxLength={60}
            aria-label="Your name"
          />
          <textarea
            className="wishes-textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your warm wish here..."
            maxLength={400}
            aria-label="Your wish"
          />
          {error ? <p className="form-error">{error}</p> : null}
          <button
            type="button"
            className="btn btn-gold"
            onClick={submitWish}
            disabled={sending}
          >
            <Send size={16} />
            {sent ? "Sent with Love" : sending ? "Sending..." : "Send Wish"}
          </button>
        </div>
        <div className="wishes-list">
          {wishes.length === 0 ? (
            <p className="wishes-empty">Be the first to leave a wish.</p>
          ) : (
            wishes.map((wish) => (
              <article className="wish-item" key={wish.id}>
                <div className="wish-header">
                  <span className="wish-author">{wish.name}</span>
                  <span className="wish-time">{wish.time}</span>
                </div>
                <div className="wish-body">{wish.message}</div>
              </article>
            ))
          )}
        </div>
      </section>

      <div className="invite-footer">WITH LOVE · MOHAMED AND RAHMA · 2026</div>

      {lightbox ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Venue photo"
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox} alt="" />
        </div>
      ) : null}
    </div>
  );
}
