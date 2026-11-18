import React, { useState } from 'react';
import Card from './Card';
import MenuCategories from './MenuCategories';
import { ALL_MENU } from '../../constants';
import { POPULAR_PIZZA } from '../../constants';
import { POPULAR_FRISE } from '../../constants';
import { POPULAR_SODA } from '../../constants';

const MenuGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter menu items by selected category
  const filteredMenu = selectedCategory === 'all'
    ? ALL_MENU
    : selectedCategory === 'pizza'
    ? POPULAR_PIZZA
    : selectedCategory === 'soda'
    ? POPULAR_SODA
    : POPULAR_FRISE;

  return (
    <section className="menu-section">
      <div className="menu-header-wrapper">
        <h1 className="menu-title">Our Delicious Menu</h1>
        <p className="menu-subtitle">
          Explore our freshly made authentic Italian pizzas, crispy golden fries, and refreshing sodas.
        </p>
      </div>

      <MenuCategories
        activeCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="menu-grid-container">
        {filteredMenu.length > 0 ? (
          filteredMenu.map((item) => (
            <Card key={item.id} item={item} />
          ))
        ) : (
          <p className="menu-empty">No items found in this category.</p>
        )}
      </div>
    </section>
  );
};

export default MenuGrid;
