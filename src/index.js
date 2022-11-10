"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statue_1 = require("./Statue");
let muvek = [
    new Statue_1.Statue("Marine o france", 2017, 20000, 30),
    new Statue_1.Statue("Kamatase", 2001, 40000, 45)
];
for (let mu of muvek) {
    mu.kiir();
}
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.getElementById('ButtonAdd')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        let nev = document.getElementById('InputName').value;
        let ev = document.getElementById('InputYear').value;
        let ar = document.getElementById('InputPrice').value;
        let magassag = document.getElementById('InputHeight').value;
        muvek.push(new Statue_1.Statue(nev, ev, ar, magassag));
    });
});
