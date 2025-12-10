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
    shortDescription: (<>Online multiplayer game made with <span className="purple">UE4 using C++</span></>),
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
  {
    id: "aftermathfellows",
    title: "Aftermath Fellows",
    inProgress: false,
    shortDescription: (<>Player controls a pack of AI volunteers. Made with <span className="purple">Unity</span>. 5th place overall at Ubisoft's Volunteer Week Game Jam 2025.</>),
    fullDescription: (<>
      Lead a growing squad of brave little helpers as they rescue survivors, clear debris, repair damage, and push deeper into disaster zones. Manage your crowd of Fellows, keep them safe from hazards, and complete objectives to restore hope one area at a time.

      Gameplay
      <ol>
        <li>Command a whole crew of tiny responders, each ready to jump into action.</li>
        <li>Clear debris, heal injured civilians, and rebuild pathways to progress.</li>        
        <li>Face dangers like the natural elements.</li>
        <li>Advance through levels that move from chaos to recovery, reflecting the full cycle of disaster response.</li>
        <li>Complete objectives to expand your team and unlock new interventions.</li>
      </ol>
      </>),
    isSoloProject: false,
    contributions: [
      "Pack AI behavior and navigation",
      "Volunteer AI behavior",
      "Input management",
      "Audio integration",
      "Target evaluation system for AI",
      "Sensor system for AI perception"
    ],
    image: require("../../Assets/Projects/aftermathfellows.png"),
    ghLink: "https://github.com/aemc64/ubijam2025",
    glabLink: null,
    itchioLink: "https://paxcu.itch.io/aftermath-fellows",
    steamLink: null,
    driveLink: null,
    technologies: ['Unity','C#', 'Git']
  },
  {
    id: "slide-dungeon",
    title: "Slide Dungeon",
    inProgress: false,
    shortDescription: (<>In this puzzle and adventure game you embody a wizard trapped in a mysterious dungeon. Made with <span className="purple">Unity</span>.</>),
    fullDescription: "With only one spell and lots of courage, walk through dark rooms to find your way out, but careful things may move in unexpected ways... Move the dungeon like a puzzle game, and solve a bigger puzzle based in the traditional super slide game to scape.",
    isSoloProject: false,
    contributions: [
      "Grid System",
      "Room movement based in puzzle pieces movement",
      "Saving System (Serialization and Encryption included)",
      "Tools (Room base creation, Room Scriptable Object creation, refactor tool)",
      "Inventory system (not used completely in the final game)",
      "Adaptation of Room Manager to fit the saving system",
      "UI",
      "Settings menu"
    ],
    image: require("../../Assets/Projects/slide-dungeon.png"),
    ghLink: "https://github.com/Ericoman/SlideDungeon",
    glabLink: null,
    itchioLink: "https://flyerss.itch.io/slide-d",
    steamLink: null,
    driveLink: null,
    technologies: ['Unity','C#', 'Git', 'Jira', 'Discord']
  },
  {
    id: "mission-accomplished",
    title: "Mission Accomplished",
    inProgress: false,
    shortDescription: (<>Card game based in a real tabletop game. Made with <span className="purple">Unity</span>.</>),
    fullDescription: (<>I recreated all the rules logic of the original card game "Mission Accomplished".</>),
    isSoloProject: true,
    contributions: [
      "Complete game logic",
      "Card generation tool",
      "Support for several languages",
    ],
    image: require("../../Assets/Projects/mission-accomplished.png"),
    ghLink: null,
    glabLink: null,
    itchioLink: "https://eddricman.itch.io/mission-accomplished",
    steamLink: null,
    driveLink: null,
    technologies: ['Unity','C#', 'Unity VC']
  },
  {
    id: "goofyathlon",
    title: "Goofyathlon",
    inProgress: false,
    shortDescription: (<>Accelerometer based player input. Made with <span className="purple">Unity</span>. 2nd place at Madrid In Game HackJam 9.</>),
    fullDescription: (<>
      <ol>
        <li>Prepare</li>
        <li>Play</li>        
        <li>Repeat</li>
      </ol>
      In this game, you will play different minigames related to movement and time reaction to obtain the highest score.
      </>),
    isSoloProject: false,
    contributions: [
      "Accelerometer based input",
      "Android app companion for using the phone as a controller",
    ],
    image: require("../../Assets/Projects/goofyathlon.png"),
    ghLink: "https://github.com/Ericoman/MiniMoves",
    glabLink: null,
    itchioLink: "https://eddricman.itch.io/goofyathlon",
    steamLink: null,
    driveLink: null,
    technologies: ['Unity','C#', 'Git']
  },
  {
    id: "yabs",
    title: "Y.A.B.S",
    inProgress: false,
    shortDescription: (<>Yabs are being summoned. Made with <span className="purple">Unity</span>.</>),
    fullDescription: (<>A long night is coming... the supreme wizard wants you (Yabs) to do all the tasks of his dungeon and because of that he gives you his summoning powers so you can create infinite copies of yourself to solve his tasks. Can you get it before you run out of time or must you restart for eternity?</>),
    isSoloProject: false,
    contributions: [
      "Replay system for creating duplicates of the player previous run",
    ],
    image: require("../../Assets/Projects/yabs.png"),
    ghLink: null,
    glabLink: "https://gitlab.com/eduardoricomanzanera/yabs",
    itchioLink: "https://mike170.itch.io/yabs",
    steamLink: null,
    driveLink: null,
    technologies: ['Unity','C#', 'Git']
  },
  {
    id: "tonysoap",
    title: "Tony Soap's Pro Ducker",
    inProgress: false,
    shortDescription: (<>Tony Soap's Pro Ducker is a game that evokes the nostalgia of classic skateboarding. Made with <span className="purple">Unity</span>.</>),
    fullDescription: (<>Developed during the Global Game Jam 2025 at the María Zambrano Library in Complutense University of Madrid, this project is our creative take on this year’s theme: bubbles.
      <br/><br/>In Tony Soap's Pro Ducker, you take control of a fearless rubber duck sliding through a bubbly bathtub on its unique "skateboard": a bar of soap! Perform spectacular tricks while dodging obstacles in an environment filled with foam, bubbles, and endless fun.
      <br/><br/>This game was crafted in just 48 hours by a passionate team of five, blending creativity, humor, and a love for video games. All the assets were created by our team, inspired by the carefree spirit of classic skateboarding games but with a playful and adorable twist. 
      <br/><br/>Do you have what it takes to become the ultimate "soapboarder" of the bathtub? Show off your best tricks, rack up points, and prove that even a rubber duck can become a legend!</>),
    isSoloProject: false,
    contributions: [
      "Player physics-based movement",
      "Grinding spline-based system"
    ],
    image: require("../../Assets/Projects/tonysoaps.png"),
    ghLink: "https://github.com/Ericoman/TonySoap",
    glabLink: null,
    itchioLink: "https://paxcu.itch.io/tony-soaps-por-ducker",
    steamLink: null,
    driveLink: null,
    technologies: ['Unity','C#', 'Git','Discord']
  },
  {
    id: "firebones",
    title: "Firebones",
    inProgress: false,
    shortDescription: (<> Prototype in which the “elemental” shooting system and the enemy AI stand out. Made with <span className="purple">Unreal Engine 4 and Blueprints</span>.</>),
    fullDescription: null,
    isSoloProject: true,
    contributions: [
      "Elemental bullets",
      "Fire propagation and suffocation",
      "Enemy AI",
      "UI",
      "Sounds"
    ],
    image: require("../../Assets/Projects/firebones.jpeg"),
    ghLink: null,
    glabLink: null,
    itchioLink: null,
    steamLink: null,
    driveLink: "https://drive.google.com/drive/folders/12xNcp_fWoUBW15EY1eOKoxxXux0W1BKg",
    technologies: ['Unreal Engine 4','Blueprints']
  },
  {
    id: "stone-adventure",
    title: "Stone Adventure",
    inProgress: false,
    shortDescription: (<>Little but charming platformer game. Made with <span className="purple">Unity</span>.</>),
    fullDescription: null,
    isSoloProject: true,
    contributions: [
      "Player controller",
      "Enemies",
      "UI",
      "Settings menu",
      "Level progress persistence",
      "Additive scene loading",
      "Level design",
      "Obstacles and puzzle mechanics",
      "Day-night changing skybox"
    ],
    image: require("../../Assets/Projects/stone-adventure.jpeg"),
    ghLink: null,
    glabLink: null,
    itchioLink: null,
    steamLink: null,
    driveLink: "https://drive.google.com/drive/folders/1xzuqCXgyNdx8SuY8nTpLalGiHc4lmeWe",
    technologies: ['Unity','C#']
  },
  // … other projects
];

export default projects;