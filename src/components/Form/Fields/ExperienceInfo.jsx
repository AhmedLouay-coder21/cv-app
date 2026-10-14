const experienceInfoFields = [
  { id: "role", label: "Role" },
  { id: "company", label: "Company" },
]

function ExperienceInfo({ data, onChange }) {
  return (
    <div className="PersonalInfo">
      <h1>Tell us about your experience</h1>
      <form>
        {experienceInfoFields.map(({ id, label, type = "text" }) => (
          <div className="form-field" key={id}>
            <label htmlFor={id}>{label}:</label>
            <br />
            <input
              type={type}
              id={id}
              name={id}
              value={data[id]}
              onChange={(e) => onChange(id, e.target.value)}
            />
          </div>
        ))}

        <div className="form-field">
          <label htmlFor="startDate">From:</label>
          <br />
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={data.startDate}
            max={data.endDate || undefined}
            onChange={(e) => onChange("startDate", e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="endDate">To:</label>
          <br />
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={data.endDate}
            min={data.startDate || undefined}
            onChange={(e) => onChange("endDate", e.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

export default ExperienceInfo
