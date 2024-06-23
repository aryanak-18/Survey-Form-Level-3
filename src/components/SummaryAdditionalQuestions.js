import React from "react";

const SummaryAdditionalQuestions = ({ questions, answers }) => {
  console.log("Answers: ", answers);
  return (
    <div className="summary-2">
      <h2>Summary - Additional Questions</h2>
      <div>
        {questions.map((question, index) => (
          <p key={index} className="question">
              <span className="qa-label">Q-{index + 1}:</span>&nbsp;
              <strong>{question.question}</strong>
            {answers[index] ? (<p className="answer">
            <span className="qa-label">A-{index + 1}:</span>&nbsp; {answers[index]}.
            </p>):(<p className="answer">
            <span className="qa-label">A-{index + 1}:</span>&nbsp; Unanswered.
            </p>)}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SummaryAdditionalQuestions;
