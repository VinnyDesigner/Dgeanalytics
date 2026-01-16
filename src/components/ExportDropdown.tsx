import { useState, useRef, useEffect } from 'react';
import { Download, FileText, FileSpreadsheet, ChevronDown } from 'lucide-react';

interface ExportDropdownProps {
  theme?: 'light' | 'dark';
  onExportPDF?: () => void;
  onExportExcel?: () => void;
}

export function ExportDropdown({ theme = 'dark', onExportPDF, onExportExcel }: ExportDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleExportPDF = () => {
    if (onExportPDF) {
      onExportPDF();
    } else {
      // Default behavior - create a simple alert
      alert('Exporting as PDF...');
    }
    setIsOpen(false);
  };

  const handleExportExcel = () => {
    if (onExportExcel) {
      onExportExcel();
    } else {
      // Default behavior - create a simple alert
      alert('Exporting as Excel...');
    }
    setIsOpen(false);
  };

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative z-50 flex items-center gap-2 p-2 rounded-lg border transition-all ${
          theme === 'dark'
            ? 'bg-slate-900/80 border-slate-700/50 text-slate-300 hover:bg-slate-800/50'
            : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
        }`}
      >
        <Download className="w-4 h-4" />
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-56 rounded-lg shadow-lg overflow-hidden ${
            theme === 'dark'
              ? 'bg-slate-800 border border-slate-700/50'
              : 'bg-white border border-gray-200'
          }`}
          style={{ zIndex: 9999 }}
        >
          <div className="py-1">
            <button
              onClick={handleExportPDF}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                theme === 'dark'
                  ? 'text-slate-300 hover:bg-slate-700/50'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <FileText className="w-4 h-4 text-red-500" />
              <span>Download as PDF</span>
            </button>
            <button
              onClick={handleExportExcel}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                theme === 'dark'
                  ? 'text-slate-300 hover:bg-slate-700/50'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <FileSpreadsheet className="w-4 h-4 text-green-500" />
              <span>Download as Excel</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}