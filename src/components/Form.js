import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import ConditionalSections from "./ConditionalSections";
import APIIntegration from "./APIIntegration";
import Summary from "./Summary";

const surveySchema = yup.object().shape({
  fullName: yup.string()
  .required("Full Name is required")
  ,
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required")
    ,
  surveyTopic: yup.string()
  .required("Please select a survey topic")
  ,
  feedback: yup
    .string()
    .min(50, "Feedback must be at least 50 characters")
    .required("Feedback is required")
    ,
  //additional validation
  yearsOfExperience: yup
    .number()
    .positive("Years of experience should be positive"),
  favoriteProgrammingLanguage: yup.string(),
  exerciseFrequency: yup.string(),
  dietPreference: yup.string(),
  highestQualification: yup.string(),
  fieldOfStudy: yup.string(),
});

const Form = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(surveySchema),
  });

  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [submittedData, setSubmittedData] = useState(null);

  const surveyTopic = watch("surveyTopic");

  const fetchAdditionalQuestions = async (topic) => {
    try {
      console.log("form submitted");
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/questions/${topic}`,
        // `http://localhost:3000/questions/${topic}`,
        {
          method: "GET",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      setAdditionalQuestions(res.data.data);
    } catch (error) {
      console.error("Error fetching additional questions:", error);
    }
  };

  const onSubmit = (data) => {
    setSubmittedData(data);
    fetchAdditionalQuestions(data.surveyTopic);
  };

  return (
    <div>
      {!submittedData ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="labels">Full Name</label>
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => <input type="text" {...field} />}
            />
            <p>{errors.fullName?.message}</p>
          </div>

          <div>
            <label className="labels">Email</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => <input type="email" {...field} />}
            />
            <p>{errors.email?.message}</p>
          </div>

          <div>
            <label className="labels">Survey Topic</label>
            <Controller
              name="surveyTopic"
              control={control}
              render={({ field }) => (
                <select {...field}>
                  <option value="">Select a topic</option>
                  <option value="Technology">Technology</option>
                  <option value="Health">Health</option>
                  <option value="Education">Education</option>
                </select>
              )}
            />
            <p>{errors.surveyTopic?.message}</p>
          </div>

          <ConditionalSections
            surveyTopic={surveyTopic}
            control={control}
            errors={errors}
          />

          <div>
            <label className="labels">Feedback</label>
            <Controller
              name="feedback"
              control={control}
              render={({ field }) => <textarea {...field} />}
            />
            <p>{errors.feedback?.message}</p>
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <Summary data={submittedData} />
          {additionalQuestions && (
            <APIIntegration questions={additionalQuestions} />
          )}
        </>
      )}{" "}
    </div>
  );
};

export default Form;
