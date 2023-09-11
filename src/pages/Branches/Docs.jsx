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
          <a href="#create-doc">Creating a doc</a>
          <a href="#info-1">Using The Editor</a>
          <h3>Simonsgallery</h3>
          <a href="#info-1">Adding an image</a>
        </nav>

        <div className="docs__info-instructions">
          <div className="instruction" id="create-branch">
            <h1 className="instruction__h1">Creating a Branch</h1>
            <h2 className="instruction__h2">Definition</h2>
            <h3 className="instruction__h3">What is a branch?</h3>
            <p className="instruction__p">
              A branch is a page or a collection of pages that revolve around a
              topic or an interest. <br /> A branch always has a header with the
              logo starting with "SIMONS..." and a back to the lab button.
            </p>
            <h2 className="instruction__h2">How to create a branch?</h2>
            <ol className="instruction__ordered">
              <li className="instruction__li">
                In the "src/pages/Branches" folder, create a new jsx component
                with the name of the branch (without the "SIMONS")
              </li>

              <li className="instruction__li">
                Add a function and its export default.
              </li>
              <li className="instruction__li">
                import the function into the "src/App.jsx"
              </li>
              <li className="instruction__li">
                add a new route with the same capitalization as below inside the
                'Routes' tag:
              </li>
              <div className="instruction__code">
                <code>
                  &lt;Route path=&quot;/example&quot; element=&#123; &lt;
                  Example /&gt; &#125; &gt;&lt;/Route&gt;
                </code>
              </div>
              <li className="instruction__li">
                inside your new component, import Header from
                "../../layout/main/header"
              </li>
              <li className="instruction__li">
                Add the header tag inside your main tag as follows:
              </li>
              <div className="instruction__code">
                <code>
                  &lt;Header logo=&#123;&quot;SIMONSEXAMPLE&quot;&#125;
                  LinkTo=&#123;&quot;To Lab&quot;&#125;&gt;&lt;/Header&gt;
                </code>
              </div>
              <li className="instruction__li">
                Don't worry about the Link tag, it's automatically generated
                using your logo by removing the "simons" and keeping the rest.
              </li>
            </ol>
            <h2 className="instruction__h2">How to reach your branch?</h2>
            <p className="instruction__p">
              navigation system for branches is created specifically to keep
              people from them. it's hard to reach them unless you know the
              exact link to add after the "simonslab.vercel.app/" <br />
              but there's a pathway !!!
              <br />
            </p>
            <p className="instruction__p">
              there's a clickable list of a few paths I added into the about
              page. <br /> to add your component, all you have to do is:{" "}
            </p>
            <ol className="instruction__ordered">
              <li className="instruction__li">
                {" "}
                Go to "src/layout/about/Lists"
              </li>
              <li className="instruction__li">
                {" "}
                Find the Branches Compoenent
              </li>
              <li className="instruction__li">
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

            <p className="instruction__p">
              don't worry about formatting the string inside the array, it
              auto-corrects itself, but it must have the "simons" at the
              beginning <br />
              (to keep up with the aesthetic of the about page)
            </p>
          </div>

          {/* next doc */}

          <div className="instruction" id="create-doc">
            <h1 className="instruction__h1">Creating a doc</h1>
            <h2 className="instruction__h2">how to make one of these?</h2>
            <p className="instruction__p">
              The execution has been made simpler after the creation of the
              "docs editor". <br /> Follow these steps and you'll create a
              document of your own in no time !!
            </p>
            <p className="instruction__p"></p>
            <ol className="instruction__ordered">
              <li className="instruction__li">
                {" "}
                Go to "src/pages/Branches/Docs.jsx"
              </li>
              <li className="instruction__li">
                {" "}
                in the nav section with the "docs__info" className: add a link
                to the document you want to create as follows, href must be
                filled with an appropriate id and the link must be placed under
                the appropriate section of the related branch.
              </li>
              <li className="instruction__li">
                {" "}
                in the div with the className: "docs__info-instructions": create
                a new div with the className "instruction" and add the same id
                as the one you added before.
              </li>
              <li className="instruction__li"> go to the docs editor</li>
              <li className="instruction__li">
                {" "}
                write your document in the docs editor{" "}
              </li>
              <li className="instruction__li">
                {" "}
                when finished, click the copy to clipboard button on the header
              </li>
              <li className="instruction__li">
                {" "}
                paste inside the div you have created
              </li>
              <p className="instruction__p"></p>
            </ol>
            <p></p>
            <p className="instruction__p"></p>
            <p className="instruction__p">
              congratulations, you have create a doc
            </p>
            <p className="instruction__p"></p>
            <h2 className="instruction__h2">Minor things to keep track of</h2>
            <p className="instruction__p">
              as of yet, the docs editor doesn't fully support the "code"
              keyword due to technical difficulties with translating "{" and "}"
              into jsx, so you'll have to do that manually.
            </p>
            <p className="instruction__p">
              the HTML codes for the braces are: (remove the + sign){" "}
            </p>
            <ul>
              <li className="instruction__li"> &#123;: &amp;# + 123;</li>
              <li className="instruction__li"> &#125;: &amp;# + 125;</li>
              
            </ul>
            <p></p>
            <p className="instruction__p">
              {" "}
              list items are supported, but not lists themselves. so in the docs
              editor, if you want to create an ordered list or unordered list.
              just wrap your list items with the appropriate tags, it'll
              translate perfectly. also give them the appropriate classname: "instruction__ordered"
            </p>
            <p className="instruction__p">
              (I would code them in If I knew how){" "}
            </p>
            <p className="instruction__p"></p>
            <p className="instruction__p">
              there are deviders, just write --- at the start of the doc
            </p>
            <h2 className="instruction__h2">notice:</h2>
            <p className="instruction__p">
              this is only temporary until I make the admin dashboard and
              integrate firebase in the next iteration of simonslab.
            </p>
            <p className="instruction__p"> </p>
            <p className="instruction__p"></p>
            <p className="instruction__p"></p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Docs;
