//variable boolean
var boolean1 = true;
var boolean2 = false;
    
    console.log("Variable Boolean\n", boolean1, boolean2, '\n');

//variable array
var array1 = ['Satu', 'Dua', 3, 4];
var array2 = ['Lima', 'Enam', 7, 8];

    console.log('Variable Array\n', array1,'\n',array2, '\n');

//variable object
var object1 = 'Ega';
var object2 = 'Aji Saputra';

    console.log('Object\n', object1, object2, '\n');

//variable array of object
var data = [
    {
        name: 'Ega',
        age: 20
    },
    {
        birthPlace: 'Bekasi',
        homeAdress: 'Rawalumbu'
    }
];

    console.log('Array Of Object\n', data, '\n')

//Looping
console.log('Looping');
var biodata1 = [
    {
        names: 'Aji',
        age: 20,
        gender: 'Man'
    }
];

var i = 0;

while(i < biodata1.length){
    console.log(""+biodata1[i].names + " - " +biodata1[i].age + " - " +biodata1[i].gender);
    i++;
};
