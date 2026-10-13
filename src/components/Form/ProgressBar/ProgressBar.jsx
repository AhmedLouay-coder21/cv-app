import "./ProgressBar.css"

function ProgressBar({ step, total = 4 }) {
  return (
    <div className="progress">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={i < step ? "progress-bar done" : "progress-bar"}
        />
      ))}
    </div>
  )
}
export default ProgressBar
