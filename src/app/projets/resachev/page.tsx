"use client";

import { useState } from "react";

const images = [
  {
    src: "/images/projects/resachev-accueil.png",
    alt: "ResaChev - page d'accueil",
  },
  {
    src: "/images/projects/resachev-connexion.png",
    alt: "ResaChev - connexion",
  },
  {
    src: "/images/projects/resachev-reservation.png",
    alt: "ResaChev - réservation",
  },
];

export default function ResaChevPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#05070a] text-white">
      {/* Navigation */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="text-sm font-semibold tracking-wide text-white transition hover:text-cyan-300"
          >
            Ousmane Dabo
          </a>

          <a
            href="/#projets"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            ← Retour aux projets
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Projet principal · BTS SIO
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            ResaChev / BodyPulse
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/60">
            Application de réservation pour une salle de sport permettant
            aux utilisateurs de consulter les prestations et de gérer leurs
            réservations depuis plusieurs plateformes.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
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
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Présentation
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            Une application pensée autour de la réservation
          </h2>

          <p className="mt-5 leading-8 text-white/60">
            ResaChev est un projet réalisé dans le cadre du BTS SIO. Le
            système est conçu pour permettre aux clients d'une salle de sport
            de consulter les créneaux disponibles et d'effectuer leurs
            réservations.
          </p>

          <p className="mt-4 leading-8 text-white/60">
            Le projet s'appuie sur plusieurs applications et technologies :
            une partie web avec Laravel et Vue.js, une application mobile
            Flutter et une application C# destinée notamment à la gestion.
          </p>

          <p className="mt-4 leading-8 text-white/60">
            Les différentes applications communiquent avec une base de
            données MySQL et une API REST.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Architecture
          </p>

          <ul className="mt-5 space-y-4 text-sm text-white/65">
            <li>
              <span className="font-semibold text-white">Web :</span> Laravel
              + Vue.js
            </li>
            <li>
              <span className="font-semibold text-white">Mobile :</span>{" "}
              Flutter + Dart
            </li>
            <li>
              <span className="font-semibold text-white">Logiciel :</span>{" "}
              C# + .NET
            </li>
            <li>
              <span className="font-semibold text-white">Backend :</span> API
              REST
            </li>
            <li>
              <span className="font-semibold text-white">Base :</span> MySQL
            </li>
          </ul>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Fonctionnalités
        </p>

        <h2 className="mt-3 text-3xl font-semibold">
          Les principales fonctionnalités
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Authentification",
              text: "Connexion sécurisée avec gestion du compte utilisateur.",
            },
            {
              title: "Réservations",
              text: "Consultation des créneaux et gestion des réservations.",
            },
            {
              title: "Web & mobile",
              text: "Utilisation du service depuis plusieurs plateformes.",
            },
            {
              title: "API & MySQL",
              text: "Communication entre les applications et la base de données.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="font-semibold text-white">{feature.title}</h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Captures */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Aperçu
        </p>

        <h2 className="mt-3 text-3xl font-semibold">
          Captures du projet
        </h2>

        <p className="mt-4 max-w-2xl text-white/50">
          Quelques écrans de l'application web ResaChev.
          Cliquez sur une capture pour l'agrandir.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {images.map((image) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(image.src)}
              className="group relative aspect-video cursor-zoom-in overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              aria-label={`Agrandir ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/40">
                <span className="rounded-full bg-black/70 px-4 py-2 text-sm text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                  Agrandir
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Ce que j'ai réalisé */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Mon travail
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            Ce que j'ai réalisé
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">Développement</h3>
              <p className="mt-3 leading-7 text-white/55">
                Participation au développement des différentes parties du
                projet et à l'évolution des fonctionnalités selon les besoins
                définis dans les lots du projet.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Authentification</h3>
              <p className="mt-3 leading-7 text-white/55">
                Travail sur la connexion utilisateur, le hachage des mots de
                passe et la vérification par code envoyé par email.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Réservations</h3>
              <p className="mt-3 leading-7 text-white/55">
                Mise en place et évolution des fonctionnalités liées aux
                créneaux et aux réservations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Tests & corrections</h3>
              <p className="mt-3 leading-7 text-white/55">
                Tests des fonctionnalités, identification des problèmes et
                corrections au fur et à mesure de l'avancement du projet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retour */}
      <section className="mx-auto max-w-6xl px-6 pb-24 text-center">
        <a
          href="/#projets"
          className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/20"
        >
          ← Retour aux projets
        </a>
      </section>

      {/* Modal image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-[110] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl text-white transition hover:border-cyan-400/50 hover:bg-cyan-400/20 hover:text-cyan-300"
            aria-label="Fermer l'image"
          >
            ×
          </button>

          <div
            className="relative max-h-[90vh] max-w-[95vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Capture du projet agrandie"
              className="max-h-[90vh] max-w-[95vw] rounded-xl border border-white/10 object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </main>
  );
}