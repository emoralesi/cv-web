"use client";

import { useInView } from "@/utils/useIsInViewportContext";
import { FormControlLabel, styled, Switch } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useView } from "../context/ViewContext";
import { inter, lusitana, montserrat } from "./fonts";

export default function Top() {
  const MaterialUISwitch = styled(Switch)(({}) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: "#001e3c",
      width: 32,
      height: 32,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  const links = [
    {
      name: "Presentacion",
      href: "/#presentacion",
      icon: "/icons/presentacion-icon.svg",
    },
    {
      name: "Experiencia Laboral",
      href: "/#experiencia",
      icon: "/icons/experiencia-laboral-icon.svg",
    },
    {
      name: "Competencias",
      href: "/#competencias",
      icon: "/icons/competencias-icon.svg",
    },
    {
      name: "Competencias Tecnicas",
      href: "/#competencias-tecnicas",
      icon: "/icons/competencias-tecnicas-icon.svg",
    },
    {
      name: "Educacion",
      href: "/#educacion",
      icon: "/icons/educacion-icon.svg",
    },
    { name: "Idioma", href: "/#idioma", icon: "/icons/idioma-icon.svg" },
    {
      name: "Carta De Recomendaciones",
      href: "/#carta-recomendaciones",
      icon: "/icons/carta-recomendacion-icon.svg",
    },
  ];

  const { ref, isInView: localInView } = useInView({ threshold: 0.1 });
  const { setIsInView } = useView();

  useEffect(() => {
    setIsInView(localInView);
  }, [localInView, setIsInView]);
  const navRef = useRef<HTMLDivElement | null>(null);
  const [navHeight, setNavHeight] = useState(0);

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.theme;
      const initialIsDark =
        storedTheme === "dark" ||
        (!storedTheme &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      setIsDark(initialIsDark);
      document.documentElement.classList.toggle("dark", initialIsDark);
      document.documentElement.setAttribute(
        "data-theme",
        initialIsDark ? "dark" : "light"
      );
    }
  }, []);

  const toggleDarkMode = () => {
    if (typeof window !== "undefined") {
      const newIsDark = !isDark;
      setIsDark(newIsDark);
      localStorage.theme = newIsDark ? "dark" : "light";
      document.documentElement.classList.toggle("dark", newIsDark);
      document.documentElement.setAttribute(
        "data-theme",
        newIsDark ? "dark" : "light"
      );
    }
  };

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

        <FormControlLabel
          control={
            <MaterialUISwitch
              onChange={toggleDarkMode}
              sx={{ m: 1 }}
              checked={isDark}
            />
          }
          label=""
        />
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
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 items-center gap-2 sm:gap-4">
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
