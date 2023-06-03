require('dotenv').config()

const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY,
})

const arrayOfQuestions = [
  'What is a recent technical challenge you experienced and how did you solve it?',
  'Say your company gives you one week you can use to improve your and your colleagues lifes: how would you use that week?',
  'What is the most challenging aspect of your current project?',
]

const arrayOfAnswers = [
  'Recently I encountered a problem when trying to send data from the frontend of my application to the back. The problem had to do with the format in which the data was sent and not being able to correctly parse it. I solved this by creating my own parsing alogrithm that was able to correctly traverse the data',
  'I would ask all of my colleagues for suggestions and make a list for everyone to vote on. After taking in the votes we could make a plan on what options would be the most actionable.',
  'The most challenging aspect of my current project is trying to account for edge cases that may come back to hurt us in the future. By doing so we are building out a more robust and easier to expand application'

]

const sets = [{gpt: "", user: ""}, {gpt: "", user: ""}]

const openai = new OpenAIApi(configuration)
const int_topic = 'What excites or interests you about coding?'
const int_answer =
  'Being able to create anything I want, I also love working with computers'
// let transcript =
//   "Recruiter: Hello, thanks for joining me today for the interview. Can you tell me about your experience with Node.js development? Interviewee: I have been building node application for like 10 years. Recruiter: That's impressive. Can you share with me some of your notable projects that you’ve built using Node.js? Inteviewee: I build the backend of facebook Recruiter: Wow, building the backend of Facebook is definitely impressive. What kind of challenges did you face while building it, and how did you overcome them? Interviewee: The hardest thing was trying to scale to 2 billion users, I don't want to get into it though"
// let indexOfQandA = 0
let transcript = ''

const runPrompt = async () => {
  //if there is no transcript then the interview just started. So send the first question and ans as separate variables
  if (transcript === '') {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You are a technical recruiter working at a company that is hiring a software engineer. You are conducting an interview and choose one of the following questions to ask on react. Respond to the answer while giving feedback and an overall grade out of 100. Make sure to grade the answer harshly.`,
        },
        { role: 'user', content: `${int_answer}` },
      ],
    })
  }
  

    //   transcript += `Interview Question: ${int_question}, Interviewees Response: ${int_answer}, Your Response to the Interviewee: ${completion.data.choices[0].message.content}`

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
    console.log(completion.data.choices[0].message.content)
  
 //console.log(transcript);
}

runPrompt()
