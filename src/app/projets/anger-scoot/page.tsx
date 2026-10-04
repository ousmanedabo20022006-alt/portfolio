"use client";

import { useState } from "react";

export default function AngerScootPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05070b]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="text-lg font-bold tracking-tight transition hover:text-cyan-300"
          >
            Ousmane Dabo
          </a>

          <a
            href="/#projets"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
          >
            ← Retour aux projets
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Projet web · BTS SIO
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            AngerScoot
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Application web développée en PHP permettant de gérer
            l'authentification des utilisateurs, les sessions et les
            fonctionnalités liées à l'espace chargeur.
          </p>

          {/* TECHNOLOGIES */}
          <div className="mt-8 flex flex-wrap gap-3">
            {["PHP", "MySQL", "HTML", "CSS", "Sessions", "Authentification"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* PRESENTATION */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Présentation
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              Une application web en PHP
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              AngerScoot est un projet web réalisé pour mettre en pratique le
              développement côté serveur avec PHP et la gestion des données
              avec MySQL.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Le projet comprend notamment un système de connexion, la gestion
              des sessions et un espace destiné aux chargeurs.
            </p>
          </div>

          {/* COMPETENCES */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Compétences mises en pratique
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <h3 className="font-semibold">Développement PHP</h3>
                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Création de pages dynamiques et traitement des données côté
                  serveur.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Base de données</h3>
                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Utilisation de MySQL pour stocker et récupérer les données
                  nécessaires à l'application.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Authentification</h3>
                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Gestion de la connexion utilisateur et des sessions PHP.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Génération de documents</h3>
                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Mise en place de fonctionnalités permettant notamment la
                  génération de documents PDF.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FONCTIONNALITES */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Fonctionnalités
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Les principales fonctionnalités
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Connexion",
              text: "Système d'authentification permettant aux utilisateurs d'accéder à leur espace.",
            },
            {
              title: "Sessions",
              text: "Utilisation des sessions PHP pour conserver l'utilisateur connecté et sécuriser l'accès aux pages.",
            },
            {
              title: "Espace chargeur",
              text: "Espace dédié aux fonctionnalités accessibles aux chargeurs.",
            },
            {
              title: "Gestion des gains",
              text: "Page permettant de consulter les informations relatives aux gains.",
            },
            {
              title: "MySQL",
              text: "Stockage et récupération des informations depuis une base de données.",
            },
            {
              title: "PDF",
              text: "Génération de documents PDF depuis l'application web.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <h3 className="text-lg font-semibold">{feature.title}</h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CAPTURE */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Aperçu
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Capture de l'application
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setSelectedImage("/images/projects/anger-scoot.png")}
          className="group w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] text-left"
        >
          <img
            src="/images/projects/anger-scoot.png"
            alt="Capture du projet AngerScoot"
            className="h-auto w-full transition duration-500 group-hover:scale-[1.01]"
          />

          <div className="border-t border-white/10 px-6 py-4">
            <p className="text-sm text-gray-400">
              Cliquer pour agrandir la capture
            </p>
          </div>
        </button>
      </section>

      {/* CE QUE J'AI REALISE */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl border border-cyan-400/10 bg-cyan-400/[0.03] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Mon travail
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Ce que j'ai développé
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">Développement web</h3>
              <p className="mt-2 leading-7 text-gray-400">
                Développement de pages dynamiques avec PHP, HTML et CSS.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Base de données</h3>
              <p className="mt-2 leading-7 text-gray-400">
                Connexion à une base MySQL et manipulation des données.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Authentification</h3>
              <p className="mt-2 leading-7 text-gray-400">
                Mise en place de la connexion utilisateur et de la gestion des
                sessions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Gestion des fonctionnalités</h3>
              <p className="mt-2 leading-7 text-gray-400">
                Développement des différentes pages et fonctionnalités de
                l'espace utilisateur et chargeur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-6xl border-t border-white/10 px-6 py-10">
        <div className="flex flex-col justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <p>© 2026 Ousmane Dabo</p>
          <p>BTS SIO — SLAM</p>
        </div>
      </footer>

      {/* MODAL IMAGE */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 z-10 rounded-full border border-white/20 bg-black/70 px-4 py-2 text-sm text-white transition hover:bg-black"
            >
              Fermer
            </button>

            <img
              src={selectedImage}
              alt="Capture agrandie du projet AngerScoot"
              className="max-h-[90vh] max-w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}