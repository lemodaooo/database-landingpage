import { useEffect, useRef } from 'react';

export function UnicornFooterBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[data-unicorn-studio]');
    
    const initUnicorn = () => {
      // @ts-ignore
      if (window.UnicornStudio && window.UnicornStudio.init) {
        // @ts-ignore
        window.UnicornStudio.init();
      }
    };

    if (existingScript) {
      // Script already loaded, just init
      initUnicorn();
      return;
    }

    // Load Unicorn Studio script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.1/dist/unicornStudio.umd.js';
    script.async = true;
    script.setAttribute('data-unicorn-studio', 'true');
    
    script.onload = () => {
      initUnicorn();
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup not needed as background should persist
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full"
      data-us-project="2vXUY5TYl56AhqFP953l"
      style={{ opacity: 0.65 }}
    />
  );
}
