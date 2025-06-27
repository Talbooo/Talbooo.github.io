document.addEventListener('DOMContentLoaded', () => {
  console.log("Script loaded!");

  // Modal logic
  const modal = document.getElementById('project-modal');
  const modalContent = modal.querySelector('.modal-content');
  const closeBtn = modal.querySelector('.close-btn');
  const openSound = new Audio('assets/audio/modal-open.flac');
  const closeSound = new Audio('assets/audio/modal-close.flac');


  // Project data
  const projectData = {
    ShelleyManor: {
      title: 'Shelley Manor',
      maindescription: `
        <p><strong>Shelley Manor</strong> is a combination of reality and fantasy in the modern era. It takes place in a mansion, where the enemies are familiar, as they are monsters from classical literature and mythology.</p>
        <br>
        <p>The central focus of the gameplay is the exploration of the mansion from a third-person viewpoint, where the helpless player finds himself trapped and must avoid enemies while solving the puzzles. Hide through the levels, use objects to distract and confuse enemies, and interact with the environment to solve puzzles and escape alive.</p>
        <br>
        <p>The soundtrack, created by the Berklee Campus in Valencia, features string and percussion instruments to enhance the atmosphere of mystery.</p>
      `,
      poster: 'assets/images/ShelleyManor_Poster.png',
      imagedescription: `
      <p>This is the first big project I've participated on. It was done as a final project for my HND at ESAT Valencia. My tasks consisted of level 
      design for the last part of the game, gameplay for lobby, attic and last zones as well as all lore notes and dialogues. Outside of the game, 
      I’ve written three short stories that feature the characters of the game, worked on all the marketing posted on socials (Twitter and Instagram) 
      and wrote the texts for steam and the store page.</p>
      <br>
      <p>For the Game Design part, I worked on most of the tutorial level, implementing the first gameplay the player experiences. I also did the last zone of the game, including the last two bosses; for this part I worked on <strong>Level Design</strong> and <strong>Gameplay</strong>.</p>
      <br>
      <p>The blueprints for my work in both the tutorial and the last zone can be see below:</p>  
      `,
      screen1: 'assets/images/ShelleyManor_Screen1.png',
      screen2: 'assets/images/ShelleyManor_Screen2.png',
      screen3: 'assets/images/ShelleyManor_Screen1.png',
      screen4: 'assets/images/ShelleyManor_Screen1.png',
      award1: 'assets/images/ShelleyManorAwards/GamescomLatamAward.png',
      award2: 'assets/images/ShelleyManorAwards/GDWCAward.png',
      award3: 'assets/images/ShelleyManorAwards/QuirinoAward.png',
      award4: 'assets/images/ShelleyManorAwards/WingsAward.png',
      videointro: `
         <p>Apart from that, I also did some work outside the game. I wrote both the <a href="https://drive.google.com/file/d/1KLlfEYTBnX8Jr7Rh9ILxETPR6hixhg1Y/view?usp=sharing" target="_blank">script for the trailer</a> voiceover and the <a href="https://drive.google.com/file/d/1BS9l2T4QGATVrJFFrS13qonwXBXQkk6S/view?usp=sharing" target="_blank">script for the 2D Intro</a>.</p>
         <br>
         
      `,
      video: 'assets/videos/ShelleyManor_Trailer.mp4',
      video2: 'assets/videos/ShelleyManor_Intro.mp4',
      videodescription: 'Official Trailer and 2D Game Intro',
      fullbodytext: `<p>Shelley Manor has been nominated for several awards, winning one and being a finalist for the other four. The awards are: <strong>Winner</strong> of Best Student Game at Gamescom Latam BIG Festival 2025, <strong>TOP 5</strong> of Best Hobby Game at GDWC Winter Season Awards 2024, <strong>Finalist</strong> of Best Animation for Video Game at Quirino Awards 2025 and <strong>Finalist</strong> of Wings Award at Gamescom Latam BIG Festival 2025.</p>`,
      extratext: `<p> I also did some additional work to promote the game writing a couple of short stories for it that can be found <a href="https://drive.google.com/file/d/1a4U_WmdnK8Y6RMguQoVsb-5PJ6aEjhhD/view?usp=sharing" target="_blank">here</a> and <a href="https://drive.google.com/file/d/1k8zq5zxO0lXbAkkuR4j29lImMOcgVq4x/view?usp=sharing" target="_blank">here</a>. Credits for the art to <a href="https://www.artstation.com/laurarubert" target="_blank">Laura Rubert</a> and <a href="https://www.artstation.com/luciameca" target="_blank">Lucía Meca</a> in respective order.</p>`,
      link: 'https://store.steampowered.com/app/2999270/Shelley_Manor/',
      blueprintEmbed: `
      <p>Here you can see the attic's blueprint, gameplay and level:</p>
      <iframe
        src="https://blueprintue.com/render/ci65cx25/" 
        width="100%"
        height="500px"
        frameborder="0"
        allowfullscreen>
        </iframe>
    </div>

    <div style="flex: 1 1 35%; min-width: 300px;">
      <p>Gameplay:</p>
      <video width="100%" controls>
        <source src="assets/videos/ShelleyManor_Attic.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>


  <div style="margin-top: 20px;">
  <p>Level:</p>
  <img 
    id="Level-image"
    src="assets/images/ShelleyManorLevels/AtticLevel.png" 
    alt="Level Screenshot"
    style="width: 100%; max-width: 800px; display: block; margin: 0 auto; cursor: pointer;"
    onclick="openImageFullscreen(this)"
  >
</div>

  <div style="display: flex; justify-content: center; gap: 20px; margin-top: 20px; flex-wrap: wrap;">
    <img 
      src="assets/images/ShelleyManorLevels/FinishedAttic.png" 
      alt="Detail 1" 
      style="flex: 1 1 45%; max-width: 400px; cursor: pointer;" 
      onclick="openImageFullscreen(this)"
    >
    <img 
      src="assets/images/ShelleyManorLevels/FinishedAttic2.png" 
      alt="Detail 2" 
      style="flex: 1 1 45%; max-width: 400px; cursor: pointer;" 
      onclick="openImageFullscreen(this)"
    >
    <br>
  </div>
`,
      blueprintEmbed2: `
      <p>Here you can see the gameplay, level and blueprint for the first room of the Frankensteins:</p>
      <iframe
        src="https://blueprintue.com/render/cv5gw1si/" 
        width="100%"
        height="500px"
        frameborder="0"
        allowfullscreen>
        </iframe>

        <div style="flex: 1 1 35%; min-width: 300px;">
      <p>Gameplay:</p>
      <video width="100%" controls>
        <source src="assets/videos/ShelleyManor_Room1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>


  <div style="margin-top: 20px;">
  <p>Level:</p>
  <img 
    id="Level-image"
    src="assets/images/ShelleyManorLevels/FirstRoomLevel.png" 
    alt="Level Screenshot"
    style="width: 100%; max-width: 800px; display: block; margin: 0 auto; cursor: pointer;"
    onclick="openImageFullscreen(this)"
  >
</div>

  <div style="display: flex; justify-content: center; gap: 20px; margin-top: 20px; flex-wrap: wrap;">
    <img 
      src="assets/images/ShelleyManorLevels/FinishedFirstLevel2.png" 
      alt="Detail 1" 
      style="flex: 1 1 45%; max-width: 400px; cursor: pointer;" 
      onclick="openImageFullscreen(this)"
    >
    <img 
      src="assets/images/ShelleyManorLevels/FinishedFirstLevel.png" 
      alt="Detail 2" 
      style="flex: 1 1 45%; max-width: 400px; cursor: pointer;" 
      onclick="openImageFullscreen(this)"
    >
    <br>
  </div>
`,
    
      blueprintEmbed3: `
      <p>Here you can see the gameplay, level and blueprint for the Frankensteins Boss Battle:</p>
      <iframe
        src="https://blueprintue.com/render/kq5rvka-/" 
        width="100%"
        height="500px"
        frameborder="0"
        allowfullscreen>
        </iframe>

        <div style="flex: 1 1 35%; min-width: 300px;">
      <p>Gameplay:</p>
      <video width="100%" controls>
        <source src="assets/videos/ShelleyManor_RoomBoss.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>


  <div style="margin-top: 20px;">
  <p>Level:</p>
  <img 
    id="Level-image"
    src="assets/images/ShelleyManorLevels/BossRoomLevel.png" 
    alt="Level Screenshot"
    style="width: 100%; max-width: 800px; display: block; margin: 0 auto; cursor: pointer;"
    onclick="openImageFullscreen(this)"
  >
</div>

  <div style="display: flex; justify-content: center; gap: 20px; margin-top: 20px; flex-wrap: wrap;">
    <img 
      src="assets/images/ShelleyManorLevels/FinishedBossRoom.png" 
      alt="Detail 1" 
      style="flex: 1 1 45%; max-width: 400px; cursor: pointer;" 
      onclick="openImageFullscreen(this)"
    >
    <img 
      src="assets/images/ShelleyManorLevels/FinishedBossRoom2.png" 
      alt="Detail 2" 
      style="flex: 1 1 45%; max-width: 400px; cursor: pointer;" 
      onclick="openImageFullscreen(this)"
    >
    <br>
  </div>
`,
    },
  
    YouWontBeKing: {
      title: "You Won't be King",
      maindescription: `
        <p><strong>You Won't be King</strong> is a rhythm game inspired by the legend of Excalibur. Keep the legendary sword sealed in the stone by hitting notes in sync with the music. Miss too many, and the blade will slip free.</p>
        <br>
        <p> Will you have the rhythm to keep Excalibur locked away?</p>
        <br>
        <p>This game was created for the "Pirate Software Game Jam 16".</p>
      `,
      poster: 'assets/images/YouWontBeKing_Cover.png',
      imagedescription: `It was developed in Unity version 6000.0.34f1 during the last week of January. For the jam the prompt was "You are the weapon". </p>
      <br>
      <p> It was a learning process for both me and my teammates as we usually work on Unreal Engine with blueprints. </p>
      <br>
      <p> It was a week full of youtube tutorials and express coding classes. I'm now expanding my knowledge in coding so I can finish this project. </p>
      `,
      screen1: 'assets/images/YouWontBeKing_Story.png',
      screen2: 'assets/images/YouWontBeKing_Game.png',
      screen3: 'assets/images/YouWontBeKing_Game.png',
      screen4: 'assets/images/YouWontBeKing_Screen1.png',
      award1: 'none',
      award2: 'none',
      award3: 'none',
      award4: 'none',
      videointro:'<p> An example of gameplay from the game. </p> <br>',
      video: 'assets/videos/YouWontBeKing_Gameplay.mp4',
      video2: 'none',
      videodescription: 'Main menu, story and game',
      fullbodytext: "",
      extratext:`
        <p>For this project, I was in charge of everything related to <strong>Game Design, Narrative Design</strong> and all of the <strong>Programming</strong>.</p>
        <br>
        <p> It was fully developed in Unity in the span of one week. Everything related to art was done by <a href="https://www.artstation.com/laurarubert" target="_blank">Laura Rubert</a> and <a href="https://www.artstation.com/marcos_rodriguez" target="_blank">Marcos Rodríguez</a>.</p>
        <br>
        <p> The idea for the project is to finish development and fix the bugs that were found.</p>
      `,
      link: 'https://talboo.itch.io/you-wont-be-king',
      blueprintEmbed: '',
      blueprintEmbed2: '',
      blueprintEmbed3: '',
    },

    Penguin: {
      title: "Penguin Puzzles",
      maindescription: `
        <p><strong>Penguin Puzzles</strong> is a short puzzle game developed on puzzlescript.</p>
        <br>
        <p> Follow little Puddles on their adventure to escape the igloo. Discover new magic along the way.</p>
        <br>
        <p>This game was created to test different engines and it took inspiration from the Ice gyms of Pokemon.</p>
      `,
      poster: 'assets/images/Penguin_Cover.png',
      imagedescription: `This short project took a couple of days to develop and was fully made inside the engine of Puzzlescript. For the Itch.io page, a little photoshop was used. </p>
      <br>
      <p> Even though it was a short time for the development, I still think it's a pretty complete demo. </p>
      <br>
      `,
      screen1: 'assets/images/Penguin_Menu.png',
      screen2: 'assets/images/Penguin_Game.png',
      screen3: 'assets/images/YouWontBeKing_Game.png',
      screen4: 'assets/images/YouWontBeKing_Screen1.png',
      award1: 'none',
      award2: 'none',
      award3: 'none',
      award4: 'none',
      videointro:'',
      video: 'assets/videos/PenguinPuzzles_Gameplay.mp4',
      video2: 'none',
      videodescription: 'Full Gameplay as of June 2025',
      fullbodytext:`
      <br>
        <p>For this project, I started investigating everything related to the engine, from the way it worked to the programming it used.</p>
        <br>
        <p> After a week or so familiarizing myself with the engine, I started desgining the puzzles, taking inspiration from similar ideas, mainly the ice gyms in the pokemon games.</p>
        <br>
        <p> The idea for this project is to continue developing it, adding more levels and maybe migrating to another engine.</p>
      `,
      extratext: "",
      link: 'https://talboo.itch.io/penguin-adventures',
      blueprintEmbed: '',
      blueprintEmbed2: '',
      blueprintEmbed3: '',
    }
  };

  // DATA CHECK
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.project;
      const data = projectData[key];
      if (!data) return;

      document.getElementById('modal-title').textContent = data.title;
      document.getElementById('modal-maindescription').innerHTML = data.maindescription; //  <br> <p>
      document.getElementById('modal-poster').src = data.poster;
      document.getElementById('modal-imagedescription').innerHTML = data.imagedescription;
      document.getElementById('modal-screen1').src = data.screen1;
      document.getElementById('modal-screen2').src = data.screen2;
      document.getElementById('modal-videointro').innerHTML = data.videointro;
      document.getElementById('modal-videodescription').textContent = data.videodescription;
      document.getElementById('modal-link').href = data.link;
      document.getElementById('modal-text').innerHTML = data.fullbodytext;
      document.getElementById('modal-extratext').innerHTML = data.extratext;
      document.getElementById('modal-blueprint').innerHTML = data.blueprintEmbed;
      document.getElementById('modal-blueprint2').innerHTML = data.blueprintEmbed2;
      document.getElementById('modal-blueprint3').innerHTML = data.blueprintEmbed3;


       const video1 = document.getElementById('modal-video-1');
       const video2 = document.getElementById('modal-video-2');

       const source1 = video1.querySelector('source');
       const source2 = video2.querySelector('source');

       source1.src = data.video;
       video1.load();
       if (!data.video || data.video === 'none') {
         video1.style.display = 'none';
       } else {
         video1.style.display = 'block';
       }

       source2.src = data.video2;
       video2.load();
       if (!data.video2 || data.video2 === 'none') {
         video2.style.display = 'none';
       } else {
         video2.style.display = 'block';
       }

       const award1 = document.getElementById('award1');
       const award2 = document.getElementById('award2');
       const award3 = document.getElementById('award3');
       const award4 = document.getElementById('award4');

       
       const gallery = document.querySelector('.image-gallery');
       const awards = ['award1', 'award2', 'award3', 'award4'];
       let hasAwards = false;

       awards.forEach(id => {
         const el = document.getElementById(id);
         const src = data[id];
         if (!src || src === 'none') {
           el.src = '';
           el.style.display = 'none';
         } else {
           el.src = src;
           el.style.display = 'block';
           hasAwards = true;
         }
       });

       gallery.style.display = hasAwards ? 'flex' : 'none';



   modal.classList.remove('hidden');
   modal.classList.add('show');
   document.body.classList.add('modal-open'); // Bg scroll
   openSound.play();
   });
 });


  function closeModal() {
    closeSound.play();
    modal.classList.remove('show');
    document.getElementById('modal-video-1').pause();
    document.getElementById('modal-video-2').pause();
    document.body.classList.remove('modal-open'); // Bg scroll
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300); 
  }

  closeBtn.addEventListener('click', () => {
    closeModal();
  });

  modal.addEventListener('click', (event) => {
    if (!modalContent.contains(event.target)) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === "Escape" && modal.classList.contains('show')) {
      closeModal();
    }
  });

 window.openImageFullscreen = function(img) {
  if (img.requestFullscreen) {
    img.requestFullscreen();
  } else if (img.webkitRequestFullscreen) {
    img.webkitRequestFullscreen();
  } else if (img.msRequestFullscreen) {
    img.msRequestFullscreen();
  }
};

const filterButtons = document.querySelectorAll(".filter-buttons button");
const cards = document.querySelectorAll(".card");
const modalW = document.getElementById("modalW");
const modalTextW = document.getElementById("modalTextW");
const closeModalW = document.getElementById("closeModalW");

const modalWData = {
  ShelleyManorTrailer: {
    title: "Shelley Manor Trailer",
    description: "A script for the voiceover of Shelley Manor.",
    sample: `
    <center>An excerpt of the script:
    <br>
    <br>
    <strong>Old person:</strong>
    <br>
    There’s a manor on the outskirts.
    <br>
    <br>
    <strong>Old person:</strong>
    <br>
    <p>People say there are monsters living
    there</p>
    (dry laugh)
    <br>
    <br>
    <strong>Old person:</strong>
    <br>
    if only they knew...
    <br>
    <br>
    <strong>Old person:</strong>
    <br>
    <p>There was once a foreigner, I can’t</p>
    <p>quite seem to remember their name...</p>
    (Pause while thinking)
    <br>
    <br>
    <strong>Old person:</strong>
    <br>
    <p>Anyways, they didn’t seem to</p> 
    <p>know about the rumors</p>
    (Dry laugh again, without amusement,
    more  
    <p>of a “poor bastard” laugh)</p>
    <br>
    <br>`,
    additional: `
      <p>This script was written to create an atmosphere of mystery around the project, promoting both the game and the story.</p>
      <br>
    `,
    pdf: "https://drive.google.com/file/d/1KLlfEYTBnX8Jr7Rh9ILxETPR6hixhg1Y/view?usp=sharing",
    link: `<a href="https://www.youtube.com/watch?v=uukJZx18KDY" target="_blank">Watch on YouTube</a>`,
  },

  ShelleyManorIntro: {
    title: "Shelley Manor Intro",
    description: "A script for the voiceover of the intro for Shelley Manor.",
    sample: `
    <center>An excerpt of the script:
    <br>
    <br>
    <i>[The townspeople are murmuring, everyone is restless]</i>
    <br>
    <br>
    <strong>Mayor:</strong>
    <br>
    Good evening everyone. Thanks for coming in on such short notice.
    <br>
    <br>
    <strong>Mayor:</strong>
    <br>
    <p>As we all know, monsters live among us in that wicked manor on the outskirts.</p> 
    <p>And we all know the unforgivable act we commited years ago...</p> 
    <p>We let them live here and, in exchange, they don't eat us or our loved ones.</p>
    <br>
    <i>[Uncomfortable murmurs of approval are heard]</i>
    <br>
    <br>
    <strong>Mayor:</strong>
    <br>
    <p>However, these days, it seems the monsters are... dissatisfied.</p> 
    <p>They demand we send more victims, or else...</p>
    <br>
    <br>
    `,
    additional: `
      <p>This script was written to create an atmosphere of mystery around the project, promoting both the game and the story.</p>
      <br>
    `,
    pdf: "https://drive.google.com/file/d/1BS9l2T4QGATVrJFFrS13qonwXBXQkk6S/view?usp=sharing",
    link: `<a href="https://drive.google.com/file/d/1viN0K41-Xn878uRgTrbhV4wVc3_ls13B/view?usp=sharing" target="_blank">Watch Video</a>`,
  },

  BurningHeart: {
    title: "A Burning Heart",
    description: "A love story between the characters of Shelley Manor.",
    sample: `
    <center> 
    <br>
    An excerpt of the story:
    <br>
    <br>
    <p>In his dreams he was human. One human body instead of an amalgamation of different
    people.</p>
    He would play with his friends, buy bread and go to the library. He would meet someone and
    they would fall in love and they would have children and live peacefully. He would die of
    natural causes or be killed, he didn’t care, he just wanted to be able to live normally and die
    like a human. He would dance, clumsily, and step on his partners’ feet. She’d say “it’s okay,
    you’re doing great” and he would laugh and continue, grabbing her waist with more strength
    and pulling her closely. She would laugh too, moving her feet with the music and trying to
    guide him. They would end up on the corners of the dance floor, staring awkwardly at the
    other dancers and she would say “It was fun” and he would say “I haven’t had this much fun
    in years!” and she would laugh and fill the room and he would stare at her and her smile. </center>
    <br>
`,
    additional: `
      <p>This short story explores the emotional journey of two of the enemies of Shelley Manor. This was written as part of the Firelight Fables collection created for the marketing of the project.</p>
    `,
    pdf: "https://drive.google.com/file/d/1a4U_WmdnK8Y6RMguQoVsb-5PJ6aEjhhD/view?usp=drive_link",
    link: `<a href="https://store.steampowered.com/app/2999270/Shelley_Manor/" target="_blank">Play Game On Steam</a>`,
  },

  SightToDieFor: {
    title: "A Sight to Die For",
    description: "A love story between the characters of Shelley Manor.",
    sample: `
    <center> 
    <br>
    An excerpt of the story:
    <br>
    <br>
    <p>“Oh my lord, you scared me shitless.” The animal sat down on her lap and stared at the sketches. He didn’t know it but in that form he was actually pretty cute. He started going through the pages, using his snout to pass from one to the other. It was mostly flowers so she didn’t really care too much. Most of the flowers had no color and the bat stopped on the ones that did out of curiosity. It was always the same two flowers: violets and lavender. </p>
    <p>“Why do you always only paint those two?” She looked at the pages. Even though she wasn’t a painter, she was quite proud of those drawings.</p>
    <br>
    <p>“Violets are my favorites.” That was a lie, well, mostly a lie. She hadn’t had a favorite flower until close to a year ago, when someone she fancied gave her a bouquet.</p>
 </center>
    <br>
`,
    additional: `
      <p>This short story explores the journey of two of the characters of Shelley Manor. This was written as part of the Firelight Fables collection created for the marketing of the project.</p>
    `,
    pdf: "https://drive.google.com/file/d/1k8zq5zxO0lXbAkkuR4j29lImMOcgVq4x/view?usp=sharing",
    link: `<a href="https://store.steampowered.com/app/2999270/Shelley_Manor/" target="_blank">Play Game On Steam</a>`,
  },

  ElephantCityConcept: {
    title: "Elephant City Adventures Game Concept",
    description: "Game pitch for a short platformer tablet game.",
    sample: `
    <br> <center>
    <p><strong>Target Audience:</strong> Ages 6-12 </p>
    <p><strong>Genre:</strong> Platformer</p>
    <p><strong>Platform:</strong> Mobile / Tablet</p>
    <br>
    <p><strong>STORY OVERVIEW:</strong></p>
    In the bustling, colorful Elephant City, a place where elephants, animals and humans live
    together in harmony, one special elephant named Ellie is on a mission: save the city (her home)
    from a snack shortage! Ellie’s favorite snack, potato chips, have mysteriously disappeared from
    all markets. It's up to Ellie to explore the city and gather the chips to restock her home!
    But there’s a twist! The greedy group known as “Chip Bandits”, a group of mischievous
    squirrels, have hidden the potato chips all over the city. Ellie must navigate the city’s streets,
    parks, and skyscrapers to retrieve them while avoiding playful squirrel pranks!
    </center>
    <br>
    `,
    additional: `
      <p>Short Game Pitch for a vibrant platformer featuring the adventures of an elephant. It includes story, mechanics, aesthetics and educational elements. As of June 2025, this project is not being developed but it will be sometime in the future. </p>
    `,
    pdf: "https://drive.google.com/file/d/1odPTmyI0DN_fx8nIoJBaldwpuYyMOY0h/view?usp=sharing",
    link: "",
  },

  FallenKingRhainemour: {
    title: "Fallen King, Rhainemour Encounter Concept",
    description: "A combat design concept of an enemy encounter of a souls-like game.",
    sample: `
    <br> <center><p><strong>BOSS DESCRIPTION:</strong></p>
    Fallen King Rhainemour is a towering figure, clad in a full suit of jet-black armor etched with ancient sigils and promises. 
    The armor is cracked, mostly due to time, and has twisted vines falling from the cracks, warping around; a dubious energy 
    seeping out of them. His eyes glow faintly through the visor, an eerie sight for his enemies. His movements are slow and 
    deliberate, but there’s a sense of impending doom with every hit. His weapon of choice is a massive, cursed greatsword, 
    infused with some unknown power which makes it glow and leave a trail of light after each and every hit. As the fight progresses,
    the sword becomes more animated, whispers growing louder as the light becomes a darker tone, ending in a black mist that surrounds 
    both weapon and man.
    <br> </center>
    <br>
    `,
    additional: `
      <p>Detailed design and mechanics for a boss fight in a dark fantasy setting. The full document includes: setting, fight phases, enemy attacks and scene changes.</p>
    `,
    pdf: "https://drive.google.com/file/d/1ufHFuDfG1j2qqtFdEeZDInl1I_zfHGkA/view?usp=sharing",
    link: "",
  },

  ShelleyManorLoreNotes: {
    title: "Shelley Manor Lore Notes",
    description: "Lore Notes from inside the game of Shelley Manor.",
    sample: ` <br>
    An example of one of the notes:
    <center>
    <br>
    <p>Dear diary,</p> 
    <br>
    <p>What a wonderful day! The manor glowed with the celebration of my 27 birthday. Laughter, music</p> 
    <p> and people filled every corner. The guests, attired with their greatest robes, basked</p> 
    <p> in exquisite delicacies and enchanting dances by the warm fireplace. My heart filled with gratitude as I blew</p>
    <p>the candles of my cake, adorned alongside my favorite flowers, the purple hyacinth. Fortune and</p> 
    <p>love surround me, and my heart overflows with joy. </p>
    <br>
    <p>Clara</p>
    </center>
    `,
    additional: `
      <p>Notes that extend upon the lore of the game, giving information about the story, the manor, the characters and mythological creatures present in Shelley Manor.</p>
    `,
    pdf: "https://drive.google.com/file/d/1IBrS5birdf7uCnVKTAWlspo3dC0WUWKC/view?usp=sharing",
    link: `<a href="https://store.steampowered.com/app/2999270/Shelley_Manor/" target="_blank">Play Game On Steam</a>`,
  },

    ShelleyManorDialogue: {
    title: "Shelley Manor Dialogues",
    description: "Dialogues from inside the game of Shelley Manor.",
    sample: ` <center>
    <br>
    An excerpt of the dialogue:
    <br>
    <br>
    <strong>CLARA SHELLEY</strong>
    <br>
    That zombie... It used to be dear to me. Please, be careful, he can't control himself now.
    <br>
    <br>
    <strong>ALEX</strong>
    <br>
    <p>Who was he?</p>
    <br>
    <strong>CLARA SHELLEY</strong>
    <br>
    We met before we were cursed, many years ago. He was my husband once.
    <br>
    <br>
    `,
    additional: `
      <p>There are two types of dialogue: Mandatory and Extra. The mandatory ones are tied to the gameplay and story of the game while the player can access the extras if actively speaking with Clara on several parts of the manor.</p>
    `,
    pdf: "https://drive.google.com/file/d/1ItsnObh8URSCfWkogiYcPrvcaWRFhxcF/view?usp=sharing",
    link: `<a href="https://store.steampowered.com/app/2999270/Shelley_Manor/" target="_blank">Play Game On Steam</a>`,
  },

  DisastrousCuisineStory: {
    title: "Disastrous Cuisine Stories",
    description: "",
    sample: ` <center>
    <br>
    An excerpt of the one of the stories:
    <br>
    <br>
    <strong>Jorge</strong>
    <br>
    <p>Chef, there’s a dish I’ve been trying to perfect for years.</p> 
    <p>My wife; she used to make “tortilla de patatas”. It was her favorite.</p>
    <p>I’ve tried to do it myself... and I still haven’t gotten it.</p>
    <br>
    <strong>Giusseppe</strong>
    <br>
    <p>What’s been the hardest part?</p>
    <br>
    <strong>Jorge</strong>
    <br>
    It’s... the taste. I try to recreate it, but it feels impossible at this point.
    <br>
    <br>
    `,
    additional: `
      <p>I wrote 6 different stories for this game, the Team voted for 3 of them and we added those. This is a project that has been in development from february 2025 to june 2025. Plans for continuing it are still on hold, so the future is unclear.</p>
    `,
    pdf: "https://drive.google.com/file/d/1uhsRcWCzsbigtWcXJG20jPzOh-eN-tDY/view?usp=sharing",
    link: ``,
  },

  DisastrousCuisinePitch: {
    title: "Disastrous Cuisine Game Concept",
    description: "",
    sample: `
    <br>
    <br> <center>
    <p>Disastrous Cuisine is a turn based combat game based around a restaurant. Due to the place's weird origins some ingredients have become living creatures and the player must defeat them to get the food.</p>
    <br>
    <p>The Golden Ladle had once been the pinnacle of fine dining, a restaurant revered for its
exquisite dishes crafted by the legendary Chef. From the delicate art of Japanese sushi
to the rich, comforting embrace of Italian pasta, he had mastered the flavors of the world,
filling with joy all who dined there. Customers traveled far and wide just to taste his
creations, each plate a masterpiece, each meal an experience to remember.</p>
    </center>
    <br>
    `,
    additional: `
      <p>For the development, I made both: a Game Pitch and a Game Design Document. This is a project that has been in development from february 2025 to june 2025. Plans for continuing it are still on hold, so the future is unclear.</p>
    `,
    pdf: "https://drive.google.com/file/d/1ovcwcQ7OeSY6Dyzi44T6zPNfRlyKMaRK/view?usp=sharing",
    link: "",
  },

  DisastrousCuisineGDD: {
    title: "Disastrous Cuisine Game Design Document",
    description: "",
    sample: `
    <br>
    <br> <center>
    <p>Disastrous Cuisine is a turn based combat game based around a restaurant. Due to the place's weird origins some ingredients have become living creatures and the player must defeat them to get the food.</p>
    <br>
    <p><strong>Genre</strong></p>
    <p>Disastrous Cuisine is a turn-based combat game with a couple of rpg-like mechanics, as the player can upgrade the character’s different stats.</p>
    <br>
    <p><strong>Setting</strong></p>
    <p>The game takes place inside a restaurant, using both the kitchen and the dining hall. The fights will occur inside the kitchen zone and the serving of dishes in the dining zone. The world the game happens in is a semi-fantasy modern world. It takes real life history and merges it with fantasy tones as the game is filled with enormous items and the enemies are magically alive.</p>
    <br>
    <p><strong>Audience</strong></p>
    <p>The audience we are looking for is “all ages” as we aren’t going for a super bloody combat or really complex stories. We think the game can reach all audiences and entertain them. That's why our intended rating is “All ages”.</p>
    
    </center>
    <br>
    `,
    additional: `
      <p>For the development, I made both: a Game Pitch and a Game Design Document. This is a project that has been in development from february 2025 to june 2025. Plans for continuing it are still on hold, so the future is unclear.</p>
    `,
    pdf: "https://drive.google.com/file/d/1Vl-KroaEMwCONRj7KvTPzShZAFA0Z9zt/view?usp=sharing",
    link: "",
  },

  YouWontBeKingGDD: {
    title: "You Won't be King Game Design Document",
    description: "",
    sample: `
    <br>
    <br> <center>
    <p>You won’t be king is a rhythm game based on the legend of Excalibur and the people that came before Arthur.</p>
    <br>
    <p>The player will play through 4 songs with
increasing difficulty while trying to keep the sword inside the rock.
Following the rhythm will be crucial as the songs get more complicated
and they will have to learn how to manage their lives.</p>
    </center>
    <br>
    `,
    additional: `
      <p>You Won't be King was developed as an entry for the <i>Pirate Software Game Jam 16</i>. I made the Game Design Document in the style they asked in the entry requirements.</p>
    `,
    pdf: "https://drive.google.com/file/d/1Hv9c3bOdKFcNK9ywXf2_ixuetoBcSlwJ/view?usp=sharing",
    link: "",
  },

  CrimsonSightConcept: {
    title: "Crimson Sight Game Concept",
    description: "",
    sample: `
    <br>
    <br> <center>
    <p>Crimson Sight is a game concept I developed as a project for King’s and THU mentorship
program. In this case, the game had to focus on diversity and inclusion, promoting awareness
and respect for cultural, social, physical and/or psychological differences. Crimson Sight is an
action-adventure game with a first person camera. The player would be able to play as two
different main characters. In this document I will include the main concept I presented as part of
the project, the characters made for it and a little introduction to the story that would be at the
start of the game.</p>
    </center>
    <br>
    `,
    additional: `
      <p>You Won't be King was developed as an entry for the <i>Pirate Software Game Jam 16</i>. I made the Game Design Document in the style they asked in the entry requirements.</p>
    `,
    pdf: "https://drive.google.com/file/d/1fufsaFTKgMp3igjax-UPE1E4lpQIoqC6/view?usp=sharing",
    link: "",
  },
};


// Filtro
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-buttons .active").classList.remove("active");
    btn.classList.add("active");
    const filter = btn.dataset.filter;

    cards.forEach(card => {
      const category = card.dataset.category;
      card.style.display = (filter === "all" || category === filter) ? "block" : "none";
    });
  });
});

// Click Card
cards.forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.card; 
    const data = modalWData[key];
    if (!data) return;

    document.getElementById("modalW-title").textContent = data.title;
    document.getElementById("modalW-pdf").href = data.pdf || "#";
    document.getElementById("modalW-additional").innerHTML = data.additional || "";
    document.getElementById("modalW-sample").innerHTML = data.sample;

    const linkElem = document.getElementById("modalW-link");

    if (data.link) {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = data.link;
        const realLink = tempDiv.querySelector("a");

        linkElem.href = realLink.href;
        linkElem.innerHTML = realLink.innerHTML;
        linkElem.parentElement.style.display = "block"; 
     } else {
        linkElem.parentElement.style.display = "none";
    }

    modalW.style.display = "flex";
  });
});


// Close modalW
closeModalW.addEventListener("click", () => {
  modalW.style.display = "none";
});

// Close modalW on outside click
window.addEventListener("click", (e) => {
  if (e.target === modalW) {
    modalW.style.display = "none";
  }
});
});