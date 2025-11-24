import React, { useEffect, useState } from "react";
import quotes from "../quotes.js";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [avatarImage, setAvatarImage] = useState("");
  const [loading, setLoading] = useState(true);

  const getRandomQuote = () => {
    setLoading(true);
    setTimeout(() => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote.content);
      setAuthor(randomQuote.author);
      setAvatarImage(randomQuote.avatar);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    setLoading(true);
    getRandomQuote();
  }, []);

  const onChangeFetch = () => {
    setLoading(true);
    getRandomQuote();
  };

  return (
    <div className="container">
      <div className="container-quote">
        <h1>Quote of the Day</h1>
        {loading ? (
          <div className="loader"></div>
        ) : (
          <blockquote>
            <span>"</span>
            {quote}
            <span>"</span>
            <p className="author">- {author}</p>
            <img
              src={avatarImage}
              alt={`${author} avatar`}
              onError={(e) => {
                e.target.src = "https://robohash.org/mail@ashallendesign.co.uk";
              }}
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                display: "block",
                margin: "10px auto",
                border: "2px solid #ccc",
              }}
            />
            <button onClick={onChangeFetch}>New Quote</button>
          </blockquote>
        )}
      </div>
    </div>
  );
};

export default Quotes;
