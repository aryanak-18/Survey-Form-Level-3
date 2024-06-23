import React from 'react';
import { Controller } from 'react-hook-form';

const ConditionalSections = ({ surveyTopic, control, errors }) => {
  return (
    <>
      {surveyTopic === 'Technology' && (
        <div>
          <label className='labels-survey'>Favorite Programming Language</label>
          <Controller
            name="favoriteProgrammingLanguage"
            control={control}
            render={({ field }) => (
              <select className='survey-options' {...field}>
                <option value="">Select a language</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="C#">C#</option>
              </select>
            )}
          />
          <p>{errors.favoriteProgrammingLanguage?.message}</p>

          <label className='labels-survey'>Years of Experience</label>
          <Controller
            name="yearsOfExperience"
            control={control}
            render={({ field }) => <input id="survey-options-1" type="number" {...field} />}
          />
          <p>{errors.yearsOfExperience?.message}</p>
        </div>
      )}

      {surveyTopic === 'Health' && (
        <div>
          <label className='labels-survey'>Exercise Frequency</label>
          <Controller
            name="exerciseFrequency"
            control={control}
            render={({ field }) => (
              <select className='survey-options' {...field}>
                <option value="">Select frequency</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Rarely">Rarely</option>
              </select>
            )}
          />
          <p>{errors.exerciseFrequency?.message}</p>

          <label className='labels-survey'>Diet Preference</label>
          <Controller
            name="dietPreference"
            control={control}
            render={({ field }) => (
              <select className='survey-options' {...field}>
                <option value="">Select preference</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
              </select>
            )}
          />
          <p>{errors.dietPreference?.message}</p>
        </div>
      )}

      {surveyTopic === 'Education' && (
        <div>
          <label className='labels-survey'>Highest Qualification</label>
          <Controller
            name="highestQualification"
            control={control}
            render={({ field }) => (
              <select className='survey-options' {...field}>
                <option value="">Select qualification</option>
                <option value="High School">High School</option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
                <option value="PhD">PhD</option>
              </select>
            )}
          />
          <p>{errors.highestQualification?.message}</p>

          <label className='labels-survey'>Field of Study</label>
          <Controller
            name="fieldOfStudy"
            control={control}
            render={({ field }) => <input id="survey-options-1" type="text" {...field} />}
          />
          <p>{errors.fieldOfStudy?.message}</p>
        </div>
      )}
    </>
  );
};

export default ConditionalSections;
