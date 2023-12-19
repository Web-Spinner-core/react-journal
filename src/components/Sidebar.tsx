"use client";

import { FunctionComponent } from 'react';
import Link from 'next/link';

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  return (
    <div className="w-64 bg-white p-5">
      <div className="flex items-center space-x-4 p-2 mb-5">
        <div className="rounded-full h-12 w-12 flex items-center justify-center border-2 border-gray-300">O</div>
        <div>Graham Liu</div>
      </div>
      <ul className="space-y-2 text-sm">
        <li>
          <Link href="#">
            <a className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:shadow-outline">
              <span className="text-gray-600">
                {/* SVG icon placeholder */}
              </span>
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:shadow-outline">
              <span className="text-gray-600">
                {/* SVG icon placeholder */}
              </span>
              <span>Physics</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:shadow-outline">
              <span className="text-gray-600">
                {/* SVG icon placeholder */}
              </span>
              <span>Chemistry</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
