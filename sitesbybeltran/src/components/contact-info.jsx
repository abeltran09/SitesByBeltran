import React from 'react';
import { PhoneCall, Mail } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 gap-3 p-4 justify-center">
      {/* Phone Bubble */}
      <div className="flex items-center gap-1 bg-rose-200 hover:bg-rose-100 transition-colors duration-200 rounded-full px-4 py-2 shadow-sm">
        <PhoneCall className="w-4 h-4" />
        <span className="text-sm text-gray-800 transition-colors">
          +1 (281)-409-3208
        </span>
      </div>

      {/* Email Bubble */}
      <div className="flex items-center gap-1 bg-rose-200 hover:bg-rose-100 transition-colors duration-200 rounded-full px-4 py-2 shadow-sm">
        <Mail className="w-4 h-4" />
        <span className="text-sm text-gray-800 transition-colors">
          sitesbybeltran@gmail.com
        </span>
      </div>
    </div>
  );
}