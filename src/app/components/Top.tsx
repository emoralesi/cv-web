"use client";

import { useInView } from "@/utils/useIsInViewportContext";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useView } from "../context/ViewContext";
import { inter, lusitana, montserrat } from "../ui/fonts";
import LanguageSelector from "./SelectLenguage";
import ThemeSwitch from "./ThemeSwitch";

export default function Top() {
  const t = useTranslations("Top");

  const { ref, isInView: localInView } = useInView({ threshold: 0.1 });
  const { setIsInView } = useView();

  const links = [
    {
      name: t("menu1"),
      href: "/#presentacion",
      icon: "/icons/presentacion-icon.svg",
    },
    {
      name: t("menu2"),
      href: "/#experiencia",
      icon: "/icons/experiencia-laboral-icon.svg",
    },
    {
      name: t("menu3"),
      href: "/#competencias",
      icon: "/icons/competencias-icon.svg",
    },
    {
      name: t("menu4"),
      href: "/#competencias-tecnicas",
      icon: "/icons/competencias-tecnicas-icon.svg",
    },
    {
      name: t("menu5"),
      href: "/#educacion",
      icon: "/icons/educacion-icon.svg",
    },
    { name: t("menu6"), href: "/#idioma", icon: "/icons/idioma-icon.svg" },
    {
      name: t("menu7"),
      href: "/#carta-recomendaciones",
      icon: "/icons/carta-recomendacion-icon.svg",
    },
    {
      name: t("menu8"),
      href: "/#redes-sociales",
      icon: "/icons/redes-sociales-icon.svg",
    },
  ];

  useEffect(() => {
    setIsInView(localInView);
  }, [localInView, setIsInView]);
  const navRef = useRef<HTMLDivElement | null>(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, [localInView]);

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white min-h-[20vh] flex flex-col">
      <div className="container bg-white dark:bg-gray-800 flex flex-grow items-center justify-between p-4">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-34 md:h-34 rounded-full overflow-hidden mr-4 flex-shrink-0">
          <div className="flex-shrink-0">
            <Image
              src="/profile.jpg"
              alt="Emmanuel Morales Inzunza"
              width={150}
              height={150}
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <div className="flex-grow min-w-0">
          <h1
            className={`${inter.className} font-sans font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl`}
          >
            Emmanuel Morales Inzunza
          </h1>
          <div className="flex gap-2 items-center">
            <img
              src="/icons/profesion-icon.svg"
              alt="Profesion"
              className="ml-1 h-4 w-4 inline"
            />
            <p
              className={`${montserrat.className} font-sans font-normal text-sm sm:text-md md:text-lg`}
            >
              Desarrollador Full Stack
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src="/icons/correo-icon.svg"
              alt="Correo"
              className="ml-1 h-5 w-4 inline"
            />
            <p
              className={`${lusitana.className} font-sans font-normal italic text-xs sm:text-sm md:text-md leading-tight`}
            >
              emoralesinzunza98@gmail.com
            </p>
          </div>
        </div>
        <ThemeSwitch />
        <LanguageSelector />
      </div>
      <div ref={ref}>
        <hr className="h-px dark:bg-gray-200 border-0 bg-black" />
      </div>
      <nav
        ref={navRef}
        className={`${
          localInView ? "" : "fixed top-0 left-0 right-0 z-50"
        } p-4 bg-white dark:bg-gray-800 transition-all duration-300`}
      >
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 items-center gap-2 sm:gap-4">
          {links.map((link) => {
            return (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className={`
          flex h-[48px] grow items-center justify-center gap-2 rounded-md
          p-3 text-sm font-medium
          hover:bg-gray-100 dark:hover:bg-gray-900
          md:flex-none md:justify-start md:p-2 md:px-3
          ${
            typeof window !== "undefined" &&
            window.location.hash === link.href.substring(1)
              ? "text-blue-600 bg-transparent-100"
              : ""
          }
        `}
                >
                  <img
                    src={link.icon}
                    alt={`${link.name} icon`}
                    className="w-10 h-10 sm:w-6 sm:h-6"
                  />
                  <p className="hidden sm:block text-xs sm:text-sm">
                    {link.name}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
      {!localInView && <div style={{ height: `${navHeight}px` }} />}
    </div>
  );
}
