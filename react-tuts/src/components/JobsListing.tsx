import React from 'react';
import Jobs from '../jobs.json';
import JobListing from './JobListing';
import { useState, useEffect } from 'react';
import Spinner from './Spinner';

export const JobsListing: React.FC = ({ isHome = false }) => {
  // const recentJobs = isHome ? Jobs.slice(0,3) : Jobs
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`/api/jobs${isHome ? '?_limit=3' : ''}`)
        const data = await res.json()
        setJobs(data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? 'Browse Jobs' : 'Recent Jobs'}
          </h2>

          {loading ? <Spinner loading={loading}></Spinner> : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job: any) => {
                  return (
                    <JobListing key={job.id} job={job}></JobListing>
                  );
                })}
              </div>
            </>
          )}

        </div>
      </section>
    </>
  );
};
