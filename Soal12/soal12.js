class BangunDatar{
    constructor(){
        this._nama = "";
    }
    get nama(){
        return this._nama;
    }
    set nama(nama){
        this._nama = nama;
    }
    get luas(){
        return "";
    } 
    get keliling(){
        return "";
    }
}

let bd = new BangunDatar();


console.log(`Luas ${bd.nama}`)
console.log(`Keliling ${bd.nama}`)


class Lingkaran extends BangunDatar {
    constructor(r){
        super();
        this._nama = "Lingkaran";
        this._r = r;
        this.PI = 3.14;
    }
    get r(){
        return this._r;
    }
    set r(value){
        this._r = value;
    }
    get luas(){
        return this.PI * this._r * this._r;
    }
    get keliling(){
        return this.PI * 2 * this._r;
    }
}


let lingkaran = new Lingkaran(8);

console.log()
console.log(`Jari - jari = ${lingkaran.r}`)
console.log(`Luas ${lingkaran.nama} adalah ${lingkaran.luas} cm2`)
console.log(`Keliling ${lingkaran.nama} adalah ${lingkaran.keliling} cm`)


class Persegi extends BangunDatar {
    constructor(sisi){
        super();
        this._nama = "Persegi";
        this._sisi = sisi;
    }
    get sisi(){
        return this._sisi;
    }
    set sisi(value){
        this._sisi = value;
    }
    get luas(){
        return this._sisi * this._sisi;
    }
    get keliling(){
        return this._sisi * 4;
    }
}


const persegi = new Persegi(2);

console.log()

console.log(`Sisi = ${persegi.sisi}`)
console.log(`Luas ${persegi.nama} adalah ${persegi.luas} cm2`)
console.log(`Keliling ${persegi.nama} adalah ${persegi.keliling} cm`)
