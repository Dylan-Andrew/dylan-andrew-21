import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";

import portrait from "../../assets/brand/portrait.webp";
import SignatureStroke, { StrokeStop } from "../../components/signature-stroke/signature-stroke.component";
import HeroStroke from "../../components/signature-stroke/hero-stroke.component";
import ExternalLink from "../../components/external-link/external-link.component";
import { WorkItem, contact, isLiveStatus, work } from "../../data/work";

const Feature = ({ item, flipped }: { item: WorkItem; flipped: boolean }) => {
  const { t } = useTranslation();
  const title = t(item.titleKey);
  const titleId = `feature-${item.id}-title`;
  return (
    <article className={`feature${flipped ? " feature--flip" : ""}`} aria-labelledby={titleId}>
      <div>
        <h3 className="h3" id={titleId}>
          {title}
        </h3>
        <dl className="meta">
          <dt>{t("fieldDomain")}</dt>
          <dd>{t(item.domainKey)}</dd>
          {item.years && (
            <>
              <dt>{t("fieldYears")}</dt>
              <dd>{item.years}</dd>
            </>
          )}
          <dt>{t("fieldStatus")}</dt>
          <dd>
            <span className={`status${isLiveStatus(item.statusKey) ? " status--live" : ""}`}>{t(item.statusKey)}</span>
          </dd>
        </dl>
        {item.summaryKey && <p>{t(item.summaryKey)}</p>}
        <p className="feature__actions">
          <Link className="arrow-link" to={`/projects?p=${item.id}`}>
            {t("viewProject", { name: title })}
            <ArrowForwardRounded fontSize="small" aria-hidden="true" />
          </Link>
          <ExternalLink item={item} />
        </p>
      </div>
      {item.image && (
        <figure className="feature__shot">
          <img src={item.image.src} alt="" width={item.image.width} height={item.image.height} loading="lazy" decoding="async" />
        </figure>
      )}
    </article>
  );
};

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
            <Link className="arrow-link" to="/projects?p=parc-ferme">
              {t("viewProject", { name: t("parcFermeTitle") })}
              <ArrowForwardRounded fontSize="small" aria-hidden="true" />
            </Link>
          </p>
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

  const featured = work.filter((w) => w.group === "shipped");
  const explorations = work.filter((w) => w.group === "explorations");

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
          {featured.map((item, index) => (
            <Feature key={item.id} item={item} flipped={index % 2 === 1} />
          ))}

          <div className="also">
            {explorations.map((item) => (
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
