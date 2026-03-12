import React from "react";
import Form from "../components/Form";
const Home = () => {
  return (
    <section className=" flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="">
          <div className="space-y-6">
            <h1 className="font-sans text-3xl font-bold uppercase">
              Loksewa Vaceny Finder
            </h1>
          </div>
          <div>
            <p className="text-gray-600 text-lg">
              Find the latest PSC Nepal vacancies based on your qualification,
              age, and preference.
            </p>
          </div>
        </div>
        {/* form */}
        <div className=" flex items-center">
          <div className="bg-white p-8  rounded-2xl shadow-xl w-full max-w-full">
            <div className="mb-6">
              <div>
                <h1 className="font-sans text-4xl font-bold uppercase">
                  Find a vacency
                </h1>
              </div>
              <div>
                <span className="text-gray-600 text-lg">
                  Fill in your details to find matching vacancies
                </span>
              </div>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
