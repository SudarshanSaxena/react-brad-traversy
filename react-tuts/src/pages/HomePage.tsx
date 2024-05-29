import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import { JobsListing } from '../components/JobsListing'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
      {/* <Navbar></Navbar> */}

      {/* <!-- Hero --> */}
      <Hero></Hero>

      {/* <!-- Developers and Employers --> */}
      <HomeCards></HomeCards>



      {/* <!-- Browse Jobs --> */}
      <JobsListing isHome={true}></JobsListing>

      <ViewAllJobs />

    </>
  )
}

export default HomePage