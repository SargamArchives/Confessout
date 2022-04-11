import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  HashtagIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
const solutions = [
  {
    name: "Signin",
    href: "/signin",
    icon: HashtagIcon,
  },
  {
    name: "Signup",
    href: "/signup",
    icon: HashtagIcon,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: UserCircleIcon,
  },
];

const HeaderLarge = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 bg-gray-900">
      <div className="flex justify-between items-center border-b-2 border-gray-300 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link to={"/"}>
            <span className="sr-only">Workflow</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-indigo-800 rounded-md p-2 inline-flex items-center justify-center text-white hover:bg-indigo-600 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>

        <Popover.Group as="nav" className="hidden md:flex space-x-10">
          <Link
            to={"/profile"}
            className="text-base font-medium text-gray-300 hover:text-white"
          >
            Profile
          </Link>
        </Popover.Group>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <Link
            to={"signin"}
            className="whitespace-nowrap text-base font-medium text-gray-300 hover:text-gray-100"
          >
            Sign in
          </Link>
          <Link
            to={"signup"}
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-700 hover:bg-indigo-600"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

const HeaderMed = () => {
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right"
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-black opacity-100 divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6"></div>
            <nav className="grid gap-y-8">
              {solutions.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="-m-3 p-3 flex items-center rounded-md  hover:bg-gray-700"
                >
                  <item.icon
                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-base font-medium text-gray-300">
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export default function Header() {
  const isLarge = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <Popover className="relative bg-gray-900">
      {/* This only gets rendered when the breakpoint allows */}
      <HeaderLarge />
      {!isLarge && <HeaderMed />}
    </Popover>
  );
}
