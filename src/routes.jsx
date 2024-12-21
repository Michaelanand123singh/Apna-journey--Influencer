// src/routes.jsx
import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';  // Added this import
import Loading from './components/common/Loading';

// Lazy load layouts and pages
const MainLayout = lazy(() => import('./layouts/MainLayout'));
const AuthLayout = lazy(() => import('./layouts/AuthLayout'));
const DashboardLayout = lazy(() => import('./layouts/DashboardLayout'));

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const InfluencersBrandsPage = lazy(() => import('./pages/InfluencersBrandsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const DashboardPage = lazy(() => import('./pages/Dashboard'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Wrapper component for Suspense
const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<Loading />}>
    {children}
  </Suspense>
);

// Protected Route Component with loading state
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

// Route configurations
const publicRoutes = {
  path: '/',
  element: (
    <SuspenseWrapper>
      <MainLayout />
    </SuspenseWrapper>
  ),
  errorElement: <NotFoundPage />,
  children: [
    {
      index: true,
      element: (
        <SuspenseWrapper>
          <HomePage />
        </SuspenseWrapper>
      ),
    },
    {
      path: 'about',
      element: (
        <SuspenseWrapper>
          <AboutPage />
        </SuspenseWrapper>
      ),
    },
    {
      path: 'services',
      element: (
        <SuspenseWrapper>
          <ServicesPage />
        </SuspenseWrapper>
      ),
    },
    {
      path: 'influencers-brands',
      element: (
        <SuspenseWrapper>
          <InfluencersBrandsPage />
        </SuspenseWrapper>
      ),
    },
    {
      path: 'contact',
      element: (
        <SuspenseWrapper>
          <ContactPage />
        </SuspenseWrapper>
      ),
    },
  ],
};

const authRoutes = {
  path: '/auth',
  element: (
    <SuspenseWrapper>
      <AuthLayout />
    </SuspenseWrapper>
  ),
  children: [
    {
      path: 'login',
      element: (
        <SuspenseWrapper>
          <LoginPage />
        </SuspenseWrapper>
      ),
    },
    {
      path: 'register',
      element: (
        <SuspenseWrapper>
          <RegisterPage />
        </SuspenseWrapper>
      ),
    },
  ],
};

const dashboardRoutes = {
  path: '/dashboard',
  element: (
    <ProtectedRoute>
      <SuspenseWrapper>
        <DashboardLayout />
      </SuspenseWrapper>
    </ProtectedRoute>
  ),
  children: [
    {
      index: true,
      element: (
        <SuspenseWrapper>
          <DashboardPage />
        </SuspenseWrapper>
      ),
    },
  ],
};

const catchAllRoute = {
  path: '*',
  element: <NotFoundPage />,
};

// Create and export router
export const router = createBrowserRouter([
  publicRoutes,
  authRoutes,
  dashboardRoutes,
  catchAllRoute,
]);

// Export route paths for easy access throughout the app
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  INFLUENCERS_BRANDS: '/influencers-brands',
  CONTACT: '/contact',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  DASHBOARD: '/dashboard',
};