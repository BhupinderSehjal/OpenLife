import HelpBot from "./components/HelpBot/HelpBot";
import { Routes, Route } from 'react-router-dom'
import BaseLayout from './layouts/BaseLayout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contribute from './pages/Contribute/Contribute'
import Showcase from './pages/Showcase/Showcase'

export default function App() {
  return (
    <>
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
          path="/showcase"
          element={
            <BaseLayout title="OpenLife UI Showcase" subtitle="Reusable components and patterns">
              <Showcase />
            </BaseLayout>
          }
        />
      </Routes>

      {/* Global Help Bot */}
      <HelpBot />
    </>
  )
}
