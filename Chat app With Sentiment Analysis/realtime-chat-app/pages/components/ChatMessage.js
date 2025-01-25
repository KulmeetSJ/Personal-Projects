import React from "react";

const ChatMessage = ({ position = "left", chat }) => {
  const isRight = position.toLowerCase() === "right";
  const align = isRight
    ? "justify-content-end text-right"
    : "justify-content-start text-left";

  const backgroundColor = isRight ? "bg-primary" : "bg-gray-200";

  const textColor = isRight ? "text-white" : "text-black";

  const messageBoxStyles = {
    maxWidth: "70%",
    flexGrow: 0,
  };

  const messageStyles = {
    fontWeight: 500,
    lineHeight: 1.4,
    whiteSpace: "pre-wrap",
  };

  return (
    <div className={`w-100 my-1 d-flex ${align}`}>
      <div
        className={`d-flex flex-column ${backgroundColor} p-2 rounded `}
        style={messageBoxStyles}
      >
        <span className={`small ${textColor}`}>{chat.user}</span>
        <span className={`${textColor}`} style={messageStyles}>
          {chat.message}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;
