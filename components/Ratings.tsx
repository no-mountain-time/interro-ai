

const interviews = [
  {
    id: 1,
    title: 'Frontend Developer',
    rating: 5,
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
    rating: 3,
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
    rating: 3,
    content: `
      <p>Topics: Node</p>
      <p>Feedback: Need to do better!!! </p>
    `,
    date: 'May 17, 2021',
    datetime: '2021-01-06',
  },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Ratings() {
  return (
    <div className='bg-white w-[87%] mx-auto rounded-lg my-10'>
      <div className='mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8'>
        <h2 className='text-lg font-medium text-gray-900'>Interview Performance</h2>
        <div className='mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10'>
          {interviews.map((review) => (
            <div
              key={review.id}
              className='pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8'
            >
              <div className='lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8'>
               
                <div className='flex items-center xl:col-span-1'>
                  <p className='ml-3 text-sm text-gray-700'>
                    {review.rating}
                  </p>
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
  )
}
