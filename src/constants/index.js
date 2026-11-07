import Pepperoni from '../assets/p-3.png';
import Veggie from '../assets/p-1.png';
import ChickenRanch from '../assets/p-6.png';

export const NAV_LINKS = [
    { id: 'menu', label: 'Menu', href: '#menu' },
    { id: 'food', label: 'Trending', href: '#trending' },
    { id: 'services', label: 'Discover', href: '#discover' },
    { id: 'about-us', label: 'About Us', href: '#about-us' },
];

export const POPULAR_CATEGORIES = [
    { id: 'all', name: 'All', active: true },
    { id: 'pizza', name: 'Pizza', active: false },
    { id: 'frise', name: 'Frise', active: false },
    { id: 'soda', name: 'Soda', active: false },
    { id: 'others', name: 'Others', active: false },
];

export const POPULAR_FOODS = [
    {
        id: 1,
        name: 'Pepperoni',
        img: Pepperoni,
        rating: '4.7',
        price: '$21.00',
        isFeatured: false,
    },
    {
        id: 2,
        name: 'Veggie',
        img: Veggie,
        rating: '4.9',
        price: '$21.00',
        isFeatured: true,
    },
    {
        id: 3,
        name: 'Chicken Ranch',
        img: ChickenRanch,
        rating: '4.5',
        price: '$21.00',
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
