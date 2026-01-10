import { generateText, type ModelMessage } from 'ai'
import { openai } from '@ai-sdk/openai'
import { SYSTEM_PROMPT } from './system/prompt'
import { AgentCallbacks } from '../types';
const MODEL_NAME = "gpt-5-mini";


export const run = async (
    userMessage: string,
    conversationHistory: ModelMessage[],
    callbacks: AgentCallbacks,
) => {
    const { text } = await generateText({
        model: openai(MODEL_NAME),
        prompt: userMessage,
        system: SYSTEM_PROMPT,
    });
    console.log(text)
};

run("hi my name is Michelle")