import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchjobs = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/jobs");
        const result = await res.json();
        let filtered = result.jobs;
        setJobs(filtered);
      } catch (error) {
        setError("Failed to fetch jobs. Make sure backend is running.", error);
      } finally {
        setLoading(false);
      }
    };
    fetchjobs();
  }, []);
  return (
    <section>
      <div>
        <button> ← Back to Search</button>
        <div>
          <h2>loksewa vaceny found for you</h2>
          <span>based on the notice from PSC website</span>
        </div>
        <div>
          {jobs.map((job) => (
            <span key={job.id}>{job.title}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Result;
