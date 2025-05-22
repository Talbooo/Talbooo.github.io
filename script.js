document.addEventListener('DOMContentLoaded', () => {
  console.log("Script loaded!");

// Buttons
  const track = document.getElementById('carousel-track');
  document.querySelector('.carousel-btn.left').addEventListener('click', () => {
    track.scrollBy({ left: -220, behavior: 'smooth' });
  });
  document.querySelector('.carousel-btn.right').addEventListener('click', () => {
    track.scrollBy({ left: 220, behavior: 'smooth' });
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
      imagedescription: 'Here is a great image description for you',
      screen1: 'assets/images/ShelleyManor_Screen1.png',
      screen2: 'assets/images/ShelleyManor_Screen2.png',
      screen3: 'assets/images/ShelleyManor_Screen1.png',
      screen4: 'assets/images/ShelleyManor_Screen1.png',
      videointro: `
         <p>For the game, I wrote both the script for the trailer voiceover and the script for the 2D intro.</p>
         <br>
         
      `,
      video: 'assets/videos/ShelleyManor_Trailer.mp4',
      video2: 'assets/videos/ShelleyManor_Intro.mp4',
      videodescription: 'Description for the video guapisima',
      link: 'https://store.steampowered.com/app/2999270/Shelley_Manor/'
    },
  
    YouWontBeKing: {
      title: "You Won't be King",
      maindescription: `
        <p><strong>You Won't be King</strong> is a rhythm game inspired by the legend of Excalibur. Keep the legendary sword sealed in the stone by hitting notes in sync with the music. Miss too many, and the blade will slip free..</p>
        <br>
        <p> Will you have the rhythm to keep Excalibur locked away?</p>
        <br>
        <p>This game was created for the "Pirate Software Game Jam 16".</p>
      `,
      poster: 'assets/images/ShelleyManor_Poster.png',
      screen1: 'assets/images/ShelleyManor_Screen1.png',
      screen2: 'assets/images/ShelleyManor_Screen2.png',
      screen3: 'assets/images/ShelleyManor_Screen1.png',
      screen4: 'assets/images/ShelleyManor_Screen1.png',
      video: 'assets/videos/ShelleyManor_Trailer.mp4',
      video2: 'assets/videos/ShelleyManor_Intro.mp4',
      link: 'https://talboo.itch.io/you-wont-be-king'
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
      document.getElementById('modal-imagedescription').textContent = data.imagedescription;
      document.getElementById('modal-screen1').src = data.screen1;
      document.getElementById('modal-screen2').src = data.screen2;
      document.getElementById('modal-videointro').innerHTML = data.videointro;
      document.getElementById('modal-video-1').querySelector('source').src = data.video;
      document.getElementById('modal-video-1').load();
      document.getElementById('modal-video-2').querySelector('source').src = data.video2;
      document.getElementById('modal-video-2').load();
      document.getElementById('modal-videodescription').textContent = data.videodescription;
      document.getElementById('modal-link').href = data.link;

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
});
