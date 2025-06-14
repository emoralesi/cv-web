import { useTranslations } from "next-intl";

export default function FloatingCV() {
  const t = useTranslations("position-fixed-cv");

  return (
    <div className="fixed bottom-6 right-6 flex gap-4 z-50">
      <a
        href="/pdf/CV_Emmanuel_Morales_I.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full shadow-lg transition-colors duration-300"
      >
        {t("button1")}
      </a>

      <a
        href="/pdf/CV_Emmanuel_Morales_I.pdf"
        download
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-full shadow-lg transition-colors duration-300"
      >
        {t("button2")}
      </a>
    </div>
  );
}
