export const metadata = {
  title: "About — Alec Davy",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">About</h1>

      <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
        <p>
          I&apos;m Alec Davy, a UX and Product Designer passionate about creating digital
          experiences that are both beautiful and functional. I believe great design starts with
          deeply understanding the people who will use it.
        </p>
        <p>
          With experience spanning research, interaction design, and prototyping, I bring a
          holistic approach to product design. I thrive in collaborative environments where
          design and engineering work closely together.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wider text-gray-400">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "UX Research",
            "Interaction Design",
            "Prototyping",
            "Design Systems",
            "User Testing",
            "Wireframing",
            "Figma",
            "Product Strategy",
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
            <h3 className="font-medium text-gray-900">Product Designer</h3>
            <p className="text-sm text-gray-500">Company Name &middot; 2023 &ndash; Present</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">UX Designer</h3>
            <p className="text-sm text-gray-500">Previous Company &middot; 2021 &ndash; 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
