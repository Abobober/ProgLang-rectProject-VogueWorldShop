import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const { items } = useCart();

  return (
    <nav className="bg-gray-900 text-gray-100 shadow-lg gothic-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-3xl font-medieval tracking-wider text-blue-400">
            Vogue World Shop
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/products" className="font-gothic text-lg hover:text-blue-400 transition-colors">
              Shop
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/cart" className="relative hover:text-blue-400">
                  <ShoppingCart className="w-6 h-6" />
                  {items.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {items.length}
                    </span>
                  )}
                </Link>
                <button
                  onClick={logout}
                  className="hover:text-blue-400"
                >
                  <LogOut className="w-6 h-6" />
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="hover:text-blue-400">
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="gothic-button"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}