import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/", // Captura la ruta raíz (www.ejemplo.com)
        destination: "/profile", // Redirige a /home
        permanent: true, // Indica que es un redireccionamiento permanente (HTTP 308)
      },
    ];
  },
};

export default nextConfig;
