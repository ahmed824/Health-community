"use client";

import { useState, useEffect } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import Link from "next/link";
import { navigation } from "@/lib/constants";

export default function SearchModal({ 
  isOpen, 
  onClose, 
  currentGradient 
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedResultIndex, setSelectedResultIndex] = useState(-1);
  const [isSearching, setIsSearching] = useState(false);

  // Mock search results - replace with actual search logic
  const searchResults = [
    { title: "Health Tips", href: "/articles/health-tips", category: "Articles" },
    { title: "Community Guidelines", href: "/community/guidelines", category: "Community" },
    { title: "Wellness Resources", href: "/resources/wellness", category: "Resources" },
    { title: "Medical Information", href: "/articles/medical", category: "Articles" },
    { title: "Mental Health Support", href: "/articles/mental-health", category: "Articles" },
    { title: "Nutrition Guide", href: "/resources/nutrition", category: "Resources" },
    { title: "Fitness Community", href: "/community/fitness", category: "Community" },
    { title: "Medical Research", href: "/articles/research", category: "Articles" },
  ].filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'auto';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'auto';
    };
  }, [isOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      console.log("Searching for:", searchQuery);

      setTimeout(() => {
        setIsSearching(false);
        onClose();
        setSearchQuery("");
        setSelectedResultIndex(-1);
      }, 1500);
    }
  };

  const handleKeyDown = (e) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'Escape':
        onClose();
        setSearchQuery("");
        setSelectedResultIndex(-1);
        break;
      case 'ArrowDown':
        e.preventDefault();
        setSelectedResultIndex(prev =>
          prev < searchResults.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedResultIndex(prev =>
          prev > 0 ? prev - 1 : searchResults.length - 1
        );
        break;
      case 'Enter':
        if (selectedResultIndex >= 0 && searchResults[selectedResultIndex]) {
          e.preventDefault();
          window.location.href = searchResults[selectedResultIndex].href;
          onClose();
          setSearchQuery("");
          setSelectedResultIndex(-1);
        }
        break;
    }
  };

  const handleSearchOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      setSearchQuery("");
      setSelectedResultIndex(-1);
    }
  };

  const handleClose = () => {
    onClose();
    setSearchQuery("");
    setSelectedResultIndex(-1);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] backdrop-blur-md bg-black/40 h-dvh"
      onClick={handleSearchOverlayClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="flex items-start justify-center min-h-screen p-4 pt-20">
        <div
          className={`w-full max-w-4xl bg-gradient-to-br from-white via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 animate-in scale-in duration-300 backdrop-blur-sm`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Header */}
          <div className={`flex justify-between items-center p-6 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r ${currentGradient}`}>
            <div className="flex items-center space-x-4 flex-1">
              <form onSubmit={handleSearchSubmit} className="flex-1 relative">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary">
                    <FiSearch className="w-full h-full" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search articles, community, resources..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setSelectedResultIndex(-1);
                    }}
                    onKeyDown={handleKeyDown}
                    className="w-full pl-12 pr-12 py-4 bg-white/80 dark:bg-gray-800/80 border border-gray-300/50 dark:border-gray-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 text-lg backdrop-blur-sm"
                    autoFocus
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedResultIndex(-1);
                      }}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                    >
                      <FiX className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </button>
                  )}
                </div>
              </form>
            </div>
            <div className="flex items-center space-x-3 ml-4">
              <div className="hidden sm:flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs font-mono">Ctrl + K</kbd>
                <span>to search</span>
                <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs font-mono">Esc</kbd>
                <span>to close</span>
              </div>
              <button
                onClick={handleClose}
                aria-label="Close search"
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <FiX className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>

          {/* Search Results */}
          <div className="max-h-[60vh] overflow-y-auto p-6">
            {isSearching ? (
              <div className="text-center py-16">
                <div className="flex inli items-center justify-center space-x-3 mb-4">
                  <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-primary font-medium">Searching...</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Finding the best health resources for you
                </p>
              </div>
            ) : searchQuery ? (
              searchResults.length > 0 ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Search Results ({searchResults.length})
                    </h3>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Use ↑↓ to navigate, Enter to select
                    </div>
                  </div>
                  <div className="space-y-2">
                    {searchResults.map((result, index) => (
                      <Link
                        key={index}
                        href={result.href}
                        onClick={() => {
                          onClose();
                          setSearchQuery("");
                          setSelectedResultIndex(-1);
                        }}
                        className={`block p-4 border rounded-xl transition-all duration-200 group search-result-hover ${index === selectedResultIndex
                          ? 'bg-gradient-to-r from-primary/10 to-primary/5 border-primary/30 scale-[1.02] shadow-lg'
                          : 'bg-white/50 dark:bg-gray-800/50 border-gray-200/50 dark:border-gray-700/50 hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/2 hover:scale-[1.01]'
                          }`}
                        onMouseEnter={() => setSelectedResultIndex(index)}
                        style={{
                          animationDelay: `${index * 50}ms`
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className={`font-medium transition-colors ${index === selectedResultIndex
                              ? 'text-primary'
                              : 'text-gray-900 dark:text-gray-100 group-hover:text-primary'
                              }`}>
                              {result.title}
                            </h4>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                                {result.category}
                              </span>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                {result.href}
                              </span>
                            </div>
                          </div>
                          <div className={`transition-all duration-200 ${index === selectedResultIndex
                            ? 'opacity-100 scale-110'
                            : 'opacity-0 group-hover:opacity-100 scale-100'
                            }`}>
                            <FiSearch className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center">
                    <FiSearch className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">
                    No results found
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Try searching with different keywords
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="text-xs text-gray-400 dark:text-gray-500">Suggestions:</span>
                    {['health', 'community', 'articles', 'resources'].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => setSearchQuery(suggestion)}
                        className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )
            ) : (
              <div className="text-center py-16">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center">
                  <FiSearch className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Search Health Community
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
                  Find articles, community discussions, and resources to support your health journey
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => onClose()}
                      className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 border border-gray-200/50 dark:border-gray-700/50 rounded-xl hover:from-primary/5 hover:to-primary/2 transition-all duration-200 hover:scale-105 text-center group"
                    >
                      <h4 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 