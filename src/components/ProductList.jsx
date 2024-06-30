import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ numberOfCards }) => {
    const cards = Array.from({ length: numberOfCards }, (_, index) => (
        <ProductCard key={index} />
    ));

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cards}
        </div>
    );
};

export default ProductList;