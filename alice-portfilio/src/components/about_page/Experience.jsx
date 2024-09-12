import { useState, useEffect } from "react"
import { Circle1, Circle2, Circle3, Circle4, Circle5 } from "./SideExperience"
import { Intro, Military, NineWest, YesPlanet, MinistryEducation, Freelancer } from "./SideExperience"

function Experience() {

  const [sideExperience, setSideExperience] = useState("")
  const [MyExperience, setMyExperience] = useState(<Intro />)

  useEffect(() => {
    if (sideExperience === "Circle1") {
      setMyExperience(<Military />);
    }
    else if (sideExperience === "Circle2") {
      setMyExperience(<NineWest />);
    }
    else if (sideExperience === "Circle3") {
      setMyExperience(<YesPlanet />);
    }
    else if (sideExperience === "Circle4") {
      setMyExperience(<MinistryEducation />);
    }
    else if (sideExperience === "Circle5") {
      setMyExperience(<Freelancer />);
    }
  }, [sideExperience]);

  return (

    <div className="experiencePrev">
      {/* ARROW SVG  */}
      <div className="arrow">
        <svg width="565" height="16" viewBox="0 0 565 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M564.707 8.70711C565.098 8.31658 565.098 7.68342 564.707 7.29289L558.343 0.928932C557.953 0.538408 557.319 0.538408 556.929 0.928932C556.538 1.31946 556.538 1.95262 556.929 2.34315L562.586 8L556.929 13.6569C556.538 14.0474 556.538 14.6805 556.929 15.0711C557.319 15.4616 557.953 15.4616 558.343 15.0711L564.707 8.70711ZM0 9H564V7H0V9Z" fill="black" />
        </svg>
      </div>

      {/* CIRCLES SVGS */}

      <div className="circles">
        <Circle1 setSideExperience={setSideExperience} />
        <Circle2 setSideExperience={setSideExperience} />
        <Circle3 setSideExperience={setSideExperience} />
        <Circle4 setSideExperience={setSideExperience} />
        <Circle5 setSideExperience={setSideExperience} />
      </div>

      <div className="sideExperience">
        {MyExperience}
      </div>

    </div>
  )
}

export default Experience