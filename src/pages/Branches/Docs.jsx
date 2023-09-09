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
          <a href="#create-branch">Creating a Branch</a>
          <h3>SimonsDocs</h3>
          <a href="#info-1">Creating a doc</a>
          <a href="#info-1">Using The Editor</a>
          <h3>Simonsgallery</h3>
          <a href="#info-1">Adding an image</a>
        </nav>

        <div className="docs__info-instructions">
          <div className="instruction" id="create-branch">
            <h1 className="instruction__h1">Creating a Branch</h1>
            <h2 className="instruction__h2">Definition</h2>
            <h3 className="instruction__h3">What is a branch?</h3>
            <p className="instruction__paragraph">
              A branch is a page or a collection of pages that revolve around a
              topic or an interest. <br /> A branch always has a header with the
              logo starting with "SIMONS..." and a back to the lab button.
            </p>
            <h2 className="instruction__h2">How to create a branch?</h2>
            <ol className="instruction__ordered">
              <li className="instruction__ordered-li">
                In the "src/pages/Branches" folder, create a new jsx component
                with the name of the branch (without the "SIMONS")
              </li>

              <li className="instruction__ordered-li">
                Add a function and its export default.
              </li>
              <li className="instruction__ordered-li">
                import the function into the "src/App.jsx"
              </li>
              <li className="instruction__ordered-li">
                add a new route with the same capitalization as below inside the
                'Routes' tag:
              </li>
              <div className="instruction__code">
                <code>
                  &lt;Route path=&quot;/example&quot; element=&#123; &lt;
                  Example /&gt; &#125; &gt;&lt;/Route&gt;
                </code>
              </div>
              <li className="instruction__ordered-li">
                inside your new component, import Header from
                "../../layout/main/header"
              </li>
              <li className="instruction__ordered-li">
                Add the header tag inside your main tag as follows:
              </li>
              <div className="instruction__code">
                <code>
                  &lt;Header logo=&#123;&quot;SIMONSEXAMPLE&quot;&#125;
                  LinkTo=&#123;&quot;To Lab&quot;&#125;&gt;&lt;/Header&gt;
                </code>
              </div>
              <li className="instruction__ordered-li">
                Don't worry about the Link tag, it's automatically generated
                using your logo by removing the "simons" and keeping the rest.
              </li>
            </ol>
            <h2 className="instruction__h2">How to reach your branch?</h2>
            <p className="instruction__paragraph">
              navigation system for branches is created specifically to keep
              people from them. it's hard to reach them unless you know the
              exact link to add after the "simonslab.vercel.app/" <br />
              but there's a pathway !!!
              <br />
            </p>
            <p className="instruction__paragraph">
              there's a clickable list of a few paths I added into the about
              page. <br /> to add your component, all you have to do is:{" "}
            </p>
            <ol className="instruction__ordered">
              <li className="instruction__ordered-li">
                {" "}
                Go to "src/layout/about/Lists"
              </li>
              <li className="instruction__ordered-li">
                {" "}
                Find the Branches Compoenent
              </li>
              <li className="instruction__ordered-li">
                {" "}
                Add your component to the array inside the prop as follows:{" "}
              </li>
            </ol>

              <div className="instruction__code">
                <code>
                  &lt;Branches
                  list=&#123;[&quot;Simonslab&quot;,&quot;Simonsblog&quot;,
                  &quot;Simonsprojects&quot;, &quot;Simonsdocs&quot;]&#125;/&gt;
                </code>
              </div>
            
            <p className="instruction__paragraph">
              don't worry about formatting the string inside the array, it auto-corrects itself, but it must have the "simons" at the beginning <br />
              (to keep up with the aesthetic of the about page) 
            </p>
            {/* <ul className="instruction__list">
              <li className="instruction__list-li">1. Fix the typo</li>
              <li className="instruction__list-li">2. Fix the typo</li>
              <li className="instruction__list-li">3. Fix the typo</li>
              <li className="instruction__list-li">4. Fix the typo</li>
            </ul>
            <div className="instruction__code">
              <code>
                &lt;Branches
                list=&#123;[&quot;Simonslab&quot;,&quot;Simonsblog&quot;,
                &quot;Simonsprojects&quot;, &quot;Simonsdocs&quot;]&#125;/&gt;
              </code>
            </div>
            <div className="instruction__devider"></div> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Docs;
