const yeni_map = new Map([
    ["elma" , 10],
    ["armut", 20],
    ["ayva", 30]
])

console.log(yeni_map.get("elma"));

yeni_map.set("armut", 200)
console.log(yeni_map.get("armut"));

if (yeni_map.has("ayva")) {
    console.log("ayva varmış");
}

yeni_map.delete("ayva");
if (yeni_map.has("ayva")) {
    console.log("ayva varmış");
} else {console.log("ayva bitmiş")}