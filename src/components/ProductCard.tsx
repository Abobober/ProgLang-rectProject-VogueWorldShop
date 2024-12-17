import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="gothic-card group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </div>
      <div className="p-4">
        <h3 className="text-gray-100 text-xl font-medieval mb-2">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-4 font-gothic">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-blue-400 text-lg font-bold">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="gothic-button flex items-center gap-2"
          >
            <ShoppingBag className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}