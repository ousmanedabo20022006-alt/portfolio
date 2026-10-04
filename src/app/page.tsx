"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-[#070b10] text-white">
      {/* HEADER */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#070b10]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a
            href="#accueil"
            onClick={closeMenu}
            className="text-lg font-semibold tracking-tight transition hover:text-cyan-400"
          >
            Ousmane Dabo
          </a>

          {/* MENU DESKTOP */}
          <nav className="hidden items-center gap-7 text-sm text-gray-400 md:flex">
            <a href="#accueil" className="transition hover:text-white">
              Accueil
            </a>
            <a href="#a-propos" className="transition hover:text-white">
              À propos
            </a>
            <a href="#parcours" className="transition hover:text-white">
              Parcours
            </a>
            <a href="#projets" className="transition hover:text-white">
              Projets
            </a>
            <a href="#competences" className="transition hover:text-white">
              Compétences
            </a>
            <a href="#experiences" className="transition hover:text-white">
              Expériences
            </a>
            <a href="#contact" className="transition hover:text-white">
              Me contacter
            </a>
          </nav>

          {/* BOUTON MOBILE */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-300 md:hidden"
            aria-label="Ouvrir le menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* MENU MOBILE */}
        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#070b10] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5 text-sm text-gray-300">
              <a href="#accueil" onClick={closeMenu}>
                Accueil
              </a>
              <a href="#a-propos" onClick={closeMenu}>
                À propos
              </a>
              <a href="#parcours" onClick={closeMenu}>
                Parcours
              </a>
              <a href="#projets" onClick={closeMenu}>
                Projets
              </a>
              <a href="#competences" onClick={closeMenu}>
                Compétences
              </a>
              <a href="#experiences" onClick={closeMenu}>
                Expériences
              </a>
              <a href="#contact" onClick={closeMenu}>
                Me contacter
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="accueil" className="pt-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-28">
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              BTS SIO — Option SLAM
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Ousmane
              <br />
              <span className="text-gray-400">Dabo.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
              Étudiant en BTS SIO option SLAM, je développe des applications
              web, mobiles et logicielles en utilisant différentes
              technologies et architectures.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Développement Web",
                "Applications mobiles",
                "Bases de données",
                "Programmation",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projets"
                className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-[#061018] transition hover:bg-cyan-300"
              >
                Voir mes projets
              </a>

              <a
                href="/CV_Ousmane_Dabo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/[0.04]"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>

          {/* CARTE PROFIL */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <span className="text-sm text-gray-400">Portfolio</span>
                <span className="text-sm text-cyan-400">2026</span>
              </div>

              <div className="py-10">
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                  Développeur
                </p>

                <h2 className="mt-3 text-4xl font-bold leading-tight">
                  Web · Mobile
                  <br />
                  & Logiciel
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Formation
                  </p>
                  <p className="mt-2 text-sm font-medium">
                    BTS SIO — SLAM
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Projets sélectionnés
                  </p>
                  <p className="mt-2 text-2xl font-bold text-cyan-400">03</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A PROPOS */}
      <section id="a-propos" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            À propos
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Un profil orienté développement
          </h2>

          <div className="mt-8 max-w-4xl space-y-5 text-lg leading-8 text-gray-400">
            <p>
              Actuellement en BTS SIO option SLAM, je m'intéresse
              principalement au développement d'applications web, mobiles et
              logicielles. J'aime comprendre le fonctionnement d'un projet,
              développer ses fonctionnalités et résoudre les problèmes
              rencontrés.
            </p>

            <p>
              À travers mes projets scolaires et mes expériences en entreprise,
              je développe progressivement mes compétences en programmation,
              bases de données, API, authentification, tests et gestion de
              projet.
            </p>
          </div>
        </div>
      </section>

      {/* PARCOURS */}
      <section id="parcours" className="border-t border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Parcours
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">Formation</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[#0b1118] p-7">
              <p className="text-sm text-cyan-400">En cours · 2025 — 2027</p>

              <h3 className="mt-3 text-xl font-semibold">
                BTS SIO — Option SLAM
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Solutions Logicielles et Applications Métiers. Développement,
                bases de données, programmation, gestion de projet et
                cybersécurité.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0b1118] p-7">
              <p className="text-sm text-cyan-400">2025</p>

              <h3 className="mt-3 text-xl font-semibold">
                Bac Pro Systèmes Numériques
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Option C — Réseaux Informatiques et Systèmes Communicants
                (RISC).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section id="projets" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Projets
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Une sélection de mes réalisations
          </h2>

          <p className="mt-5 max-w-2xl text-gray-400">
            Quelques projets réalisés dans le cadre de ma formation et de mes
            expériences.
          </p>

          {/* RESACHEV */}
          <div className="mt-14 rounded-3xl border border-cyan-400/20 bg-white/[0.025] p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400">
                Projet principal
              </span>

              <span className="text-sm text-gray-500">BTS SIO · AP3</span>
            </div>

            <h3 className="mt-5 text-3xl font-bold">
              ResaChev / BodyPulse
            </h3>

            <p className="mt-4 max-w-4xl leading-7 text-gray-400">
              Application de réservation pour une salle de sport, développée
              avec plusieurs technologies : application web, application
              mobile, API REST et base de données MySQL.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Laravel",
                "PHP",
                "Vue.js",
                "Flutter",
                "Dart",
                "C#",
                ".NET",
                "API REST",
                "MySQL",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                "/images/projects/resachev-accueil.png",
                "/images/projects/resachev-connexion.png",
                "/images/projects/resachev-reservation.png",
              ].map((src) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setSelectedImage(src)}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-black"
                >
                  <img
                    src={src}
                    alt="Capture du projet ResaChev"
                    className="aspect-video h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </button>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="/projets/resachev"
                className="inline-flex rounded-xl border border-cyan-400/30 px-5 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400/10"
              >
                Voir le projet en détail →
              </a>
            </div>
          </div>

          {/* ANGER SCOOT */}
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.025] p-6 md:p-8">
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-400">
              Projet web
            </span>

            <h3 className="mt-5 text-3xl font-bold">AngerScoot</h3>

            <p className="mt-4 max-w-4xl leading-7 text-gray-400">
              Application web développée en PHP avec une base de données
              MySQL. Le projet met en pratique l'authentification, les
              sessions, la gestion des utilisateurs et différentes
              fonctionnalités liées à l'espace chargeur.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["PHP", "MySQL", "HTML", "CSS"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() =>
                  setSelectedImage("/images/projects/anger-scoot.png")
                }
                className="group block w-full overflow-hidden rounded-2xl border border-white/10 bg-black md:max-w-3xl"
              >
                <img
                  src="/images/projects/anger-scoot.png"
                  alt="Capture du projet AngerScoot"
                  className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </button>
            </div>

            <div className="mt-8">
              <a
                href="/projets/anger-scoot"
                className="inline-flex rounded-xl border border-cyan-400/30 px-5 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400/10"
              >
                Voir le projet en détail →
              </a>
            </div>
          </div>

          {/* MEE */}
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.025] p-6 md:p-8">
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-400">
              Projet logiciel
            </span>

            <h3 className="mt-5 text-3xl font-bold">MEE</h3>

            <p className="mt-4 max-w-4xl leading-7 text-gray-400">
              Projet logiciel développé avec Java et Spring Boot, utilisant
              Maven et une architecture backend permettant notamment de gérer
              des fonctionnalités de communication et d'échange de messages.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Java", "Spring Boot", "Maven", "API REST"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                {
                  src: "/images/projects/mee-accueil.png",
                  title: "Page d'accueil",
                },
                {
                  src: "/images/projects/mee-connexion.png",
                  title: "Connexion",
                },
                {
                  src: "/images/projects/mee-communication.png",
                  title: "Communication",
                },
                {
                  src: "/images/projects/mee-droits-messages.png",
                  title: "Droits sur les messages",
                },
              ].map((image) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setSelectedImage(image.src)}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-black text-left"
                >
                  <img
                    src={image.src}
                    alt={`Capture MEE - ${image.title}`}
                    className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />

                  <div className="border-t border-white/10 px-4 py-3">
                    <p className="text-sm text-gray-400">{image.title}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="/projets/mee"
                className="inline-flex rounded-xl border border-cyan-400/30 px-5 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400/10"
              >
                Voir le projet en détail →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMPETENCES */}
      <section
        id="competences"
        className="border-t border-white/10 bg-white/[0.015]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Compétences
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Technologies et outils
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Web",
                text: "HTML, CSS, JavaScript, PHP, Laravel, Vue.js",
              },
              {
                title: "Mobile",
                text: "Flutter, Dart",
              },
              {
                title: "Programmation",
                text: "C#, .NET, Java, Spring Boot, Maven",
              },
              {
                title: "Bases de données",
                text: "SQL, MySQL, PostgreSQL, MCD, MLR",
              },
              {
                title: "Backend & API",
                text: "API REST, Laravel, Spring Boot, authentification",
              },
              {
                title: "Outils",
                text: "Git, GitHub, GitLab, VS Code, Android Studio",
              },
            ].map((skill) => (
              <div
                key={skill.title}
                className="rounded-2xl border border-white/10 bg-[#0b1118] p-6"
              >
                <h3 className="text-lg font-semibold">{skill.title}</h3>
                <p className="mt-3 leading-7 text-gray-400">{skill.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section id="experiences" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Expériences
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Mes expériences professionnelles
          </h2>

          <div className="mt-12 space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
              <h3 className="text-xl font-semibold">
                DGA TECH — France Travail
              </h3>

              <p className="mt-2 text-sm text-cyan-400">
                15 juin — 10 juillet 2026
              </p>

              <p className="mt-3 text-sm text-gray-500">
                Tutrice : Mme Fatou DOUMBIA, cheffe de projet
              </p>

              <p className="mt-5 max-w-4xl leading-7 text-gray-400">
                Participation à des missions liées au développement web, aux
                tests et à la recette, à l'UX, au travail en équipe, à l'IA et
                aux données, à la RPA, à la sécurisation et à la protection
                des données.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
              <h3 className="text-xl font-semibold">TGS France</h3>
              <p className="mt-2 text-sm text-gray-500">
                Première · Stage
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
              <h3 className="text-xl font-semibold">Premium SAS</h3>
              <p className="mt-2 text-sm text-gray-500">
                Terminale · Stage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/10 bg-white/[0.015]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Me contacter
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-gray-400">
            Vous souhaitez échanger à propos d'un projet, d'une opportunité ou
            de mon parcours ? Vous pouvez me contacter directement.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:ousmanedabo20022006@gmail.com"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 font-medium transition hover:border-cyan-400/30 hover:text-cyan-400"
            >
              ousmanedabo20022006@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/ousmane-dabo-6b90392a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 font-medium transition hover:border-cyan-400/30 hover:text-cyan-400"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/ousmanedabo20022006-alt"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 font-medium transition hover:border-cyan-400/30 hover:text-cyan-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ousmane Dabo. Tous droits réservés.</p>
          <p>BTS SIO — SLAM</p>
        </div>
      </footer>

      {/* MODAL IMAGE */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white transition hover:bg-white/20"
            aria-label="Fermer"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Capture du projet"
            className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}