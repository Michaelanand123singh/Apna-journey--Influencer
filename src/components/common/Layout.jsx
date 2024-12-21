// src/components/common/Layout.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = ({ children, className = '' }) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

// Optional - You can also add different layout variants
export const LayoutWithSidebar = ({ children, sidebar, className = '' }) => {
  return (
    <Layout>
      <div className={`container mx-auto px-4 py-8 ${className}`}>
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-1/4">
            {sidebar}
          </aside>
          <main className="md:w-3/4">
            {children}
          </main>
        </div>
      </div>
    </Layout>
  );
};

// Centered Layout variant for auth pages
export const CenteredLayout = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-md w-full space-y-8">
        {children}
      </div>
    </div>
  );
};

export default Layout;