class ogrenci {
    constructor(ad, soyad) {
        this.ad = ad;
        this.soyad = soyad;
    }

    yazdir(){
        console.log(this.ad , " " , this.soyad);
    }
}

let yeni_ogrenci = new ogrenci("Ali", "Bayar");
yeni_ogrenci.yazdir();