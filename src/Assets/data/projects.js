const projects = [
  {
    id: "lexicondiaboli",
    title: "Lexicon Diaboli",
    inProgress: false,
    shortDescription: (<>Atmospheric horror game in wich you exorcise a cursed church. This game was the <span className="purple">winner</span> of Jamaggedon 2026 under the theme: Architecture of Meaning. Made with <span className="purple">Unity</span>.</>),
    fullDescription: (<>
      Lexicon Diaboli is an atmospheric horror game where you play as an exorcist sent to cleanse an abandoned cursed church, left in ruins after a failed ritual. Deep within its crumbling halls dwells a powerful demon that claimed the life and soul of the last pastor who dared to face it.
      <br/><br/>
      Before vanishing, the pastor scattered fragments of their research throughout the church: forbidden notes, ritual instructions, and torn spell pages. These allow you to open sealed doors, reveal hidden passages, and alter the very structure of the temple itself. Some obstacles cannot be overcome with a single spell, you can combine them at the altar to shift their meaning, creating new effects that will carry you deeper into the corrupted cathedral.
      </>),
    isSoloProject: false,
    contributions: [
      "Project direction and team management",
      "Cards and tag system",
      "Cards UI",
      "Cards interaction system",
      "Cards combination system",
      "Input management",
      "Event Channels",
      "Dialog system",
    ],
    image: require("../../Assets/Projects/lexicondiaboli.png"),
    ghLink: "https://github.com/Ericoman/UditJamCat",
    glabLink: null,
    itchioLink: "https://flyerss.itch.io/lexicon-diaboli",
    steamLink: null,
    driveLink: null,
    technologies: ['Unity','C#', 'Git']
  },
  {
    id: "overlookinn",
    title: "Overlook Inn",
    inProgress: false,
    shortDescription: (<>A short exploration game blending serie, liminal-space vibes with a lighthearted, silly tone. Wander, listen for meows, and try not to question the hotel too much. 24th position on Brakeys Game Jam 2026.1. Made with <span className="purple">Unity</span>.</>),
    fullDescription: (<>
      Welcome to a perfectly respectable hotel. Nothing strange is happening here.
      <br/><br/>
      After a sudden loud noise startled an elderly guest, her cats bolted and are now hiding somewhere in the building. As the hotel receptionist (and the only one willing to deal with this situation), it’s your job to track them down and return them safely.
      <br/><br/>
      Search through an old hotel that feels just slightly… off. Corridors don’t always behave the way they should. Rooms seem to appear where they weren’t before. Something about the place is unsettling — but the task at hand remains the same: find those cats.
      <br/><br/>
      A short exploration game blending serie, liminal-space vibes with a lighthearted, silly tone. Wander, listen for meows, and try not to question the hotel too much.
      <br/><br/>
      Features
      <ol>
        <li>Explore a strange, ever-so-slightly wrong hotel.</li>
        <li>Hunt down runaway cats in unexpected places.</li>        
        <li>Unsettling atmosphere mixed with absurdist humor.</li>
        <li>Small secrets and odd events scattered throughout.</li>
      </ol>
      </>),
    isSoloProject: false,
    contributions: [
      "Interaction system",
      "1st floor puzzles",
      "Infinite corridor",
    ],
    image: require("../../Assets/Projects/overlookinn.png"),
    ghLink: "https://github.com/aemc64/BrackeysJam",
    glabLink: null,
    itchioLink: "https://paxcu.itch.io/overlook-inn",
    steamLink: null,
    driveLink: null,
    technologies: ['Unity','C#', 'Git']
  },
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
    id: "maskheist",
    title: "Mask Heist",
    inProgress: false,
    shortDescription: (<>Mask Heist is a puzzle-stealth game set during a single night inside a grand museum.. Made with <span className="purple">Unity</span>. Submission to Global Game Jam 2026.</>),
    fullDescription: (<>
      Mask Heist is a puzzle-stealth game set during a single night inside a grand museum.
      Explore themed rooms and plan your perfect heist using magical masks that unlock new mechanics and ways to play.
      Each mask changes how you move, hide, or interact with the environment.
      <br/><br/>
      The museum sleeps… but one mistake can ruin everything.
      </>),
    isSoloProject: false,
    contributions: [
      "Guards and cameras AI",
      "Scene transition system",
      "Input management",
    ],
    image: require("../../Assets/Projects/maskheist.png"),
    ghLink: "https://github.com/flyeers/Mask",
    glabLink: null,
    itchioLink: "https://alberte-diaz.itch.io/mask-heist",
    steamLink: null,
    driveLink: null,
    technologies: ['Unity','C#', 'Git']
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
    id: "golden-lemon",
    title: "Golden Lemon Harvest Farm",
    inProgress: false,
    shortDescription: (<> Farm game in wich you have to plant, water and harvest until you find the Golden Lemon. Made with <span className="purple">Unreal Engine 5 and C++</span>.</>),
    fullDescription: (<>In this game you have to harvest the Golden Lemon to fulfill your parents' dream of being millionares.
      <br/><br/>In order to do that you have to plant and harvest some ordinary plants and make some money to invest in the stores and finally harvest the golden lemon.
      <br/><br/>You can use the scythe to prepare the ground and to harvest when the plant is ready, but careful, if you harvest ahead of time you will lose your crop!
      <br/><br/>Don't forget to water your plants everyday for them to grow.
      <br/><br/>You have 30 days to do so. Good luck!
      </>),
    isSoloProject: true,
    contributions: [
      "GAS-based interaction system",
      "Data assets for items and crops",
      "Inventory component and hotbar",
      "Crop growth component",
      "Store component",
      "UI based on Unreal MVVM architecture",
      "FMOD integration",
      "Several subsystems (days elapsed, item and plant registry)",
    ],
    image: require("../../Assets/Projects/golden-lemon.png"),
    ghLink: "https://github.com/Ericoman/FarmRPG",
    glabLink: null,
    itchioLink: "https://eddricman.itch.io/glhf",
    steamLink: null,
    driveLink: null,
    technologies: ['Unreal Engine 5','C++', 'GAS', 'FMOD', 'Git']
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