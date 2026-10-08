import React from "react";
import { Sparkles, X } from "lucide-react";

// ChatHeader Component
const ChatHeader = ({ onClose }) => {
  return (
    <div className="relative h-20 px-6 flex items-center justify-between overflow-hidden rounded-t-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/90 via-emerald-300/80 to-indigo-400/80 opacity-90" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />

      <div className="flex items-center gap-3 relative z-10">
        <div className="relative">
          <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-white">AI Assistant</h2>
          <p className="text-xs text-white/80 flex items-center gap-1">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Always active
          </p>
        </div>
      </div>

      <button
        onClick={onClose}
        className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg relative z-10
         focus-visible:outline
         focus-visible:outline-offset-2
         focus-visible:outline-emerald-300
        "
        aria-label="Close chat"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ChatHeader;
