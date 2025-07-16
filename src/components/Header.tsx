import React from 'react';
import { Search, Menu, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <span className="text-xl font-bold">Manasi Portfolio</span>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          {/* Search icon */}
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Search className="w-5 h-5" />
          </button>

          {/* User profile */}
          <div className="flex items-center space-x-3 bg-white/10 rounded-full px-4 py-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium">Manasi777</span>
          </div>

          {/* Menu */}
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;