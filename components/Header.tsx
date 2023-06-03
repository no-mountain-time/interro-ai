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
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
                    />
                  </svg>
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
