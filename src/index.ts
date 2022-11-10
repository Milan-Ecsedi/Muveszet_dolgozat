
let muList= document.getElementById('Data');
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
    
});

document.getElementById("ButtonSummery")?.addEventListener('click',()=>{

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

    public set setYear(v : number) {
       if(v<=2022){
        this.year = v;
       }
       else{
        throw new Error("Hiba, az év nem lehet nagyobb az aktuális évnél!");
        
       }
    }
       
       public set setPrice(v : number) {
        
        if(v>=1){
            this.price = v;
        }else{
            throw new Error("Hiba, az árnak nagyobbnak kell lennie mint 1!");
            
        }
       }
       
       public set setHeight(v : number) {
        if(v>20){
            this.height = v;
        }else{

            throw new Error("Hiba, a magasságnak nagyobbnak kell lennie mint 20!");
            
        }
        
    }
       
       public set setName(v : string) {
        
        this.title = v;
       }
       

       
        
    
    

    toString(): string {
        
        return "Név: "+ this.title+" A kiálítás éve: "+ this.year+" Ár: "+this.price+"Ft  Magasság: "+this.height+"cm";
    }
    
    kiir(): void {
        
        let osszar:number =0;
        for(let art of Artwork){

            osszar+= art.price;
        }

        let li=document.createElement("li");
        li.textContent =  "Összesen "+Artwork.length+" darab van a listában és a művek összesített ára: "+osszar;
        muList?.appendChild(li);
        console.log(this.toString());

    }
}


let Artwork:Artwork[]=[

    new Statue("Marine o france",2017,20000,30),
    new Statue("Kamatase",2001,40000,45)

];

