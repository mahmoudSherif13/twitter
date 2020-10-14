import axios from "axios";
import React, { useState } from "react";

function addTweet(tweet) {
  return axios({
    method: "post",
    url: "http://localhost:3000/tweets/",
    headers: { "Content-Type": "application/json" },
    data: {
      ...tweet,
    },
  });
}

export default function TweetForm() {
  const [text, setText] = useState("");
  const [valid, setValid] = useState(true);
  function textChangeHandle(e) {
    if (e.target.value.length < 280) {
      setText(e.target.value);
      setValid(true);
    } else {
      setValid(false);
    }
  }
  function submitHandle(e) {
    e.preventDefault();
    setText("");
  }
  return (
    <form onSubmit={submitHandle}>
      <input
        style={{
          color: valid ? undefined : "red",
        }}
        type="text"
        value={text}
        onChange={textChangeHandle}
      />
      <input type="submit" />
    </form>
  );
}
