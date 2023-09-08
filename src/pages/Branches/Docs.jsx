import React from "react";
import Header from "../../layout/main/Header";

const Docs = () => {
  return (
    <main className="docs">
      <Header logo={"SIMONSDOCS"} LinkTo={"To Lab"}></Header>

      <section className="docs__intro">
        <h1>
          documentation For <span>Simon's Lab</span>
        </h1>
        <p>for future me, by ancient me.</p>
      </section>

      <section className="docs__info">
        <nav className="docs__info-navigation">
          <h3>Simonslab</h3>
          <a href="#info-1">Creating a Branch</a>
          <h3>SimonsDocs</h3>
          <a href="#info-1">Creating a doc</a>
          <a href="#info-1">Creating a Branch</a>
          <h3>Simonsgallery</h3>
          <a href="#info-1">Creating a Branch</a>
        </nav>

        <div className="docs__info-instructions">
          <div id="info-1">
            <h1>Creating a Branch</h1>
            
              <p>you should do this and this and this</p>
              <ul>
                <li>1. Fix the typo</li>
                <li>2. Second dummy task</li>
                <li>3. third dummy task</li>
                <li>4. fourth dummy task</li>
              </ul>
              <code>
                some piece of code that can be copied directly from the docs
              </code>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Docs;
