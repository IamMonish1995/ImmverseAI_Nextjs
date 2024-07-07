"use client";
import Link from "next/link";
function TopBar() {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6">
      <div className="relative pt-6 pb-6 ">
        <nav
          className="relative flex items-center justify-between sm:h-10 md:justify-center"
          aria-label="Global"
        >
          <div className="flex space-x-10 list-none">
            <li>
              <Link
                href="/todos"
                className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                target=""
              >
                Todos
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                target=""
              >
                Profile
              </Link>
            </li>
          </div>
          <div className="absolute flex items-center justify-end inset-y-0 right-0">
            <div className="inline-flex rounded-full shadow">
              <div className="inline-flex items-center px-4 py-2 text-base text-gray-900 bg-white border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50 ">
                Logout
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default TopBar;
