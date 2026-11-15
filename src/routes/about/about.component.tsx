import { Trans, useTranslation } from "react-i18next";

import portrait from "../../assets/brand/portrait.webp";

const tools = [
  { labelKey: "skillsFrontend", items: ["React", "TypeScript", "Material UI"] },
  { labelKey: "skillsBackend", items: ["Python", "Django / DRF", "FastAPI", "PHP"] },
  { labelKey: "skillsDatabase", items: ["PostgreSQL", "MySQL"] },
  { labelKey: "skillsDevOps", items: ["Docker", "Git", "CI/CD", "Pytest", "Jest"] },
  { labelKey: "skillsGameDev", items: ["Unity", "C#"] },
];

const External = ({ href, children }: { href: string; children?: React.ReactNode }) => {
  const { t } = useTranslation();
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> {t("opensInNewTab")}</span>
    </a>
  );
};

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <header className="wrap page-head">
        <h1 className="display">{t("aboutTitle")}</h1>
      </header>

      <section className="wrap" aria-label={t("aboutTitle")}>
        <div className="about-grid">
          <div className="prose">
            <p className="hero__line" style={{ marginTop: 0, maxWidth: "26ch" }}>
              {t("heroLine")}
            </p>
            <p>
              <Trans
                i18nKey="aboutDescription1"
                components={{ university: <External href={`https://www.esiee-it.fr/${t("languageCode")}`} /> }}
              />
            </p>
            <p>
              <Trans i18nKey="aboutDescription2" components={{ finetic: <External href="https://www.finetic.eu" /> }} />
            </p>
            <p>{t("aboutDescription3")}</p>
            <p>{t("aboutDescription4")}</p>
          </div>
          <figure className="about-portrait">
            <img src={portrait} alt={t("portraitAlt")} width={900} height={1200} loading="lazy" decoding="async" />
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="tools-title">
        <div className="wrap">
          <h2 className="h2" id="tools-title" style={{ marginBottom: "2rem" }}>
            {t("toolsTitle")}
          </h2>
          <dl className="tools">
            {tools.map((group) => (
              <div key={group.labelKey}>
                <dt>{t(group.labelKey)}</dt>
                <dd>{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
};

export default About;
