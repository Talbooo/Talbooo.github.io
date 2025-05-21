document.addEventListener('DOMContentLoaded', () => {
  console.log("Script loaded!");

  // Carousel buttons
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
      description: `
        <p><strong>Shelley Manor</strong> is a combination of reality and fantasy in the modern era. It takes place in a mansion, which has an atmosphere of tension and mystery. The enemies that inhabit the mansion are familiar, as they are monsters from classical literature and mythology.</p>
        <br>
        <p>The central focus of the gameplay is the exploration of the mansion from a third-person viewpoint, where the helpless player finds himself trapped and must avoid enemies while solving the puzzles. Hide through the levels, use objects to distract and confuse enemies, and interact with the environment to solve puzzles and escape alive.</p>
        <br>
        <p>The soundtrack, created by the Berkeley Campus in Valencia, features string and percussion instruments to enhance the atmosphere of mystery.</p>
      `,
      image: 'assets/images/ShelleyManor_Poster.png',
      video: 'assets/videos/ShelleyManor_Trailer.mp4',
      video2: 'assets/videos/ShelleyManor_Intro.mp4',
      link: 'https://store.steampowered.com/app/2999270/Shelley_Manor/'
    }
  };

  // Check Data from the project card to open
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.project;
      const data = projectData[key];
      if (!data) return;

      document.getElementById('modal-title').textContent = data.title;
      document.getElementById('modal-description').innerHTML = data.description; //  <br> <p>
      document.getElementById('modal-image').src = data.image;
      document.getElementById('modal-video-1').querySelector('source').src = data.video;
      document.getElementById('modal-video-1').load();
      document.getElementById('modal-video-2').querySelector('source').src = data.video2;
      document.getElementById('modal-video-2').load();
      document.getElementById('modal-link').href = data.link;

      modal.classList.remove('hidden');
      modal.classList.add('show');
      document.body.classList.add('modal-open'); // Disable background scroll
      openSound.play();
    });
  });

  // Close modal
  function closeModal() {
    closeSound.play();
    modal.classList.remove('show');
    document.getElementById('modal-video-1').pause();
    document.getElementById('modal-video-2').pause();
    document.body.classList.remove('modal-open'); // Re-enable background scroll
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300); // Match CSS transition duration
  }

  // Close modal on close button click
  closeBtn.addEventListener('click', () => {
    closeModal();
  });

  // Close modal on clicking outside modal-content
  modal.addEventListener('click', (event) => {
    if (!modalContent.contains(event.target)) {
      closeModal();
    }
  });

  // Close modal on ESC key press
  document.addEventListener('keydown', (event) => {
    if (event.key === "Escape" && modal.classList.contains('show')) {
      closeModal();
    }
  });
});
