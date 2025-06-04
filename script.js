document.addEventListener('DOMContentLoaded', () => {
  console.log("Script loaded!");

// Buttons
  const track = document.getElementById('carousel-track');
  document.querySelector('.carousel-btn.left').addEventListener('click', () => {
    track.scrollBy({ left: -420, behavior: 'smooth' });
  });
  document.querySelector('.carousel-btn.right').addEventListener('click', () => {
    track.scrollBy({ left: 420, behavior: 'smooth' });
  });
  

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
      screen1: 'assets/images/YouWontBeKing_Main.png',
      screen2: 'assets/images/YouWontBeKing_Story.png',
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


  function scrollCarousel(direction) {
    const track = document.getElementById('carousel-track');
    const cardWidth = 240 + 16; // card width + gap
    track.scrollBy({
      left: direction * cardWidth * 3, // scroll by 3 cards
      behavior: 'smooth'
    });
  }

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


});
