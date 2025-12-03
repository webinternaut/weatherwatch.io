import { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen relative flex flex-col overflow-hidden bg-gray-900">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      ></div>
      
      {/* Overlay Gradient for readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900/40 via-gray-900/60 to-gray-900/90"></div>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col justify-center w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
};