import Progress from '@/components/Progress'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Response from '@/components/Response'
import Modal from '@/components/Modal'

export default function Questions() {

  const responseSubmit = (e: any) => {
    e.preventDefault()
    console.log('ResponseSubmitted')
    // logic to handle response submission
  }

  return (
    <>
      <div className='w-[60%] h-fit mx-auto rounded-lg bg-white mb-10 p-2 md:p-16'>
        <Input />
        <Response />
        <div className='float-right mt-2'>
          <Button
            onClick={responseSubmit}
          >
            Submit
          </Button>
        </div>
      </div>

      {/* Modal when complete */}
    </>
  )
}
