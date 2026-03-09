import React from "react";
import Form from "../components/Form";
const Home = () => {
  return (
    <section className=" flex justify-center gap-6 min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="space-y-6">
            <h1 className="font-sans text-4xl bold uppercase">Job Finder</h1>
          </div>
          <div>
            <p className="text-gray-600 text-lg">
              we scan 100s of website to find <br /> job based on your
              pereference
            </p>
          </div>
        </div>
        <div className="bg-white p-8  rounded-2xl shadow-xl ">
          <div>
            <div className="mb-6">
              <div>
                <h1 className="font-sans text-4xl bold uppercase">
                  Find your dream job
                </h1>
              </div>
              <div>
                <span className="text-gray-600 text-lg">
                  fill your information to find job
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
