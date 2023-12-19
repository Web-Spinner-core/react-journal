import React from 'react';
import Link from 'next/link';

interface SidebarProps {
    activeItem: string;
}

function Sidebar({ activeItem }: SidebarProps) {
    return (
        <div className="w-64 h-screen bg-white shadow-md">
            <div className="flex items-center justify-center h-20 border-b">
                <div className="rounded-full border-2 border-gray-300 w-12 h-12 flex items-center justify-center">
                    {/* User's initial, could be dynamically generated */}
                    O
                </div>
                <span className="ml-4 font-semibold">Gram Liu</span>
            </div>
            <div className="py-4">
                {/* Menu Items */}
                <Link href="/" passHref><a className={`menu-item block py-2.5 px-4 hover:bg-gray-200 ${activeItem === 'home' ? 'active' : ''}`}>Home</a></Link>
                <Link href="/physics" passHref><a className={`menu-item block py-2.5 px-4 hover:bg-gray-200 ${activeItem === 'physics' ? 'active' : ''}`}>Physics</a></Link>
                <Link href="/chemistry" passHref><a className={`menu-item block py-2.5 px-4 hover:bg-gray-200 ${activeItem === 'chemistry' ? 'active' : ''}`}>Chemistry</a></Link>
            </div>
        </div>
    );
}

export default Sidebar;
