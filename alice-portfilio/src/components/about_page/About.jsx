import { useEffect, useState } from "react";
import AboutNav from "./AboutNav";
import Introduction from "./Introduction";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

function About() {
  const [part, setPart] = useState("introduction");
  const [svg, setSvg] = useState(null);

  useEffect(() => {
    if (part === "introduction") {
      setSvg(<Introduction />);
    }
    else if (part === "experience") {
      setSvg(<Experience />);
    }
    else if (part === "education") {
      setSvg(<Education />);
    }
    else if (part === "skills") {
      setSvg(<Skills />);
    }
  }, [part]);

  return (
    <div className="aboutPage">
      <nav>
        <AboutNav setPart={setPart} />
      </nav>
      <div className="aboutMePart">
        {svg}
      </div>
    </div>
  );
}

export default About;
