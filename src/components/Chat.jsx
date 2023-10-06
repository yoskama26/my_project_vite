import MessageUser from "./Message";

const MessageList = ({messages}) => (

    <div>
        {messages.map((message) => 
            <MessageUser
                key={message.id}
                message={message}
            />
        )}
    </div>
);
export default MessageList;