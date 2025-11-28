type Project = {
  name: string;
  domain: string;
  description: string;
  tags: string[];
  status: "Live" | "Building" | "Lab";
  link?: string;
};

const projects: Project[] = [
  {
    name: "Invito",
    domain: "invito.smxtudio.tech",
    description:
      "Digital wedding invitations with RSVP tracking, schedule, and a shareable link for every couple.",
    tags: ["Next.js", "Tailwind", "Email"],
    status: "Live",
    link: "https://invito.smxtudio.tech",
  },
  {
    name: "Vows",
    domain: "vows.smxtudio.tech",
    description:
      "Planning companion for events: collect details, centralize guests, and keep the ceremony flow tight.",
    tags: ["Planning", "Guests", "Mobile-first"],
    status: "Building",
  },
  {
    name: "Folio",
    domain: "folio.smxtudio.tech",
    description:
      "A lean portfolio shell to showcase past builds, progress logs, and quick demos without the noise.",
    tags: ["Showcase", "Content-light", "Clean UI"],
    status: "Building",
  },
  {
    name: "Labs",
    domain: "labs.smxtudio.tech",
    description:
      "A sandbox for small experiments, stack tests, and visual studies before they get their own subdomain.",
    tags: ["Experiments", "Prototypes", "Design"],
    status: "Lab",
  },
];

const principles = [
  {
    title: "Dedicated subdomains",
    body: "Each build ships on its own address so it stays focused and easy to share.",
  },
  {
    title: "Small and opinionated",
    body: "Fast to launch, trimmed to what the project actually needs, and then iterated in public.",
  },
  {
    title: "Always shippable",
    body: "Even in v1, every project is hosted and ready for real people to use.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-100 text-zinc-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-14 sm:py-16">
        <header className="rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:flex sm:items-center sm:justify-between sm:p-7">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:gap-3 sm:text-left">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-lg font-semibold uppercase tracking-tight text-white shadow-sm">
              sm
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                smxtudio
              </p>
              <h1 className="text-2xl font-semibold sm:text-3xl">
                Catalog of micro projects, each with its own subdomain.
              </h1>
              <p className="text-sm text-zinc-600 sm:text-base">
                A running list of builds I host under the smxtudio.tech roof.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:hidden">
                <a
                  href="#catalog"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  See catalog
                </a>
                <a
                  href="mailto:hello@smxtudio.tech"
                  className="inline-flex items-center justify-center rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  Request subdomain
                </a>
              </div>
            </div>
          </div>
          <a
            href="mailto:hello@smxtudio.tech"
            className="mt-4 hidden items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:mt-0 sm:inline-flex sm:px-5 sm:text-sm"
          >
            <span className="whitespace-nowrap">Request subdomain</span>
          </a>
        </header>

        <section
          id="catalog"
          className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr]"
        >
          <div className="rounded-3xl border border-zinc-200 bg-white/80 p-8 shadow-sm backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-amber-600">
                  Live catalog
                </p>
                <h2 className="mt-2 text-3xl font-semibold">
                  Small experiences built to be shared quickly.
                </h2>
                <p className="mt-3 text-base text-zinc-600">
                  Each one solves a specific request and gets its own lane on
                  smxtudio.tech.
                </p>
              </div>
              <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">
                Updated weekly
              </span>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {projects.map((project) => (
                <div
                  key={project.domain}
                  className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                        {project.domain}
                      </p>
                      <h3 className="text-lg font-semibold text-zinc-900">
                        {project.name}
                      </h3>
                    </div>
                    <span className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-700">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-amber-700 transition hover:text-amber-800"
                    >
                      Visit {project.domain}
                      <span aria-hidden className="text-base">
                        →
                      </span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-zinc-200 bg-white/80 p-7 shadow-sm backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Blueprint
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                A simple way to host focused projects.
              </h3>
              <div className="mt-5 space-y-4">
                {principles.map((principle) => (
                  <div key={principle.title} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-600" />
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">
                        {principle.title}
                      </p>
                      <p className="text-sm text-zinc-600">{principle.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                Need a small tool, invite site, or branded link? I can spin it
                up and park it on a fresh subdomain.
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="mailto:samodra.me@gmail.com"
                  className="inline-flex items-center justify-center rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  Start a request
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white/80 p-7 shadow-sm backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Hosting at a glance
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { label: "Launch time", value: "~1 week" },
                  { label: "Custom domains", value: "Yes" },
                  { label: "Stack", value: "Next.js + Tailwind" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-zinc-200 bg-white px-4 py-3"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                      {item.label}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-zinc-900">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-zinc-600">
                Keeping everything under smxtudio.tech makes it easy to iterate
                and keep projects live without the overhead of a big platform
                site.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
