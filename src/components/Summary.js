import React from "react";

const Summary = ({ data }) => {
  return (
    <div className="summary">
      <h2>Form Summary</h2>
      <div className="data-box">
      <p>
        <strong>Full Name:</strong> {data.fullName}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Survey Topic:</strong> {data.surveyTopic}
      </p>
      {data.surveyTopic === "Technology" && (
        <div>
          {data.favoriteProgrammingLanguage && <p>
            <strong>Favorite Programming Language:</strong> {data.favoriteProgrammingLanguage}{" "}
          </p>}
          {data.yearsOfExperience && <p>
            <strong>Years of Experience:</strong> {data.yearsOfExperience}{" "}
            years
          </p>}
        </div>
      )}
      {data.surveyTopic === "Health" && (
        <div>
        {data.exerciseFrequency && <p>
          <strong>Exercise Frequency:</strong> {data.exerciseFrequency}{" "}
          years
        </p>}
        {data.dietPreference && <p>
          <strong>Diet Preference:</strong> {data.dietPreference}{" "}
          years
        </p>}
      </div>
      )}
      {data.surveyTopic === "Education" && (
        <div>
        {data.highestQualification &&<p>
          <strong>Highest Qualification:</strong> {data.highestQualification}{" "}
          years
        </p>}
        {data.fieldOfStudy &&<p>
          <strong>Field of Study:</strong> {data.fieldOfStudy}{" "}
          years
        </p>}
      </div>
      )}
      <p>
        <strong>Feedback:</strong> {data.feedback}
      </p>
      </div>
    </div>
  );
};

export default Summary;
