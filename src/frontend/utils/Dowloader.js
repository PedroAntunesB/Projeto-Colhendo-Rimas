export class DowloaderClass {
    constructor(poesia) {
        this.texto = "";
        this.texto += "Título: " + poesia.titulo + "\n";
        this.texto += "Autor: " + poesia.autor + "\n\n";
        this.texto += poesia.conteudo;
        console.log(this.texto)
        this.blob = new Blob([this.texto], { type: "text/plain" });
    }

    textDowload() {
        const url = URL.createObjectURL(this.blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "poesia.txt";
        link.click();
    }

}