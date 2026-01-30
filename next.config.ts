import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

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

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
