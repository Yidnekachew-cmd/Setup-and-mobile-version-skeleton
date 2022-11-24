const nav = document.getElementById('nav');
const body = document.getElementById('body');
const cardWorks = document.getElementById('card-works');
const modal = document.getElementById('popup'); // modal
const title = document.getElementById('popup-title'); // text_modal
const image = document.getElementById('popup-img'); // modal-im
const longDes = document.getElementById('des');
const live = document.getElementById('live');
const source = document.getElementById('source');

const cards = [
  {
    title: 'Tonic',
    image: './snap-shoot/image1.svg',
    longDes:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    live: '#',
    shortDes:
      'A daily selection of privately personalized reads; no accounts or sign- ups required.',
    source: '#',
    languages: ['html', 'javascript', 'css'],
    roles: ['Canopy', 'Back End Dev', 2015],
  },
  {
    title: 'Multi-Post Stories',
    image: './snap-shoot/image2.svg',
    longDes:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    live: '#',
    shortDes:
      'A daily selection of privately personalized reads; no accounts or sign- ups required.',
    source: '#',
    languages: ['html', 'javascript', 'css'],
    roles: ['Canopy', 'Back End Dev', 2015],
  },
  {
    title: 'Tonic',
    image: './snap-shoot/image3.svg',
    longDes:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    live: '#',
    shortDes:
      'A daily selection of privately personalized reads; no accounts or sign- ups required.',
    source: '#',
    languages: ['html', 'javascript', 'css'],
    roles: ['Canopy', 'Back End Dev', 2015],
  },
  {
    title: 'Multi-Post Stories',
    image: './snap-shoot/image4.svg',
    longDes:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    live: '#',
    shortDes:
      'A daily selection of privately personalized reads; no accounts or sign- ups required.',
    source: '#',
    languages: ['html', 'javascript', 'css'],
    roles: ['Canopy', 'Back End Dev', 2015],
  },
];

function openMobileMenu() {
  nav.style.display = 'block';
}

function closeMobileMenu() {
  nav.style.display = 'none';
}

openMobileMenu();
closeMobileMenu();

// eslint-disable-next-line no-return-assign
cards.map(
  (card, index) => (cardWorks.innerHTML += `<div class="card-works1">
            <div class="snap-shoot">
              <img
                src="${card.image}"
                alt="tonic"
              />
            </div>
            <div class="left-block">
              <h2 id="title">${card.title}</h2>
              <ul class="frmae">
              ${card.roles
      .map(
        (role, idx) => ` <li class="client">${role}</li>
                <li class="counter"><img src="images 1/Counter (1).png" id="dot-${idx}" /></li>`,
      )
      .join('')}
              </ul>
            
            <p id="main-text1">
              ${card.shortDes}
            </p>
            <ul class="tags">
              ${card.languages
      .map((lang) => `<li id="tag1">${lang}</li>`)
      .join('')}
            </ul>
            <div class="normal-button">
              <a href="javascript:openModal(${index})" id="view1">See Project</a>
            </div>
            </div>
          </div>
        </div>
      `),
);

const openModal = (index) => {
  title.innerHTML = cards[index].title;
  image.src = cards[index].image;
  longDes.innerHTML = cards[index].longDes;
  live.href = cards[index].live;
  source.href = cards[index].source;
  modal.style.display = 'block';
  body.style.overflow = 'hidden';
};

const closeModal = () => {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
};

openModal();
closeModal();
