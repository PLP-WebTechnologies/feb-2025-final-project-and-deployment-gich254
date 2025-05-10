import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600";
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-700">WebCraft</Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isActive('/')} transition-colors duration-200`}>Home</Link>
            <Link to="/about" className={`${isActive('/about')} transition-colors duration-200`}>About</Link>
            <Link to="/projects" className={`${isActive('/projects')} transition-colors duration-200`}>Projects</Link>
            <Link to="/contact" className={`${isActive('/contact')} transition-colors duration-200`}>Contact</Link>
            <Button>Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 rounded-md ${isActive('/')}`}>Home</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 rounded-md ${isActive('/about')}`}>About</Link>
            <Link to="/projects" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 rounded-md ${isActive('/projects')}`}>Projects</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 rounded-md ${isActive('/contact')}`}>Contact</Link>
            <div className="px-3 py-2">
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;