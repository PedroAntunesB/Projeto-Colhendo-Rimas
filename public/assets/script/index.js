import { DomManipulator } from "./class/DomManipulator.js";
import { BtManipulator } from "./class/BtManipulator.js";

const domManipulator = new DomManipulator(document.querySelector('.conteudoPoesias'));
const btManipulator = new BtManipulator(document.querySelector('.btPesquisar'), document.querySelector(".buttonHome"), document.querySelector(".buttonAutores"));
btManipulator.addListener(domManipulator);
