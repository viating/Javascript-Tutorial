const yeni_map = new Map([
    ["elma" , 10],
    ["armut", 20],
    ["ayva", 30]
])

yeni_map.forEach(function(value, key){
    console.log(key + " : " + value);
})