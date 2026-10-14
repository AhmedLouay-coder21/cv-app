import "./Template.css"

function Template({ resume }) {
  const { fname, lname, role, email, phone, city, summary } = resume.personal
  return (
    <div id="Template">
      <div id="TemplateContent">
        <div id="fullName">
          <h1>{fname}</h1>
          <h1>{lname}</h1>
        </div>
        <h3>{role}</h3>
        <div id="additionalContent">
          <p>{email}</p>
          <p>{phone}</p>
          <p>{city}</p>
        </div>
        <hr />
        <h4>PROFILE</h4>
        <p>{summary}</p>
      </div>
    </div>
  )
}
export default Template
