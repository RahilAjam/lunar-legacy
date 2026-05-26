import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Image Upscaler",
    description:
      "Enhance low-resolution images using AI-powered super resolution technology.",
    status: "Live",
  },
  {
    title: "Project Lunar 1.1",
    description:
      "AI-powered fake review detection system using machine learning and pattern analysis.",
    status: "Live",
  },
  {
    title: "Future Projects",
    description:
      "More AI tools, software experiments, and innovative solutions are coming soon.",
    status: "Coming Soon",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.12),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition"
        >
          <ArrowLeft size={18} />
          Back Home
        </Link>

        <h1 className="text-6xl font-bold mt-10 mb-4">
          Projects
        </h1>

        <p className="text-gray-400 mb-16 max-w-2xl">
          A collection of AI tools, software solutions, and experimental
          technologies developed under Lunar Legacy.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="
                group
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                rounded-3xl
                p-8
                hover:border-purple-500/40
                hover:bg-white/[0.05]
                transition-all
                duration-300
              "
            >
              <div className="flex justify-between items-start">

                <h2 className="text-2xl font-semibold">
                  {project.title}
                </h2>

                <span
                  className={`
                    px-3 py-1 rounded-full text-xs
                    ${
                      project.status === "Live"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }
                  `}
                >
                  {project.status}
                </span>

              </div>

              <p className="mt-4 text-gray-400 leading-relaxed">
                {project.description}
              </p>

              <button
                className="
                  mt-8
                  flex items-center gap-2
                  text-purple-400
                  hover:text-purple-300
                  transition
                "
              >
                View Project
                <ExternalLink size={16} />
              </button>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}