const btn = document.getElementById("buttonTop")

btn.addEventListener("click", function () {
    window.scrollTo(0, 0)
})

document.addEventListener('scroll', ocultar)

// Função para o botão de voltar ao topo ser ocultado no topo da página
function ocultar() {
    if (window.scrollY > 125) {
        btn.style.display = "flex"
    }
    else {
        btn.style.display = "none"
    }
}
// Função que pega ano atual para utilizar no footer
function ano_atual() {
    const ano = new Date().getFullYear()
    const copyright = document.getElementById("copyright")

    copyright.innerText = `© ${ano} - MC Marcecar. - Todos os Direitos Reservados.`
}

// Dados dos cards
const cardData = [
    { category: 'Pergolados', imageSrc: 'src/img/Pergolados/pergolado1.jpg', modalTarget: '#modalPergolado' },
    { category: 'Decks', imageSrc: 'src/img/Decks/deck1.jpg', modalTarget: '#modalDeck' },
    { category: 'Brises', imageSrc: 'src/img/Brises/brise2.jpeg', modalTarget: '#modalBrise' },
    { category: 'Escadas', imageSrc: 'src/img/Escadas/escada1.jpg', modalTarget: '#modalEscada' },
    { category: 'Telhados', imageSrc: 'src/img/Telhados/telhado6.jpg', modalTarget: '#modalTelhado' },
    { category: 'Diversos', imageSrc: 'src/img/Diversos/diverso1.jpg', modalTarget: '#modalDiverso' },
];

// Função para criar um card
function createCard(category, imageSrc, modalTarget) {
    const cardContainer = document.getElementById('cardContainer');

    const card = document.createElement('article');
    card.classList.add('card', 'card-border', 'card-width', 'p-0', 'm-4', 'col-12', 'col-md-4');

    const cardImage = document.createElement('img');
    cardImage.classList.add('card-img-top', 'card-img');
    cardImage.src = imageSrc;
    cardImage.alt = `Imagem ${category}`;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = category;

    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('btn', 'color-btn');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', modalTarget);
    button.textContent = 'Ver Fotos';

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(button);

    card.appendChild(cardImage);
    card.appendChild(cardBody);

    cardContainer.appendChild(card);
}

// Criar os cards com base nos dados fornecidos
for (const data of cardData) {
    createCard(data.category, data.imageSrc, data.modalTarget);
}

// Dados dos carrosséis
const carouselsData = [
    {
        id: 'modalPergolado',
        images: [
            'src/img/Pergolados/pergolado1.jpg',
            'src/img/Pergolados/pergolado2.jpg',
            'src/img/Pergolados/pergolado3.jpg',
            'src/img/Pergolados/pergolado4.jpg',
            'src/img/Pergolados/pergolado5.jpg',
            'src/img/Pergolados/pergolado6.jpg'
        ]
    },
    {
        id: 'modalDeck',
        images: [
            'src/img/Decks/deck1.jpg',
            'src/img/Decks/deck2.jpg',
            'src/img/Decks/deck3.jpg',
            'src/img/Decks/deck4.jpg',
            'src/img/Decks/deck5.jpg',
            'src/img/Decks/deck6.jpg',
        ]
    },
    {
        id: 'modalBrise',
        images: [
            'src/img/Brises/brise1.jpeg',
            'src/img/Brises/brise2.jpeg',
            'src/img/Brises/brise3.jpeg',
            'src/img/Brises/brise4.jpeg',
            'src/img/Brises/brise5.jpeg',
            'src/img/Brises/brise6.jpg',
        ]
    },
    {
        id: 'modalEscada',
        images: [
            'src/img/Escadas/escada1.jpg',
            'src/img/Escadas/escada2.jpg',
            'src/img/Escadas/escada3.jpg',
            'src/img/Escadas/escada4.jpg',
            'src/img/Escadas/escada5.jpg',
            'src/img/Escadas/escada6.jpg',
        ]
    },
    {
        id: 'modalTelhado',
        images: [
            'src/img/Telhados/telhado1.jpg',
            'src/img/Telhados/telhado2.jpg',
            'src/img/Telhados/telhado3.jpg',
            'src/img/Telhados/telhado4.jpg',
            'src/img/Telhados/telhado5.jpg',
            'src/img/Telhados/telhado6.jpg',
        ]
    },
    {
        id: 'modalDiverso',
        images: [
            'src/img/Diversos/diverso1.jpg',
            'src/img/Diversos/diverso2.jpeg',
            'src/img/Diversos/diverso3.jpeg',
            'src/img/Diversos/diverso4.jpg',
            'src/img/Diversos/diverso5.jpg',
            'src/img/Diversos/diverso6.jpeg',
        ]
    }
];

// Função para criar um carrossel
function createCarousel(id, images) {
    const carousel = document.createElement('div');
    carousel.id = `carousel${id}`;
    carousel.classList.add('carousel', 'slide');
    carousel.setAttribute('data-ride', 'carousel');

    const indicators = document.createElement('ol');
    indicators.classList.add('carousel-indicators');

    const inner = document.createElement('div');
    inner.classList.add('carousel-inner');

    images.forEach((image, index) => {
        const indicator = document.createElement('li');
        indicator.setAttribute('data-target', `#carousel${id}`);
        indicator.setAttribute('data-slide-to', index);
        if (index === 0) {
            indicator.classList.add('active');
        }
        indicators.appendChild(indicator);

        const item = document.createElement('div');
        item.classList.add('carousel-item');
        if (index === 0) {
            item.classList.add('active');
        }

        const img = document.createElement('img');
        img.classList.add('img-size');
        img.src = image;
        img.alt = `Slide ${index + 1}`;

        item.appendChild(img);
        inner.appendChild(item);
    });

    const prevButton = createControlButton(id, 'prev');
    const nextButton = createControlButton(id, 'next');

    carousel.appendChild(indicators);
    carousel.appendChild(inner);
    carousel.appendChild(prevButton);
    carousel.appendChild(nextButton);

    return carousel;
}

// Função para criar um botão de controle (anterior/próximo)
function createControlButton(id, direction) {
    const button = document.createElement('a');
    button.classList.add(`carousel-control-${direction}`);
    button.href = `#carousel${id}`;
    button.role = 'button';
    button.setAttribute('data-slide', direction);

    const icon = document.createElement('span');
    icon.classList.add(`carousel-control-${direction}-icon`);
    icon.setAttribute('aria-hidden', 'true');

    const srText = document.createElement('span');
    srText.classList.add('sr-only');
    srText.textContent = direction === 'prev' ? 'Previous' : 'Next';

    button.appendChild(icon);
    button.appendChild(srText);

    return button;
}

// Função para criar um modal
function createModal(id, carousel) {
    const modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.id = id;
    modal.tabIndex = '-1';
    modal.role = 'dialog';
    modal.setAttribute('aria-labelledby', 'basicModal');
    modal.setAttribute('aria-hidden', 'true');

    const modalDialog = document.createElement('div');
    modalDialog.classList.add('modal-dialog', 'modal-lg', 'modal-dialog-centered');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');

    modalBody.appendChild(carousel);

    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');

    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.classList.add('btn', 'color-btn');
    closeButton.setAttribute('data-dismiss', 'modal');
    closeButton.textContent = 'Fechar';

    modalFooter.appendChild(closeButton);

    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    modalDialog.appendChild(modalContent);
    modal.appendChild(modalDialog);

    document.body.appendChild(modal);
}

// Criar os modais para cada carrossel
carouselsData.forEach(carouselData => {
    const carousel = createCarousel(carouselData.id, carouselData.images);
    createModal(carouselData.id, carousel);
});