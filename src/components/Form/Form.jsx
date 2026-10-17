import { useState } from "react"
import Button from "../Button/Button"
import ProgressBar from "./ProgressBar/ProgressBar"
import PersonalInfo from "./Fields/PersonalInfo"
import "./Form.css"
import ExperienceInfo from "./Fields/ExperienceInfo"
import EducationInfo from "./Fields/EducationInfo"

function Form({
  resume,
  onPersonalChange,
  onExperienceChange,
  onEducationChange,
}) {
  const [step, setSteps] = useState(1)
  const totalNumberOfSteps = 4
  function handleIncreaseSteps() {
    if (step + 1 <= 4) {
      setSteps(step + 1)
    }
  }
  function handleDecreaseSteps() {
    if (step - 1 >= 1) {
      setSteps(step - 1)
    }
  }
  return (
    <div className="Form">
      <Steps step={step} totalNumberOfSteps={totalNumberOfSteps} />
      {step === 1 && (
        <PersonalInfo data={resume.personal} onChange={onPersonalChange} />
      )}
      {step === 2 && (
        <ExperienceInfo
          data={resume.experience}
          onChange={onExperienceChange}
        />
      )}
      {step === 3 && (
        <EducationInfo data={resume.education} onChange={onEducationChange} />
      )}
      <div id="FormButtons">
        <Button name={"Back"} onClick={handleDecreaseSteps} />
        <Button name={"Continue"} onClick={handleIncreaseSteps} />
      </div>
    </div>
  )
}
function Steps({ step, totalNumberOfSteps }) {
  return (
    <>
      <p>
        Step {step} of {totalNumberOfSteps}
      </p>
      <ProgressBar step={step} total={totalNumberOfSteps} />
    </>
  )
}
export default Form
