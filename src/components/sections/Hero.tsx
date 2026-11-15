
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="container-width flex min-h-[calc(100vh-80px)] items-center py-20">
      <div className="grid w-full items-center gap-16 md:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="mb-6 flex items-center gap-3 text-sm font-medium text-accent">
            <span className="h-px w-8 bg-accent" />
            JAVA FULL STACK DEVELOPER
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
            Building digital
            <br />
            products that
            <br />
            <span className="text-accent">solve real problems.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-muted sm:text-lg">
            I&apos;m Naveen Rajput, a Java Full Stack Developer focused on
            building modern web applications using Java, Spring Boot,
            React and Next.js.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent"
            >
              Explore My Work <span aria-hidden="true">↗</span>
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:border-foreground"
            >
              Get In Touch
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
            <span>Java & Spring Boot</span>
            <span>React & Next.js</span>
            <span>Database & APIs</span>
          </div>
        </div>

<div className="relative mx-auto w-full max-w-[360px]">
  <div className="relative aspect-[4/5] overflow-hidden border border-border bg-[#eeefec]">
    <Image
      src="/images/profile/profile.png"
      alt="Naveen Rajput - Java Full Stack Developer"
      fill
      priority
      sizes="(max-width: 768px) 90vw, 360px"
      className="object-cover object-center"
    />
  </div>

  <div className="absolute -bottom-5 -left-5 -z-10 h-full w-full border border-accent/30" />
</div>
      </div>
    </section>
  );
}
