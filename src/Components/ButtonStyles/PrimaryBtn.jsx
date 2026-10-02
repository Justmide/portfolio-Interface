import React from 'react';

const PrimaryBtn = ({ text, onClick, variant = 'primary' }) => {
  if (variant === 'secondary') {
    return (
      <button
        type="button"
        onClick={onClick}
        className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm transition-all duration-200 hover:border-white/30"
      >
        {text}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="px-6 py-3 rounded-xl bg-white hover:bg-gray-200 text-black font-bold text-sm shadow-lg shadow-white/10 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
    >
      {text}
    </button>
  );
};

export default PrimaryBtn;
