import { Fragment, useState } from "react";
import { MdDashboardCustomize } from "react-icons/md";

// Headless UI, for more info and examples you can check out https://github.com/tailwindlabs/headlessui
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      {/* Page Container */}
      <div
        id="page-container"
        className="sticky top-0 z-50 flex flex-col mx-auto w-full min-w-[320px] bg-gray-100 dark:text-gray-100 dark:bg-gray-900"
      >
        {/* Page Header */}
        <header
          id="page-header"
          className="flex flex-none items-center bg-white shadow-sm z-1 dark:bg-gray-800"
        >
          <div className="container w-full lg:w-11/12 mx-auto px-4 lg:px-0">
            <div className="flex justify-between py-4">
              {/* Left Section */}
              <div className="flex items-center">
                {/* Logo */}
                <a
                  href="/"
                  className="group inline-flex items-center space-x-2 font-bold text-xl tracking-wide text-gray-700 hover:text-blue-600 active:text-gray-700 dark:font-semibold dark:text-gray-200 dark:hover:text-blue-400 dark:active:text-gray-200"
                >
                  <svg
                    className="hi-mini hi-cube-transparent inline-block w-5 h-5 text-blue-600 transition group-hover:scale-110 dark:text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Heritage Furniture</span>
                </a>
                {/* END Logo */}
              </div>
              {/* END Left Section */}

              {/* Right Section */}
              <div className="flex items-center space-x-2 lg:space-x-5">
                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-2">
                  <a
                    href="/"
                    className="group text-sm font-semibold flex items-center space-x-2 px-3 py-2 rounded-lg text-blue-600 border border-blue-100 bg-blue-50 dark:text-blue-100 dark:bg-blue-500 dark:bg-opacity-20 dark:border-blue-500 dark:border-opacity-20"
                  >
                    <svg
                      className="hi-mini hi-home inline-block w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Home</span>
                  </a>
                  <Link
                    to='/login'
                    className="group text-sm font-semibold flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-800 border border-transparent hover:text-blue-600 hover:bg-blue-50 active:border-blue-100 dark:text-gray-100 dark:hover:text-blue-100 dark:hover:bg-blue-500 dark:hover:bg-opacity-20 dark:active:border-blue-500 dark:active:border-opacity-25"
                  >
                    <MdDashboardCustomize className="text-xl text-gray-400 group-hover:text-blue-600" />
                    <span>Dashboard</span>
                  </Link>
                </nav>
                {/* END Desktop Navigation */}

                {/* User Dropdown */}
                <Menu as="div" className="relative inline-block">
                  {/* Dropdown Toggle Button */}
                  <Menu.Button className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                    <span>John</span>
                    <svg
                      className="hi-mini hi-chevron-down inline-block w-5 h-5 opacity-40"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Menu.Button>
                  {/* END Dropdown Toggle Button */}

                  {/* Dropdown */}
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="opacity-0 scale-90"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-90"
                  >
                    <Menu.Items className="absolute right-0 origin-top-right mt-2 w-48 shadow-xl rounded-lg dark:shadow-gray-900 focus:outline-none">
                      <div className="bg-white ring-1 ring-black ring-opacity-5 rounded-lg divide-y divide-gray-100 dark:bg-gray-800 dark:divide-gray-700 dark:ring-gray-700">
                        <div className="p-2.5 space-y-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${
                                  active
                                    ? "text-blue-800 bg-blue-50 border-blue-100 dark:text-blue-100 dark:bg-blue-500 dark:bg-opacity-20 dark:border-blue-500 dark:border-opacity-25"
                                    : "hover:text-blue-800 hover:bg-blue-50 active:border-blue-100 dark:text-gray-300 dark:hover:text-blue-100 dark:hover:bg-blue-500 dark:hover:bg-opacity-20 dark:active:border-blue-500 dark:active:border-opacity-25"
                                }`}
                              >
                                <svg
                                  className="flex-none hi-mini hi-inbox inline-block w-5 h-5 opacity-25 group-hover:opacity-50"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 015.273 3h9.454a2.75 2.75 0 012.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.73zm3.068-5.852A1.25 1.25 0 015.273 4.5h9.454a1.25 1.25 0 011.205.918l1.523 5.52c.006.02.01.041.015.062H14a1 1 0 00-.86.49l-.606 1.02a1 1 0 01-.86.49H8.236a1 1 0 01-.894-.553l-.448-.894A1 1 0 006 11H2.53l.015-.062 1.523-5.52z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="grow">Inbox</span>
                                <div className="font-semibold inline-flex px-1.5 py-0.5 leading-4 text-xs rounded-full border border-blue-200 text-blue-700 bg-blue-100 dark:text-blue-50 dark:bg-blue-800 dark:border-blue-700">
                                  2
                                </div>
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${
                                  active
                                    ? "text-blue-800 bg-blue-50 border-blue-100 dark:text-blue-100 dark:bg-blue-500 dark:bg-opacity-20 dark:border-blue-500 dark:border-opacity-25"
                                    : "hover:text-blue-800 hover:bg-blue-50 active:border-blue-100 dark:text-gray-300 dark:hover:text-blue-100 dark:hover:bg-blue-500 dark:hover:bg-opacity-20 dark:active:border-blue-500 dark:active:border-opacity-25"
                                }`}
                              >
                                <svg
                                  className="flex-none hi-mini hi-flag inline-block w-5 h-5 opacity-25 group-hover:opacity-50"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path d="M3.5 2.75a.75.75 0 00-1.5 0v14.5a.75.75 0 001.5 0v-4.392l1.657-.348a6.449 6.449 0 014.271.572 7.948 7.948 0 005.965.524l2.078-.64A.75.75 0 0018 12.25v-8.5a.75.75 0 00-.904-.734l-2.38.501a7.25 7.25 0 01-4.186-.363l-.502-.2a8.75 8.75 0 00-5.053-.439l-1.475.31V2.75z" />
                                </svg>
                                <span className="grow">Notifications</span>
                                <div className="font-semibold inline-flex px-1.5 py-0.5 leading-4 text-xs rounded-full border border-blue-200 text-blue-700 bg-blue-100 dark:text-blue-50 dark:bg-blue-800 dark:border-blue-700">
                                  5
                                </div>
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="p-2.5 space-y-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${
                                  active
                                    ? "text-blue-800 bg-blue-50 border-blue-100 dark:text-blue-100 dark:bg-blue-500 dark:bg-opacity-20 dark:border-blue-500 dark:border-opacity-25"
                                    : "hover:text-blue-800 hover:bg-blue-50 active:border-blue-100 dark:text-gray-300 dark:hover:text-blue-100 dark:hover:bg-blue-500 dark:hover:bg-opacity-20 dark:active:border-blue-500 dark:active:border-opacity-25"
                                }`}
                              >
                                <svg
                                  className="flex-none hi-mini hi-user-circle inline-block w-5 h-5 opacity-25 group-hover:opacity-50"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="grow">Account</span>
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${
                                  active
                                    ? "text-blue-800 bg-blue-50 border-blue-100 dark:text-blue-100 dark:bg-blue-500 dark:bg-opacity-20 dark:border-blue-500 dark:border-opacity-25"
                                    : "hover:text-blue-800 hover:bg-blue-50 active:border-blue-100 dark:text-gray-300 dark:hover:text-blue-100 dark:hover:bg-blue-500 dark:hover:bg-opacity-20 dark:active:border-blue-500 dark:active:border-opacity-25"
                                }`}
                              >
                                <svg
                                  className="flex-none hi-mini hi-cog-6-tooth inline-block w-5 h-5 opacity-25 group-hover:opacity-50"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="grow">Settings</span>
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="p-2.5 space-y-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${
                                  active
                                    ? "text-blue-800 bg-blue-50 border-blue-100 dark:text-blue-100 dark:bg-blue-500 dark:bg-opacity-20 dark:border-blue-500 dark:border-opacity-25"
                                    : "hover:text-blue-800 hover:bg-blue-50 active:border-blue-100 dark:text-gray-300 dark:hover:text-blue-100 dark:hover:bg-blue-500 dark:hover:bg-opacity-20 dark:active:border-blue-500 dark:active:border-opacity-25"
                                }`}
                              >
                                <svg
                                  className="flex-none hi-mini hi-lock-closed inline-block w-5 h-5 opacity-25 group-hover:opacity-50"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="grow">Sign out</span>
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </div>
                    </Menu.Items>
                  </Transition>
                  {/* END Dropdown */}
                </Menu>
                {/* END User Dropdown */}

                {/* Toggle Mobile Navigation */}
                <div className="lg:hidden">
                  <button
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    type="button"
                    className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hi-solid hi-menu inline-block w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                {/* END Toggle Mobile Navigation */}
              </div>
              {/* END Right Section */}
            </div>

            {/* Mobile Navigation */}
            <div className={`lg:hidden ${mobileNavOpen ? "" : "hidden"}`}>
              <nav className="flex flex-col space-y-2 py-4 border-t dark:border-gray-700">
                <a
                  href="/"
                  className="group text-sm font-semibold flex items-center space-x-2 px-3 py-2 rounded-lg text-blue-600 border border-blue-100 bg-blue-50 dark:text-blue-100 dark:bg-blue-500 dark:bg-opacity-20 dark:border-blue-500 dark:border-opacity-20"
                >
                  <svg
                    className="hi-mini hi-home inline-block w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Home</span>
                </a>
                <Link
                  to='/login'
                  className="group text-sm font-semibold flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-800 border border-transparent hover:text-blue-600 hover:bg-blue-50 active:border-blue-100 dark:text-gray-100 dark:hover:text-blue-100 dark:hover:bg-blue-500 dark:hover:bg-opacity-20 dark:active:border-blue-500 dark:active:border-opacity-25"
                >
                  <MdDashboardCustomize className="text-xl text-gray-400 group-hover:text-blue-600" />
                  <span>Dashboard</span>
                </Link>
              </nav>
            </div>
            {/* END Mobile Navigation */}
          </div>
        </header>
        {/* END Page Header */}
      </div>
    </>
  );
}
