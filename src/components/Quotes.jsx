import React from "react";
import axios from "axios";

const Quotes = () => {
  const [quote, setQuote] = React.useState([]);
  const [author, setAuthor] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        setQuote(res.data.content);
        setAuthor(res.data.author);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFetch = async () => {
    try {
      await axios.get("https://api.quotable.io/random").then((res) => {
        setQuote(res.data.content);
        setAuthor(res.data.author);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="container-quote">
        <h1>Quote of the Day</h1>
        <blockquote>
          <span>“</span>
          {quote}
          <span>”</span>
          <p className="author">
            - {author}
          </p>
          <button onClick={handleFetch}>New Quote</button>
        </blockquote>
      </div>
    </div>
  );
};

export default Quotes;
