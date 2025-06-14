"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Select, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import Image from "next/image";

const flags = {
  en: "/icons/uk-icon.svg",
  es: "/icons/chile-icon.svg",
};

const LanguageSelector = () => {
  const params = useParams();
  const locale = params.locale || "es";

  return (
    <Select
      value={locale}
      onChange={(e) => {
        const newLocale = e.target.value as string;
        window.location.href = `/${newLocale}/profile`;
      }}
      size="small"
      sx={{ minWidth: 120 }}
      renderValue={(value) => (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Image
            src={flags[value as keyof typeof flags]}
            alt={value as string}
            width={24}
            height={16}
          />
          <span>{value}</span>
        </div>
      )}
    >
      {Object.entries(flags).map(([key, flag]) => (
        <MenuItem key={key} value={key}>
          <ListItemIcon>
            <Image src={flag} alt={key} width={24} height={16} />
          </ListItemIcon>
          <ListItemText>{key}</ListItemText>
        </MenuItem>
      ))}
    </Select>
  );
};

export default LanguageSelector;
