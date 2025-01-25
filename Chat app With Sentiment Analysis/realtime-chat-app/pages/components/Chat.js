import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Pusher from "pusher-js";
import ChatMessage from "./ChatMessage";

const SAD_EMOJI = [128532, 128533, 128542, 128546, 128549, 128557];
const NEUTRAL_EMOJI = [128528, 128529, 128540, 128541, 128545, 128548, 128550];
const HAPPY_EMOJI = [128512, 128513, 128514, 128515, 128516, 128518, 128522];

const Chat = ({ user }) => {
  const [chats, setChats] = useState([]);

  const handleKeyUp = useCallback(
    (evt) => {
      if (evt.keyCode === 13 && !evt.shiftKey) {
        const chat = {
          user,
          message: evt.target.value,
          timestamp: +new Date(),
        };
        evt.target.value = "";
        axios.post("/message", chat);
      }
    },
    [user]
  );

  useEffect(() => {
    const pusher = new Pusher(process.env.PUSHER_APP_KEY, {
      cluster: process.env.PUSHER_APP_CLUSTER,
      isTLS: true,
    });
    const channel = pusher.subscribe("chat-room");

    const handleNewMessage = ({ chat = null }) => {
      const newChats = [...chats];
      newChats.push(chat);
      setChats(newChats);
    };

    const handleConnected = () => {
      axios.get("/messages").then((response) => {
        setChats(response.data);
      });
    };

    channel.bind("new-message", handleNewMessage);
    pusher.connection.bind("connected", handleConnected);

    return () => {
      channel.unbind("new-message", handleNewMessage);
      pusher.disconnect();
    };
  }, [chats]); // Added chats as a dependency for useEffect

  return (
    <React.Fragment>
      {user && (
        <div
          className="border-bottom border-gray w-100 d-flex align-items-center bg-white"
          style={{ height: 90 }}
        >
          <h2 className="text-dark mb-0 mx-4 px-2">{user}</h2>

          <div
            className="border-top border-gray w-100 px-4 d-flex justify-content-center align-items-center bg-light"
            style={{ minHeight: 90 }}
          >
            <div
              className="px-4 pb-4 w-100 d-flex flex-row flex-wrap align-items-start align-content-start position-relative"
              style={{ height: "calc(100% - 180px)", overflowY: "scroll" }}
            >
              {chats.map((chat, index) => {
                const previous = Math.max(0, index - 1);
                const previousChat = chats[previous];
                const position = chat.user === user ? "right" : "left";
                const isFirst = previous === index;
                const inSequence = chat.user === previousChat.user;
                const hasDelay =
                  Math.ceil(
                    (chat.timestamp - previousChat.timestamp) / (1000 * 60)
                  ) > 1;
                const mood =
                  chat.sentiment > 10
                    ? HAPPY_EMOJI
                    : chat.sentiment < -1
                    ? SAD_EMOJI
                    : NEUTRAL_EMOJI;

                return (
                  <React.Fragment key={index}>
                    {isFirst ||
                      !inSequence ||
                      (hasDelay && (
                        <div
                          className={`d-block w-100 font-weight-bold text-dark mt-4 pb-1 px-1 text-${position}`}
                          style={{ fontSize: "0.9rem" }}
                        >
                          <span
                            className="d-block"
                            style={{ fontSize: "1.6rem" }}
                          >
                            {String.fromCodePoint(...mood)}
                          </span>
                        </div>
                      ))}
                    <ChatMessage position={position} chat={chat} />
                  </React.Fragment>
                );
              })}
            </div>
            <textarea
              className="form-control border-0 w-100"
              onKeyUp={handleKeyUp}
              placeholder="Type a message..."
              style={{ height: 50, resize: "none" }}
            ></textarea>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Chat;
