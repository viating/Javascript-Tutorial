const degerler = new Set([1, 3, 5, 7]);
console.log(degerler);

if (degerler.has(5)) {
    console.log("5 varmış")
}

if (degerler.has(11)) {
    console.log("11 varmış");
} else {console.log("11 yokmuş");}