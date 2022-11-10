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

    Artwork.push(new Statue(nev,ev,ar,magassag));
    for(let art of Artwork){
        art.kiir();
    }
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

    public set value(v : number) {
       if(this.year<=2022){
        this.year = v;
       }
       else{
        throw new Error("Hiba, az év nem lehet nagyobb az aktuális évnél!");
        
       }
        
    }
    

    toString(): string {
        
        return "Név: "+ this.title+" A kiálítás éve: "+ this.year+" Ár: "+this.price+"Ft  Magasság: "+this.height+"cm";
    }
    kiir(): void {
        
        console.log(this.toString());

    }
}


let Artwork:Artwork[]=[

    new Statue("Marine o france",2017,20000,30),
    new Statue("Kamatase",2001,40000,45)

];

