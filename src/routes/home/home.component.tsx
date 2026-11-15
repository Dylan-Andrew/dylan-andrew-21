import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";

import portrait from "../../assets/brand/portrait.webp";
import SignatureStroke, { StrokeStop } from "../../components/signature-stroke/signature-stroke.component";
import HeroStroke from "../../components/signature-stroke/hero-stroke.component";
import { contact, work } from "../../data/work";

const Home = () => {
  const { t } = useTranslation();

  const stops: StrokeStop[] = [
    { id: "sahaza", when: "2020–22", label: `Sahaza Group · ${t("stopSahazaDomain")}`, children: <p>{t("stopSahazaText")}</p> },
    { id: "tripalio", when: "2023", label: `Tripalio · ${t("stopTripalioDomain")}`, children: <p>{t("stopTripalioText")}</p> },
    { id: "finetic", when: "2023–25", label: `Finetic · ${t("stopFineticDomain")}`, children: <p>{t("stopFineticText")}</p> },
    { id: "esiee", when: "2025", label: `ESIEE-IT · ${t("stopEsieeDomain")}`, children: <p>{t("stopEsieeText")}</p> },
    {
      id: "now",
      when: t("now"),
      label: t("stopNowDomain"),
      isNow: true,
      children: (
        <>
          <p>{t("stopNowText")}</p>
          <p>
            <Link className="arrow-link" to="/projects?p=school-management">
              {t("viewProject", { name: t("schoolMgmtTitle") })}
              <ArrowForwardRounded fontSize="small" aria-hidden="true" />
            </Link>
          </p>
        </>
      ),
    },
  ];

  const school = work.find((w) => w.id === "school-management")!;
  const explorations = work.filter((w) => w.group === "explorations");
  const finetic = work.find((w) => w.id === "finetic-saas")!;

  return (
    <>
      <section className="wrap hero" aria-labelledby="hero-name">
        <div className="hero__text">
          <h1 className="display" id="hero-name">
            Dylan
            <br />
            Andrew
          </h1>
          <p className="hero__line">{t("heroLine")}</p>
          <p className="hero__role">{t("heroRole")}</p>
          <div className="hero__actions">
            <Link className="btn btn--solid" to="/projects">
              {t("heroCtaWork")}
            </Link>
            <a className="text-link" href={contact.email}>
              {t("heroCtaContact")}
            </a>
          </div>
        </div>
        <figure className="hero__portrait">
          <img src={portrait} alt={t("portraitAlt")} width={900} height={1200} fetchPriority="high" />
        </figure>
        <HeroStroke />
      </section>

      <section className="section" aria-labelledby="timeline-title">
        <div className="wrap split">
          <div className="split__aside">
            <h2 className="h2" id="timeline-title">
              {t("timelineTitle")}
            </h2>
            <p className="lede">{t("timelineIntro")}</p>
          </div>
          <SignatureStroke stops={stops} labelledBy="timeline-title" lead />
        </div>
      </section>

      <section className="section ink-field" aria-labelledby="shipped-title">
        <div className="wrap">
          <h2 className="h2" id="shipped-title" style={{ marginBottom: "clamp(2rem, 5vw, 3.5rem)" }}>
            {t("selectedWorkTitle")}
          </h2>
          <div className="feature">
            <div>
              <h3 className="h3">{t(school.titleKey)}</h3>
              <dl className="meta">
                <dt>{t("fieldDomain")}</dt>
                <dd>{t(school.domainKey)}</dd>
                <dt>{t("fieldYears")}</dt>
                <dd>{school.years}</dd>
                <dt>{t("fieldStatus")}</dt>
                <dd>
                  <span className="status status--live">{t(school.statusKey)}</span>
                </dd>
              </dl>
              <p>{t("schoolMgmtHighlight1")}. {t("schoolMgmtHighlight2")}.</p>
              <p style={{ marginTop: "1.5rem" }}>
                <Link className="arrow-link" to="/projects?p=school-management">
                  {t("viewProject", { name: t(school.titleKey) })}
                  <ArrowForwardRounded fontSize="small" aria-hidden="true" />
                </Link>
              </p>
            </div>
            {school.image && (
              <figure className="feature__shot">
                <img src={school.image.src} alt="" width={school.image.width} height={school.image.height} loading="lazy" decoding="async" />
              </figure>
            )}
          </div>

          <div className="also">
            {[finetic, ...explorations].map((item) => (
              <div key={item.id}>
                <h3>
                  <Link to={`/projects?p=${item.id}`}>
                    {t(item.titleKey)}
                    <ArrowForwardRounded fontSize="small" aria-hidden="true" />
                  </Link>
                </h3>
                <p>
                  {t(item.domainKey)} · {t(item.statusKey)}
                  {item.years ? ` · ${item.years}` : ""}
                </p>
              </div>
            ))}
          </div>

          <div className="section-foot">
            <Link className="btn btn--line" to="/projects">
              {t("allWork")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
