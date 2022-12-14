// const nav = document.getElementById("nav");
// const body = document.getElementById("body");
const cardWorks = document.getElementById('card-works');
const modal = document.getElementById('popup');
const title = document.getElementById('popup-title');
const image = document.getElementById('popup-img');
const longDes = document.getElementById('des');
const live = document.getElementById('see-live');
const source = document.getElementById('see-source');

const cards = [
  {
    title: 'Tonic',
    image: './snap-shoot/image1.svg',
    longDes:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    live: 'https://yidnekachew-cmd.github.io/Setup-and-mobile-version-skeleton/',
    shortDes:
      'A daily selection of privately personalized reads; no accounts or sign- ups required.',
    source:
      'https://github.com/Yidnekachew-cmd/Setup-and-mobile-version-skeleton.git',
    languages: ['html', 'javaScript', 'css'],
    roles: ['Canopy', 'Back End Dev', 2015],
  },
  {
    title: 'Multi-Post Stories',
    image: './snap-shoot/image2.svg',
    longDes:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    live: 'https://yidnekachew-cmd.github.io/Setup-and-mobile-version-skeleton/',
    shortDes:
      'A daily selection of privately personalized reads; no accounts or sign- ups required.',
    source:
      'https://github.com/Yidnekachew-cmd/Setup-and-mobile-version-skeleton.git',
    languages: ['html', 'javaScript', 'css'],
    roles: ['Canopy', 'Back End Dev', 2015],
  },
  {
    title: 'Tonic',
    image: './snap-shoot/image3.svg',
    longDes:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    live: 'https://yidnekachew-cmd.github.io/Setup-and-mobile-version-skeleton/',
    shortDes:
      'A daily selection of privately personalized reads; no accounts or sign- ups required.',
    source:
      'https://github.com/Yidnekachew-cmd/Setup-and-mobile-version-skeleton.git',
    languages: ['html', 'javaScript', 'css'],
    roles: ['Canopy', 'Back End Dev', 2015],
  },
  {
    title: 'Multi-Post Stories',
    image: './snap-shoot/image4.svg',
    longDes:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    live: 'https://yidnekachew-cmd.github.io/Setup-and-mobile-version-skeleton/',
    shortDes:
      'A daily selection of privately personalized reads; no accounts or sign- ups required.',
    source:
      'https://github.com/Yidnekachew-cmd/Setup-and-mobile-version-skeleton.git',
    languages: ['html', 'javaScript', 'css'],
    roles: ['Canopy', 'Back End Dev', 2015],
  },
];

cardWorks.innerHTML = '';

for (let i = 0; i < cards.length; i += 1) {
  let lang = '';
  cards[i].languages.forEach((cards) => {
    lang = `${lang}<li class="${cards}">${cards}</li>`;
  });
  let roles = '';
  cards[i].languages.forEach((cards) => {
    roles = `${roles}<li>${cards}</li>`;
  });

  cardWorks.innerHTML += `<div class="card-works${i + 1}">
          <div class="desktop">
            <div class="snap-shoot">
              <img src="${cards[i].image}" alt="tonic" />
            </div>
            <div class="left-block">
              <div class="text">
                <h2 class="title">${cards[i].title}</h2>
                <ul class="frame">
                  <li class="client">CANOPY</li>
                  <li class="role"><span class="bullet"></span>Back End Dev</li>
                  <li class="year"><span class="bullet"></span>2015</li>
                </ul>
              </div>
              <div>
                <p class="main-text1">
                  ${cards[i].shortDes}
                </p>
              </div>
              <div>
                <ul class="tags">
                  ${lang}
                </ul>
              </div>

              <div class="action">
                <div class="normal-button">
                  <button type="button" class="see-proj-${i}">See Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>`;
}

// popup
for (let i = 0; i < cards.length; i += 1) {
  document.querySelector(`.see-proj-${i}`).addEventListener('click', () => {
    let lang = '';
    cards[i].languages.forEach((cards) => {
      lang += `${lang}<li class="${cards}">${cards}</li>`;
    });
    title.innerHTML = cards[i].title;
    image.src = cards[i].image;
    longDes.innerHTML = cards[i].longDes;
    live.setAttribute('href', cards[i].live);
    source.setAttribute('href', cards[i].source);

    modal.style.display = 'flex';
  });
}

const closeProj = document.querySelector('.close-btn2');
closeProj.addEventListener('click', () => {
  modal.style.display = 'none';
});
