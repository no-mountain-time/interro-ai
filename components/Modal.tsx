import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'

type ModalProps = {
  id: number
  reset: () => void
}

const fullTranscript = [
  {
    id: 1,
    Question: 'What is React? 1',
    Answer: 'idk 1',
    Feedback: 'Need to do better 1',
    Rating: 1,
  },
  {
    id: 2,
    Question: 'What is React? 2',
    Answer: 'idk 2',
    Feedback: 'Need to do better 2',
    Rating: 2,
  },
  {
    id: 3,
    Question: 'What is React? 3',
    Answer: 'idk 3',
    Feedback: 'Need to do better 3',
    Rating: 3,
  },
  {
    id: 4,
    Question: 'What is React? 1',
    Answer: 'idk 1',
    Feedback: 'Need to do better 1',
    Rating: 1,
  },
  {
    id: 5,
    Question: 'What is React? 2',
    Answer: 'idk 2',
    Feedback: 'Need to do better 2',
    Rating: 2,
  },
  {
    id: 6,
    Question: 'What is React? 3',
    Answer: 'idk 3',
    Feedback: 'Need to do better 3',
    Rating: 3,
  },
  {
    id: 7,
    Question: 'What is React? 1',
    Answer: 'idk 1',
    Feedback: 'Need to do better 1',
    Rating: 1,
  },
  {
    id: 8,
    Question: 'What is React? 2',
    Answer: 'idk 2',
    Feedback: 'Need to do better 2',
    Rating: 2,
  },
  {
    id: 9,
    Question: 'What is React? 3',
    Answer: 'idk 3',
    Feedback: 'Need to do better 3',
    Rating: 3,
  },
]

export default function Modal({ id, reset }: ModalProps) {
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
    reset()
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform h-[66vh] overflow-scroll rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[60%] sm:p-6'>
                <div>
                  {fullTranscript.map((item) => (
                    <>
                      <div
                        key={item.id}
                        className='text-slate-800 mb-4 text-xl'
                      >
                        <p>Question: {item.Question}</p>
                        <p>Answer: {item.Answer}</p>
                        <p>Feedback: {item.Feedback}</p>
                        <p>Score: {item.Rating}</p>
                      </div>
                      <hr className='mb-3'/>
                    </>
                  ))}
                </div>

                <div className='mt-5 sm:mt-6'>
                  <button
                    type='button'
                    className='inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    onClick={handleClose}
                  >
                    Go back to performance
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
