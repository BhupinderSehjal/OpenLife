import { Routes, Route } from 'react-router-dom'
import BaseLayout from './layouts/BaseLayout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import ApiLab from './pages/ApiLab/ApiLab'
import ContributorHub from './pages/ContributorHub/ContributorHub'
import Contribute from './pages/Contribute/Contribute'
import Showcase from './pages/Showcase/Showcase'
import Insights from './pages/Insights/Insights'
import Planner from './pages/Planner/Planner'
import Settings from './pages/Settings/Settings'
import TimeUsageTracker from './components/TimeUsageTracker/TimeUsageTracker'

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <BaseLayout title="OpenLife" subtitle="Daily Workflow & Time Management">
            <Home />
          </BaseLayout>
        }
      />
      <Route
        path="/about"
        element={
          <BaseLayout title="About OpenLife">
            <About />
          </BaseLayout>
        }
      />
      <Route
        path="/contribute"
        element={
          <BaseLayout title="Contribute to OpenLife">
            <Contribute />
          </BaseLayout>
        }
      />
      <Route
        path="/planner"
        element={
          <BaseLayout title="Daily Planner" subtitle="Plan focus blocks, routines, and recovery time">
            <Planner />
          </BaseLayout>
        }
      />
      <Route
        path="/insights"
        element={
          <BaseLayout title="Productivity Insights" subtitle="Review focus trends and daily balance">
            <Insights />
          </BaseLayout>
        }
      />
      <Route
        path="/api-lab"
        element={
          <BaseLayout title="API Lab" subtitle="Explore backend endpoints and expected responses">
            <ApiLab />
          </BaseLayout>
        }
      />
      <Route
        path="/contributor-hub"
        element={
          <BaseLayout title="Contributor Hub" subtitle="Find scoped work and ship clean pull requests">
            <ContributorHub />
          </BaseLayout>
        }
      />
      <Route
        path="/settings"
        element={
          <BaseLayout title="Settings" subtitle="Tune OpenLife defaults for planning and focus">
            <Settings />
          </BaseLayout>
        }
      />
      <Route
        path="/showcase"
        element={
          <BaseLayout title="OpenLife UI Showcase" subtitle="Reusable components and patterns">
            <Showcase />
          </BaseLayout>
        }
      />
      <Route
        path="/daily-TimeUsageTracker"
        element={
          <BaseLayout title="OpenLife UI Showcase" subtitle="Reusable components and patterns">
            <TimeUsageTracker />
          </BaseLayout>
        }
      />
    </Routes>
  )
}
