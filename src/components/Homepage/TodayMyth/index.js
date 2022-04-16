import React, { useState, useEffect } from "react";
import ArrowDown from "../../ArrowDown";
import { baseURL } from "../../../utils/axios";
import { fetchRandomMyth } from "../../../utils/fetchApi";

import "./TodayMyth.scss";

const TodayMyth = () => {
  const [randomMyth, setRandomMyth] = useState([]);

  useEffect(() => {
    fetchRandomMyth(setRandomMyth);
  }, []);

  if (randomMyth.length === 0) {
    return null;
  }

  // const data = { ...randomMyth[0] };
  const constellation = randomMyth[0];

  return (
    <section id="Myth" className="Section Myth">
      <h2 className="Section-Title">Retrouvez les mythes</h2>

      <div className="Block Myth-Block">
        <h3 className="Title Title--small Myth-Block-Title">
          Constellation {constellation.constellation.name}
        </h3>
        <div className="Myth-Block-Container">
          <figure className="Myth-Picture">
            <img
              src={`${baseURL}${constellation.constellation.img_url} `}
              alt={`Constellation ${constellation.constellation.name} `}
            />
            <figcaption className="Title Title--small Myth-Picture-Title">
              {constellation.constellation.latin_name}
            </figcaption>
          </figure>
          <div className="Myth-Description">
            <h3 className="Myth-Description-Title">Mythe :</h3>
            <p className="Myth-Description-Text">
              D'origine {constellation.origin}, {constellation.legend}
            </p>
            <h3 className="Myth-Description-Title">Histoire :</h3>
            <p className="Myth-Description-Text">
              {constellation.constellation.story}
            </p>
            <h3 className="Myth-Description-Title">Répérage :</h3>
            <p className="Myth-Description-Text">
              {constellation.constellation.spotting}
            </p>
          </div>
        </div>
      </div>

      <ArrowDown href="#Map" />
    </section>
  );
};

export default TodayMyth;
