import { useChat } from '../context/ChatContext';
import styles from './styles.module.css';

import ChatItem from './ChatItem';

const ChatList = () => {
  const { messages } = useChat();

  return (
    <div className={styles.chatlist}>
      <div>
        {messages.map((item, key) => (
          <ChatItem item={item} key={key} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
