const personalInfoFields = [
  { id: "fname", label: "First name" },
  { id: "lname", label: "Last name" },
  { id: "email", label: "Email", type: "email" },
  { id: "phone", label: "Phone", type: "tel" },
  { id: "city", label: "City" },
  { id: "birthdate", label: "Date of birth", type: "date" },
]

function PersonalInfo() {
  return (
    <div className="PersonalInfo">
      <h1>Let's start with the personal info</h1>
      <form>
        {personalInfoFields.map(({ id, label, type = "text" }) => (
          <div className="form-field" key={id}>
            <label htmlFor={id}>{label}:</label>
            <br />
            <input type={type} id={id} name={id} />
          </div>
        ))}
      </form>
    </div>
  )
}

export default PersonalInfo
