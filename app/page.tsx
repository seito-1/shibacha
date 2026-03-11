import Image from 'next/image';
import { Header } from './components/Header';
import { FriendItem } from './components/FriendItem';
import { Message } from './components/Message';
import { USERS } from './mock/Users';
import { MESSAGES } from './mock/Message'

export default function Home() {
  return (
    <main className="">
      <Header/>
      {USERS.map((user) => {
        return <FriendItem name= {user.name} statesMessage= {user.status_message}/>
      })}
      {MESSAGES.map((message) => {
        return <Message message= {message.message} sender= {message.sender} receiver= {message.receiver} created= {message.created}/>
      })}
    </main>
  );
}
