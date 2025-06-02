class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        // bind para preservar o contexto
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);

        // Animação de links
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);
mobileNavBar.init();

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

// Funcionalidade de troca de tema
class ThemeSwitcher {
constructor() {
  this.themes = ['default', 'dark', 'blue'];
  this.currentTheme = 'default';
  this.init();
}

switchTheme(theme) {
  // Remove todas as classes de tema
  document.body.classList.remove('theme-dark', 'theme-blue');
  
  // Adiciona a classe do tema selecionado se não for padrão
  if (theme !== 'default') {
    document.body.classList.add(`theme-${theme}`);
  }
  
  this.currentTheme = theme;
  // Armazena a preferência do usuário no localStorage
  localStorage.setItem('theme', theme);
}

init() {
  // Verifica se o usuário selecionou um tema anteriormente
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    this.switchTheme(savedTheme);
  }
  
  // Escuta eventos de troca de tema dos botões HTML
  document.addEventListener('switchTheme', (e) => {
    if (e.detail && this.themes.includes(e.detail)) {
      this.switchTheme(e.detail);
    }
  });
}
}

// Inicializa o trocador de tema quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
// Inicializa o trocador de tema
new ThemeSwitcher();

// Inicializa a navbar mobile
if (document.querySelector('.mobile-menu')) {
  const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
  );
  mobileNavBar.init();
}
});
