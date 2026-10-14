const personalInfoFields = [
  { id: "fname", label: "First name" },
  { id: "lname", label: "Last name" },
  { id: "role", label: "Role" },
  { id: "email", label: "Email", type: "email" },
  { id: "phone", label: "Phone", type: "tel" },
  { id: "city", label: "City" },
  { id: "summary", label: "Short Summary", isTextarea: true },
]

function PersonalInfo({ data, onChange }) {
  return (
    <div className="PersonalInfo">
      <h1>Let's start with the personal info</h1>
      <form>
        {personalInfoFields.map(({ id, label, type = "text", isTextarea }) => (
          <div className="form-field" key={id}>
            <label htmlFor={id}>{label}:</label>
            <br />
            {isTextarea ? (
              <textarea
                id={id}
                name={id}
                rows="10"
                cols="50"
                placeholder="Type your short summary here"
                value={data[id]}
                onChange={(e) => onChange(id, e.target.value)}
              />
            ) : (
              <input
                type={type}
                id={id}
                name={id}
                value={data[id]}
                onChange={(e) => onChange(id, e.target.value)}
              />
            )}
          </div>
        ))}
      </form>
    </div>
  )
}

export default PersonalInfo
