import { useState } from "react";
import FormField from "./ui/FormField";
import {
  Education,
  Quota,
  ServiceType,
  PostLevel,
  AgeGroup,
} from "../constant/formdata";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    education: "",
    ageGroup: "",
    service: "",
    level: "",
    quota: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/results", { state: formData });
  };

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
      onSubmit={handleSubmit}
    >
      <FormField
        label="Education"
        name="education"
        options={Education}
        placeholder="All Education Levels"
        onChange={handleChange}
      />
      <FormField
        label="Age Group"
        name="ageGroup"
        options={AgeGroup}
        placeholder="All Ages"
        onChange={handleChange}
      />
      <FormField
        label="Service Type"
        name="service"
        options={ServiceType}
        placeholder="All Services"
        onChange={handleChange}
      />
      <FormField
        label="Post Level"
        name="level"
        options={PostLevel}
        placeholder="All Levels"
        onChange={handleChange}
      />

      <div className="md:col-span-2">
        <FormField
          label="Quota / Category"
          name="quota"
          options={Quota}
          placeholder="All Quota"
          onChange={handleChange}
        />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-blue-700 transition"
        >
          Find Loksewa Vacancies →
        </button>
      </div>
    </form>
  );
};

export default Form;
