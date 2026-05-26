"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Image Upscaler",
    description:
      "Enhance low-resolution images using AI-powered super resolution.",
  },
  {
    title: "Project Lunar 1.1",
    description:
      "AI-powered fake review detection system using machine learning.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-purple-500/15 blur-[220px]"
        />

        <div className="absolute bottom-[-250px] left-[-200px] w-[700px] h-[700px] rounded-full bg-blue-500/10 blur-[180px]" />

        <div className="absolute bottom-[-250px] right-[-200px] w-[700px] h-[700px] rounded-full bg-indigo-500/10 blur-[180px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

          <h1 className="text-lg font-bold tracking-[0.3em]">
            LUNAR LEGACY
          </h1>

          <div className="flex items-center gap-8 text-sm text-gray-400">

            <Link href="/" className="hover:text-white transition">
              Home
            </Link>

            <Link href="/projects" className="hover:text-white transition">
              Projects
            </Link>

            <Link href="/about" className="hover:text-white transition">
              About
            </Link>

            <a
              href="https://github.com/RahilAjam"
              target="_blank"
              className="hover:text-white transition"
            >
              Github
            </a>

            <a
              href="https://www.linkedin.com/in/molla-rahil-ajam-964661369/"
              target="_blank"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>

          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto text-center"
        >

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            Portfolio • AI • Innovation
          </div>

          <h1 className="text-7xl md:text-9xl font-black tracking-tight leading-none">

            Lunar

            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Legacy
            </span>

          </h1>

          <p className="mt-10 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A growing collection of artificial intelligence projects,
            software tools, experiments, and future innovations.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <Link
              href="/projects"
              className="
                group
                px-7
                py-4
                rounded-2xl
                bg-white
                text-black
                font-semibold
                flex
                items-center
                gap-2
                hover:scale-105
                transition
              "
            >
              Explore Projects

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </Link>

            <Link
              href="/about"
              className="
                px-7
                py-4
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                hover:bg-white/[0.06]
                transition
              "
            >
              About
            </Link>

          </div>

        </motion.div>

      </section>

      {/* Featured Projects */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pb-32">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="flex items-center justify-between mb-12">

            <div>
              <h2 className="text-5xl font-bold">
                Featured Projects
              </h2>

              <p className="text-gray-400 mt-3">
                Selected AI and software projects.
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {projects.map((project) => (
              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                key={project.title}
                className="
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  rounded-3xl
                  p-8
                  hover:border-purple-500/40
                  transition
                "
              >

                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <button
                  className="
                    mt-8
                    px-5
                    py-3
                    rounded-xl
                    bg-white
                    text-black
                    font-medium
                    hover:scale-105
                    transition
                  "
                >
                  View Project
                </button>

              </motion.div>
            ))}

          </div>

        </motion.div>

      </section>

    </main>
  );
}