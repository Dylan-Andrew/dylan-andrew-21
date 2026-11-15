import { useTranslation } from "react-i18next";

const options = [
  { code: "en", short: "EN", nameKey: "languageEnglish" },
  { code: "fr", short: "FR", nameKey: "languageFrench" },
] as const;

const LanguageSwitch = () => {
  const { t, i18n } = useTranslation();
  const current = (i18n.resolvedLanguage ?? "en").startsWith("fr") ? "fr" : "en";

  return (
    <div className="lang-switch" role="group" aria-label={t("language")}>
      {options.map((option) => (
        <button
          key={option.code}
          type="button"
          lang={option.code}
          aria-pressed={current === option.code}
          aria-label={t(option.nameKey)}
          onClick={() => i18n.changeLanguage(option.code)}
        >
          {option.short}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitch;
