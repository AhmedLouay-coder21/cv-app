import { pdf } from "@react-pdf/renderer"
import { MyCV } from "./PdfBuilder"

export async function downloadPdf(resume) {
  const blob = await pdf(<MyCV resume={resume} />).toBlob()
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `${resume.personal.fname}_${resume.personal.lname}_Resume.pdf`
  a.click()
  URL.revokeObjectURL(url)
}
