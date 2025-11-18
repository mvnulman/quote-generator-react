import React, { useState } from "react";
import axios from "axios";

const Quotes = () => {
  const [quote, setQuote] = useState([]);
  const [author, setAuthor] = useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        setQuote(res.data.content);
        setAuthor(res.data.author);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const onChangeFetch = async () => {
    setLoading(true);
    try {
      await axios.get("https://api.quotable.io/random").then((res) => {
        setQuote(res.data.content);
        setAuthor(res.data.author);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="container-quote">
        <h1>Quote of the Day</h1>
        {loading ? (
          <div className="loader"></div>
        ) : (
          <blockquote>
            <span>“</span>
            {quote}
            <span>”</span>
            <p className="author">- {author}</p>
            <button onClick={onChangeFetch}>New Quote</button>
          </blockquote>
        )}
      </div>
    </div>
  );
};

export default Quotes;
