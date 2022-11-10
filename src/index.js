"use strict";
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.getElementById('ButtonAdd')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        let nev = document.getElementById('InputName').value;
        let ev = document.getElementById('InputYear').value;
        let ar = document.getElementById('InputPrice').value;
        let magassag = document.getElementById('InputHeight').value;
        muvek.push(new Statue(nev, ev, ar, magassag));
    });
});
class Statue {
    constructor(title, year, price, height) {
        this.title = title;
        this.year = year;
        this.price = price;
        this.height = height;
    }
    toString() {
        return "Név: " + this.title + " A kiálítás éve: " + this.year + " Ár: " + this.price + "Ft  Magasság: " + this.height + "cm";
    }
    kiir() {
        console.log(this.toString());
    }
}
let muvek = [
    new Statue("Marine o france", 2017, 20000, 30),
    new Statue("Kamatase", 2001, 40000, 45)
];
for (let mu of muvek) {
    mu.kiir();
}
