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
        <p><strong>Shelley Manor</strong> is a combination of reality and fantasy in the modern era. It takes place in a mansion, which has an atmosphere of tension and mystery. The enemies that inhabit the mansion are familiar, as they are monsters from classical literature and mythology.</p>
        <br>
        <p>The central focus of the gameplay is the exploration of the mansion from a third-person viewpoint, where the helpless player finds himself trapped and must avoid enemies while solving the puzzles. Hide through the levels, use objects to distract and confuse enemies, and interact with the environment to solve puzzles and escape alive.</p>
        <br>
        <p>The soundtrack, created by the Berkeley Campus in Valencia, features string and percussion instruments to enhance the atmosphere of mystery.</p>
      `,
      poster: 'assets/images/ShelleyManor_Poster.png',
      imagedescription: `
      <p>For Shelley Manor I was in charge of part of the <strong>Game Design</strong> and everything related to <strong>Narrative Design</strong>.</p>
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
         <p>Apart from that, I also did some work outside the game. I wrote both the <a href="https://drive.google.com/file/d/1BS9l2T4QGATVrJFFrS13qonwXBXQkk6S/view?usp=sharing" target="_blank">script for the trailer</a> voiceover and the <a href="https://drive.google.com/file/d/1KLlfEYTBnX8Jr7Rh9ILxETPR6hixhg1Y/view?usp=sharing" target="_blank">script for the 2D Intro</a>.</p>
         <br>
         
      `,
      video: 'assets/videos/ShelleyManor_Trailer.mp4',
      video2: 'assets/videos/ShelleyManor_Intro.mp4',
      videodescription: 'Official Trailer and 2D Game Intro',
      fullbodytext: `<p> I also did some additional work to promote the game writing a couple of short stories for it that can be found <a href="https://drive.google.com/file/d/1a4U_WmdnK8Y6RMguQoVsb-5PJ6aEjhhD/view?usp=sharing" target="_blank">here</a> and <a href="https://drive.google.com/file/d/1k8zq5zxO0lXbAkkuR4j29lImMOcgVq4x/view?usp=sharing" target="_blank">here</a>. Credits for the art to <a href="https://www.artstation.com/laurarubert" target="_blank">Laura Rubert</a> and <a href="https://www.artstation.com/luciameca" target="_blank">Lucía Meca</a> in respective order.</p> 
      <br>
      <p>Shelley Manor has been nominated for several awards, winning one and being a finalist for the other four. The awards are: <strong>Winner</strong> of Best Student Game at Gamescom Latam BIG Festival 2025, <strong>TOP 5</strong> of Best Hobby Game at GDWC Winter Season Awards 2024, <strong>Finalist</strong> of Best Animation for Video Game at Quirino Awards 2025 and <strong>Finalist</strong> of Wings Award at Gamescom Latam BIG Festival 2025.</p>`,
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
      fullbodytext:`
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
        <p>For this project, I started investigating everything related to the engine, from the way it worked to the programming it used.</p>
        <br>
        <p> After a week or so familiarizing myself with the engine, I started desgining the puzzles, taking inspiration from similar ideas, mainly the ice gyms in the pokemon games.</p>
        <br>
        <p> The idea for this project is to continue developing it, adding more levels and maybe migrating to another engine.</p>
      `,
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
    <center>     An excerpt of the script:
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
    link: "https://www.youtube.com/watch?v=uukJZx18KDY",
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
    link: "https://store.steampowered.com/app/2999270/Shelley_Manor/",
  },

  ElephantCityConcept: {
    title: "Elephant City Adventures Game Concept",
    description: "Game Concept for a short platformer tablet game.",
    sample: "",
    additional: `
      <p>Concept art and gameplay ideas for a vibrant puzzle platformer featuring an adventurous elephant.</p>
    `,
    pdf: "assets/docs/ElephantCityConcept.pdf",
    link: "https://example.com/elephant-city-adventures",
  },

  FallenKingRhainemour: {
    title: "Fallen King, Rhainemour Encounter Concept",
    description: "A combat design concept of an enemy encounter of a souls-like game.",
    sample: "",
    additional: `
      <p>Detailed design and mechanics for a challenging boss fight in a dark fantasy setting.</p>
    `,
    pdf: "assets/docs/.pdf",
    link: "",
  },

  ShelleyManorLoreNotes: {
    title: "Shelley Manor Lore Notes",
    description: "Lore Notes from inside the game of Shelley Manor.",
    sample: "",
    additional: `
      <p>Extensive lore about the mansion, characters, and mythological creatures present in Shelley Manor.</p>
    `,
    pdf: "assets/docs/.pdf",
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
    document.getElementById("modalW-link").href = data.link || "#";
    document.getElementById("modalW-additional").innerHTML = data.additional || "";
    document.getElementById("modalW-sample").innerHTML = data.sample;

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