import React from "react";
import List from "../../components/List";

const Details = ({ data }) => {
  return (
    <section id="details" className="details">
      <div className="details__info">
        <h1 className="details__info-title">{data.title}</h1>

        {/* Description */}
        <div className="details__info-meta">
          <p className="details__info-meta-description">{data.description}</p>
          <ul className="details__info-meta-list">
            <ul>
              <li>+ Timespan </li>
              <li>+ TOOLS</li>
              <li>+ LIVE WEBSITE</li>
            </ul>
            <ul>
              <li> {data.timespan}</li>
              <li> {data.tools}</li>
              <li>
                <a target="_blank" rel="noreferrer" href={data.livesite}>
                  {data.title}
                </a>
              </li>
            </ul>
          </ul>
        </div>

        {/* Grid Details */}
        <div className="details__info-data">
          <List title="IDEAS" list={data.ideas}></List>
          <List title="GOALS" list={data.goals}></List>
          <List title="EXECUTION" list={data.execution}></List>
          <List title="FUNCTIONALITY" list={data.functionality}></List>
          <List title="PERFORMANCE" list={data.performance}></List>
          <List title="CONCEPTS LEARNED" list={data.concepts}></List>
        </div>
      </div>
      <div className="details__graphic">
        <img
          src={`assets/graphics/details/${data.graphic}.png`}
          alt="graphic_website"
        />
      </div>
    </section>
  );
};

export default Details;
