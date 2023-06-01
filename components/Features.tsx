import { BookOpenIcon } from '@heroicons/react/20/solid'
import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Customize questions',
    description:
      'Tailor your interview questions towards specific tech, companies, or even both.',
    icon: InboxIcon,
  },
  {
    name: 'Instant grading and feedback',
    description:
      'Receive instant feedback on how you did and how you can improve.',
    icon: UsersIcon,
  },
  {
    name: 'Review performance',
    description:
      'Review all your past questions and answers in your own personal dashboard',
    icon: BookOpenIcon,
  },
]

export default function Features() {
  return (
    <div className='bg-gray-900 py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Powered by AI and our proprietary dataset.
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-300'>
            Interrro-AI leverages AI to provide a custom tailored interview experience for you. Combined with our proprietary evergreen dataset, you can be assured that you are getting the most relevant questions today and actionable feedback.
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
            {features.map((feature) => (
              <div key={feature.name} className='flex flex-col'>
                <dt className='text-base font-semibold leading-7 text-white'>
                  <div className='mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500'>
                    <feature.icon
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className='mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300'>
                  <p className='flex-auto'>{feature.description}</p>
                  <p className='mt-6'>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
