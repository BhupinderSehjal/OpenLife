import React, { useEffect, useRef } from "react";
import { Send, Paperclip } from "lucide-react";

// ChatInput Component
const ChatInput = ({ inputValue, setInputValue, onSend }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="p-4 border-t border-white/10 bg-black/30 backdrop-blur-sm rounded-b-2xl">
      <div className="flex items-end gap-3">
        <button
          type="button"
          aria-label="Attach file"
          className="text-slate-400 hover:text-emerald-200 p-2.5 hover:bg-white/10 rounded-lg transition-all mb-1"
        >
          <Paperclip aria-hidden="true" className="w-5 h-5" />
        </button>

        <div className="flex-1 bg-white/5 rounded-xl border border-white/10 focus-within:border-emerald-300/70 transition-colors shadow-inner">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="w-full bg-transparent text-white px-4 py-3 focus:outline-none placeholder-slate-500"
          />
        </div>

        <button
          type="button"
          onClick={onSend}
          disabled={!inputValue.trim()}
          aria-label="Send message"
          className={`p-3 rounded-xl transition-all mb-1 ${
            inputValue.trim()
              ? "bg-gradient-to-r from-emerald-300 to-indigo-400 hover:from-emerald-200 hover:to-indigo-300 text-slate-950 shadow-[0_10px_24px_rgba(105,255,226,0.35)] hover:scale-105"
              : "bg-white/10 text-slate-500 cursor-not-allowed"
          }`}
        >
          <Send aria-hidden="true" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
