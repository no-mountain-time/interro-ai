
export default function InputSubject() {
  return (
    <div>
      <div className='mt-2'>
        <input
          type='text'
          name='topic1'
          id='topic1'
          className='block w-full mb-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder='React, Algorithms, etc.'
        />
        <input
          type='text'
          name='topic2'
          id='topic2'
          className='block w-full mb-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder='Node, CSS, etc.'
        />
        <input
          type='text'
          name='topic3'
          id='topic3'
          className='block w-full mb-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder='System Design, JavaScript, etc.'
        />
      </div>
    </div>
  )
}

