import React, { useState } from "react";
import SummaryAdditionalQuestions from "./SummaryAdditionalQuestions";

const APIIntegration = ({ questions }) => {
  let answers = [];
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("data submitted");
    setSubmittedData(answers);
    console.log("answers: ", answers);
  };

  return (
    <div>
      {!submittedData ? (
        <>
          <h3>Additional Questions:</h3>
          <form onSubmit={onSubmit}>
            {questions.map((question, index) => (
              <div key={index} className="question-box">
                <label className="question qa-label question-box"><span className="qa-label">Q-{index + 1}:</span>&nbsp;{question.question}</label>
                <div className="textarea-x">
                <div className="qa-label-2">A-{index + 1}:</div>&nbsp;
                <textarea
                  value={answers[index]}
                  onChange={(e) => {
                    answers[index] = e.target.value;
                  }}
                  type="text"
                  name={question.topic}
                />
                </div>
              </div>
            ))}
            <button type="submit">Submit</button>
          </form>
        </>
      ):(<SummaryAdditionalQuestions questions={questions} answers={submittedData}/>)}
    </div>
  );
};

export default APIIntegration;
