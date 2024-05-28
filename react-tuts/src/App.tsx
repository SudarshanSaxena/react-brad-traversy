import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import { JobsListing } from './components/JobsListing'
import ViewAllJobs from './components/ViewAllJobs'

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1>My APp</h1>}></Route>)
)

const App = () => {
  return (
    <>
      <Navbar></Navbar>

      {/* <!-- Hero --> */}
      <Hero></Hero>

      {/* <!-- Developers and Employers --> */}
      <HomeCards></HomeCards>



      {/* <!-- Browse Jobs --> */}
      <JobsListing></JobsListing>

      <ViewAllJobs />

    </>
  )
}

export default App