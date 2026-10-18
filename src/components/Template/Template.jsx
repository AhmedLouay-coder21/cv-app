import "./Template.css"
import { format } from "date-fns"

function Template({ resume }) {
  const { fname, lname, desiredRole, email, phone, city, summary } =
    resume.personal
  const { role, company, startDate, endDate } = resume.experience
  const { degree, school } = resume.education
  const { skills, color } = resume.skillsAndStyle
  return (
    <div id="Template" style={{ "--accent": color }}>
      <div id="TemplateContent">
        <div id="fullName">
          <div id="firstName">
            <h1>{fname}</h1>
          </div>
          <div id="lastName">
            <h1>{lname}</h1>
          </div>
        </div>
        <div id="desiredRole">
          <h3>{desiredRole}</h3>
        </div>
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
            <h2>{degree}</h2>
            <p>{school}</p>
          </div>
          <div className="sub-section">
            <h4>SKILLS</h4>
            <div className="skills">
              {skills
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean)
                .map((skill, i) => (
                  <div className="skill" key={`${skill}-${i}`}>
                    {skill}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Template
