"use strict";
let muList = document.getElementById('Data');
document.addEventListener('DOMContentLoaded', () => {
    var _a, _b;
    (_a = document.getElementById('ButtonAdd')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        let nev = document.getElementById('InputName').value;
        let ev = document.getElementById('InputYear').value;
        let ar = document.getElementById('InputPrice').value;
        let magassag = document.getElementById('InputHeight').value;
        Artwork.push(new Statue(nev, ev, ar, magassag));
    });
    (_b = document.getElementById("ButtonSummery")) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
        for (let art of Artwork) {
            art.kiir();
        }
    });
});
class Statue {
    constructor(title, year, price, height) {
        this.title = title;
        this.year = year;
        this.price = price;
        this.height = height;
    }
    set setYear(v) {
        if (v <= 2022) {
            this.year = v;
        }
        else {
            throw new Error("Hiba, az év nem lehet nagyobb az aktuális évnél!");
        }
    }
    set setPrice(v) {
        if (v >= 1) {
            this.price = v;
        }
        else {
            throw new Error("Hiba, az árnak nagyobbnak kell lennie mint 1!");
        }
    }
    set setHeight(v) {
        if (v > 20) {
            this.height = v;
        }
        else {
            throw new Error("Hiba, a magasságnak nagyobbnak kell lennie mint 20!");
        }
    }
    set setName(v) {
        this.title = v;
    }
    toString() {
        return "Név: " + this.title + " A kiálítás éve: " + this.year + " Ár: " + this.price + "Ft  Magasság: " + this.height + "cm";
    }
    kiir() {
        let osszar = 0;
        for (let art of Artwork) {
            osszar += art.price;
        }
        let li = document.createElement("li");
        li.textContent = "Összesen " + Artwork.length + " darab van a listában és a művek összesített ára: " + osszar;
        muList === null || muList === void 0 ? void 0 : muList.appendChild(li);
        console.log(this.toString());
    }
}
let Artwork = [
    new Statue("Marine o france", 2017, 20000, 30),
    new Statue("Kamatase", 2001, 40000, 45)
];
