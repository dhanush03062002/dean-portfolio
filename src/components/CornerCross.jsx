import React from 'react';

export default function CornerCross({ position = 'top-left', className = '' }) {
  const posClasses = {
    'top-left': '-top-1.5 -left-1.5',
    'top-right': '-top-1.5 -right-1.5',
    'bottom-left': '-bottom-1.5 -left-1.5',
    'bottom-right': '-bottom-1.5 -right-1.5'
  };

  return (
    <div 
      className={`absolute ${posClasses[position] || posClasses['top-left']} w-3 h-3 pointer-events-none flex items-center justify-center text-neutral-400 z-10 ${className}`}
      aria-hidden="true"
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 0V10M0 5H10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    </div>
  );
}
