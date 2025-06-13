import "@/app/ui/globals.css";
import type { Metadata } from "next";
import Top from "../ui/Top";
import { ViewProvider } from "../context/ViewContext";

export const metadata: Metadata = {
  title: "Emmanuel Morales CV",
  description: "Desarrollador Web Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const setThemeScript = `
    (function() {
      const theme = localStorage.theme;
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
      }
    })();
  `;

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: setThemeScript }} />
      </head>
      <body>
        <ViewProvider>
          <Top />
          <div className="fixed bottom-6 right-6 flex gap-4 z-50">
            <a
              href="/pdf/CV_Emmanuel_Morales_I.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full shadow-lg transition-colors duration-300"
            >
              Ver CV
            </a>

            <a
              href="/pdf/CV_Emmanuel_Morales_I.pdf"
              download
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-full shadow-lg transition-colors duration-300"
            >
              Descargar CV
            </a>
          </div>

          <main>{children}</main>
        </ViewProvider>
        <footer className="mt-16 border-t h-[4%] border-gray-300 py-6 text-center text-sm text-gray-600">
          <p className="font-semibold text-gray-700">Emmanuel Morales</p>
          <p className="mt-1">Desarrollado con Next.js y Tailwind CSS</p>
          <p className="mt-1">
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </p>

          <p className="mt-1">
            Los logotipos de tecnologías mostrados son marcas registradas de sus
            respectivos dueños y se utilizan aquí únicamente con fines
            ilustrativos.
          </p>
        </footer>
      </body>
    </html>
  );
}
