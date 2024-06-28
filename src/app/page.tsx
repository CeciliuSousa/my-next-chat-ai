import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <div className='flex min-h-screen bg-slate-200 items-center justify-center'>
      <Card className='w-[400px] h-[500px] grid grid-rows-[min-content_1fr_min-content] shadow-md shadow-slate-800 '>
        <CardHeader>Chat Bot</CardHeader>
        <CardDescription>Chat bot with varcel.</CardDescription>

        <CardContent className='space-y-3'>
          <div>
            <Avatar>
              <AvatarFallback>CS</AvatarFallback>
              <AvatarImage src='http://github.com/CeciliuSousa.png'></AvatarImage>
            </Avatar>
          </div>
        </CardContent>

        <CardFooter className='space-y-3'>
          <Input placeholder='Em que posso lhe ajudar?'></Input>
          <Button type='submit'>Send</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
