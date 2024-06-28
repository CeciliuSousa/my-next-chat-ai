'use client';

import { useChat } from 'ai/react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Card className='w-[550px] shadow-md shadow-slate-700' >
      <CardHeader>
        <CardTitle>Chat Bot</CardTitle>
        <CardDescription>Chat bot criado com varcel, usando api da openai.</CardDescription>
      </CardHeader>

      <CardContent>
        <ScrollArea className='h-[400px] w-full space-y-4 '>
          {messages.map((message) => {
            return (
              <div
                key={message.id}
                className='flex gap-3 text-slate-600 text-sm '
              >
                {message.role === 'user' && (
                  <Avatar>
                    <AvatarFallback>CS</AvatarFallback>
                    <AvatarImage src='http://github.com/CeciliuSousa.png'></AvatarImage>
                  </Avatar>
                )}
                {message.role === 'assistant' && (
                  <Avatar>
                    <AvatarFallback>AI</AvatarFallback>
                    <AvatarImage src='https://www.shutterstock.com/image-vector/chat-bot-logo-design-concept-600nw-1938811039.jpg'></AvatarImage>
                  </Avatar>
                )}

                <p className='leading-relaxed'>
                  <span className='block font-bold text-slate-700'>
                    {message.role === 'user' ? 'You' : 'AI'}:
                  </span>
                  {message.content}
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>

      <CardFooter>
        <form className='w-full flex gap-3' onSubmit={handleSubmit}>
          <Input
            placeholder='Em que posso lhe ajudar?'
            value={input}
            onChange={handleInputChange}
          ></Input>
          <Button type='submit'>Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
