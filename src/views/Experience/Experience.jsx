import React, { useState } from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return (
    <div
      className="timeline-item"
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveDescription(props.description);
      }}
    >
      <div className="experience-info">
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}

export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = useState("");
  const [activeDescription, setActiveDescription] = useState("");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem
            title="Visiting Researcher at the Cleveland Clinic Center for Brain Health"
            description="Developed a study on the missed experiences of patients with Alzheimer’s, which included Institutional
            Review Board approval and 8 research appointments. Recruited for and shadowed other research studies focused on dementia."
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
            title="Intern at the Cleveland Clinic Center for Neurological Restoration"
            description="Designed a study on the patients’ preferences (e.g., appropriate wait time and physicians’ attire). Created
            informational pamphlets on movement disorders for patients’ families."
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
            title="VR/AR Association Student Committee Co-Chair"
            description="Oversaw 7 students in publishing 8 literary resources that teach the basics of virtual and augmented reality."
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
            title="Parma Heights Senior Center Activity Organizer"
            description="Sponsored by Harvard SPARK to organize and lead remote activities (games, crafts, etc.) for members of the Senior Center. Now transitioning to activities led by members and seeking technology grants."
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <p>{activeDescription}</p>
        </div>
      </div>
    </div>
  );
}