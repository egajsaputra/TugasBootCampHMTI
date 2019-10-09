//Nomor 1
console.log('#Nomor 1 =>\n');

//Penggunaan IF
console.log('Penggunaan IF\n');

if (7>6) {
    console.log('7 lebih besar dari 6');
}

if (7<8) {
    console.log('7 lebih kecil dari 8');
}

console.log(' ');
console.log('---------------------\n')

//Penggunaan IF-ELSE
console.log('Penggunaan IF-ELSE\n');

if (1 == 1) {
    console.log('Ega Ganteng');
} else {
    console.log('Ega tetep ganteng');
}

if (1 != 2) {
    console.log('Bener');
} else {
    console.log('Salah Ngaco');
}

console.log(' ');
console.log('---------------------\n')

//Penggunaan IF-ELSE-IF
console.log('Penggunaan IF-ELSE-IF\n')

if (2 > 1) {
    console.log('2 lebih besar dari 1');
} else if (1 < 2) {
    console.log('1 juga lebih kecil dari 2');
}

if (7 == 6) {
    console.log('7 sama dengan 6');
} else if (7 != 6) {
    console.log('7 tidak sama dengan 6');
}

console.log(' ');
console.log('---------------------\n')

//Penggunaan IF-ELSE IF-ELSE
console.log('Penggunaan IF-ELSE IF-ELSE\n');

if (7 === '7') {
    console.log('7 tidak sama dengan tujuh');
} else if (7 == 7) {
    console.log('Tapi 7 sama dengan 7');
} else {
    console.log('Take Everything');
}

if (2 != 2) {
    console.log('2 tidak sama dengan 2');
} else if (1 > 2) {
    console.log('1 lebih besar dari 2');
} else {
    console.log('Take Everything');
}

console.log(' ');
console.log('---------------------\n')

//If Bersarang
console.log('Penggunaan IF Bersarang');

if (1 > 0) {
    console.log('Ya memang 1 lebih besar dari 0');
    if (2 > 1) {
        console.log('2 lebih dari 1');
        if (3 > 2) {
            console.log('3 lebih besar dari 2');
            if (4 < 5) {
                console.log('Ini juga 4 lebih kecil dari 5');
                if (5 > 4) {
                    console.log('Kalo yang ini 5 lebih besar dari 4');
                } else if (1 != 2) {
                    console.log('1 tidak sama dengan 2');
                } else {
                    console.log('Everything is you');
                }
            }
        }
    }
}
console.log(' ');

if (9 > 7) {
    console.log('Ega');
    if (6 > 1) {
        console.log('Aji');
        if (7 > 2) {
            console.log('Saputra');
            if (4 > 3) {
                console.log('Alhamdulillah nomor 1 udah');
                if (5 > 4) {
                    console.log('Makasih banyak bang jo :)');
                } else if (1 != 1) {
                    console.log('1 tida sama dengan 1');
                } else {
                    console.log('Everything is you');
                }
            }
        }
    }
}
console.log(' ');
console.log('###############################\n')

//Nomor 2
console.log('#Nomor 2 =>\n');

//Looping while dengan if else
var i=0;

while(i < 2) {
    i++;
    if (1 == 1) {
        console.log('Ega Ganteng');
    } else {
        console.log('Ega tetep ganteng');
    }
}
console.log(' ');

var i=0;

while(i < 2) {
    i++;
    if (1 == 2) {
        console.log('Ega Ganteng');
    } else {
        console.log('Ega tetep ganteng');
    }
}
console.log(' ');
console.log('###############################\n')

//Nomor 2
console.log('#Nomor 3 =>\n');

//Switch Case
console.log('Switch Case\n');

var sepatu = 3;
switch (sepatu) {
    case 1:
    console.log('Sepatu Adidas');
    break;
    
    case 2:
    console.log('Sepatu Nike');
    break;
    
    default:
    console.log('Sepatu Vans');
}

console.log(' ');
console.log('---------------------\n')

//For Loop
console.log('For Loop\n');

var i;
for(i=1;i<3;i++)
    console.log(i + '. For Loop');

console.log(' ');
console.log('###############################\n')
