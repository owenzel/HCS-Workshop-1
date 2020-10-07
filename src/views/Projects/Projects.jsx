import React from "react";
import Project from "../../components/Project/Project";

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <Project
        title="Memorcize"
        description="Led a team of student volunteers in prototyping a nostalgic video game in Unity/C# for people with early- to moderate- dementia."
        link="/projects"
      />
      <Project
        title="Fetch"
        description="Created a game of dog fetch with spatial awareness and voice recognition in Unity/C# for the Microsoft HoloLens."
        link="/projects"
      />
    </div>
  );
}