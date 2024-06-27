import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <div className='flex min-h-screen bg-slate-200 items-center justify-center'>
      <Card className='bg-slate-50 shadow-md shadow-slate-700 w-[400px] h-[500px] grid grid-rows-[min-content_1fr_min-content] '>
        <CardHeader>
          <CardTitle>Chatbot</CardTitle>
          <CardDescription>Chat bot with Vercel SDK</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='flex gap-4 text-slate-600 text-sm'>
            <Avatar>
              <AvatarFallback>CS</AvatarFallback>
              <AvatarImage src='https://github.com/CeciliuSousa.png'></AvatarImage>
            </Avatar>
          </div>
          <div></div>
        </CardContent>
        <CardFooter className='space-x-3'>
          <Input placeholder='How can I Help you?' />
          <Button variant='secondary' >Send</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
