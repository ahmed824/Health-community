import * as React from "react";

export function Select({ value, onValueChange, options, placeholder, className = "", name, icon }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleSelect = (val) => {
    onValueChange(val);
    setOpen(false);
  };
  const selectedLabel = options.find((opt) => opt.value === value)?.label;
  return (
    <div ref={ref} className={`relative ${className}`}> 
      <button
        type="button"
        className="w-full px-6 py-3 border border-transparent rounded-full bg-[#F3F7F7] text-[#617A78] text-left focus:bg-white focus:border-ring focus:outline-none pl-11 relative"
        onClick={() => setOpen((o) => !o)}
        name={name}
      >
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-[#617A78] pointer-events-none">
            {icon}
          </span>
        )}
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