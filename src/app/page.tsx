import Image from "next/image";
import Nav from "@/components/Nav";
import Cover from "@/components/Cover";
import JumpGallery from "@/components/JumpGallery";
import NbaGallery from "@/components/NbaGallery";

export default function Home() {
  return (
    <>
      <Nav />
      <Cover />
      <main className="mx-auto w-full max-w-6xl px-6">
        <Introduction />
        <About />
        <Education />
        <Experience />
        <Portfolio />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/* Small reusable eyebrow line under section headings */
function Rule() {
  return <div className="h-px w-full bg-line" />;
}

/* Renders text inside an uppercase label while preserving the casing of "iOS" */
function LabelText({ children }: { children: string }) {
  return (
    <>
      {children.split(/(iOS)/g).map((part, i) =>
        part === "iOS" ? (
          <span key={i} className="keep-case">
            iOS
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* INTRODUCTION                                                       */
/* ------------------------------------------------------------------ */
function Introduction() {
  return (
    <section id="intro" className="section-frame border-b border-line py-16 md:py-24">
      <h2 className="heading text-6xl md:text-8xl">Introduction</h2>
      <div className="mt-10 grid items-start gap-8 md:grid-cols-[1fr_1.4fr_1fr]">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
          <Image
            src="/eating.jpg"
            alt="Peter out at a meal"
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="label text-ink">Peter Shi</p>
          <p className="label mt-1 text-graphite">Product Manager & Builder</p>
          <div className="mt-5 space-y-4">
            <p className="copy">
              Hey! Welcome to my portfolio, and thank you for checking it out.
              Here you can find all of my education, experience, and projects from
              the past.
            </p>
            <p className="copy">
              Hope you enjoy everything I&apos;ve built! You can reach out to me
              through my email or LinkedIn below. Also, feel free to check out my
              GitHub below as well.
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between gap-2">
            <a
              href="mailto:shipeterzhang@gmail.com"
              className="inline-flex items-center rounded-full border border-ink/25 px-4 py-1.5 text-xs font-medium tracking-wide text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper active:scale-[0.98]"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/peter-shi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-ink/25 px-4 py-1.5 text-xs font-medium tracking-wide text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper active:scale-[0.98]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/peter-shi0829"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-ink/25 px-4 py-1.5 text-xs font-medium tracking-wide text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper active:scale-[0.98]"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="flex flex-col items-end gap-6">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
            <Image
              src="/basketball.jpg"
              alt="Peter playing basketball"
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* ABOUT / NAME                                                       */
/* ------------------------------------------------------------------ */
function About() {
  return (
    <section id="about" className="section-frame border-b border-line py-20 md:py-28">
      <div className="text-center">
        <h2 className="heading-thin text-[11vw] leading-[0.95] md:text-8xl">
          Peter
          <br />
          Shi
        </h2>
      </div>
      <div className="mt-10 flex justify-center">
        <div className="relative h-64 w-56 overflow-hidden rounded-xl md:h-80 md:w-72">
          <Image
            src="/portrait.jpg"
            alt="Peter Shi"
            fill
            sizes="288px"
            className="object-cover"
          />
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-2xl space-y-4 text-left">
        <p className="copy">
          Hi! My name is Peter and I am a junior studying Information Systems and
          Business Analytics at the Kelley School of Business with a minor in
          Mathematics. I am passionate about customer centric product work and
          love tackling unique problems with innovative solutions. I&apos;ve been
          able to do this through product roles at Mastercard, a Y Combinator
          startup, and clubs at IU. Super excited to see what is next in store.
        </p>
        <p className="copy">
          Outside school, I&apos;ve grown up playing basketball since I was six and
          am an avid Grizzlies fan. I&apos;ve also gotten into rating films and
          restaurants through apps Letterboxd and Beli which prompted me to build
          my own rating app in &ldquo;Jump&rdquo; for another hobby of mine: going
          to concerts.
        </p>
        <p className="copy">
          I am happy to chat, so feel free to reach out through my{" "}
          <a
            href="https://www.linkedin.com/in/peter-shi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink hover:underline"
          >
            LinkedIn
          </a>{" "}
          or email{" "}
          <a href="mailto:peteshi@iu.edu" className="text-ink hover:underline">
            peteshi@iu.edu
          </a>
          .
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* EDUCATION                                                          */
/* ------------------------------------------------------------------ */
function Education() {
  const detail = [
    { k: "Majors", v: "Information Systems and Business Analytics" },
    { k: "Minor", v: "Mathematics" },
    { k: "GPA", v: "3.90 / 4.00" },
  ];
  const honors = [
    "Hutton Honors College",
    "Kelley Honors Program",
    "Dean's Scholarship",
    "Vanguard Scholarship",
    "Kelley Consulting Workshop (1 of 31 selected)",
  ];
  const clubs = [
    { name: "812 Consulting", role: "Project Manager" },
    { name: "Asian American Association", role: "Treasurer" },
    { name: "Alpha Kappa Psi", role: "Member" },
  ];

  return (
    <section id="education" className="section-frame border-b border-line py-16 md:py-24">
      <div className="flex items-start gap-6">
        <h2 className="heading text-5xl md:text-7xl">Education</h2>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-[0.7fr_2fr]">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
          <Image
            src="/iu.jpg"
            alt="Indiana University national championship celebration"
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover object-center"
          />
        </div>

        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <p className="label text-ink">Indiana University, Kelley School of Business</p>
            <span className="label text-graphite">2024-2028</span>
          </div>
          <p className="copy mt-2">
            Bachelor of Science in Business · Bloomington, Indiana
          </p>

          <div className="mt-6">
            <Rule />
          </div>

          <dl className="mt-6 grid gap-4 sm:grid-cols-3">
            {detail.map((d) => (
              <div key={d.k}>
                <dt className="label text-graphite">{d.k}</dt>
                <dd className="copy mt-1 text-ink">{d.v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="label text-graphite">Honors and awards</p>
              <ul className="mt-3 divide-y divide-line border-t border-line">
                {honors.map((h, i) => (
                  <li key={i} className="copy py-2.5 text-ink">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label text-graphite">Clubs and organizations</p>
              <ul className="mt-3 divide-y divide-line border-t border-line">
                {clubs.map((c) => (
                  <li
                    key={c.name}
                    className="flex flex-wrap items-baseline justify-between gap-x-3 py-2.5"
                  >
                    <span className="copy text-ink">{c.name}</span>
                    <span className="label text-graphite">{c.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* EXPERIENCE                                                         */
/* ------------------------------------------------------------------ */
type Entry = {
  co: string;
  logo: string | null;
  note: string | null;
  role: string;
  dates: string;
  place: string;
  points: string[];
};

function Experience() {
  const roles: Entry[] = [
    {
      co: "Mastercard",
      logo: "/logos/mastercard.png",
      note: null,
      role: "Product Management Intern",
      dates: "June 2026 - August 2026",
      place: "St. Louis, MO",
      points: [
        "Deployed an AI customer support agent with 500+ monthly users in Copilot Studio, cutting response time in half.",
        "Built a Jira capacity-analysis tool to fix sprint overcommitment, lifting sprint completion from 68% to 87%.",
        "Assisted the rollout of Mastercard's services customization portal to 700 banks by building a dashboard that flags lagging accounts early, then creating an implementation roadmap with Customer Success to reach 60% adoption within six months.",
      ],
    },
    {
      co: "Hemut",
      logo: "/logos/hemut.png",
      note: "Y Combinator X25",
      role: "Product Lead",
      dates: "July 2025 - April 2026",
      place: "Los Angeles, CA",
      points: [
        "Owned product strategy for a $1.2M ARR startup building transportation management systems (TMS) for trucking carriers.",
        "Led 6 engineers to ship a minimum viable product of the TMS in 6 weeks, securing $750k in client investment.",
        "Created a sales dashboard that showed 60% of deals died at the security deposit, then built a digital wallet feature that bypassed the deposit and raised sales conversion 32%.",
      ],
    },
    {
      co: "Epic Pivot",
      logo: "/logos/epicpivot.png",
      note: null,
      role: "Product Analyst Intern",
      dates: "June 2025 - August 2025",
      place: "Memphis, TN",
      points: [
        "Executed market research on 2 consulting projects, including a banking app redesign and a packaging go-to-market strategy.",
        "Led UX research with 30 credit union app users in Dovetail, surfacing the pain points that shaped a full redesign.",
        "Directed a mobile app redesign in Figma from that research, reaching 95% satisfaction in a 200-customer pilot.",
        "Built a P&L model projecting $150M in additional profit to guide the packaging client's expansion into CPG.",
      ],
    },
  ];

  const leadership: Entry[] = [
    {
      co: "812 Consulting",
      logo: null,
      note: null,
      role: "Project Manager",
      dates: "September 2024 - Present",
      place: "Bloomington, IN",
      points: [
        "Led a team of 4 analysts on a 12-week engagement with a $460M professional sports and entertainment company.",
        "Developed press outreach targeting reporters in 4 high-priority audience segments, reaching a 5M+ potential audience.",
        "Designed and pitched 3 low-cost patches, leading the client to invest $10k to bring one to market.",
      ],
    },
    {
      co: "Asian American Association",
      logo: null,
      note: null,
      role: "Treasurer",
      dates: "August 2025 - May 2026",
      place: "Bloomington, IN",
      points: [
        "Tripled the funds of a 600-member club through TicketSpice ticket sales and membership dues verification.",
        "Collaborated with Union Board to manage a $5k budget for a multi-college cultural event with 1,200+ attendees.",
        "Hosted the annual holiday event, acting on past feedback to sell $26k in tickets.",
      ],
    },
  ];

  const skills = [
    {
      k: "Languages and data",
      v: "Python (pandas, scikit-learn), SQL, TypeScript, JavaScript, Java, React, Node.js, HTML/CSS",
    },
    {
      k: "Product",
      v: "Roadmapping, Prioritization, User Stories, A/B Testing, User Research, Competitive Analysis, Agile, Scrum",
    },
    {
      k: "AI and ML",
      v: "Model Training and Evaluation, Data Pipelines, LLM Agents, Responsible AI, Copilot Studio, Claude Code",
    },
    {
      k: "Tools and platforms",
      v: "Jira, Figma, Dovetail, Miro, Lucidchart, GitHub, Power BI, Supabase/Postgres, Microsoft Suite",
    },
  ];

  return (
    <section id="experience" className="section-frame border-b border-line py-16 md:py-24">
      <div className="flex items-start gap-6">
        <h2 className="heading text-5xl md:text-7xl">Experience</h2>
      </div>

      <div className="mt-12 flex flex-col">
        {roles.map((r) => (
          <ExperienceEntry key={r.co} entry={r} />
        ))}
      </div>

      <p className="label mt-16 text-graphite">Leadership and involvement</p>
      <div className="mt-4 flex flex-col">
        {leadership.map((r) => (
          <ExperienceEntry key={r.co} entry={r} />
        ))}
      </div>

      <p className="label mt-16 text-graphite">Skills</p>
      <dl className="mt-4 border-t border-line">
        {skills.map((sk) => (
          <div
            key={sk.k}
            className="grid gap-1 border-b border-line py-4 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] md:gap-10"
          >
            <dt className="label text-graphite">{sk.k}</dt>
            <dd className="copy">{sk.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function ExperienceEntry({ entry: r }: { entry: Entry }) {
  return (
    <article className="grid gap-4 border-t border-line py-8 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] md:gap-10">
      <div>
        {r.logo && (
          <div className="relative mb-4 h-14 w-14 overflow-hidden rounded-xl">
            <Image
              src={r.logo}
              alt={`${r.co} logo`}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
        )}
        <h3 className="heading text-2xl md:text-3xl">{r.co}</h3>
        {r.note && <p className="label mt-1 text-graphite">{r.note}</p>}
        <p className="copy mt-2 text-ink">{r.role}</p>
        <p className="label mt-3 text-graphite">{r.dates}</p>
        <p className="label mt-1 text-graphite">{r.place}</p>
      </div>
      <ul className="flex flex-col gap-3 md:pt-1">
        {r.points.map((p, i) => (
          <li key={i} className="flex gap-3">
            <span aria-hidden="true" className="mt-[0.55rem] h-px w-4 shrink-0 bg-ink/40" />
            <span className="copy">{p}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* PORTFOLIO                                                          */
/* ------------------------------------------------------------------ */
function Portfolio() {
  const works = [
    {
      href: "#project-jump",
      title: "Jump",
      kind: "Social concert-rating iOS app",
      stack: "React Native · Expo · Supabase",
      img: "/portfolio/jump-cover.jpg",
      fit: "object-cover",
      bg: "#0b0b0d",
    },
    {
      href: "#project-nba",
      title: "Hardwood Labs",
      kind: "Machine-learning web app",
      stack: "Python · scikit-learn · Next.js",
      img: "/portfolio/nba-cover.jpg",
      fit: "object-contain p-8",
      bg: "#ffffff",
    },
  ];

  return (
    <section id="portfolio" className="section-frame border-b border-line py-16 md:py-24">
      <div className="flex items-start gap-6">
        <h2 className="heading text-5xl md:text-7xl">Portfolio</h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
        {works.map((w) => (
          <a
            key={w.title}
            href={w.href}
            className="group block"
            aria-label={`Read more about ${w.title}`}
          >
            <div
              className="relative aspect-[4/3] w-full overflow-hidden rounded-xl"
              style={{ background: w.bg }}
            >
              <Image
                src={w.img}
                alt={`${w.title} cover`}
                fill
                sizes="(max-width: 768px) 100vw, 520px"
                className={`${w.fit} transition-transform duration-500 group-hover:scale-[1.03]`}
              />
            </div>
            <div className="mt-4 flex items-start justify-between gap-4 border-t border-line pt-4">
              <div>
                <h3 className="heading text-2xl md:text-3xl">{w.title}</h3>
                <p className="copy mt-1">{w.kind}</p>
                <p className="label mt-2 text-graphite">{w.stack}</p>
              </div>
              <span className="label shrink-0 text-graphite transition-colors group-hover:text-ink">
                Read more ↓
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* PROJECTS — two highlighted                                         */
/* ------------------------------------------------------------------ */
function Projects() {
  const projects = [
    {
      anchor: "project-jump",
      label: "Project / 1",
      title: "Jump",
      subtitle: "Social concert-rating iOS app",
      image: "/jump.jpg",
      bg: "#111d3f",
      fit: "cover" as const,
      gallery: "jump" as const,
      copy:
        "A social iOS app for rating the concerts you have been to, in the spirit of Beli for food. You log a show, rank it into a personal 0 to 10 list through quick head-to-head comparisons, post photos, follow friends, and find upcoming shows through a personalized explore feed powered by the Ticketmaster and Setlist.fm APIs. New users get a guided tour on first login to drive activation, and the product has been iterated with 100 beta testers through structured trials across 30+ builds.",
      tags: ["React Native", "Expo", "Supabase", "Ticketmaster API", "Setlist.fm API"],
      status: "Live in TestFlight beta",
      href: null as string | null,
    },
    {
      anchor: "project-nba",
      label: "Project / 2",
      title: "Hardwood Labs",
      subtitle: "Machine-learning web app",
      image: "/nba/logo.png",
      bg: "#0e0f13",
      fit: "cover" as const,
      gallery: "nba" as const,
      copy:
        "An advanced NBA statistics site with a scenario engine. It projects game outcomes and full player stat lines, and it does it for matchups that have never happened, so you can move a star onto another roster, sit someone, or cut their minutes and watch the projection move. The pandas and scikit-learn pipeline trains on 273,000 player-games across ten seasons, and the model is scored in public against games it never trained on, hitting 64.3% winner accuracy against a 55.0% always-pick-home baseline. Every projection ships with a confidence range so users know which stats to trust.",
      tags: ["Python", "pandas", "scikit-learn", "Next.js", "Tailwind CSS"],
      status: "Live site",
      href: "https://hardwood-lab-coral.vercel.app",
    },
  ];
  return (
    <section id="projects" className="section-frame border-b border-line py-16 md:py-24">
      <div className="mb-10 flex items-end justify-between">
        <span className="label text-graphite">Selected work</span>
        <span className="label text-graphite">Two highlighted projects</span>
      </div>
      <div className="flex flex-col gap-16 md:gap-24">
        {projects.map((p, i) => (
          <article
            key={p.anchor}
            id={p.anchor}
            className="section-frame grid items-center gap-8 md:grid-cols-2 md:gap-12"
          >
            {p.gallery === "jump" ? (
              <JumpGallery
                logo={p.image}
                bg={p.bg}
                className={i % 2 === 1 ? "md:order-2" : ""}
              />
            ) : (
              <NbaGallery
                logo={p.image}
                bg={p.bg}
                className={i % 2 === 1 ? "md:order-2" : ""}
              />
            )}
            <div>
              <div className="flex items-baseline justify-between gap-4">
                <span className="label text-graphite">{p.label}</span>
                <span className="label text-graphite">
                  <LabelText>{p.subtitle}</LabelText>
                </span>
              </div>
              <h3 className="heading mt-2 text-5xl md:text-6xl">{p.title}</h3>
              <p className="copy mt-5">{p.copy}</p>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1">
                {p.tags.map((t) => (
                  <span key={t} className="label text-ink">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-end justify-end border-t border-line pt-4">
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label text-graphite hover:text-ink"
                  >
                    {p.status} →
                  </a>
                ) : (
                  <span className="label text-graphite">{p.status}</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CONTACT / THANKS                                                   */
/* ------------------------------------------------------------------ */
function Contact() {
  return (
    <section id="contact" className="section-frame py-24 md:py-32">
      <div className="flex flex-col items-center">
        <h2 className="heading-thin text-[15vw] leading-none md:text-9xl">
          Thanks
        </h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          <a
            href="mailto:peteshi@iu.edu"
            className="label text-graphite hover:text-ink"
          >
            peteshi@iu.edu
          </a>
          <a
            href="https://github.com/peter-shi0829"
            target="_blank"
            rel="noopener noreferrer"
            className="label text-graphite hover:text-ink"
          >
            github.com/peter-shi0829
          </a>
          <a
            href="https://www.linkedin.com/in/peter-shi/"
            target="_blank"
            rel="noopener noreferrer"
            className="label text-graphite hover:text-ink"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <span className="text-sm font-semibold">Peter Shi</span>
        <span className="label text-graphite">© 2026 Peter Shi</span>
      </div>
    </footer>
  );
}
