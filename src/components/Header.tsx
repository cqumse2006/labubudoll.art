import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
  { name: 'Overview', path: '/' },
  { name: 'Labubu Design', path: '/design' },
  { name: 'Labubu Life', path: '/life' },
  { name: 'Labubu Sport', path: '/sport' },
  { name: 'Labubu Special', path: '/special' },
  { name: 'FAQ', path: '/faq' }];


  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60" data-id="sl2tkhu8u" data-path="src/components/Header.tsx">
      <div className="container mx-auto px-4" data-id="wxnj71cfm" data-path="src/components/Header.tsx">
        <div className="flex h-16 items-center justify-between" data-id="ma18wmcot" data-path="src/components/Header.tsx">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" data-id="1cowh05dq" data-path="src/components/Header.tsx">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent" data-id="8rduqmhn7" data-path="src/components/Header.tsx">
              Labubu's Gallery
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6" data-id="ex0y25j6a" data-path="src/components/Header.tsx">
            {navItems.map((item) =>
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-pink-500 ${
              isActive(item.path) ?
              'text-pink-500 border-b-2 border-pink-500 pb-1' :
              'text-gray-600'}`
              } data-id="704hf0efh" data-path="src/components/Header.tsx">

                {item.name}
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)} data-id="w8lmfjms1" data-path="src/components/Header.tsx">

            {isMenuOpen ? <X className="h-5 w-5" data-id="tccip2zsj" data-path="src/components/Header.tsx" /> : <Menu className="h-5 w-5" data-id="gf32gg8g9" data-path="src/components/Header.tsx" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen &&
        <div className="md:hidden border-t bg-white" data-id="xd9te3emo" data-path="src/components/Header.tsx">
            <nav className="flex flex-col space-y-4 p-4" data-id="x0mq59er7" data-path="src/components/Header.tsx">
              {navItems.map((item) =>
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-pink-500 ${
              isActive(item.path) ? 'text-pink-500' : 'text-gray-600'}`
              }
              onClick={() => setIsMenuOpen(false)} data-id="a95sh3jb3" data-path="src/components/Header.tsx">

                  {item.name}
                </Link>
            )}
            </nav>
          </div>
        }
      </div>
    </header>);

};

export default Header;