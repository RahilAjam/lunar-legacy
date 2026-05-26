import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.12),transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-8 py-16">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition"
        >
          <ArrowLeft size={18} />
          Back Home
        </Link>

        <h1 className="text-6xl font-bold mt-10 mb-8">
          About
        </h1>

        <div
          className="
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            rounded-3xl
            p-10
          "
        >

          <h2 className="text-3xl font-semibold mb-6">
            Lunar Legacy
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Lunar Legacy is a personal technology portfolio created to
            showcase AI projects, software tools, experiments, and future
            innovations.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            The goal is simple: build meaningful technology, learn
            continuously, and create solutions that solve real-world
            problems.
          </p>

          <p className="text-gray-400 leading-relaxed">
            What started as a collection of individual projects will grow
            into a unified platform featuring artificial intelligence,
            machine learning, automation, computer vision, and software
            development projects.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.03]">
            <h3 className="font-semibold text-xl mb-2">AI</h3>
            <p className="text-gray-400 text-sm">
              Machine Learning & Intelligent Systems
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.03]">
            <h3 className="font-semibold text-xl mb-2">Software</h3>
            <p className="text-gray-400 text-sm">
              Applications, Tools & Automation
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.03]">
            <h3 className="font-semibold text-xl mb-2">Innovation</h3>
            <p className="text-gray-400 text-sm">
              Future Projects & Research
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}