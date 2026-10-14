import Nav from "./components/Nav/Nav"
import Form from "./components/Form/Form"
import Template from "./components/Template/Template"
import { useState } from "react"

const resumeInfo = {
  personal: {
    fname: "John",
    lname: "Doe",
    role: "Software Engineer",
    email: "example@gmail.com",
    phone: "01122812165",
    city: "Cairo",
    summary: "Place holder short summary",
  },
  jobs: [],
  education: [],
}

function App() {
  const [resume, setResume] = useState(resumeInfo)

  function handlePersonalChange(field, value) {
    setResume((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }))
  }
  return (
    <div>
      <Nav />
      <div id="MainContent">
        <Form resume={resume} onPersonalChange={handlePersonalChange} />
        <Template resume={resume} />
      </div>
    </div>
  )
}

export default App
