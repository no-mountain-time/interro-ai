import InputSubject from '@/components/InputSubject'

export default function Interview() {
  return (
    <div className='mx-auto w-[70%] max-w-7xl px-4 rounded-r-lg sm:px-6 lg:px-8 outline-dotted outline-red-700'>
      <div className='mx-auto max-w-3xl bg-white outline-dotted rounded-lg'>
        <p className='text-slate-800'>Build an interview</p>
        <div className='flex flex-row'>
          <div>
            <p className='text-slate-800'>Enter subjects:</p>

          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
