import { useState } from 'react';
import { X } from 'lucide-react';

// Responsive Modal Component
export default function Modal({ isOpen, onClose, title, children, size = 'md', showCloseButton = true, zIndex = 9999 }) {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl'
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ zIndex: Math.max(zIndex, 9999) }}
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-white bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className={`
        relative bg-white rounded-lg shadow-xl 
        w-full 
        ${sizeClasses[size]} 
        max-h-[90vh] 
        overflow-y-auto
        transform transition-all
        mx-4
        sm:mx-6
        md:mx-8
      `}>
        {/* Close button */}
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10 bg-white rounded-full p-1 shadow-sm"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Modal content */}
        <div className={`
          p-4 sm:p-6 
          ${showCloseButton ? 'pr-12 sm:pr-16' : ''}
        `}>
          {title && (
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}