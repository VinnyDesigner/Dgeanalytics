import { useState } from 'react';
import { FileText } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import logo from "figma:asset/f420ca07a80ef1226d639d558f7ff6fb36acae0e.png";

interface AzureLoginScreenProps {
  onLogin: () => void;
}

export function AzureLoginScreen({ onLogin }: AzureLoginScreenProps) {
  const handleLogin = () => {
    // Simulate Azure AD authentication
    onLogin();
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-[#063360] rounded-full filter blur-[120px] opacity-50 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-600 rounded-full filter blur-[120px] opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-[#4A9EFF] rounded-full filter blur-[120px] opacity-40 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="w-full max-w-sm relative z-10">
        {/* Main Card */}
        <div className="backdrop-blur-xl bg-slate-900/50 border border-slate-800/50 rounded-2xl shadow-2xl p-8">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <ImageWithFallback 
              src={logo}
              alt="SDI Analytics Logo"
              className="w-16 h-16 object-contain"
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl mb-2 text-center text-white font-bold font-normal">Welcome Back</h1>
          <p className="text-[rgb(209,209,209)] text-center mb-8 text-[16px]">Sign in to access your SDI Analytics Dashboard</p>

          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-[#4A9EFF] to-[#D4CCC8] text-black py-3.5 px-6 rounded-full transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 0H0V9.5H9.5V0Z" fill="currentColor"/>
              <path d="M20 0H10.5V9.5H20V0Z" fill="currentColor"/>
              <path d="M9.5 10.5H0V20H9.5V10.5Z" fill="currentColor"/>
              <path d="M20 10.5H10.5V20H20V10.5Z" fill="currentColor"/>
            </svg>
            <span className="font-bold">Sign in with Azure AD</span>
          </button>

          {/* Security Notice */}
          <p className="text-center text-[rgb(196,196,196)] text-sm mt-6 text-[12px]">
            Secure authentication powered by Microsoft Azure
          </p>
        </div>
      </div>
    </div>
  );
}