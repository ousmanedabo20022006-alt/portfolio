"use client";

import { useState } from "react";

const images = [
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
];

export default function MeePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#070b10] text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070b10]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="text-lg font-semibold tracking-tight transition hover:text-cyan-400"
          >
            Ousmane Dabo
          </a>

          <a
            href="/#projets"
            className="text-sm text-gray-400 transition hover:text-cyan-400"
          >
            ← Retour aux projets
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Projet logiciel · BTS SIO
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              MEE
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
              Projet logiciel développé avec Java et Spring Boot, mettant en
              pratique la communication entre plusieurs utilisateurs et la
              gestion des messages.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Java", "Spring Boot", "Maven", "API REST"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRESENTATION */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Présentation
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Une application orientée communication
            </h2>

            <div className="mt-6 space-y-5 text-gray-400 leading-8">
              <p>
                MEE est un projet logiciel réalisé dans le cadre de ma
                formation. Il permet notamment à plusieurs utilisateurs de
                communiquer au sein de l'application.
              </p>

              <p>
                Le projet m'a permis de travailler avec Java, Spring Boot et
                Maven, tout en mettant en pratique la gestion des utilisateurs
                et des messages.
              </p>
            </div>
          </div>

          {/* COMPETENCES */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Compétences mises en pratique
            </p>

            <div className="mt-7 space-y-6">
              <div>
                <h3 className="font-semibold">Java & Spring Boot</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Développement du backend de l'application avec Java et
                  Spring Boot.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">API REST</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Mise en place et utilisation d'une architecture permettant
                  les échanges entre les différentes parties de l'application.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Gestion des utilisateurs</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Utilisation de plusieurs comptes pour tester les différents
                  comportements de l'application.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Tests fonctionnels</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Vérification de la communication et des droits associés aux
                  messages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FONCTIONNALITES */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Fonctionnalités
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Les principales fonctionnalités
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Utilisateurs",
                text: "Connexion et utilisation de l'application avec plusieurs comptes.",
              },
              {
                title: "Communication",
                text: "Envoi et réception de messages entre plusieurs utilisateurs.",
              },
              {
                title: "Messages",
                text: "Affichage des messages envoyés et reçus dans l'application.",
              },
              {
                title: "Modification",
                text: "Un utilisateur peut modifier ses propres messages.",
              },
              {
                title: "Suppression",
                text: "Un utilisateur peut supprimer ses propres messages.",
              },
              {
                title: "Droits",
                text: "Les messages des autres utilisateurs ne peuvent pas être modifiés ou supprimés.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-[#0b1118] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="mb-4 h-2 w-10 rounded-full bg-cyan-400/70" />

                <h3 className="text-lg font-semibold">{feature.title}</h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPTURES */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Aperçu
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Captures de l'application
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-gray-400">
            Quelques captures permettant de présenter l'interface et les
            principales fonctionnalités développées.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {images.map((image) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(image.src)}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b1118] text-left transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="aspect-video overflow-hidden bg-black">
                <img
                  src={image.src}
                  alt={`Capture MEE - ${image.title}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <h3 className="font-semibold">{image.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Cliquer pour agrandir
                  </p>
                </div>

                <span className="text-xl text-cyan-400 transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* TESTS */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Tests
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Vérification de la communication
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              J'ai testé la communication avec plusieurs comptes connectés
              simultanément. Un message envoyé par Marie peut être consulté
              par Jean, tandis que les actions de modification et de
              suppression restent disponibles uniquement pour l'auteur du
              message.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[#0b1118] p-7">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                ✓
              </div>

              <h3 className="text-xl font-semibold">Message reçu</h3>

              <p className="mt-3 leading-7 text-gray-400">
                Jean peut consulter le message envoyé par Marie sans pouvoir
                le modifier ou le supprimer.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0b1118] p-7">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                ✓
              </div>

              <h3 className="text-xl font-semibold">Message personnel</h3>

              <p className="mt-3 leading-7 text-gray-400">
                Jean peut modifier ou supprimer ses propres messages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MON TRAVAIL */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Mon travail
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Ce que j'ai développé
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              title: "Backend",
              text: "Développement avec Java et Spring Boot.",
            },
            {
              title: "Communication",
              text: "Mise en place et test des échanges de messages entre utilisateurs.",
            },
            {
              title: "Gestion des droits",
              text: "Vérification des permissions permettant de modifier ou supprimer uniquement ses propres messages.",
            },
            {
              title: "Tests",
              text: "Tests avec plusieurs comptes et plusieurs navigateurs afin de vérifier le comportement de la communication.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>

              <p className="mt-3 leading-7 text-gray-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ousmane Dabo</p>
          <p>BTS SIO — SLAM</p>
        </div>
      </footer>

      {/* MODAL IMAGE */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white transition hover:bg-white/20"
            aria-label="Fermer"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Capture MEE agrandie"
            className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}