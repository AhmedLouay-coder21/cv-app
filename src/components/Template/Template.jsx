import "./Template.css"
import { format } from "date-fns"

function Template({ resume }) {
  const { fname, lname, desiredRole, email, phone, city, summary } =
    resume.personal
  const { role, company, startDate, endDate } = resume.experience
  return (
    <div id="Template">
      <div id="TemplateContent">
        <div id="fullName">
          <h1>{fname}</h1>
          <h1>{lname}</h1>
        </div>
        <h3>{desiredRole}</h3>
        <div id="additionalContent">
          <p>{email}</p>
          <p>{phone}</p>
          <p>{city}</p>
        </div>
        <hr />
        <div className="sections">
          <div className="sub-section">
            <h4>PROFILE</h4>
            <p>{summary}</p>
          </div>
          <div className="sub-section">
            <h4>EXPERIENCE</h4>
            <h2>{role}</h2>
            <h3>{company}</h3>
            <p>
              {format(startDate, "MMMM yyyy")} - {format(endDate, "MMMM yyyy")}
            </p>
          </div>
          <div className="sub-section">
            <h4>EDUCATION</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Template
