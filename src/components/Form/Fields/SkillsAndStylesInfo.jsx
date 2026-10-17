import "./SkillsAndStylesInfo.css"

const SkillsField = [
  { id: "skills", label: "Skills (separate with commas)" },
  { id: "colors", label: "Accent Color" },
]
const colors = [
  { name: "Teal", value: "#0f6e66" },
  { name: "Blue", value: "#2f4fd8" },
  { name: "Rust", value: "#8a3a1c" },
  { name: "Midnight", value: "#151e2b" },
  { name: "Purple", value: "#6d3fc0" },
  { name: "Rose", value: "#c2415d" },
]
function SkillsAndStylesInfo({ data, onChange }) {
  return (
    <div className="Skills">
      <h1>Your Education</h1>
      <form>
        <div className="form-field" key={SkillsField[0].id}>
          <label htmlFor={SkillsField[0].id}>{SkillsField[0].label}:</label>
          <br />
          <input
            type="text"
            id={SkillsField[0].id}
            name={SkillsField[0].id}
            value={data[SkillsField[0].id]}
            onChange={(e) => onChange(SkillsField[0].id, e.target.value)}
          />
        </div>
        <fieldset className="color-field">
          <legend>Accent Color</legend>
          <div className="colors">
            {colors.map(({ name, value }) => (
              <button
                key={value}
                type="button"
                className={`color${data.color === value ? " selected" : ""}`}
                style={{ backgroundColor: value }}
                title={name}
                aria-label={name}
                aria-pressed={data.color === value}
                onClick={() => onChange("color", value)}
              />
            ))}
          </div>
        </fieldset>
      </form>
    </div>
  )
}
export default SkillsAndStylesInfo
