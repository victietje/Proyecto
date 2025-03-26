document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalTitle = document.querySelector('.modal-title');
    const modalSubtitle = document.querySelector('.modal-subtitle');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.querySelector('.modal-close');

    // Abrir modal al hacer clic en una tarjeta
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h2').textContent;
            const subtitle = this.querySelector('h3').textContent;
            const contentId = this.getAttribute('data-content');
            const content = document.getElementById(contentId).innerHTML;

            modalTitle.textContent = title;
            modalSubtitle.textContent = subtitle;
            modalBody.innerHTML = content;
            modalOverlay.classList.add('active');
        });
    });

    // Cerrar modal al hacer clic en la X
    modalClose.addEventListener('click', function() {
        modalOverlay.classList.remove('active');
    });

    // Cerrar modal al hacer clic fuera del contenido
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });
});