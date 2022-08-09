import { useChat } from '../context/ChatContext';

const ChatList = () => {
  const data = useChat();

  console.log(data);

  return <div>ChatList</div>;
};

export default ChatList;
