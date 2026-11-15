import { useTranslation } from "react-i18next";
import NorthEastRounded from "@mui/icons-material/NorthEastRounded";

const Passions = () => {
  const { t } = useTranslation();

  const f1 = [
    { label: t("favoriteDriver"), value: "Sebastian Vettel" },
    { label: t("favoriteTeam"), value: t("favoriteTeamValue") },
    { label: t("favoriteCircuit"), value: "Suzuka" },
    { label: t("yearsFollowing"), value: t("yearsFollowingValue") },
  ];
  const dota = [
    { label: t("mainRole"), value: t("mainRoleValue") },
    { label: t("favoriteHero"), value: "Storm Spirit" },
    { label: t("rank"), value: "Immortal" },
    { label: t("totalPlayTime"), value: t("totalPlayTimeValue") },
  ];

  return (
    <>
      <header className="wrap page-head">
        <h1 className="display">{t("passionTitle")}</h1>
        <p className="lede">{t("passionTitleDescription")}</p>
      </header>

      <section className="section ink-field" aria-label={t("passionTitle")}>
        <div className="wrap passions">
          <article className="passion" aria-labelledby="f1-title">
            <h2 id="f1-title">{t("f1Title")}</h2>
            <p className="passion__sub">{t("f1Subtitle")}</p>
            <p>{t("f1Description")}</p>
            <dl className="facts">
              {f1.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </article>
          <article className="passion" aria-labelledby="dota-title">
            <h2 id="dota-title">Dota 2</h2>
            <p className="passion__sub">{t("dota2Subtitle")}</p>
            <p>{t("dota2Description")}</p>
            <dl className="facts">
              {dota.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
            <a className="arrow-link" href="https://stratz.com/players/471547277" target="_blank" rel="noopener noreferrer">
              {t("checkMyProfile")}
              <NorthEastRounded fontSize="small" aria-hidden="true" />
              <span className="sr-only"> {t("opensInNewTab")}</span>
            </a>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="also-title">
        <div className="wrap">
          <h2 className="h2" id="also-title">
            {t("alsoTitle")}
          </h2>
          <p className="lede">{t("alsoText")}</p>
        </div>
      </section>
    </>
  );
};

export default Passions;
