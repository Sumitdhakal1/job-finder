import React from "react";
import FormField from "./ui/FormField";
const Gender = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const Education = [
  { value: "highSchool", label: "High School" },
  { value: "higherSecondary", label: "Higher Secondary" },
  { value: "diploma", label: "Diploma" },
  { value: "bachelor", label: "Bachelor Degree" },
  { value: "master", label: "Master Degree" },
  { value: "phd", label: "PhD" },
];

const Experience = [
  { value: "fresher", label: "Fresher" },
  { value: "1-2", label: "1-2 years" },
  { value: "2-3", label: "2-3 years" },
  { value: "5+", label: "5+ years" },
];

const JobType = [
  {
    value: "fulltime",
    label: "Full-time",
  },
  { value: "internship", label: "Internship" },
  { value: "contract", label: "Contract" },
];

const WorkMode = [
  { vale: "remote", label: "Remote" },
  { vale: "hybrid", label: "Hybrid" },
  { vale: "onSite", label: "On-Site" },
];

const Form = () => {
  return (
    <form
      action=""
      className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-full mx-auto"
    >
      <div className="flex flex-col gap-4">
        <div className=" flex flex-col gap-4">
          <FormField
            label="Age"
            name="age"
            type="number"
            placeholder="e.g. 25"
          />
          <FormField
            label="Skills"
            name="skills"
            type="text"
            placeholder="Enter your skills"
          />
          <FormField
            label="Highest Education"
            name="education"
            options={Education}
            placeholder="Select Education"
          />
          <FormField
            label="field of study"
            name="study"
            type="text"
            placeholder="e.g. Computer Science"
          />
        </div>
      </div>
      {/* second */}
      <div className="flex flex-col gap-4">
        <div className=" flex flex-col gap-4">
          <FormField
            label="Gender"
            name="gender"
            options={Gender}
            placeholder="Select Gender"
          />
          <FormField
            label="Experience Level"
            name="experience"
            options={Experience}
            placeholder="Select Experience"
          />
          <FormField
            label="Job Type"
            name="job"
            options={JobType}
            placeholder="Select job type"
          />

          <FormField
            label="Work Mode"
            name="workMode"
            options={WorkMode}
            placeholder=" Select Work Mode"
          />
        </div>
      </div>
      <div className=" md:col-span-2 flex justify-center border bg-blue-600 text-white p-4 rounded-2xl">
        <button type="submit" className="bold text-xl">
          Find Jobs
        </button>
      </div>
    </form>
  );
};

export default Form;
