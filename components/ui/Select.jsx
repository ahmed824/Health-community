import * as React from "react";

export function Select({ value, onValueChange, options, placeholder, className = "", name }) {
  const [open, setOpen] = React.useState(false);
  const handleSelect = (val) => {
    onValueChange(val);
    setOpen(false);
  };
  const selectedLabel = options.find((opt) => opt.value === value)?.label;
  return (
    <div className={`relative ${className}`}> 
      <button
        type="button"
        className="w-full px-6 py-3 border border-transparent rounded-full bg-[#F3F7F7] text-foreground text-left focus:bg-white focus:border-ring focus:outline-none pl-11"
        onClick={() => setOpen((o) => !o)}
        name={name}
      >
        {selectedLabel || <span className="text-[#617A78]">{placeholder}</span>}
      </button>
      {open && (
        <div className="absolute z-10 mt-1 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-auto">
          {options.map((opt) => (
            <div
              key={opt.value}
              className={`px-4 py-2 cursor-pointer hover:bg-primary/10 ${opt.value === value ? 'bg-primary/10 font-semibold' : ''}`}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 