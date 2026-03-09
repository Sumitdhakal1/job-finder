import React from "react";

const Form = () => {
  return (
    <form
      action=""
      className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
    >
      <div className="flex flex-col gap-4">
        <div>
          <label className="uppercase">age</label>
          <input name="age" type="number" placeholder="e.g. 25" />
        </div>
        <div>
          <label className="uppercase">Gender</label>
          <select name="" id="">
            <option value="" disabled selected>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="">Female</option>
            <option value="">Other</option>
          </select>
        </div>
        <div>
          <label className="uppercase">Highest Education</label>
          <select name="" id="">
            <option value="" disabled selected>
              Select Education
            </option>
            <option value="highSchool">High School</option>
            <option value="higherSecondary">Higher Secondary</option>
            <option value="diploma">Diploma</option>
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="phd">PhD</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="capitalize">field of study</label>
          <input type="text" placeholder="e.g. Computer Science" />
        </div>
      </div>
      {/* second */}
      <div className="flex flex-col gap-4">
        <div>
          <label className="capitalize">Skills</label>
          <input type="text" placeholder="Enter your skills" />
        </div>
        <div>
          <label htmlFor="">Experience Level</label>
          <select name="" id="">
            <option value="" disabled selected>
              Select Experience
            </option>
            <option value="fresher">Fresher</option>
            <option value="1-2">1-2 years</option>
            <option value="2-3">2-3 years</option>
            <option value="5+">5+ years</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Job Type</label>
          <select name="" id="">
            <option value="" disabled selected>
              Select job type
            </option>
            <option value="fulltime">Full-time</option>
            <option value="parttime">Part-time</option>
            <option value="internship">Internship</option>
            <option value="contract">Contract</option>
          </select>
        </div>
        <div>
          <label className="uppercase">Work Mode</label>
          <select>
            <option value="" disabled selected>
              Select Work Mode
            </option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
            <option value="onsite">On-site</option>
          </select>
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
