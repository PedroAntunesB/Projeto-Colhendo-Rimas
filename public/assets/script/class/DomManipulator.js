import { DowloaderClass } from "./Dowloader.js";

export class DomManipulator {
    constructor(divConteudoPoesias) {
        this.div = divConteudoPoesias;
        this.classNone = 'display-none';
    }

    cleanMain() {
        document.querySelector('h1').classList.add(this.classNone);

        const containers = document.querySelectorAll('.container');
        containers.forEach(e => {
            e.classList.add(this.classNone);
        });
    }

    appendChilds(divsArr) {
        divsArr.forEach((el) => this.div.appendChild(el));
    }

    create(poesia) {
        this.div.textContent = '';
        this.cleanMain();
        const titulo = document.createElement('h2');
        titulo.textContent = poesia.titulo;
        const nomeAutor = document.createElement('h3');
        nomeAutor.textContent = poesia.autor;
        const conteudoDiv = document.createElement('div');
        const dowloaderbutton = document.createElement('button');
        dowloaderbutton.textContent = 'Botão para dowload';
        dowloaderbutton.classList.add('download-btn');
        conteudoDiv.textContent = poesia.conteudo;
        this.appendChilds([titulo, nomeAutor, conteudoDiv, dowloaderbutton]);
        this.div.classList.remove(this.classNone);
        const dowloader = new DowloaderClass(poesia, dowloaderbutton);
        dowloaderbutton.addEventListener('click', () => dowloader.textDowload());
    }

    createErrorMessage() {
        this.cleanMain();
        this.div.textContent = '';
        const erro = document.createElement('p');
        erro.textContent = 'Não foi possivel encontrar esta poesia';
        erro.style.color = "red";
        erro.style.fontWeight = "bold";
        this.div.appendChild(erro);
        this.div.classList.remove(this.classNone);
    }
}

