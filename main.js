const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

const team = [
  {
    name: 'Melanie Sigrid',
    title: 'CEO, Founder and Front End Developer',
    description: 'Melanie started her journey in Front-End Development in 2020, when COVID quarantines made her take Web Development as a hobby, and later consider a change of career. Through her journey, she fell in love with UX/UI design, and started dreaming of Orange Studio in 2021. With the help of her friends and colleagues, it is a dream that has come true.',
    picture: 'images/melanie.jpg',
    alt: 'Melanie Sigrid',
  },
  {
    name: 'Fernando Marques',
    title: 'Rails Back-End Engineer and CTO',
    description: 'Fernando is a powerful back-end engineer, with a wide arrange of skills which include: HTML and CSS, Javascript, Ruby, Ruby on Rails, NodeJS, React and React Native, C#, MVC, .NET & .NET Core, Python, Flask, RPA with UiPath, Powershell, Unity, SQL and NoSQL Databases',
    picture: 'images/fernando.jpg',
    alt: 'Fernando Marques',
  },
  {
    name: 'Santiago Velosa',
    title: 'Full-Stack Developer',
    description: 'Santiago is an experienced Full-Stack Developer, with experience in a variety of technologies. He has proven an indispensable part of the team at Orange Studio.',
    picture: 'images/santiago.jpg',
    alt: 'Santiago Velosa',
  },
  {
    name: 'Roberto (Bowy) Monterroso',
    title: 'Designer',
    description: 'Bowy Monterroso has always been interested in everything artful. He started his journey as an Industrial Designer, which he dropped out from to study Music at the Institute of Contemporary Music Performance in London. He has since worked on diverse projects like the design and building of Restaurante Montecasino and is our main guru when it comes to design.',
    picture: 'images/bowy.jpg',
    alt: 'Bowy Monterroso',
  },
  {
    name: 'Fabiano Frank',
    title: 'Full-Stack Developer',
    description: 'Melanie started her journey in Front-End Development in 2020, when COVID quarantines made her take Web Development as a hobby, and later consider a change of career. Through her journey, she fell in love with UX/UI design, and started dreaming of Orange Studio in 2021. With the help of her friends and colleagues, it is a dream that has come true.',
    picture: 'images/frank.jpg',
    alt: 'Fabiano Frank',
  },
  {
    name: 'Kerolous Samy Grace',
    title: 'Full-Stack Developer',
    description: 'Melanie started her journey in Front-End Development in 2020, when COVID quarantines made her take Web Development as a hobby, and later consider a change of career. Through her journey, she fell in love with UX/UI design, and started dreaming of Orange Studio in 2021. With the help of her friends and colleagues, it is a dream that has come true.',
    picture: 'images/kero.jpg',
    alt: 'Kerolous Samy',
  }
];

let cards = '';
team.forEach((p) => {
  cards += `<div class="speaker-card">
        <div class="image-parent">
          <img src="images/grid.png" class="decorative-image" alt="decorative image">
          <img src="${p.picture}" class="speaker-image" alt="${p.alt}">
        </div>
        <div class="speaker-text">
          <h3 class="speaker-name">${p.name}</h3>
          <h4 class="speaker-title">${p.title}</h4>
          <p class="speaker-description">${p.description}</p>
        </div>     
      </div>`;
});

document.getElementById('speakers').innerHTML = cards;
