import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const JS_URL =
  "https://raw.githubusercontent.com/abhishekraj007/md2json/main/js-v2.json";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(JS_URL);
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="App">
      <h1>Question</h1>
      {(data ?? []).map((question) => {
        return (
          <div key={question.title}>
            <h3>{question.title}</h3>

            {question.content.map((ele, index) => {
              return (
                <div key={index} dangerouslySetInnerHTML={{ __html: ele }} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
