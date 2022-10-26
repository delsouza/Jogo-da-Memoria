const grid = document.querySelector('.grid');
const span = document.querySelector('.jogador');
const tempo= document.querySelector('.tempo');

const personagens = [
    'Brook',
    'chopper',
    'Franky',
    'Jinbe',
    'usopp',
    'nami',
    'nicorobin',
    'sanji',
    'luffy',
    'zoro',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let primeirocard = '';
let segundocard = '';

const checkFimJogo = () => {
    const carddesativado = document.querySelectorAll('.carddesativado');

    if(carddesativado.length === 20){
        clearInterval(this.loop);
        alert(`Parabéns, ${span.innerHTML}! Seu tempo foi: ${tempo.innerHTML}`);
    }
}


const checkCartas = () => {
    const primeiropersonagem = primeirocard.getAttribute('data-personagem')
    const segundopersonagem = segundocard.getAttribute('data-personagem')

    if(primeiropersonagem === segundopersonagem) {
        primeirocard.firstChild.classList.add('carddesativado');
        segundocard.firstChild.classList.add('carddesativado');

        primeirocard = '';
        segundocard = '';

        checkFimJogo();
    } else {
        setTimeout(() => {
            primeirocard.classList.remove('revelarcard');
            segundocard.classList.remove('revelarcard');

            primeirocard = '';
            segundocard = '';
        }, 500);
    }
}

const revelarcard = ({target}) => {
    if (target.parentNode.className.includes('revelarcard')){
        return;
    }

    if (primeirocard === '') {
        target.parentNode.classList.add('revelarcard');  
        primeirocard = target.parentNode;
    }   else if (segundocard === '') {
        target.parentNode.classList.add('revelarcard');  
        segundocard = target.parentNode;

        checkCartas();
    }
    
}
const criarCard = (personagem) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../img/${personagem}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revelarcard);
    card.setAttribute('data-personagem', personagem);

    return card;
}

const carregarJogo = () => {
    const personagensduplicados = [...personagens, ...personagens];
    
    const random =  personagensduplicados.sort(()=> Math.random() - 0.5);

    random.forEach((personagem) => {
        const card = criarCard(personagem);
        grid.appendChild(card);
        console.log(personagem);
    });
}

const startTimer = () => {
    this.loop = setInterval(() => {
      const currentTime = +tempo.innerHTML;
      tempo.innerHTML = currentTime + 1;
    }, 1000);
  }

window.onload = () => {
    span.innerHTML = localStorage.getItem('jogador');
    startTimer();
    carregarJogo();
}