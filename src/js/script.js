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
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}
class AlternadorDeTema {
  constructor() {
    this.temas = ['padrao', 'escuro', 'azul'];
    this.temaAtual = 'padrao';
    this.iniciar();
  }

  trocarTema(tema) {
    document.body.classList.remove('tema-escuro', 'tema-azul');
    
    if (tema !== 'padrao') {
      document.body.classList.add(`tema-${tema}`);
    }
    
    this.temaAtual = tema;
    localStorage.setItem('tema', tema);
  }

  iniciar() {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo) {
      this.trocarTema(temaSalvo);
    }
    this.criarAlternadorDeTema();
  }

  criarAlternadorDeTema() {
    const alternadorDeTema = document.createElement('div');
    alternadorDeTema.className = 'alternador-de-tema';
    alternadorDeTema.style.display = 'flex';
    alternadorDeTema.style.alignItems = 'center';
    alternadorDeTema.style.marginLeft = '20px';
    const opcoesDeTema = {
      'padrao': { rotulo: 'Claro', cor: '#fff' },
      'escuro': { rotulo: 'Escuro', cor: '#121212' },
      'azul': { rotulo: 'Azul', cor: '#0a1929' }
    };


    Object.entries(opcoesDeTema).forEach(([tema, { rotulo, cor }]) => {
      const botao = document.createElement('button');
      botao.textContent = rotulo;
      botao.className = 'botao-tema';
      botao.style.padding = '5px 10px';
      botao.style.margin = '0 5px';
      botao.style.backgroundColor = cor;
      botao.style.color = tema === 'padrao' ? '#333' : '#fff';
      botao.style.border = '1px solid #ccc';
      botao.style.borderRadius = '4px';
      botao.style.cursor = 'pointer';

      botao.addEventListener('click', () => {
        this.trocarTema(tema);
      });

      alternadorDeTema.appendChild(botao);
    });


    const nav = document.querySelector('nav');
    if (nav) {
      nav.appendChild(alternadorDeTema);
    }
  }
}


document.addEventListener('DOMContentLoaded', () => {
  new AlternadorDeTema();
});
