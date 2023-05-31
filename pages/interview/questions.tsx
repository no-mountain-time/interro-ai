import Progress from '@/components/Progress'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Response from '@/components/Response'
import Modal from '@/components/Modal'

export default function Questions() {
  return (
    <>
      <div className='w-[60%] h-fit mx-auto rounded-lg bg-white mb-10 p-2 md:p-16'>
        <Input />
        <Response />
        <Button />
      </div>

      {/* Modal when complete */}
    </>
  )
}
