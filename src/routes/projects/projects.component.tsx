import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AddRounded from "@mui/icons-material/AddRounded";
import NorthEastRounded from "@mui/icons-material/NorthEastRounded";

import { WorkGroup, WorkItem, work } from "../../data/work";

const Meta = ({ item }: { item: WorkItem }) => {
  const { t } = useTranslation();
  const live = item.statusKey === "statusInUse" || item.statusKey === "statusShipped";
  return (
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
        <span className={`status${live ? " status--live" : ""}`}>{t(item.statusKey)}</span>
      </dd>
      <dt>{t("fieldPlatform")}</dt>
      <dd>{t(item.platformKey)}</dd>
    </dl>
  );
};

const ExternalLink = ({ item }: { item: WorkItem }) => {
  const { t } = useTranslation();
  if (!item.link) return null;
  return (
    <a className="arrow-link" href={item.link.href} target="_blank" rel="noopener noreferrer">
      {t(item.link.labelKey)}
      <NorthEastRounded fontSize="small" aria-hidden="true" />
      <span className="sr-only"> {t("opensInNewTab")}</span>
    </a>
  );
};

const Entry = ({ item, isTarget }: { item: WorkItem; isTarget: boolean }) => {
  const { t } = useTranslation();
  const titleId = `${item.id}-title`;
  return (
    <article className={`entry${isTarget ? " is-target" : ""}`} id={item.id} aria-labelledby={titleId}>
      <div className="entry__aside">
        <h3 className="h3" id={titleId}>
          {t(item.titleKey)}
        </h3>
        <Meta item={item} />
      </div>
      <div className="entry__main">
        {item.image && (
          <figure className="entry__shot">
            <img
              src={item.image.src}
              alt=""
              width={item.image.width}
              height={item.image.height}
              loading="lazy"
              decoding="async"
            />
          </figure>
        )}
        <p>{t(item.descriptionKey)}</p>
        {item.learnedKey && (
          <p className="learned">
            <span>{t("fieldLearned")}</span>
            {t(item.learnedKey)}
          </p>
        )}
        <details className="details" open={isTarget || undefined}>
          <summary>
            {t("howBuilt")}
            <AddRounded aria-hidden="true" />
          </summary>
          <div className="details__body">
            {item.highlights.length > 0 && (
              <ul>
                {item.highlights.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
            )}
            <p className="stack">
              <strong>{t("fieldStack")}:</strong> {item.stack.join(" · ")}
            </p>
          </div>
        </details>
      </div>
    </article>
  );
};

const Mini = ({ item }: { item: WorkItem }) => {
  const { t } = useTranslation();
  return (
    <article className="mini" id={item.id} aria-labelledby={`${item.id}-title`}>
      {item.image && (
        <figure className="mini__shot">
          <img src={item.image.src} alt="" width={item.image.width} height={item.image.height} loading="lazy" decoding="async" />
        </figure>
      )}
      <h3 id={`${item.id}-title`}>{t(item.titleKey)}</h3>
      <p className="mini__meta">
        {t(item.statusKey)} · {item.stack.join(", ")}
        {item.years ? ` · ${item.years}` : ""}
      </p>
      <p>{t(item.descriptionKey)}</p>
      <ExternalLink item={item} />
    </article>
  );
};

const groups: { id: WorkGroup; titleKey: string; introKey?: string }[] = [
  { id: "shipped", titleKey: "groupShipped" },
  { id: "explorations", titleKey: "groupExplorations", introKey: "groupExplorationsIntro" },
  { id: "games", titleKey: "groupGames", introKey: "groupGamesIntro" },
];

const Projects = () => {
  const { t } = useTranslation();
  const [params] = useSearchParams();
  const target = params.get("p");

  useEffect(() => {
    if (!target) return;
    const el = document.getElementById(target);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    requestAnimationFrame(() => el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }));
  }, [target]);

  return (
    <>
      <header className="wrap page-head">
        <h1 className="display">{t("workTitle")}</h1>
        <p className="lede">{t("workIntro")}</p>
      </header>
      <div className="wrap">
        {groups.map((group) => {
          const items = work.filter((w) => w.group === group.id);
          return (
            <section key={group.id} className="group" aria-labelledby={`group-${group.id}`}>
              <div className="group__head">
                <h2 className="h2" id={`group-${group.id}`}>
                  {t(group.titleKey)}
                </h2>
                {group.introKey && <p className="lede">{t(group.introKey)}</p>}
              </div>
              {group.id === "games" ? (
                <div className="mini-grid">
                  {items.map((item) => (
                    <Mini key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                items.map((item) => <Entry key={item.id} item={item} isTarget={item.id === target} />)
              )}
            </section>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
