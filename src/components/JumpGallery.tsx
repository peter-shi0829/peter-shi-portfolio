"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Screen = { key: string; label: string; desc: string; img: string };

const SCREENS: Screen[] = [
  {
    key: "explore",
    label: "Explore",
    desc: "Upcoming shows near you, grouped into photo-led rows by genre with a near-you shelf underneath. Each card carries the artist, the date, and the venue, and the location chip defaults to where you are with a radius you can widen. Search any artist from the top, narrow by filters, or hit see all on a genre to browse the whole shelf. Show data comes from the Ticketmaster API and the rows are ordered against what you rate most.",
    img: "/jump/explore.jpg",
  },
  {
    key: "concert",
    label: "Upcoming Show",
    desc: "Open an upcoming show and you get the setlist the artist played at their last tour stop, pulled from the Setlist.fm API, so you know what you are walking into before you buy. Every song has a 30 second preview you can play right there. Book tickets hands you to the seller, and want to go saves the show to your list.",
    img: "/jump/concert.jpg",
  },
  {
    key: "feed",
    label: "Feed",
    desc: "Ratings and photos from everyone on Jump or just the people you follow, newest first. Each post carries the artist, the venue, the date, who they went with, their notes, and the score they gave the night. Photos and video from the show sit inline, and you can like, comment, share, or add the concert to your own list. Scores stay hidden until an account has rated five shows, so a number always comes from a list with some shape to it.",
    img: "/jump/feed.jpg",
  },
  {
    key: "add",
    label: "Add a Concert",
    desc: "Search any artist and the results split into upcoming shows from Ticketmaster and past shows from Setlist.fm, each with the venue and the date. That split is what lets you rate a show from years ago as easily as the one you saw last night. Location and filter chips narrow the list when an artist has played a lot of nights.",
    img: "/jump/add.jpg",
  },
  {
    key: "rate",
    label: "Rate a Show",
    desc: "Rating starts with a gut reaction, liked, fine, or disliked, instead of a number nobody can calibrate. Then you can tag who you went with, jot notes, and attach photos or a video, all of it optional and skippable. Continue moves you into the comparisons.",
    img: "/jump/rate.jpg",
  },
  {
    key: "compare",
    label: "Head to Head",
    desc: "Jump asks which show was better, this one or that one, against concerts you have already rated. A binary search picks each matchup so a handful of taps is enough to slot the new show into your ranking, and too close to call is a real answer. The 0 to 10 score falls out of where it lands rather than being typed in.",
    img: "/jump/compare.jpg",
  },
  {
    key: "ranking",
    label: "My Ranking",
    desc: "Every show you have scored, in order, from 10.0 at the top down. Neighboring scores re-space themselves on every insert so the list stays honest as it grows. Sort highest, lowest, or A to Z, and tap any row to revisit the night or rerank it if it has climbed or slipped since.",
    img: "/jump/ranking.jpg",
  },
  {
    key: "leaderboard",
    label: "Leaderboard",
    desc: "You and the people you follow, ranked by shows rated, with each person's most recent show beside their name. Ties share a rank. Your own row stays pinned to the bottom so you always know where you stand without hunting for yourself in the list.",
    img: "/jump/leaderboard.jpg",
  },
  {
    key: "profile",
    label: "Profile",
    desc: "Your concert life in one place: concerts, followers, and following up top, then chips for your top genre, your average score, and the year you started. My ranking and want to go open as full lists. A private account toggle, friend discovery, and preferences sit in the middle, and a map of everywhere you have been counts your shows and cities underneath.",
    img: "/jump/profile.jpg",
  },
];

export default function JumpGallery({
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
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const openModal = () => {
    setActive(0);
    setOpen(true);
  };

  const current = SCREENS[active];

  return (
    <>
      <div className={className}>
        <button
          type="button"
          onClick={openModal}
          aria-label="View Jump app screens"
          className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl"
          style={{ background: bg }}
        >
          <Image
            src={logo}
            alt="Jump logo"
            fill
            sizes="(max-width: 768px) 100vw, 520px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />

          {/* Hover preview: a peek at the deck */}
          <span className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#0a1330]/85 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
            <span className="flex items-end gap-2">
              {SCREENS.slice(0, 3).map((s, idx) => (
                <span
                  key={s.key}
                  className="block w-[52px] overflow-hidden rounded-lg border border-white/20 shadow-lg sm:w-[62px]"
                  style={{
                    transform: `rotate(${(idx - 1) * 5}deg) translateY(${
                      idx === 1 ? "-6px" : "0"
                    })`,
                  }}
                >
                  <Image
                    src={s.img}
                    alt=""
                    width={124}
                    height={269}
                    className="h-auto w-full object-cover"
                  />
                </span>
              ))}
            </span>
            <span className="label text-white/90">View app screens</span>
          </span>
        </button>
        <p className="label mt-3 text-center text-graphite">
          Click the image above to explore the app
        </p>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Jump app screens"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-paper shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-4">
              <div>
                <h3 className="heading text-2xl md:text-3xl">Jump</h3>
                <p className="label mt-1 text-graphite">
                  Social concert-rating <span className="keep-case">iOS</span>{" "}
                  app
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="grid flex-1 gap-8 overflow-y-auto px-6 py-7 lg:min-h-[508px] lg:grid-cols-[minmax(0,200px)_minmax(0,1fr)_auto] lg:items-center lg:gap-10">
              {/* Selected screen */}
              <div
                key={`phone-${current.key}`}
                className="jg-fade mx-auto w-[190px] lg:mx-0 lg:w-full"
              >
                <div className="relative aspect-[9/19.5] w-full rounded-[1.7rem] bg-[#0b0b0d] p-[3px] shadow-2xl">
                  <div className="relative h-full w-full overflow-hidden rounded-[1.55rem] bg-white">
                    <Image
                      src={current.img}
                      alt={`Jump ${current.label} screen`}
                      fill
                      sizes="210px"
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Name + description */}
              <div
                key={`copy-${current.key}`}
                className="jg-fade jg-fade-delay"
              >
                <h4 className="heading text-2xl sm:text-3xl lg:text-4xl">
                  {current.label}
                </h4>
                <p className="copy mt-4 max-w-[19rem]">{current.desc}</p>
              </div>

              {/* Card deck */}
              <div className="flex shrink-0 flex-col items-center gap-4 lg:mr-16">
                <div className="jg-deck relative h-[350px] w-[290px] md:h-[400px] md:w-[320px]">
                  {SCREENS.map((s, i) => {
                    // Cards hold fixed slots in a centered fan. Stepping forward
                    // rotates every card one slot, so the front card travels to
                    // the back and the next one comes forward, like a real deck.
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
                        className="jg-card absolute left-1/2 top-1/2 w-[142px] overflow-hidden rounded-xl border border-black/10 bg-white shadow-xl md:w-[162px]"
                        style={{
                          zIndex: SCREENS.length - rel,
                          transform: `translate(-50%, -50%) translateX(${pos * 16}px) translateY(${
                            rel * 4
                          }px) rotate(${pos * 2}deg) scale(${isActive ? 1.06 : 0.88})`,
                          opacity: isActive ? 1 : 0.45,
                        }}
                      >
                        <span className="relative block aspect-[9/19.5] w-full">
                          <Image
                            src={s.img}
                            alt=""
                            fill
                            sizes="162px"
                            className="object-cover object-top"
                          />
                        </span>
                        <span
                          className="pointer-events-none absolute inset-0 rounded-xl"
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

                {/* Step through the deck */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setActive(
                        (v) => (v - 1 + SCREENS.length) % SCREENS.length,
                      )
                    }
                    aria-label="Previous screen"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/25 text-ink transition-colors hover:bg-ink hover:text-paper active:scale-95"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 6l-6 6 6 6" />
                    </svg>
                  </button>
                  <span className="label text-graphite">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(SCREENS.length).padStart(2, "0")}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActive((v) => (v + 1) % SCREENS.length)}
                    aria-label="Next screen"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/25 text-ink transition-colors hover:bg-ink hover:text-paper active:scale-95"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
