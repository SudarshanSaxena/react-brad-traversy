import React from 'react'
import { JobsListing } from '../components/JobsListing'

const JobsPage = () => {
  return (
    <section className='bg-blue-100 px-4 py-6'>
      <JobsListing isHome={false}></JobsListing>
    </section>
  )
}

export default JobsPage