

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="border-t border-gray-300 py-6 text-center text-sm text-gray-600">
      <p className="font-semibold text-gray-700">Emmanuel Morales</p>
      <p className="mt-1">{t("developedWith")}</p>
      <p className="mt-1">
        &copy; {new Date().getFullYear()} {t("allRightsReserved")}
      </p>

      <p className="mt-1">{t("disclaimer")}</p>
    </footer>
  );
}
