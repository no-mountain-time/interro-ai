import Input from '@/components/Input'
import Button from '@/components/Button'
import Modal from '@/components/Modal'
import { useRouter } from 'next/router'
import axios from 'axios'
import {useState} from 'react'

type Message = {
  role: 'user' | 'system',
  content: string
}
type Transcript = Message[]

function sliceColonToQuestion(str: any) {
  const colonIndex = str.indexOf(':');
  const questionIndex = str.indexOf('?');
  
  // Return an empty string if either the colon or question mark is not found
  if (colonIndex === -1 || questionIndex === -1) {
    return '';
  }
  
  // Add 1 to the question mark index to include the question mark itself
  const slicedString = str.slice(colonIndex+2 , questionIndex + 1);
  return slicedString;
}

export default function Questions() {

let transcript: Transcript = []

const [answer, setAnswer] = useState('')
const [feedbackReceived, setfeedbackReceived] = useState(false);
const [nextQuestion, setNextQuestion] = useState('');
const [feedback, setFeedback] = useState('')

const instructions = `You are a technical recruiter working at a company that is hiring a software engineer. You are conducting a technical interview. The question should require some thought to answer and should, at minimum, take about 300 words to answer satisfactorily. 

    Do not answer the question, instead let the user (me) answer the question, and give me a grade and feedback on how I can improve my answer in areas where it is unsatisfactory. Penalize extremely for answers that are not satisfactory *and* are also too short. If an answer is satisfactory but short, then that answer should not be penalized for its length. When I give you a response, give me a letter grade (including +/-) and give me feedback.
    An (A) hits most, if not all, of the necessary features of a correct answer. (B) hits many necessary features of a correct answer. (C) hits some of the necessary features of a correct answer and provides. (D) hits hardly any features of a correct answer. (F) hits no features of a correct answer. By "features of a correct answer," I mean a robust explanation or statement.
    
    Format it with a grade at the top "Grade:" and then one line down feedback "Feedback:". Feedback should include ways to improve and what an ideal answer would look like.`

  const router = useRouter()
  let { key } = router.query
  const [question, setQuestion] = useState(key)
  const responseSubmit = (e: any) => {

    e.preventDefault()

    
    transcript.push({role: 'system', content: instructions})

    transcript.push({role: 'system', 
    content: `${key}`})

    transcript.push({
      role: 'user',
      content: answer
    })
    console.log('ResponseSubmitted')
    console.log('key: ', router.query.key)
    console.log('TRANSCRIPT IN RESPONSE SUBMIT', transcript)
    axios.post('/api/gpt/interro-gpt', { transcript: transcript,
      topics:[]

    }).then((res:any) =>{
      console.log(res.data)
      const feedback = res.data
      transcript.push({
        role: 'system',
        content: feedback,
      })
      e.target.value = ''
      setfeedbackReceived(true);
      setFeedback(feedback)
      console.log(transcript)
    }).catch((err:any) =>{
      console.log(err)
    })


    
  }
  const nextQueston = (e: any) => {
    e.preventDefault()
    setfeedbackReceived(false)
    setAnswer('')
    setNextQuestion('...')

    transcript.push({role: 'user', content: instructions})

    axios.post('/api/gpt/interro-gpt', { transcript: transcript, topics: []}).then((res: any) => {
      key = res.data
      setNextQuestion(sliceColonToQuestion(res.data))
    }).catch((err:any) =>{
      console.log(err)
    })
  }

  // messages: [
  //   {
  //     role: 'system',
  //     content: `You are a technical recruiter working at a company that is hiring a software engineer. You are conducting a technical interview. Ask a question about any of these three topics and only one question: ${topic1}, ${topic2}, ${topic3}. The question should require some thought to answer and should, at minimum, take about 300 words to answer satisfactorily. 

  //     Do not answer the question, instead let the user (me) answer the question, and give me a grade and feedback on how I can improve my answer in areas where it is unsatisfactory. Penalize extremely for answers that are not satisfactory *and* are also too short. If an answer is satisfactory but short, then that answer should not be penalized for its length. When I give you a response, give me a letter grade (including +/-) and give me feedback.
  //     An (A) hits most, if not all, of the necessary features of a correct answer. (B) hits many necessary features of a correct answer. (C) hits some of the necessary features of a correct answer and provides. (D) hits hardly any features of a correct answer. (F) hits no features of a correct answer. By "features of a correct answer," I mean a robust explanation or statement.`,
  //   },
  //   { role: 'user', content: `Ask me a question` },
  // ],

  return (
    <>
      <div className='w-[60%] h-fit mx-auto rounded-lg bg-white mb-10 p-2 md:p-16'>
        <Input text={nextQuestion || key } />
 <div>
      <label
        htmlFor='comment'
        className='block text-sm font-medium leading-6 text-gray-900 mt-2'
      >
        Answer
      </label>
      <div className='mt-2'>
        <textarea
          rows={4}
          name='comment'
          id='comment'
          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          defaultValue={''}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter your response"
        />
      </div>
    </div>

        <div className='float-right mt-2'>
          <Button
            onClick={responseSubmit}
          >
            Submit
          </Button>
        </div>

        {feedbackReceived && <div className='w-[100%] h-fit text-black mt-20 bg-slate-300 rounded-lg p-3'>
          <p>{feedback}</p>
                  <div className='float-right mt-2'>
          <Button
            onClick={nextQueston}
          >
            Next Question
          </Button>
        </div>
      </div>
      }

      </div>
    </>
  )
}
