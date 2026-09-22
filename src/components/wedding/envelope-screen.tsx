import { cn } from "@/lib/utils";

type EnvelopeScreenProps = {
  opened: boolean;
  fading: boolean;
  onOpen: () => void;
};

export function EnvelopeScreen({ opened, fading, onOpen }: EnvelopeScreenProps) {
  return (
    <div
      className={cn("envelope-screen", fading && "fade-out")}
      onClick={onOpen}
      role="button"
      tabIndex={fading ? -1 : 0}
      aria-label="Tap the seal to open the invitation"
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen();
        }
      }}
    >
      <div className={cn("envelope-3d-wrapper", opened && "opened")}>
        <div className="envelope-base" />
        <div className="flap flap-left" />
        <div className="flap flap-right" />
        <div className="flap flap-bottom" />
        <div className="flap flap-top" />

        <div className="wax-seal" aria-hidden="true">
          <span className="wax-seal-letters">M · R</span>
        </div>

        <div className="flying-butterfly" aria-hidden="true">
          <svg viewBox="0 0 100 80" width="60" height="50">
            <g className="butterfly-wing" fill="#FAF6EE" stroke="#C5A059" strokeWidth="1.5">
              <path d="M50 40 Q20 5 5 25 Q-5 45 25 55 Q45 60 50 40 Z" opacity="0.95" />
              <path d="M50 40 Q80 5 95 25 Q105 45 75 55 Q55 60 50 40 Z" opacity="0.95" />
              <path d="M50 40 Q30 50 25 68 Q38 75 48 55 Z" opacity="0.85" />
              <path d="M50 40 Q70 50 75 68 Q62 75 52 55 Z" opacity="0.85" />
              <line
                x1="50"
                y1="25"
                x2="50"
                y2="60"
                stroke="#8C6D37"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      </div>

      <div className="open-tagline">Tap The Seal To Open</div>
    </div>
  );
}
