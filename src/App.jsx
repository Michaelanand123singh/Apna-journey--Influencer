// App.jsx
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { LoadingProvider } from './contexts/LoadingContext';
import { ErrorBoundary } from './components/common/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LoadingProvider>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </LoadingProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;