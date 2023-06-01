import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const { data: session } = useSession();
  return (
    <Disclosure as='nav' className='bg-gray-800'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex flex-shrink-0 items-center'>
                  <img
                    className='block h-8 w-auto lg:hidden'
                    src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                    alt='Your Company'
                  />
                  <img
                    className='hidden h-8 w-auto lg:block'
                    src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                    alt='Your Company'
                  />
                </div>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4'>
                    <div className='flex'>
                      <div className='flex flex-shrink-0 items-center'></div>
                      <div className='hidden md:ml-6 md:flex md:space-x-8'>
                        <Link
                          href='/interview'
                          className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
                        >
                          Start Interview
                        </Link>
                        <Link
                          href='/stats'
                          className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
                        >
                          Performance
                        </Link>
                        {!session ? (
                          <Link
                            href='/login'
                            className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
                          >
                            Sign in/Register
                          </Link>
                        ) : (
                          <button>logout</button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'></div>
            </div>
          </div>

          <Disclosure.Panel className='md:hidden'>
            <div className='space-y-1 pb-3 pt-2'>
              <Disclosure.Button className='block border-l-4 hover:border-brand hover:bg-gray-100 py-2 pl-3 pr-4 text-base text-gray-600 font-medium w-[100%]'>
                <Link href='/interview'>Start Interview</Link>
              </Disclosure.Button>
              <Disclosure.Button className='block border-l-4 hover:border-brand hover:bg-gray-100 py-2 pl-3 pr-4 text-base text-gray-600 font-medium w-[100%]'>
                <Link href='/stats'>Performance</Link>
              </Disclosure.Button>
              <Disclosure.Button className='block border-l-4 hover:border-brand hover:bg-gray-100 py-2 pl-3 pr-4 text-base text-gray-600 font-medium w-[100%]'>
                <Link href='/'>SignIn/Register</Link>
              </Disclosure.Button>
              <Disclosure.Button className='block border-l-4 hover:border-brand hover:bg-gray-100 py-2 pl-3 pr-4 text-base text-gray-600 font-medium w-[100%]'>
                <Link href='/'>Sign Out</Link>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
