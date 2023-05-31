import Button from '@/components/Button'
import { BsPlayFill } from 'react-icons/bs'
import InputSubject from '@/components/InputSubject'

const handleInterviewStart = (e: any) => {
  e.preventDefault()
  console.log('Interview started')
}

export default function Interview() {
  return (
    <div className='mx-auto w-[70%] max-w-7xl p-2 rounded-lg bg-white'>
      <p className='text-slate-800 text-center mb-4 text-xl'>
        Build an interview
      </p>

      <div className='flex flex-row justify-evenly'>
        <div className='w-1/3'>
          <p className='text-slate-800 text-center'>Select topics</p>
          <InputSubject />
        </div>

        {/* divider between topic and companies */}
        <div className='flex flex-col justify-evenly'>
          <hr className='rotate-90 w-12' />
          <p className='text-slate-500 text-center'>or</p>
          <hr className='rotate-90 w-12' />
        </div>
        {/* end divider */}

        <div className='w-1/3'>
          <p className='text-slate-800 text-center'>Select a company</p>
          <div>
            <div>
              <div className='mt-2'>
                <input
                  type='text'
                  name='company'
                  id='company'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder='Twitter, Google, etc.'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='p-2 float-right mt-4'>
        <Button
          onClick={handleInterviewStart}
          icon={<BsPlayFill className='inline-block mr-2' />}
        >
          Start
        </Button>
      </div>
    </div>
  )
}
