import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import NorthEastRounded from "@mui/icons-material/NorthEastRounded";

import SignatureStroke, { StrokeStop } from "../../components/signature-stroke/signature-stroke.component";
import { roles } from "../../data/work";

const Experiences = () => {
  const { t } = useTranslation();

  const stops: StrokeStop[] = roles.map((role) => ({
    id: role.id,
    when: t(role.periodKey),
    label: t(role.domainKey),
    children: (
      <>
        <h2 className="h3" style={{ marginTop: "0.25rem" }}>
          {t(role.roleKey)},{" "}
          <a href={role.href} target="_blank" rel="noopener noreferrer">
            {role.company}
            <span className="sr-only"> {t("opensInNewTab")}</span>
          </a>
          <NorthEastRounded fontSize="small" aria-hidden="true" style={{ verticalAlign: "-0.1em", marginLeft: "0.2rem", color: "var(--cobalt)" }} />
        </h2>
        <ul className="role-points">
          {role.bullets.map((key) => (
            <li key={key}>{t(key)}</li>
          ))}
        </ul>
      </>
    ),
  }));

  return (
    <>
      <header className="wrap page-head">
        <h1 className="display">{t("experiencesTitle")}</h1>
      </header>
      <section className="wrap split" style={{ paddingBottom: "clamp(4rem, 10vw, 8rem)" }} aria-label={t("experiencesTitle")}>
        <div className="split__aside">
          <p className="lede">{t("experiencesIntro")}</p>
          <dl className="meta" style={{ marginTop: "2rem" }}>
            {roles.map((role) => (
              <Fragment key={role.id}>
                <dt>{t(role.periodKey)}</dt>
                <dd>{role.company}</dd>
              </Fragment>
            ))}
          </dl>
        </div>
        <SignatureStroke stops={stops} />
      </section>
    </>
  );
};

export default Experiences;
