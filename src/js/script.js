//Menu Hamburguer

class MobileNavBar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active"; 
    this.handleClick = this.handleClick.bind(this);
}

handleClick() {
  this.navList.classList.toggle(this.activeClass);
  this.mobileMenu.classList.toggle(this.activeClass);
  this.navLinks.forEach((link, index) => {
    link.style.animation
      ? (link.style.animation = "")
      : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
});}

addClickEvent() {
  this.mobileMenu.addEventListener("click", this.handleClick);
}
init() {
  if (this.mobileMenu) {
    this.addClickEvent();
  }
return this;
}}


//Slideshow

let count = 1;


if(document.getElementById("radio1")) {
  document.getElementById("radio1").checked = true;
  
  setInterval(function(){
      nextImage();
  }, 5000);
  
  function nextImage() {
      count++;
      if(count>4){
          count = 1;
      }
      document.getElementById("radio" + count).checked = true;
  }
}

// Trocador de tema


class ThemeSwitcher {
constructor() {
  this.themes = ['default', 'dark', 'blue'];
  this.currentTheme = 'default';
  this.init();
}

switchTheme(theme) {
  document.body.classList.remove('theme-dark', 'theme-blue');
  
  if (theme !== 'default') {
    document.body.classList.add(`theme-${theme}`);
  }
  
  this.currentTheme = theme;
  localStorage.setItem('theme', theme);
}

init() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    this.switchTheme(savedTheme);
  }
  
  document.addEventListener('switchTheme', (e) => {
    if (e.detail && this.themes.includes(e.detail)) {
      this.switchTheme(e.detail);
    }
  });
}
}


document.addEventListener('DOMContentLoaded', () => {
new ThemeSwitcher();

if (document.querySelector('.mobile-menu')) {
  const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
  );
  mobileNavBar.init();
}
});

/* Formulario */

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formContato");
  form.addEventListener("submit", function (e) {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
      e.preventDefault(); // Impede o envio do formulário
      alert("Por favor, preencha todos os campos obrigatórios.");
    } else {
      alert("Formulário enviado com sucesso!");
    }
  });
});