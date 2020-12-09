import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    name: 'Frango à parmegiana',
    quantity: '1',
    size: 'M',
    price: 'R$30,00',
    avatarUrl: '/images/avatars/pizza.png'
  },
  {
    id: uuid(),
    name: 'Vegetariana',
    quantity: '1',
    size: 'P',
    price: 'R$25,00',
    avatarUrl: '/images/avatars/pizza.png'
  }
];
