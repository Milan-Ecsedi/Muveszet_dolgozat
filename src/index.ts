//import {Statue} from "./Statue.js";
interface Artwork{

    title : string;
    year : number;
    price: number;
    toString() : string;
    kiir() : void;

}




document.addEventListener('DOMContentLoaded',()=>{

document.getElementById('ButtonAdd')?.addEventListener('click',()=>{

    let nev:string=document.getElementById('InputName')!.value;
    let ev:number=document.getElementById('InputYear')!.value;
    let ar:number=document.getElementById('InputPrice')!.value;
    let magassag:number=document.getElementById('InputHeight')!.value;

    muvek.push(new Statue(nev,ev,ar,magassag));
});
});



class Statue implements Artwork{
    title: string;
    year: number;
    price: number;
    height: number;

    constructor(title:string,year:number,price:number,height:number){

        this.title=title;
        this.year=year;
        this.price=price;
        this.height=height;


    }

    toString(): string {
        
        return "Név: "+ this.title+" A kiálítás éve: "+ this.year+" Ár: "+this.price+"Ft  Magasság: "+this.height+"cm";
    }
    kiir(): void {
        
        console.log(this.toString());

    }
}


let muvek:Artwork[]=[

    new Statue("Marine o france",2017,20000,30),
    new Statue("Kamatase",2001,40000,45)

];
for(let mu of muvek){
    mu.kiir();
}
