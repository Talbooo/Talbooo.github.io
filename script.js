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
      description: 'A Third-Person puzzle game.',
      image: 'assets/images/ShelleyManor_Family.jpg',
      video: 'assets/videos/ShelleyManor_trailer.mp4',
      link: 'https://store.steampowered.com/app/2999270/Shelley_Manor/'
    }
  };

  // Open modal
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.project;
      const data = projectData[key];
      if (!data) return;

      document.getElementById('modal-title').textContent = data.title;
      document.getElementById('modal-description').textContent = data.description;
      document.getElementById('modal-image').src = data.image;
      document.getElementById('modal-video').src = data.video;
      document.getElementById('modal-link').href = data.link;

      modal.classList.remove('hidden');
      modal.classList.add('show');
      openSound.play();
    });
  });

  // Close modal
  function closeModal() {
    closeSound.play();
    modal.classList.remove('show');
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
