"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Screen = { key: string; label: string; desc: string; img: string };

const SCREENS: Screen[] = [
  {
    key: "feed",
    label: "Feed",
    desc: "Ratings and photos from everyone you follow, newest first. Each post carries the artist, the venue, the date, and the score that person gave the night, so you can see what your friends actually thought before you commit to a ticket. Photos and video from the show sit inline, and a caught-up divider marks where you left off last time.",
    img: "/jump/feed.jpg",
  },
  {
    key: "explore",
    label: "Explore",
    desc: "Upcoming shows near you, ordered against your own taste profile. Search any artist, then narrow by distance, genre, and price. Rows are grouped by genre with a near-you shelf and a new-artists-for-you shelf, both built from the genres and artists you rate most, so the further you get into your list the sharper the recommendations become.",
    img: "/jump/explore.jpg",
  },
  {
    key: "explore-setlist",
    label: "Upcoming Show",
    desc: "Open any upcoming show and you get the setlist the artist has been playing on this tour, so you can hear what you are walking into before you buy. Every track has a preview you can play right there, which turns a lineup you half recognize into songs you actually know by the time you show up. Book tickets hands you straight to the seller to buy, and want to go saves the show to your list. Setlists come from the Setlist.fm API and show data from Ticketmaster.",
    img: "/jump/explore-setlist.jpg",
  },
  {
    key: "rate",
    label: "Rate a Show",
    desc: "Rating starts with a gut reaction, liked, fine, or disliked, instead of a number nobody can calibrate. Jump then runs a short series of head-to-head comparisons against concerts you have already rated, and a binary search slots the new show into your ranking. The 0 to 10 score falls out of where it lands, and neighboring scores re-space themselves on every insert.",
    img: "/jump/rate.jpg",
  },
  {
    key: "leaderboard",
    label: "Leaderboard",
    desc: "A running count of who has been to the most shows, with friends, city, and global scopes. Your own row stays pinned to the bottom so you always know where you stand without hunting for yourself in the list. It turns going to concerts into something you and your friends can quietly compete over across a season.",
    img: "/jump/leaderboard.jpg",
  },
  {
    key: "profile",
    label: "Profile",
    desc: "Your ranked concert list, your stats, and how often you actually go. Concerts over time charts attendance by day, month, or year, so a heavy festival summer is obvious at a glance. My ranking holds every show you have scored in order, and want to go keeps the ones you are still chasing.",
    img: "/jump/profile.jpg",
  },
  {
    key: "past-setlist",
    label: "Past Show",
    desc: "For a concert you have already been to, the full setlist is waiting when you open it. You can walk the night back song by song and hit the ones that stuck, the encore you did not expect, the track that everyone screamed. Playing a song pulls the memory straight back, and you can rerank the concert from here if it has climbed or slipped since. Setlist data is pulled from the Setlist.fm API and stays attached to the show.",
    img: "/jump/past-setlist.jpg",
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
      <button
        type="button"
        onClick={openModal}
        aria-label="View Jump app screens"
        className={`group relative block aspect-[4/3] w-full overflow-hidden rounded-xl ${className}`}
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
                  Social concert-rating iOS app
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

            <div className="grid flex-1 gap-8 overflow-y-auto px-6 py-7 lg:grid-cols-[minmax(0,200px)_minmax(0,1fr)_auto] lg:items-center lg:gap-10">
              {/* Selected screen */}
              <div key={`phone-${current.key}`} className="jg-fade mx-auto w-[190px] lg:mx-0 lg:w-full">
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
              <div key={`copy-${current.key}`} className="jg-fade jg-fade-delay">
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
                          transform: `translate(-50%, -50%) translateX(${pos * 22}px) translateY(${
                            rel * 4
                          }px) rotate(${pos * 2.4}deg) scale(${isActive ? 1.06 : 0.88})`,
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
      )}
    </>
  );
}
