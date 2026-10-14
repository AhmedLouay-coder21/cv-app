import { useState } from "react"
import Button from "../Button/Button"
import ProgressBar from "./ProgressBar/ProgressBar"
import PersonalInfo from "./Fields/PersonalInfo"
import "./Form.css"

function Form({ resume, onPersonalChange }) {
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
      <PersonalInfo data={resume.personal} onChange={onPersonalChange} />
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
        {" "}
        Steps {step} of {totalNumberOfSteps}{" "}
      </p>
      <ProgressBar step={step} total={totalNumberOfSteps} />
    </>
  )
}
export default Form
