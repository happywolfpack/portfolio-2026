export const metadata = {
  title: "About — Alec Davy",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">About</h1>

      <div className="mt-8 flex flex-col gap-8 sm:flex-row">
        <img
          src="/images/about/alec-arnold.jpg"
          alt="Alec and Arnold on the Blue Ridge Mountain Parkway"
          className="h-64 w-64 rounded-lg object-cover sm:shrink-0"
        />
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            I&apos;m Alec Davy, a product designer based in Atlanta, Georgia. I currently
            create and maintain the design system at Buildertrend, a project management tool
            for residential construction contractors.
          </p>
          <p>
            I&apos;m passionate about creating things that people enjoy — or at the very least
            find useful and usable. My greatest satisfaction comes from learning how to improve
            products and services, then applying those insights to create positive impacts on
            users&apos; daily experiences.
          </p>
          <p>
            Outside of work, I explore Georgia with my fiancée and dog, play soccer, and
            participate in chili cooking contests.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wider text-gray-400">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Design Systems",
            "UX Research",
            "Interaction Design",
            "Usability Testing",
            "Prototyping",
            "Figma",
            "Product Strategy",
            "Wireframing",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wider text-gray-400">
          Experience
        </h2>
        <div className="mt-4 space-y-6">
          <div>
            <h3 className="font-medium text-gray-900">Design System Creator</h3>
            <p className="text-sm text-gray-500">Buildertrend &middot; Present</p>
          </div>
        </div>
      </div>
    </div>
  );
}
