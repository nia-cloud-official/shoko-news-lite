import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const getCompletion = async (prompt: string) => {
    const result = await streamText({
        model: openai('gpt-4o-mini'),
        prompt,
    });

    return result.text;
}