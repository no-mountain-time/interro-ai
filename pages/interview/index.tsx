import Button from '@/components/Button'
import { BsPlayFill } from 'react-icons/bs'
import { useRef } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'


export default function Interview() {

  const router = useRouter()

  const topic1Ref = useRef<HTMLInputElement>(null)
  const topic2Ref = useRef<HTMLInputElement>(null)
  const topic3Ref = useRef<HTMLInputElement>(null)

  const companyRef = useRef<HTMLInputElement>(null)

  const handleInterviewStart = (e: any) => {
    e.preventDefault()
    console.log('Interview started')
    //Controll logic needed to ensure only one side is selected or have 2 different buttons
    //This can be saved for last since it's not a priority for demo purposes
    // console.log(companyRef.current?.value)
    // console.log(topic1Ref.current?.value)
    // console.log(topic2Ref.current?.value)
    // console.log(topic3Ref.current?.value)

    axios.post('/api/gpt/interro-gpt', {
      // {"topics": ["React", "CSS", "JavaScript"], "transcript": []}
      topics: [
        topic1Ref.current?.value,
       topic2Ref.current?.value,
        topic3Ref.current?.value,
      ],
      transcript: [],
    }).then((res) => {
      console.log(res)
      const value = res.data
      router.push({pathname: '/interview/questions',
      query: {key: value}
    })
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className='mx-auto w-[70%] max-w-7xl p-2 rounded-lg bg-white'>
      <p className='text-slate-800 text-center mb-4 text-xl'>
        Build An Interview
      </p>

      <div className='flex flex-row justify-evenly'>
        <div className='w-1/3'>
          <p className='text-slate-800 text-center'>Select topics</p>
          <div>
            <div className='mt-2'>
              <input
                type='text'
                name='topic1'
                id='topic1'
                ref={topic1Ref}
                className='block w-full mb-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                placeholder='React, Algorithms, etc.'
              />
              <input
                type='text'
                name='topic2'
                id='topic2'
                ref={topic2Ref}
                className='block w-full mb-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                placeholder='Node, CSS, etc.'
              />
              <input
                type='text'
                name='topic3'
                id='topic3'
                ref={topic3Ref}
                className='block w-full mb-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                placeholder='System Design, JavaScript, etc.'
              />
            </div>
          </div>
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
                  ref={companyRef}
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
