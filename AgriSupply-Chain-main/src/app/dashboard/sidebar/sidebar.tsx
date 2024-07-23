'use client';

import useToggleStore from './components/sidebarStore';

export default function Sidebar() {
  const { sidebarOpen } = useToggleStore();

  return (
    <nav className={`transition-all duration-300 overflow-x-hidden bg-gray-800 ${sidebarOpen ? 'w-64' : 'w-0'}`}>
      {/* Navigation content */}
      <ul className="mb-auto pt-1">
        {/* <Links routes={routes} /> */}ff
      </ul>
    </nav >
  );
}