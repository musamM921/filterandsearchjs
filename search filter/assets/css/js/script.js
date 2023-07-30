let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts = [
{
   id: 1,
   name: 'Name product white-black',
   price: 205600,
   quantity: 0, 
   image: 'img1.jpg',
   nature: {
    color: ['white', 'black'],
    size: ['S', 'M', 'L'],
    type: 'T-shirt'
   }
},
{
    id: 2,
    name: 'Name product white-black-grey',
    price:  300000,
    quantity: 30,
    image: 'img2.jpg',
    nature: {
        color: ['white', 'black', 'grey'],
        size: ['S', 'M', 'L'],
        type: 'Polo'
    }
},
{
    id: 3,
    name: 'Name product black',
    price:  400000,
    quantity: 30,
    image: 'img3.jpg',
    nature: {
        color: ['black',],
        size: ['S', 'M', 'L'],
        type: 'Polo'
    }
},
{
    id: 4,
    name: 'Name product blue-black',
    price:  400000,
    quantity: 30,
    image: 'img4.jpg',
    nature: {
        color: ['black', 'blue'],
        size: ['S', 'M', 'L'],
        type: 'Polo'
    }
},
];
console.log(listProducts);
