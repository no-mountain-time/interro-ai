import Progress from '@/components/Progress'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Modal from '@/components/Modal'

export default function Questions() {
  return (

    <>
    <h1>
     Questions Start here:
    </h1>

<div className='w-[60%] h-[20%] mx-auto rounded-lg bg-white'>
<p className='text-black'>Question</p>
<Input />
<Button />
</div>
<Progress />

{/* Modal when complete */}
</>
  )
}
