import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    title: 'Vegetariana',
    description:
      'Molho, mussarela, azeitona, cebola, ervilha, milho, pimentão, palmito, champignon e orégano.',
    imageUrl: '/images/products/pizza.png',
    price: 'R$25,00',
    size: 'P'
  },
  {
    id: uuid(),
    title: 'Frango a Parmegiana',
    description:
      'Molho, mussarela, frango à parmegiana, milho e orégano.',
    imageUrl: '/images/products/pizza.png',
    price: 'R$30,00',
    size: 'M'
  },
  {
    id: uuid(),
    title: 'Italiana',
    description:
      'Molho, mussarela, frango, palmito, azeitona, tomate, cebola e orégano.',
    imageUrl: '/images/products/pizza.png',
    price: 'R$53,00',
    size: 'GG'
  },
  {
    id: uuid(),
    title: 'Frango',
    description:
      'Molho, mussarela, frango, milho, tomate, catupiry e orégano.',
    imageUrl: '/images/products/pizza.png',
    price: 'R$23,00',
    size: 'P'
  }
];
