import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center py-32 px-6 text-center bg-gradient-to-b from-zinc-100 to-white dark:from-black dark:to-zinc-900">
        {/* Profile Image */}
        <Image
          src="/profile.jpg" // ใส่ไฟล์รูปโปรไฟล์ของคุณใน public/
          alt="azazeL profile picture"
          width={120}
          height={120}
          className="rounded-full border-4 border-blue-600 shadow-lg mb-6"
        />
        <h1 className="text-5xl font-bold text-black dark:text-white">
          azazeL Portfolio 🚀
        </h1>
        <p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          Welcome to my personal portfolio — showcasing my projects, skills, and journey in web development.
        </p>

        {/* Social Links */}
        <div className="mt-6 flex gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-blue-500 transition"
          >
            Facebook
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-full bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-zinc-300 px-6 py-3 text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            Contact Me
          </a>
        </div>
      </header>

      {/* Projects Section */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-16">
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-semibold text-black dark:text-white mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg shadow bg-white dark:bg-zinc-900">
              <h3 className="text-xl font-semibold">⚡ Fast Web App</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                A blazing fast Next.js application optimized for performance.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow bg-white dark:bg-zinc-900">
              <h3 className="text-xl font-semibold">🎮 Game Project</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                A fun browser-based game built with JavaScript.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow bg-white dark:bg-zinc-900">
              <h3 className="text-xl font-semibold">📖 Blog Platform</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                A personal blog system with Markdown support.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
          <h2 className="text-3xl font-semibold text-black dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
            Interested in working together or just want to say hi?
          </p>
          <a
            href="mailto:yourname@example.com"
            className="rounded-full bg-green-600 px-6 py-3 text-white font-medium hover:bg-green-700 transition"
          >
            Email Me
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-zinc-600 dark:text-zinc-400">
        © 2026 azazeL Portfolio. All rights reserved.
      </footer>
    </div>
  );
}
