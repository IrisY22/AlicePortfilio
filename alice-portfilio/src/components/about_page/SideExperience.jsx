
function Circle1({ setSideExperience }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseOver={() => setSideExperience('Circle1')}>
      <circle cx="16" cy="16" r="16" fill="white" />
    </svg>
  );
}

function Circle2({ setSideExperience }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseOver={() => setSideExperience('Circle2')}>
      <circle cx="16" cy="16" r="16" fill="white" />
    </svg>
  );
}

function Circle3({ setSideExperience }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseOver={() => setSideExperience('Circle3')}>
      <circle cx="16" cy="16" r="16" fill="white" />
    </svg>
  );
}

function Circle4({ setSideExperience }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseOver={() => setSideExperience('Circle4')}>
      <circle cx="16" cy="16" r="16" fill="white" />
    </svg>
  );
}

function Circle5({ setSideExperience }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseOver={() => setSideExperience('Circle5')}>
      <circle cx="16" cy="16" r="16" fill="white" />
    </svg>
  );
}

export { Circle1, Circle2, Circle3, Circle4, Circle5 };

function Intro() {
  return (
    <div>
      Hover over the dots on the timeline to explore my professional experiences
      <svg width="380" height="2" viewBox="0 0 399 2" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="1" x2="399" y2="1" stroke="#C3D3E2" stroke-opacity="0.81" stroke-width="2" />
      </svg>
    </div>
  );
}

function Military() {
  return (
    <>
      <div className="h1">
        Military Service
      </div>
      <div className="small-bold">Adjutant and personnel coordinator, The main headquarters of the Military Police Corps</div>
      <div className="years">2014-2016</div>
      <div className="list">
        <div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr">
            <circle cx="6" cy="6" r="6" fill="#99A68D" />
          </svg>
          Unit personnel management
        </div>
        <div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr">
            <circle cx="6" cy="6" r="6" fill="#99A68D" />
          </svg>
          Commanding the soldiers serving in the adjutant branch
        </div>
        <div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr">
            <circle cx="6" cy="6" r="6" fill="#99A68D" />
          </svg>
          Managing the onboarding and transfers of headquarters soldiers      </div>
        <div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr">
            <circle cx="6" cy="6" r="6" fill="#99A68D" />
          </svg>
          Managing unit registration and personal records
        </div>
      </div>

    </>
  )
}

function NineWest() {
  return (
    <>
      <div className="h1">
        'Nine West' store
      </div>
      <div className="small-bold">Assistant manager</div>
      <div className="years">2016-2017</div>
      <div className="list">
        <div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr">
            <circle cx="6" cy="6" r="6" fill="#99A68D" />
          </svg>
          Recruiting, interviewing, and managing employees
        </div>
        <div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr">
            <circle cx="6" cy="6" r="6" fill="#99A68D" />
          </svg>
          Professional training for new employees
        </div>
        <div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr">
            <circle cx="6" cy="6" r="6" fill="#99A68D" />
          </svg>
          Inventory management
        </div>
        <div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr">
            <circle cx="6" cy="6" r="6" fill="#99A68D" />
          </svg>
          In-person customer service
        </div>
      </div>
    </>
  )
}

function YesPlanet() {
  return (
    <>
      <div className="h1">
        Yes Planet
      </div>
      <div className="small-bold">Operation room supervisor</div>
      <div className="years">2017-2022</div>
      <div className="list">
        <div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr">
            <circle cx="6" cy="6" r="6" fill="#99A68D" />
          </svg>
          Managing the control room team and supervising their performance.
        </div>
        <div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr">
            <circle cx="6" cy="6" r="6" fill="#99A68D" />
          </svg>
          Developing programs to improve efficiency in the control room.
        </div>
        <div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr">
            <circle cx="6" cy="6" r="6" fill="#99A68D" />
          </svg>
          Utilizing various software and applications for monitoring and controlling operation room operations.        </div>
        <div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr">
            <circle cx="6" cy="6" r="6" fill="#99A68D" />
          </svg>
          Employee Shift Scheduling
        </div>
        <div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr">
            <circle cx="6" cy="6" r="6" fill="#99A68D" />
          </svg>
          Interviewing and Recruiting employees and training them for work.
        </div>
      </div>
    </>
  )
}

function MinistryEducation() {
  return (
    <>
      <div className="h1">
        Ministry of education
      </div>
      <div className="small-bold">English teacher and class educator, Rechasim elementary school</div>
      <div className="years">2021-2024</div>
      <div className="list">
        <div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr">
            <circle cx="6" cy="6" r="6" fill="#99A68D" />
          </svg>
          Effective communication with parents, teachers, and educational professionals
        </div>
        <div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr">
            <circle cx="6" cy="6" r="6" fill="#99A68D" />
          </svg>
          Collaborating with colleagues on educational projects
        </div>
        <div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr">
            <circle cx="6" cy="6" r="6" fill="#99A68D" />
          </svg>
          Managing a schedule and classroom system
          <div>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr">
              <circle cx="6" cy="6" r="6" fill="#99A68D" />
            </svg>
            Teaching English at various levels while using and integrating technological tools to promote learning
          </div>
        </div>
      </div>

    </>
  )
}

function Freelancer() {
  return (
    <>
      <div className="h1">
        Freelance
      </div>
      <div className="small-bold">Graphic designer, UX UI designs</div>
      <div className="years">2024-current</div>
      <div className="list">
        <div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr">
            <circle cx="6" cy="6" r="6" fill="#99A68D" />
          </svg>
          Crafting intuitive and visually appealing user interfaces that enhance user experience and drive engagement
        </div>
        <div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr">
            <circle cx="6" cy="6" r="6" fill="#99A68D" />
          </svg>
          Transforming complex ideas into user-friendly designs, ensuring seamless interaction across digital platforms.
        </div>
        <div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr">
            <circle cx="6" cy="6" r="6" fill="#99A68D" />
          </svg>
          wireframing, prototyping, and visual design, with a focus on responsive and accessible design principles.
          <div>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr">
              <circle cx="6" cy="6" r="6" fill="#99A68D" />
            </svg>
            Collaborate effectively with clients to deliver custom UX/UI solutions that align with business goals and user needs.
          </div>
        </div>
      </div>

    </>
  )
}

export { Intro, Military, NineWest, YesPlanet, MinistryEducation, Freelancer };
