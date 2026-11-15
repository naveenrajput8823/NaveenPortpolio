
const certificates = [
  {
    title: "45 Days Summer Internship - Full Stack Web Development",
    issuer: "Upflairs Pvt. Ltd.",
    category: "Internship",
    image: "https://naveentanwar.vercel.app/images/certificates/Full_stack.jpg",
    verify:
      "https://www.linkedin.com/feed/update/urn:li:activity:7375730639159042048/",
  },
  {
    title: "Summer Training - Advanced Java Technologies",
    issuer: "SkillOceans & MITRC College, Alwar",
    category: "Java Development",
    image: "https://naveentanwar.vercel.app/images/certificates/JavaAdv.jpg",
    verify:
      "https://www.linkedin.com/feed/update/urn:li:activity:7375751402758909952/",
  },
  {
    title: "SQL and Relational Databases 101",
    issuer: "IBM Skills Network (Cognitive Class)",
    category: "Database",
    image: null,
    verify:
      "https://courses.cognitiveclass.ai/certificates/91ca68fdba4e4f4db73e397d4cf8290e",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    category: "Artificial Intelligence",
    image: "https://naveentanwar.vercel.app/images/certificates/generative-ai.jpg",
    verify:
      "https://media.licdn.com/dms/image/v2/D5622AQH4f9hY2BewXw/feedshare-shrink_480/B56Z_CXBOuHYAo-/0/1785672242347?e=1789603200&t=lDj31dB-jC7jOSBHThsdAp4U0VslSs92ZOyVUH340_M&v=beta",
  },
  {
    title: "TCS iON Career Edge - Young Professional",
    issuer: "TCS iON",
    category: "Professional Development",
    image: "https://naveentanwar.vercel.app/images/certificates/tcs-young.jpg",
    verify:
      "https://www.linkedin.com/feed/update/urn:li:activity:7375400409487781888/",
  },
  {
    title: "Python for Beginners",
    issuer: "Simplilearn SkillUp",
    category: "Programming",
    image: "https://naveentanwar.vercel.app/images/certificates/python.png",
    verify: "https://simpli-web.app.link/e/NJqE0q4J0Yb",
  },
  {
    title: "Python Course: Mastering Essentials",
    issuer: "Scaler Topics",
    category: "Python",
    image: "https://naveentanwar.vercel.app/images/certificates/python-master.png",
    verify: "https://moonshot.scaler.com/s/li/iM-jhN40e0",
  },
  {
    title: "JavaScript for Beginners",
    issuer: "Simplilearn SkillUp",
    category: "Web Development",
    image: "https://naveentanwar.vercel.app/images/certificates/javascript.png",
    verify: "https://simpli-web.app.link/e/S7McPewsU3b",
  },
  {
    title: "Master Computer Networking",
    issuer: "Scaler Topics",
    category: "Networking",
    image: "https://naveentanwar.vercel.app/images/certificates/networking.png",
    verify: "https://moonshot.scaler.com/s/li/54nU2kzOXI",
  },
  {
    title: "Interview & Job Readiness",
    issuer: "TCS iON",
    category: "Career Development",
    image: "https://naveentanwar.vercel.app/images/certificates/tcs-interview.jpg",
    verify:
      "https://www.linkedin.com/feed/update/urn:li:activity:7375398636756586496/",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-[#080b14] px-6 py-24 text-white sm:px-10 lg:px-16"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
            My Achievements
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Certifications &{" "}
            <span className="text-indigo-400">Achievements</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Professional certifications, technical training and learning
            achievements that reflect my continuous growth as a developer.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-5 py-2 text-sm text-indigo-300">
            <span className="h-2 w-2 rounded-full bg-indigo-400" />
            10 Certifications Completed
          </div>
        </div>

        {/* Certificate Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <article
              key={certificate.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101522] transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-950/30"
            >
              {/* Certificate Image */}
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-[#171e30] p-3">
                {certificate.image ? (
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    className="h-full w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-lg border border-dashed border-indigo-400/30 bg-indigo-500/5">
                    <span className="text-4xl font-bold text-indigo-400">
                      IBM
                    </span>
                    <span className="mt-2 text-xs text-gray-400">
                      Verified Digital Credential
                    </span>
                  </div>
                )}

                <span className="absolute left-5 top-5 rounded-full border border-indigo-400/30 bg-[#080b14]/90 px-3 py-1 text-xs font-medium text-indigo-300">
                  {certificate.category}
                </span>
              </div>

              {/* Certificate Details */}
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-indigo-400">
                  {certificate.issuer}
                </span>

                <h3 className="mt-3 min-h-[60px] text-lg font-semibold leading-7 text-white transition-colors group-hover:text-indigo-300">
                  {certificate.title}
                </h3>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-xs text-gray-500">
                    Certificate {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-xs text-emerald-400">
                    ✓ Completed
                  </span>
                </div>

                {/* Actions */}
                <div className="mt-5 flex gap-3">
                  {certificate.image && (
                    <a
                      href={certificate.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-lg border border-white/10 px-3 py-3 text-center text-xs font-semibold text-gray-300 transition hover:border-indigo-400 hover:text-white"
                    >
                      View Certificate
                    </a>
                  )}

                  <a
                    href={certificate.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg bg-indigo-500 px-3 py-3 text-center text-xs font-semibold text-white transition hover:bg-indigo-400"
                  >
                    Verify Credential ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
