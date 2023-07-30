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
    image: 'img.jpg2',
    nature: {
        color: []
    }

}
];
console.log(listProducts);
