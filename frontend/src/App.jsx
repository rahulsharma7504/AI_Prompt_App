import React, { useState } from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";
import axios from "axios";
import styles from "./App.module.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("Output will appear here");

  const handleRun = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/ask-ai", {
        prompt: inputText,
      });
      
      setResult(res.data.answer);
    } catch (error) {
      console.error(error);
      setResult("Error fetching response");
    }
  };

  const handleSave = async () => {
    try {
      await axios.post("http://localhost:5000/api/save", {
        prompt: inputText,
        response: result,
      });

      alert("Saved to database!");
    } catch (error) {
      console.error(error);
      alert("Error saving data");
    }
  };

  const nodes = [
    {
      id: "1",
      position: { x: 100, y: 100 },
      data: {
        label: (
          <div className={styles.nodeBox}>
            <p>Input</p>
            <input
              className={styles.input}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your prompt..."
            />
          </div>
        ),
      },
    },
    {
      id: "2",
      position: { x: 400, y: 100 },
      data: {
        label: (
          <div className={styles.nodeBox}>
            <p>Result</p>
            <div className={styles.result}>{result}</div>
          </div>
        ),
      },
    },
  ];

  const edges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      animated: true,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>AI Prompt App</div>

      <div className={styles.buttonGroup}>
        <button
          onClick={handleRun}
          className={`${styles.button} ${styles.runBtn}`}
        >
          Run Flow
        </button>

        <button
          onClick={handleSave}
          className={`${styles.button} ${styles.saveBtn}`}
        >
          Save
        </button>
      </div>

      <div className={styles.flowWrapper}>
        <ReactFlow nodes={nodes} edges={edges}>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}

export default App;