import React, { ReactNode, MouseEventHandler } from 'react'

type ButtonProps = {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  icon?: ReactNode
}

export default function Button({ children, onClick, icon }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type='button'
      className='rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
    >
      {icon}
      {children}
    </button>
  )
}
