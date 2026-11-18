import React from 'react';

const MENU_CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'pizza', name: 'Pizza' },
  { id: 'fries', name: 'Fries' },
  { id: 'soda', name: 'Soda' },
];

const MenuCategories = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className="menu-categories-wrapper">
      {MENU_CATEGORIES.map((cat) => {
        const isActive = activeCategory.toLowerCase() === cat.id;

        return (
          <button
            key={cat.id}
            type="button"
            className={`menu-category-btn ${isActive ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat.id)}
          >
            {cat.name}
          </button>
        );
      })}
    </div>
  );
};

export default MenuCategories;
