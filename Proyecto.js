document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalTitle = document.querySelector('.modal-title');
    const modalSubtitle = document.querySelector('.modal-subtitle');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.querySelector('.modal-close');

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

            // Dentro del event listener de clic en las tarjetas
            modalBody.innerHTML = `
            <div class="expanded-content">
                <div class="text-content">
                    ${content}
                </div>
                <div class="image-content">
                    <img src="imagen-${contentId}.jpg" alt="${title}">
                </div>
            </div>
            `;
        });
    });

    modalClose.addEventListener('click', function() {
        modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });
});
