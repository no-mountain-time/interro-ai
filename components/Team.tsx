const people = [
  {
    name: 'Mason Shelton',
    role: 'Full Stack Software Engineer',
    imageUrl:
      'https://ca.slack-edge.com/T03KRTTF96K-U03UD4JDXKR-1644a570648e-512',
  },
  {
    name: 'Felix Leclerc Jr.',
    role: 'Full Stack Software Engineer',
    imageUrl:
      'https://ca.slack-edge.com/T03KRTTF96K-U03QVAUPSH5-5116ef375209-512',
  },
  {
    name: 'Andrew Luu',
    role: 'Full Stack Software Engineer',
    imageUrl:
      'https://ca.slack-edge.com/T03KRTTF96K-U03U8EQF6TY-672a22db984b-512',
  },
  {
    name: 'Jake Gray',
    role: 'Full Stack Software Engineer',
    imageUrl:
      'https://ca.slack-edge.com/T03KRTTF96K-U040FP8DRLY-b8d2bfbf8c1a-512',
  },
  {
    name: 'Jason Johnson',
    role: 'Full Stack Software Engineer',
    imageUrl:
      'https://ca.slack-edge.com/T03KRTTF96K-U041HSQ08QL-6773071adc0a-512',
  },
  // More people...
]

export default function Team() {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Our team
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6'
        >
          {people.map((person) => (
            <li key={person.name}>
              <img
                className='mx-auto h-24 w-24 rounded-full'
                src={person.imageUrl}
                alt=''
              />
              <h3 className='mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900'>
                {person.name}
              </h3>
              <p className='text-sm leading-6 text-gray-600'>{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
