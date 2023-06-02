
export default function Input() {
  return (
    <div>
      <label
        htmlFor='question'
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        Question
      </label>
      <div className='mt-2'>
        <p className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        >
          Chat GPT Question
        </p>
      </div>
    </div>
  )
}
