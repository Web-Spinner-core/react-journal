import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-6">
      <div className="flex items-center space-x-4 p-2 mb-5">
        <div className="rounded-full h-12 w-12 bg-gray-400"></div>
        <div>Gram Liu</div>
      </div>
      <nav>
        <Link href="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Home</Link>
        <Link href="/physics" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Physics</Link>
        <Link href="/chemistry" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Chemistry</Link>
        <Link href="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Settings</Link>
      </nav>
    </div>
  );
}