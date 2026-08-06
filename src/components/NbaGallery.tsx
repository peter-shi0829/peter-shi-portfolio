"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Screen = { key: string; label: string; desc: string; img: string };

const SCREENS: Screen[] = [
  {
    key: "upcoming",
    label: "Upcoming",
    desc: "Every scheduled game with a projected final score and a win probability bar built from current rotations. Each row carries the tip-off time, the matchup, and how confident the model is, so you can scan a slate in a few seconds. From here you can open player projections for a game or jump straight into editing its lineups.",
    img: "/nba/upcoming.jpg",
  },
  {
    key: "game-detail",
    label: "Game Detail",
    desc: "Opening a game gives the full projected box score for both teams, minutes included, down to points, rebounds, assists, steals, blocks, turnovers, and threes. Under every number is an 80% confidence band, and a row of chips grades how much to trust each stat, so points might be high confidence while plus-minus is very low. Preseason games carry a warning that rotations are experimental and the minutes should be read loosely.",
    img: "/nba/game-detail.jpg",
  },
  {
    key: "custom",
    label: "Custom Matchup",
    desc: "Build any game that is not on the schedule. Pick two teams, move players between rosters, rule someone out, or drag the minute sliders, and the projection updates as you go. Sitting a starter pushes their minutes and shot volume onto whoever is left, so you can answer what happens if a star misses a game. A neutral-site toggle strips out home-court advantage.",
    img: "/nba/custom.jpg",
  },
  {
    key: "players",
    label: "Players",
    desc: "The impact ratings underneath every projection, for roughly 400 players. NET is points per 100 possessions a player adds over a league-average one, and VALUE scales that by how much they actually play, which is why VALUE is the default sort. Every column sorts, and you can filter by team, search a name, or set a minimum minutes-per-game threshold.",
    img: "/nba/players.jpg",
  },
  {
    key: "past-results",
    label: "Past Results",
    desc: "The scoreboard for the model itself, kept honest against games it never trained on. It logs the win-loss record on called games, average points off the final margin, held-out accuracy across thousands of untrained games, and log loss for how well calibrated the probabilities are. Below that sits every past game with the prediction made before tip-off next to the final score, so a bad call is as visible as a good one.",
    img: "/nba/past-results.jpg",
  },
];

export default function NbaGallery({
  logo,
  bg,
  className = "",
}: {
  logo: string;
  bg: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") setActive((v) => (v + 1) % SCREENS.length);
      if (e.key === "ArrowLeft")
        setActive((v) => (v - 1 + SCREENS.length) % SCREENS.length);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const current = SCREENS[active];

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setActive(0);
          setOpen(true);
        }}
        aria-label="View NBA Game Predictor screens"
        className={`group relative block aspect-[4/3] w-full overflow-hidden rounded-xl ${className}`}
        style={{ background: bg }}
      >
        <Image
          src={logo}
          alt="NBA Game Predictor"
          fill
          sizes="(max-width: 768px) 100vw, 520px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        <span className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#0b0c10]/88 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <span className="flex items-end gap-2">
            {SCREENS.slice(0, 3).map((s, idx) => (
              <span
                key={s.key}
                className="block w-[86px] overflow-hidden rounded-md border border-white/20 shadow-lg sm:w-[104px]"
                style={{
                  transform: `rotate(${(idx - 1) * 5}deg) translateY(${
                    idx === 1 ? "-6px" : "0"
                  })`,
                }}
              >
                <Image
                  src={s.img}
                  alt=""
                  width={208}
                  height={120}
                  className="h-auto w-full object-cover"
                />
              </span>
            ))}
          </span>
          <span className="label text-white/90">View app screens</span>
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="NBA Game Predictor screens"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-paper shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-4">
              <div>
                <h3 className="heading text-2xl md:text-3xl">NBA Game Predictor</h3>
                <p className="label mt-1 text-graphite">Machine-learning web app</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="grid flex-1 gap-8 overflow-y-auto px-6 py-7 lg:grid-cols-[1.55fr_1fr] lg:items-center lg:gap-10">
              {/* Selected screen */}
              <div
                key={`shot-${current.key}`}
                className="jg-fade relative aspect-[16/9.2] w-full overflow-hidden rounded-xl bg-[#0b0c10] ring-1 ring-ink/10"
              >
                <Image
                  src={current.img}
                  alt={`NBA Game Predictor ${current.label} screen`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover object-top"
                  priority
                />
              </div>

              <div>
                <div key={`copy-${current.key}`} className="jg-fade jg-fade-delay">
                  <h4 className="heading text-2xl sm:text-3xl">{current.label}</h4>
                  <p className="copy mt-3 max-w-md">{current.desc}</p>
                </div>

                {/* Card deck */}
                <div className="mt-7 flex flex-col items-center gap-4 lg:items-start">
                  <div className="jg-deck relative h-[150px] w-full max-w-[330px]">
                    {SCREENS.map((s, i) => {
                      const rel = (i - active + SCREENS.length) % SCREENS.length;
                      const pos = rel - (SCREENS.length - 1) / 2;
                      const isActive = rel === 0;
                      return (
                        <button
                          key={s.key}
                          type="button"
                          onClick={() => setActive(i)}
                          aria-label={`Show ${s.label} screen`}
                          aria-current={isActive}
                          className="jg-card absolute left-1/2 top-1/2 w-[168px] overflow-hidden rounded-lg border border-black/10 bg-[#0b0c10] shadow-xl"
                          style={{
                            zIndex: SCREENS.length - rel,
                            transform: `translate(-50%, -50%) translateX(${pos * 26}px) translateY(${
                              rel * 4
                            }px) rotate(${pos * 2.4}deg) scale(${isActive ? 1.06 : 0.9})`,
                            opacity: isActive ? 1 : 0.45,
                          }}
                        >
                          <span className="relative block aspect-[16/9.2] w-full">
                            <Image
                              src={s.img}
                              alt=""
                              fill
                              sizes="168px"
                              className="object-cover object-top"
                            />
                          </span>
                          <span
                            className="pointer-events-none absolute inset-0 rounded-lg"
                            style={{
                              boxShadow: isActive
                                ? "inset 0 0 0 2px var(--ink)"
                                : "inset 0 0 0 0 transparent",
                            }}
                          />
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setActive((v) => (v - 1 + SCREENS.length) % SCREENS.length)}
                      aria-label="Previous screen"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/25 text-ink transition-colors hover:bg-ink hover:text-paper active:scale-95"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 6l-6 6 6 6" />
                      </svg>
                    </button>
                    <span className="label text-graphite">
                      {String(active + 1).padStart(2, "0")} / {String(SCREENS.length).padStart(2, "0")}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActive((v) => (v + 1) % SCREENS.length)}
                      aria-label="Next screen"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/25 text-ink transition-colors hover:bg-ink hover:text-paper active:scale-95"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 6l6 6-6 6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
