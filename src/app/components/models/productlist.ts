export interface Iproduct {
  id: number;
  imgUrl?: string;
  productName: string;
  price: number;
  quantity: number;
}
export let productsList: Iproduct[] = [
  {
    id: 1,
    imgUrl:'https://dummyimage.com/300x300/706969/fff.jpg&text=Product+1',
    productName: 'Product 1',
    price: 400,
    quantity: 24,
  },
  {
    id: 2,
    imgUrl:'https://dummyimage.com/300x300/706969/fff.jpg&text=Product+2',
    productName: 'Product 2',
    price: 4500,
    quantity: 45,
  },
  {
    id: 3,
    imgUrl:'https://dummyimage.com/300x300/706969/fff.jpg&text=Product+3',
    productName: 'Product 3',
    price: 7045,
    quantity: 12,
  },
  {
    id: 4,
    imgUrl:'https://dummyimage.com/300x300/706969/fff.jpg&text=Product+4',
    productName: 'Product 4',
    price: 4200,
    quantity: 1,
  },
  {
    id: 5,
    imgUrl:'https://dummyimage.com/300x300/706969/fff.jpg&text=Product+5',
    productName: 'Product 5',
    price: 457,
    quantity: 0,
  },
];
