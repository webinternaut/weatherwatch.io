import React, { useState } from 'react';
import { Mail, ChevronRight, Check, Loader2 } from 'lucide-react';

export const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  // Honeypot state for spam protection
  const [botField, setBotField] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // SPAM PROTECTION CHECK
    // If the hidden bot field has any content, it's likely a bot. 
    // We pretend it succeeded but do nothing.
    if (botField) {
      console.log("Bot detected");
      setStatus('success');
      return;
    }

    if (!email) return;

    setStatus('loading');
    
    // TODO: Connect this to a real backend (e.g., Firebase, Supabase, or Formspree)
    // For now, this is a simulation.
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 flex items-center justify-center gap-3 text-green-200 animate-in fade-in zoom-in duration-300">
        <Check size={20} className="text-green-400" />
        <span className="font-medium">Thanks! You're on the list.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      {/* 
         HONEYPOT FIELD 
         Hidden from real users. If filled, we know it's a bot.
      */}
      <input 
        type="text" 
        name="website_url" 
        value={botField}
        onChange={(e) => setBotField(e.target.value)}
        tabIndex={-1} 
        autoComplete="off"
        className="absolute opacity-0 -z-10 h-0 w-0" 
      />

      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Mail size={18} className="text-gray-400 group-focus-within:text-blue-400 transition-colors" />
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          disabled={status === 'loading'}
          className="block w-full pl-10 pr-12 py-3 bg-gray-900/50 border border-gray-600 rounded-lg leading-5 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all shadow-inner"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="absolute inset-y-0 right-0 px-3 flex items-center justify-center text-gray-400 hover:text-white disabled:opacity-50 transition-colors focus:outline-none"
        >
          {status === 'loading' ? (
            <Loader2 size={20} className="animate-spin text-blue-400" />
          ) : (
            <div className="bg-blue-600 hover:bg-blue-500 text-white rounded p-1.5 transition-colors shadow-lg">
                <ChevronRight size={16} />
            </div>
          )}
        </button>
      </div>
      <p className="mt-2 text-xs text-gray-400 opacity-60">
        We respect your privacy. No spam, ever.
      </p>
    </form>
  );
};