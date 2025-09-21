const projects = [
  {
    id: "underpacked",
    title: "Underpacked!",
    inProgress: true,
    shortDescription: (<>Master's degree final project using  <span className="purple">UE5 and C++</span></>),
    fullDescription: "Welcome to the largest parcel delivery company in the galaxy! Embark on a space odyssey as a delivery driver, either alone or with a friend. Dodge threats, survive job insecurity, and deliver packages. Prove that you are the best delivery drivers in the universe!",
    isSoloProject: false,
    contributions: [
      "Several systems (Events, messages)",
      (<>Custom Smart Objects-like interaction system making use of <strong className="purple">GAS</strong> (abilities, effects and attribute sets)</>),
      "Utility AI system creating influences that vary that utility depending on the environment.",
      "Action Points using Behavior Trees to link AI behaviors to SmartObjects.",
      "Use of EQS (Environment Query System) to choose the best action point regarding its utility value and other factors like distance or reachability.",
    ],
    image: require("../../Assets/Projects/underpacked.jpg"),
    ghLink: null,
    glabLink: null,
    itchioLink: null,
    steamLink: "https://store.steampowered.com/app/3587480/Underpacked/",
    driveLink: null,
    technologies: ['Unreal Engine 5', 'C++', 'Perforce', 'Jira', 'Discord']
  },
  {
    id: "simple-game-engine",
    title: "Simple Game Engine",
    inProgress: true,
    shortDescription: (<>Custom game engine programmed in <span className="purple">C++</span> using SDL and trying to use an <span className="purple">ECS</span> architecture.</>),
    fullDescription: null,
    isSoloProject: true,
    contributions: [
      "Main Game Loop",
      "Input wrapper to abstract from SDL",
      (<>Entity and component management using <strong className="purple">ECS</strong> arquitecture</>),
    ],
    image: require("../../Assets/Projects/simple-game-engine.png"),
    ghLink: null,
    glabLink: "https://gitlab.com/eduardoricomanzanera/simplegameengine",
    itchioLink: null,
    steamLink: null,
    driveLink: null,
    technologies: ['C++', 'Git', 'Jira']
  },
  {
    id: "gbb",
    title: "Grabs Bots Battle",
    inProgress: false,
    shortDescription: (<>Online multiplayer game made with<span className="purple">UE4 using C++</span></>),
    fullDescription: null,
    isSoloProject: false,
    contributions: [
      (<><strong className="purple">Multiplayer</strong></>),
      "Several game modes",
      "Weapons and effects system",
      "Player and item spawn system",
      "Camera that adjusts to the players' location"
    ],
    image: require("../../Assets/Projects/gbb.png"),
    ghLink: null,
    glabLink: "https://gitlab.com/eduardoricomanzanera/thecoretfm",
    itchioLink: null,
    steamLink: null,
    driveLink: "https://drive.google.com/drive/folders/1KAbCOtP0VA7O-OQEZQfetDFpkpkctyH0",
    technologies: ['Unreal Engine 4','C++', 'Git']
  },
  // … other projects
];

export default projects;