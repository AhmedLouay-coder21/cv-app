const EducationFields = [
  { id: "degree", label: "Degree or Course" },
  { id: "school", label: "School" },
]
function EducationInfo({ data, onChange }) {
  return (
    <div className="Education">
      <h1>Your Education</h1>
      <form>
        {EducationFields.map(({ id, label, type = "text" }) => (
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
      </form>
    </div>
  )
}

export default EducationInfo
