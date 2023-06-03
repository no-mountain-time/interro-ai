import { db } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
import { runPrompt } from './chatGPTtests';
type Message = {
    role: string,
    content: string
}

type Messages = Message[];
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {

 
  try {
    let { transcript, topics, answer } = request.body
    console.log('transcript in req body', transcript)
    let gptOutput;
    if (transcript.length === 0 || transcript === null) {
        console.log('NO TRANSCRIPT');
        gptOutput = await runPrompt(topics);
    } else {
        console.log('TRANSCRIPT')
        gptOutput = await runPrompt(topics, transcript);
    }
    console.log('BACKEND OUTPUT', gptOutput)
    // transcript.push({
    //     role: 'system',
    //     //@ts-ignore
    //     content: gptOutput
    // })
    // console.log('TRANSCRIPT SENT BACK', transcript);
    return response.status(200).json(gptOutput);
  } catch (error) {
    return response.status(500).json({ error });
  }
}