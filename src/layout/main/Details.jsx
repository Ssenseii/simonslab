import React from "react";
import List from "../../components/List";

const Details = ({
  title,
  description,
  timespan,
  tools,
  livesite,
  ideas,
  goals,
  execution,
  functionality,
  concepts,
  performance,
  graphic
}) => {



  return (
    <section id="details" className="details">
      <div className="details__info">
        <h1 className="details__info-title">{title}</h1>
        <div className="details__info-meta">
          <p className="details__info-meta-description">{description}</p>
          <ul className="details__info-meta-list">
            <ul>
              <li>+ TIMESPAN </li>
              <li>+ TOOLS</li>
              <li>+ LIVE WEBSITE</li>
            </ul>

            <ul>
              <li> {timespan}</li>
              <li> {tools}</li>
              <li>
                {" "}
                <a target="_blank" rel="noreferrer" href={livesite}>
                  {title}
                </a>
              </li>
            </ul>
          </ul>
        </div>
        <div className="details__info-data">
          <List title="IDEAS" list={ideas}></List>
          <List title="GOALS" list={goals}></List>
          <List title="EXECUTION" list={execution}></List>
          <List title="FUNCTIONALITY" list={functionality}></List>
          <List title="PERFORMANCE" list={performance}></List>
          <List title="CONCEPTS LEARNED" list={concepts}></List>
        </div>
      </div>
      <div className="details__graphic">
        <img src={`assets/graphics/details/${graphic}.png`} alt="graphic_website" />
      </div>
    </section>
  );
};

export default Details;
