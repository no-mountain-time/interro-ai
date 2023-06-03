require('dotenv').config()

const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY,
})

let completion: any = null

const openai = new OpenAIApi(configuration)


export const runPrompt = async ( subjects: any, transcript?: any) => {
  //if there is no transcript then the interview just started. So send the first question and ans as separate variables
  console.log('SUBJECTS', subjects);
  let topic1 = subjects[0]
  let topic2 = subjects[1]
  let topic3 = subjects[2]
  console.log('is topics split?', topic1);
  let completion;
  if (transcript === undefined) {
    console.log('NO TRANSCRIPT GPT')
    completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You are a technical recruiter working at a company that is hiring a software engineer. You are conducting a technical interview. Ask a question about any of these three topics and only one question: ${topic1}, ${topic2}, ${topic3}. The question should require some thought to answer and should, at minimum, take about 300 words to answer satisfactorily. 

          Do not answer the question, instead let the user (me) answer the question, and give me a grade and feedback on how I can improve my answer in areas where it is unsatisfactory. Penalize extremely for answers that are not satisfactory *and* are also too short. If an answer is satisfactory but short, then that answer should not be penalized for its length. When I give you a response, give me a letter grade (including +/-) and give me feedback.
          An (A) hits most, if not all, of the necessary features of a correct answer. (B) hits many necessary features of a correct answer. (C) hits some of the necessary features of a correct answer and provides. (D) hits hardly any features of a correct answer. (F) hits no features of a correct answer. By "features of a correct answer," I mean a robust explanation or statement.`,
        },
        { role: 'user', content: `Ask me a question` },
      ],
    })
  } else {
    completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: transcript
    })
  }
  

      // transcript += `Interview Question: ${int_question}, Interviewees Response: ${int_answer}, Your Response to the Interviewee: ${completion.data.choices[0].message.content}`

    // } else {

    // const completion = await openai.createChatCompletion({
    //   model: 'gpt-3.5-turbo',
    //   messages: [
    //     {
    //       role: 'system',
    //       content: `You are a recruiter with technical knowledge working at a tech company conducting an interview (you either just started it or you are in the middle of it), this is the transcript of the interview so far ${transcript}; if the transcript is empty or the user just says 'hello'. Ask an appropriate question to start, or follow up question, or respond to the answer in a way that would be appropriate for a recruiter to continue the conversation, feel free to ask reallyhard questions within the scope. This is an interview for a node developer`,
    //     },
    //     // { role: 'user', content: `hello` },
    //   ],
    // })

    // transcript += `Interview Question: ${arrayOfQuestions[indexOfQandA]}, Interviewees Response: ${arrayOfAnswers[indexOfQandA]}, Your Response to the Interviewee: ${completion.data.choices[0].message.content}`
    // }

    // console.log(completion.data.choices[0].message);
    // console.log(completion.data)
    const gptResponse = completion.data.choices[0].message.content
    console.log('GPT RESPONSE', gptResponse);
    return gptResponse

    const currentConversation = [{context: ""},{system: "", user: ""}, {system: "", user:""}]
  
 //console.log(transcript);
}