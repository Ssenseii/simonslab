import React from "react";
import { saveAs } from "file-saver";

const Extras = () => {

    const handleDownload = () => {
      var source = `assets/cv/cv.pdf`;
      saveAs(source, `Simon Reinhardt - CV.pdf`);
    };

  return (
    <ul className="about__extras">
      <ul>
        <li>EXPERIENCE</li>
        <li>
          <p>
            I'm an independent FrontEnd Developer + Designer with over 4 years
            of experience. Across those years, I haven't had much experience
            working with big brands as much as I had with smaller indepedant
            companies and my own experimental projects. <br />
            <br />
            In general, my approach is researching and learning about a topic
            and studying it enough to understand the basics for me to play
            around with later. <br />
            <br /> I try my best to synthesize more unique brand/art directions
            with inspired strategy. While I haven't spent a long time in the
            design world, I've pursued a path in which I've remained always on
            the lookout for prospects that could teach me more and give me a
            unique style. I've had extensive experience with traditional art and
            it's one of my key points in life aside from constantly reading, but
            I've tried my best to give my digital presence its own unique look
            by studying the great ones in the field. <br /> <br />I spend much
            of my spare time reading and refining my own craft as a means to
            keep progressing as an individual, and importantly to understand how
            to best show my abilities and be the greatest frontend designer in
            my country. While the majority of my previous work is in the
            experimental, unique brand of my company "SIMONSLAB", I'm currently
            prioritizing branding opportunities both to reach financial freedom,
            and to work with a team of developers and learn more in a
            professional setting.
            <br /> <br /> My experience and interests also go far broader into
            tangential fields, and I'm constantly exploring new forms/mediums of
            creative output as different needs arise. Some of my more recent
            explorations include 3d graphics frm the 2000s era of PS2, Shader
            Production, Three JS Design, inclusion of human touch in digital
            design , etc... so I readily welcome a challenge.
          </p>
        </li>
      </ul>
      <ul>
        <li>DOWNLOADABLE CV</li>
        <li className="cv" onClick={handleDownload}>
          Simon-Reinhardt_Curriculum Vitae.pdf
        </li>
      </ul>
      <ul>
        <li>LIBRARY OF BOOKS</li>
        <li>
          <span style={{ opacity: "0.7" }}>### CSS</span> <br />
          <br />
          The Web in motion - Smashing magazin <br />
          Design Systems - Alta Kholtmatova
          <br />
          Responsive Web design - Ben Frain <br />
          Unleashing the power of CSS - Sitepoint
          <br />
          CSS the definitive guide - O'reilley media
          <br />
          CSS in Depth - Keith grant
          <br />
          CSS Secrets, Better Solution... - Lea Verou
          <br />
          Mastering CSS grid - Pascal Thormerier
          <br />
          Sass and Compass in action - Various Writers
          <br />
          <br />
          <span style={{ opacity: "0.7" }}>### JAVASCRIPT</span> <br />
          <br />
          Pro Javascript techniques - John Resig <br />
          Learning Javascript design Patterns - Addy Osmani <br />
          Mastering Javascript Functional Programming - Federico Kereki
          <br />
          Javascript Data Structures and algorithms - Sammy Bay <br />
          Professional Javascript for Web developpers - Matt Frisbie <br />
          <br />
          <span style={{ opacity: "0.7" }}>### Programming</span> <br />
          <br />
          Learning Patterns - XXX <br />
          Introduction to Algorithms - Thomas H Cormen <br />
          Cracking the Coding Interview - 6th Edition <br />
          Grokking Algorithms - Aditya Bhargava <br /> <br />
          <span style={{ opacity: "0.7" }}>
            ...and much more (check "Simons Library")
          </span>{" "}
          <br />
          <br />
        </li>
      </ul>
      <ul>
        <li>Projects</li>
        <li>
          the_watchlist_problem.txt <br />
          MoonPhases.txt <br />
          <span style={{ textDecoration: "line-through" }}>
            My_Summer_With_Esme.txt
          </span> {" "}
          (private) <br />
          Communion_Of_Orizawa.jpeg
        </li>
      </ul>
    </ul>
  );
};

export default Extras;
