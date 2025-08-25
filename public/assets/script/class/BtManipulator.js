export class BtManipulator {
    constructor(btPesquisar, btHome) {
        this.btPesquisar = btPesquisar;
        this.btHome = btHome;
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

        this.btHome.addEventListener('click', () => this.goHome());
    }

    async search(input) {
        const dados = await fetch(`/${(input.value).toUpperCase()}`);
        if (dados.status != 404) {
            const response = await dados.json();
            input.value = '';
            return response;
        }
        return undefined;
    }

    goHome() {
        window.location.href = "/";
    }
}