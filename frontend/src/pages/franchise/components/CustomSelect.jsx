import React, { useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export default function CustomSelect({
  name,
  value,
  onChange,
  isOpen,
  onToggle,
  onClose,
  options = [],
  placeholder = "Select an option",
  className = ""
}) {
  const containerRef = useRef(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        if (isOpen && onClose) {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen && onClose) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSelect = (optionValue) => {
    if (onChange) {
      onChange({
        target: {
          name,
          value: optionValue
        }
      });
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`custom-select-wrapper ${isOpen ? "is-active" : ""} ${className}`}
    >
      <input type="hidden" name={name} value={value || ""} />

      <button
        type="button"
        className={`custom-select-trigger ${isOpen ? "open" : ""}`}
        onClick={onToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="custom-select-value">
          {selectedOption ? (
            <span className="selected-label-wrap">
              <span className="custom-select-trigger-label">{selectedOption.label}</span>
              {selectedOption.badge && (
                <span className="select-badge-tag">{selectedOption.badge}</span>
              )}
            </span>
          ) : (
            <span className="select-placeholder">{placeholder}</span>
          )}
        </span>
        <ChevronDown size={17} className={`select-chevron ${isOpen ? "rotate" : ""}`} />
      </button>

      {isOpen && (
        <div className="custom-select-dropdown" role="listbox">
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <div
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                className={`custom-select-option ${isSelected ? "selected" : ""}`}
                onClick={() => handleSelect(opt.value)}
              >
                <div className="option-label-group">
                  <span className="option-label-text">{opt.label}</span>
                  {opt.badge && (
                    <span className="select-badge-tag">{opt.badge}</span>
                  )}
                </div>
                {isSelected && (
                  <Check size={16} className="option-check-icon" />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
