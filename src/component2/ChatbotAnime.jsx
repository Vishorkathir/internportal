import React, { useState, useEffect } from "react";
import { IoPerson } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import jsoncont from "./chatbot.json";

const Chatbotanime = () => {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Prepare Messages
  const messages = [];
  jsoncont.content.forEach((content) => {
    messages.push({ type: "user", text: content.word1 });
    messages.push({ type: "bot", text: content.word2 });
  });
  messages.push({ type: "send", text: jsoncont.send });

  // Typing Effect
  useEffect(() => {
    if (currentIndex >= messages.length) return;

    const message = messages[currentIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < message.text.length) {
        setCurrentText((prev) => prev + message.text[charIndex]);
        charIndex++;
      } else {
        clearInterval(typingInterval);

        setTimeout(() => {
          setVisibleMessages((prev) => [...prev, message]);
          setCurrentText("");
          setCurrentIndex((prev) => prev + 1);
        }, 100);
      }
    }, 10);

    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  return (
    <div className="lg:p-10 p-4 bg-gray-100 shadow-lg mt-10">
      <div className="lg:p-5  h-230 shadow-xl">

        {visibleMessages.map((message, index) => (
          <div key={index} className="">

            {/* USER */}
            {message.type === "user" && (
              <div className="flex gap-3 justify-start p-7">
                <div className="lg:p-4 p-2 rounded-xl text-lg shadow-md lg:mt-0 mt-7">
                  <IoPerson />
                </div>
                <h1 className="rounded-xl p-3 lg:text-xl text-sm text-gray-600 shadow-md">
                  {message.text}
                </h1>
              </div>
            )}

            {/* BOT */}
            {message.type === "bot" && (
              <div className="flex gap-3 justify-end p-7">
                <h1 className="rounded-xl p-3 lg:text-xl text-sm text-gray-600 shadow-md">
                  {message.text}
                </h1>
                <div className="lg:p-4 p-2 rounded-xl text-lg shadow-md lg:mt-0 mt-10">
                  <BsStars />
                </div>
              </div>
            )}

            {/* SEND BUTTON */}
            {message.type === "send" && (
              <div className="flex gap-3 p-7 py-10 mt-5">
                <h1 className="rounded-xl p-5 text-black lg:text-xl text-sm w-full shadow-md">
                  {message.text}
                </h1>
                <div className="lg:mt-0">
                  <div className="text-white bg-black lg:p-4 p-2 rounded-xl text-2xl shadow-md mt-5">
                    <RiSendPlaneFill />
                  </div>
                </div>
              </div>
            )}

          </div>
        ))}

        {/* Typing Animation */}
        {currentText && currentIndex < messages.length && (
          <div className="p-7 fade-in">

            {messages[currentIndex].type === "user" ? (
              <div className="flex gap-3 justify-start">
                <div className="lg:p-4 p-2 rounded-xl text-lg shadow-md">
                  <IoPerson />
                </div>
                <h1 className="rounded-xl p-3 lg:text-xl text-sm text-gray-600 shadow-md">
                  {currentText}
                </h1>
              </div>
            ) : (
              <div className="flex gap-3 justify-end">
                <h1 className="rounded-xl p-3 lg:text-xl text-sm text-gray-600 shadow-md">
                  {currentText}
                </h1>
                <div className="lg:p-4 p-2 rounded-xl text-lg shadow-md">
                  <BsStars />
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};

export default Chatbotanime;
