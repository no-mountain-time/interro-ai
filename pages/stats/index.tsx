import Modal from '@/components/Modal'
import Button from '@/components/Button'
import { RiFilePaper2Line } from 'react-icons/ri'
import { use, useState } from 'react'

const interviews = [
  {
    id: 1,
    title: 'Frontend Developer',
    rating: 95,
    content: `
      <p>Topics: React, State Management</p>
      <p>Feedback: Need to do better </p>
    `,
    date: 'May 16, 2021',
    datetime: '2021-01-06',
  },
  {
    id: 2,
    title: 'Twitter',
    rating: 83,
    content: `
      <p>Topics: Node</p>
      <p>Feedback: Need to do better!!! </p>
    `,
    date: 'May 17, 2021',
    datetime: '2021-01-06',
  },

  {
    id: 3,
    title: 'Twitter',
    rating: 35,
    content: `
      <p>Topics: Node</p>
      <p>Feedback: Need to do better!!! </p>
    `,
    date: 'May 17, 2021',
    datetime: '2021-01-06',
  },
]

export default function Stats() {
  const [modal, setModal] = useState(false)

const handleInterviewReview = (e: any, id:number) => {

  

  e.preventDefault()
  console.log(id)
  setModal(true)

}

  return (
    <>
      {modal && (<Modal />)}
      <div className='bg-white w-[87%] mx-auto rounded-lg my-10'>
        <div className='mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8'>
          <h2 className='text-lg font-medium text-gray-900'>
            Interview Performance
          </h2>
          <div className='mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10'>
            {interviews.map((review) => (
              <div
                key={review.id}
                className='pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8'
              >
                <div className='lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8'>
                  <div className='flex items-center xl:col-span-1'>
                    {review.rating > 75 ? (
                      <p className='ml-3 text-lg text-green-700'>
                        {review.rating}%
                      </p>
                    ) : (
                      <p className='ml-3 text-lg text-red-700'>
                        {review.rating}%
                      </p>
                    )}
                  </div>

                  <div className='mt-4 lg:mt-6 xl:col-span-2 xl:mt-0'>
                    <h3 className='text-sm font-medium text-gray-900'>
                      {review.title}
                    </h3>

                    <div
                      className='mt-3 space-y-6 text-sm text-gray-500'
                      dangerouslySetInnerHTML={{ __html: review.content }}
                    />
                  </div>
                </div>
                <div className='w-96 px-2 mt-3 lg:mt-0'>
                  <Button
                    icon={<RiFilePaper2Line className='inline-block mr-2' />}
                    onClick={(e) => handleInterviewReview(e, review.id)}
                  >
                    Open
                  </Button>
                </div>

                <div className='mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3'>
                  <time
                    dateTime={review.datetime}
                    className='ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0'
                  >
                    {review.date}
                  </time>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
