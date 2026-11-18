import Pepperoni from '../assets/p-3.png';
import Veggie from '../assets/p-1.png';
import ChickenRanch from '../assets/p-6.png';
import ClassicFries from '../assets/ClassicFries.png';
import CheesyFries from '../assets/CheesyFries.png';
import SpicyFries from '../assets/SpicyFries.png';
import CocaCola from '../assets/Coca-Cola.png';
import Sprite from '../assets/Sprite.png';
import Fanta from '../assets/Fanta.png';

export const NAV_LINKS = [
    { id: 'menu', label: 'Menu', href: '/menu' },
    { id: 'food', label: 'Trending', href: '/#trending' },
    { id: 'services', label: 'Discover', href: '/#trending' },
    { id: 'about-us', label: 'About Us', href: '/#about-us' },
];

export const POPULAR_CATEGORIES = [
    { id: 'pizza', name: 'Pizza', active: false, url: '#pizza' },
    { id: 'frise', name: 'Frise', active: false, url: '#frise' },
    { id: 'soda', name: 'Soda', active: false, url: '#soda' },
];

export const POPULAR_PIZZA = [
    {
        id: 1,
        name: 'Pepperoni',
        img: Pepperoni,
        rating: '4.7',
        price: 21.00,
        isFeatured: false,
    },
    {
        id: 2,
        name: 'Veggie',
        img: Veggie,
        rating: '4.9',
        price: 21.00,
        isFeatured: true,
    },
    {
        id: 3,
        name: 'Chicken Ranch',
        img: ChickenRanch,
        rating: '4.5',
        price: 21.00,
        isFeatured: false,
    },
];


export const POPULAR_FRISE = [
  {
    id: 1,
    name: "Classic French Fries",
    img: ClassicFries,
    rating: 4.7,
    price: 3.99,
    category: "fries",
  },
  {
    id: 2,
    name: "Cheesy Fries",
    img: CheesyFries,
    rating: 4.9,
    price: 5.49,
    category: "fries",
  },
  {
    id: 3,
    name: "Spicy Loaded Fries",
    img: SpicyFries,
    rating: 4.8,
    price: 6.99,
    category: "fries",
  },
];

export const POPULAR_SODA = [
  {
    id: 4,
    name: "Coca-Cola",
    img: CocaCola,
    rating: 4.8,
    price: 1.99,
    category: "soda",
  },
  {
    id: 5,
    name: "Sprite",
    img: Sprite,
    rating: 4.6,
    price: 1.99,
    category: "soda",
  },
  {
    id: 6,
    name: "Fanta",
    img: Fanta,
    rating: 4.7,
    price: 2.49,
    category: "soda",
  },
];


export const ALL_MENU = [
  // Pizza
  {
    id: 1,
    name: "Pepperoni",
    img: Pepperoni,
    rating: 4.7,
    price: 21.00,
    category: "pizza",
    isFeatured: false,
  },
  {
    id: 2,
    name: "Veggie",
    img: Veggie,
    rating: 4.9,
    price: 21.00,
    category: "pizza",
    isFeatured: true,
  },
  {
    id: 3,
    name: "Chicken Ranch",
    img: ChickenRanch,
    rating: 4.5,
    price: 21.00,
    category: "pizza",
    isFeatured: false,
  },

  // Fries
  {
    id: 4,
    name: "Classic French Fries",
    img: ClassicFries,
    rating: 4.7,
    price: 3.99,
    category: "fries",
    isFeatured: false,
  },
  {
    id: 5,
    name: "Cheesy Fries",
    img: CheesyFries,
    rating: 4.9,
    price: 5.49,
    category: "fries",
    isFeatured: false,
  },
  {
    id: 6,
    name: "Spicy Loaded Fries",
    img: SpicyFries,
    rating: 4.8,
    price: 6.99,
    category: "fries",
    isFeatured: false,
  },

  // Soda
  {
    id: 7,
    name: "Coca-Cola",
    img: CocaCola,
    rating: 4.8,
    price: 1.99,
    category: "soda",
    isFeatured: false,
  },
  {
    id: 8,
    name: "Sprite",
    img: Sprite,
    rating: 4.6,
    price: 1.99,
    category: "soda",
    isFeatured: false,
  },
  {
    id: 9,
    name: "Fanta",
    img: Fanta,
    rating: 4.7,
    price: 2.49,
    category: "soda",
    isFeatured: false,
  },
];

export const TRENDING_CHECKS = [
    'Margherita Pizza',
    'Pepperoni Pizza',
    'BBQ Chicken Pizza',
    'Quattro Formaggi',
    'Vegetarian Pizza',
    'Mushroom Truffle',
];
