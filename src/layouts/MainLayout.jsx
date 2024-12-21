import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import HomePage from '../pages/HomePage';

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
};

export default MainLayout;