import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center text-gray-400">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p>Start shopping to add items to your cart</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-100 mb-8">Shopping Cart</h1>
        
        <div className="bg-gray-800 rounded-lg shadow-xl p-6">
          {items.map(item => (
            <div
              key={item.id}
              className="flex items-center py-4 border-b border-gray-700 last:border-0"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
              
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold text-gray-100">{item.name}</h3>
                <p className="text-gray-400">${item.price.toFixed(2)}</p>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                  className="p-1 hover:bg-gray-700 rounded"
                >
                  <Minus className="w-4 h-4 text-gray-400" />
                </button>
                <span className="text-gray-100 w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 hover:bg-gray-700 rounded"
                >
                  <Plus className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              
              <div className="ml-8 text-right">
                <p className="text-lg font-semibold text-gray-100">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-600 mt-1"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
          
          <div className="mt-6 pt-6 border-t border-gray-700">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold text-gray-100">Total</span>
              <span className="text-2xl font-bold text-purple-400">
                ${total.toFixed(2)}
              </span>
            </div>
            
            <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}