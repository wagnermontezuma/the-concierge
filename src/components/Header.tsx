import { useState, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { motion, AnimatePresence } from 'framer-motion';

// Tipos
interface NavigationItem {
  path: string;
  label: string;
}

// Estilos constantes
const linkStyles = {
  default: "text-gray-600 hover:text-primary transition-colors",
  active: "text-primary font-medium",
};

// Items de navegação
const getNavigationItems = (intl: ReturnType<typeof useIntl>): NavigationItem[] => [
  { path: '/', label: intl.formatMessage({ id: 'navigation.home' }) },
  { path: '/about', label: intl.formatMessage({ id: 'navigation.about' }) },
  { path: '/experiences', label: intl.formatMessage({ id: 'navigation.experiences' }) },
  { path: '/itineraries', label: intl.formatMessage({ id: 'navigation.itineraries' }) },
  { path: '/contact', label: intl.formatMessage({ id: 'navigation.contact' }) },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const intl = useIntl();
  const location = useLocation();
  const navigationItems = getNavigationItems(intl);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav 
        className="container mx-auto px-4 py-4" 
        role="navigation" 
        aria-label="Menu principal"
      >
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-serif text-primary"
            aria-label="The Concierge - Página inicial"
          >
            The Concierge
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8" role="list">
            {navigationItems.map((item) => (
              <div key={item.path} role="listitem">
                <Link
                  to={item.path}
                  className={`${linkStyles.default} ${
                    location.pathname === item.path ? linkStyles.active : ''
                  }`}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span className={`block w-full h-0.5 bg-gray-600 transform transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-full h-0.5 bg-gray-600 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-0.5 bg-gray-600 transform transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
              role="list"
            >
              <div className="py-4 space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.path} role="listitem">
                    <Link
                      to={item.path}
                      className={`block ${linkStyles.default} ${
                        location.pathname === item.path ? linkStyles.active : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={location.pathname === item.path ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default memo(Header); 