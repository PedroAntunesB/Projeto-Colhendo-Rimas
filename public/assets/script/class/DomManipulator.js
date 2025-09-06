import { DowloaderClass } from "./Dowloader.js";

export class DomManipulator {
    constructor(divConteudoPoesias) {
        this.div = divConteudoPoesias;
        this.classNone = 'display-none';
    }

    cleanMain() {
        this.div.innerHTML = ''
        document.querySelector('h1').classList.add(this.classNone);
        const containers = document.querySelectorAll('.container');
        containers?.forEach(e => {
            e.classList.add(this.classNone);
        });
        const autoresPage = document.querySelectorAll('.divContainer')
        autoresPage?.forEach((el) => {
            el.classList.add(this.classNone);
        });
        const p = document.querySelector('p');
        p?.classList.add(this.classNone);
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


    createPageAutores(autoresArr) {
        this.cleanMain();
        autoresArr = [...new Set(autoresArr)];
        for (let autor of autoresArr) {
            let divContainer = document.createElement('div');
            let titulo = document.createElement('h3');
            let bt = document.createElement('button');
            bt.classList.add('btAutor');
            titulo.textContent = `autor(a): ${autor}`;
            bt.textContent = 'Ver obras...';
            bt.addEventListener('click', async () => {
                await this.createAutorPage(autor);
            })
            divContainer.appendChild(titulo);
            divContainer.appendChild(bt);
            this.div.appendChild(divContainer);
            divContainer.classList.add('divContainer');
        }
        this.div.classList.remove(this.classNone);
    }

    async createAutorPage(autor) {
        this.cleanMain();
        const dadosAutor = await fetch(`/${autor}`);
        const h1 = document.createElement('h1');
        const obrasDiv = document.createElement('div');
        const obrasArr = await dadosAutor.json();
        for (let i of obrasArr) {
            let divContainer = document.createElement('div');
            let titulo = document.createElement('h3');
            let bt = document.createElement('button');
            bt.classList.add('btAutor');
            titulo.textContent = `Poesia: ${i.titulo}`;
            bt.textContent = 'Ler obra...';
            bt.addEventListener('click', () => {
                this.create(i);
            });
            divContainer.appendChild(titulo);
            divContainer.appendChild(bt);
            divContainer.classList.add('divContainer');
            obrasDiv.appendChild(divContainer);
        }
        h1.textContent = autor;
        this.appendChilds([h1, obrasDiv]);
    }

}

