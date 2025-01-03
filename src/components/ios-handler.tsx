'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export function IOSHandler() {
  const { theme } = useTheme();

  useEffect(() => {
    function updateThemeColor() {
      const isDark = document.documentElement.classList.contains('dark');
      const themeColor = isDark ? '#0a0a0a' : '#f7f7f7';
      
      // Update theme-color meta tag
      let meta = document.querySelector('meta[name="theme-color"]');
      if (!meta) {
        meta = document.createElement('meta');
        (meta as HTMLMetaElement).name = 'theme-color';
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', themeColor);
    }

    // Add iOS safe area handling
    function setupIOSSafeArea() {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
      if (isStandalone) {
        document.documentElement.style.setProperty('--sat', 'env(safe-area-inset-top)');
        document.documentElement.style.setProperty('--sab', 'env(safe-area-inset-bottom)');
        document.documentElement.classList.add('ios-standalone');
      }
    }

    updateThemeColor();
    setupIOSSafeArea();

    // Update on theme change
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          updateThemeColor();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, [theme]);

  return null;
} 