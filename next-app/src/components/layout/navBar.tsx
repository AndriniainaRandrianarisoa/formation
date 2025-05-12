'use client'
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full bg-white border-b border-gray-200">
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-blue-500">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4.5c-4.5 0-7.5 3-7.5 7.5s3 7.5 7.5 7.5 7.5-3 7.5-7.5-3-7.5-7.5-7.5zm0 13.5c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
            </svg>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between flex-1 ml-8">
            <div className="flex space-x-6">
              <a href="home" className="font-medium text-gray-900 border-b-2 border-gray-900">Dashboard</a>
              <a href="users" className="font-medium text-gray-500 hover:text-gray-900">User List</a>
              <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Projects</a>
              <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Calendar</a>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-gray-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center"
                >
                  <span className="text-sm font-medium text-gray-600">RA</span>
                </button>

                {/* Desktop Dropdown */}
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                    <div className="py-1">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">Random Admin</p>
                        <p className="text-sm text-gray-500">admin@example.com</p>
                      </div>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Your Profile
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Settings
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Sign out
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white" ref={menuRef}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 bg-gray-50">
              Dashboard
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">
              Team
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">
              Projects
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">
              Calendar
            </a>
          </div>
          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="px-4 flex items-center">
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">RA</span>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">Random Admin</div>
                <div className="text-sm font-medium text-gray-500">admin@example.com</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">
                Your Profile
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">
                Settings
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">
                Sign out
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
