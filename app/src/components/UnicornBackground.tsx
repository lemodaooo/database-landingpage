import { useEffect, useRef, useState } from 'react';

export function UnicornBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[data-unicorn-studio]');
    
    if (existingScript) {
      setScriptLoaded(true);
      return;
    }

    // Load Unicorn Studio script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.1/dist/unicornStudio.umd.js';
    script.async = true;
    script.setAttribute('data-unicorn-studio', 'true');
    
    script.onload = () => {
      setScriptLoaded(true);
      // @ts-ignore
      if (window.UnicornStudio && window.UnicornStudio.init) {
        // @ts-ignore
        window.UnicornStudio.init();
      }
    };

    script.onerror = () => {
      console.error('Failed to load Unicorn Studio script');
    };

    document.head.appendChild(script);

    return () => {
      // Don't remove script on unmount to avoid reloading
    };
  }, []);

  // Initialize when script is loaded
  useEffect(() => {
    if (!scriptLoaded) return;

    // @ts-ignore
    if (window.UnicornStudio && window.UnicornStudio.init) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        // @ts-ignore
        window.UnicornStudio.init();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [scriptLoaded]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ 
        width: '100%',
        height: '100%',
      }}
    >
      <div 
        data-us-project="2vXUY5TYl56AhqFP953l"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}
