import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SidebarProps {
  activeSection: string;
}

export default function Sidebar({ activeSection }: SidebarProps) {
  const sections = [
    { name: 'Home', icon: 'H', href: '/' },
    { name: 'Physics', icon: 'P', href: '/physics' },
    { name: 'Chemistry', icon: 'C', href: '/chemistry' },
    { name: 'Settings', icon: 'S', href: '/settings' },
  ];

  return (
    <div className="w-64 h-screen bg-white shadow-md">
      <div className="flex flex-col items-center py-8">
        <div className="w-16 h-16 rounded-full bg-gray-300 mb-4"></div>
        <div className="text-lg font-semibold">Gram Liu</div>
      </div>
      <nav className="mt-8">
        {sections.map((section) => (
          <Link key={section.name} href={section.href} passHref>
            <a
              className={`flex items-center px-4 py-2 text-gray-700 ${activeSection === section.name ? 'bg-gray-200' : 'hover:bg-gray-200'}`}
            >
              <Image src={`https://dummyimage.com/24x24/000/fff&text=${section.icon}`} width={24} height={24} alt={`${section.name} Icon`} className="mr-3" />
              {section.name}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
}
