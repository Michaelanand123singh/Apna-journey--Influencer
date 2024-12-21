// src/components/common/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  Home,
  Users,
  Video,
  BarChart2,
  Settings,
  HelpCircle,
  X,
} from 'lucide-react';

const Sidebar = ({ sidebarOpen = true, setSidebarOpen = () => {} }) => {
  const { user, logout } = useAuth();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Influencers', href: '/dashboard/influencers', icon: Users },
    { name: 'Content', href: '/dashboard/content', icon: Video },
    { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart2 },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
    { name: 'Help & Support', href: '/dashboard/support', icon: HelpCircle },
  ];

  const NavItem = ({ item }) => {
    return (
      <NavLink
        to={item.href}
        className={({ isActive }) =>
          `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
            isActive
              ? 'bg-indigo-800 text-white'
              : 'text-gray-300 hover:bg-indigo-600 hover:text-white'
          }`
        }
      >
        <item.icon className="mr-3 h-6 w-6" aria-hidden="true" />
        {item.name}
      </NavLink>
    );
  };

  return (
    <>
      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 flex z-40">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-75"
            onClick={() => setSidebarOpen(false)}
          />

          {/* Sidebar component */}
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-indigo-700">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sr-only">Close sidebar</span>
                <X className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="/logo.svg"
                  alt="Apna Journey"
                />
              </div>
              <nav className="mt-5 px-2 space-y-1">
                {navigation.map((item) => (
                  <NavItem key={item.name} item={item} />
                ))}
              </nav>
            </div>

            <div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block h-10 w-10 rounded-full"
                    src={user?.avatar || '/api/placeholder/40/40'}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-white">
                    {user?.name || 'User Name'}
                  </p>
                  <button
                    onClick={logout}
                    className="text-sm font-medium text-indigo-200 hover:text-white"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-col md:w-64 md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-indigo-700">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="h-8 w-auto"
                src="/logo.svg"
                alt="Apna Journey"
              />
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </nav>
          </div>
          
          <div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
            <div className="flex items-center">
              <div>
                <img
                  className="inline-block h-10 w-10 rounded-full"
                  src={user?.avatar || '/api/placeholder/40/40'}
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-base font-medium text-white">
                  {user?.name || 'User Name'}
                </p>
                <button
                  onClick={logout}
                  className="text-sm font-medium text-indigo-200 hover:text-white"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;