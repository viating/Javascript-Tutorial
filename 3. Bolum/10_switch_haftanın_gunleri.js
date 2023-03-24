switch (a = new Date().getDate()){
    case 0:
        gun = "Pazartesi";
        break;
    case 1:
        gun = "Salı";
        break;
    case 2:
        gun = "Çarşamba";
        break;
    case 3:
        gun = "Perşembe";
        break;
    case 4:
        gun = "Cuma";
        break;
    case 5:
        gun = "Cumartesi";
        break;
    case 6:
        gun = "Pazar";
        break;
}

console.log(gun);