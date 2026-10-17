import Nav from "./components/Nav/Nav"
import Form from "./components/Form/Form"
import Template from "./components/Template/Template"
import { useState } from "react"
import "./styles/App.css"

const resumeInfo = {
  personal: {
    fname: "John",
    lname: "Doe",
    desiredRole: "Software Engineer",
    email: "example@gmail.com",
    phone: "1-800-444-4444",
    city: "Cairo",
    summary:
      "Computer science student with hands-on experience in front-end and .NET development.",
  },
  experience: {
    role: "Software Developer Intern",
    company: "Google",
    startDate: "2026-02-07",
    endDate: "2026-05-07",
  },
  education: {
    degree: "B.Sc. Computer Science",
    school: "University Name",
  },
}

function App() {
  const [resume, setResume] = useState(resumeInfo)

  function handlePersonalChange(field, value) {
    setResume((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }))
  }

  function handleExperienceChange(field, value) {
    setResume((prev) => {
      const next = { ...prev.experience, [field]: value }
      if (next.startDate && next.endDate && next.endDate < next.startDate) {
        return prev
      }
      return { ...prev, experience: next }
    })
  }
  function handleEducationChange(field, value) {
    setResume((prev) => ({
      ...prev,
      education: { ...prev.education, [field]: value },
    }))
  }

  return (
    <div id="App">
      <Nav />
      <div id="MainContent">
        <Form
          resume={resume}
          onPersonalChange={handlePersonalChange}
          onExperienceChange={handleExperienceChange}
          onEducationChange={handleEducationChange}
        />
        <Template resume={resume} />
      </div>
    </div>
  )
}

export default App
