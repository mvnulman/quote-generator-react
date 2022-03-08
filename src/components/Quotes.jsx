import React from "react";

const Quotes = () => {
  return (
    <div className="container">
      <div className="container-quote">
        <h1>Quote of the Day</h1>
        <blockquote>
          <span>“</span>Lorem, ipsum dolor sit amet consectetur adipisicing
          Omnis culpa provident consectetur.<span>”</span>
          <p className="author"> - Author</p>
          {/* <hr /> */}
          <button>New Quote</button>
        </blockquote>
      </div>
    </div>
  );
};

export default Quotes;
