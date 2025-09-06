export class BtManipulator {
    constructor(btPesquisar, btHome, btAutores, btAutorArr) {
        this.btPesquisar = btPesquisar;
        this.btHome = btHome;
        this.btAutores = btAutores;
        this.btAutorArr = btAutorArr;
    }

    addListener(domManipulator) {
        this.btPesquisar.addEventListener('click', async () => {
            const poesia = await this.search(document.querySelector('input'));
            if (poesia == undefined) {
                domManipulator.createErrorMessage();
                return;
            }
            domManipulator.create(poesia);
        });

        this.btAutores.addEventListener('click', async () => {
            const autores = await this.autores();
            domManipulator.createPageAutores(autores);
        });

        this.btHome.addEventListener('click', () => this.goHome());

    }

    async search(input) {
        const dados = await fetch(`/poesia/${(input.value).toUpperCase()}`);
        if (dados.status != 404) {
            const response = await dados.json();
            input.value = '';
            return response;
        }
        return undefined;
    }

    async autores() {
        const dados = await fetch('/autores');
        if (dados.status != 404) {
            const response = await dados.json();
            return response;
        }
        return undefined;
    }

    goHome() {
        window.location.href = "/";
    }
}