import { Page, Text, View, Document } from "@react-pdf/renderer"
import { styles } from "./PdfStyle"
import { format } from "date-fns"

const fmt = (d) => (d ? format(new Date(d), "MMMM yyyy") : "")

export function MyCV({ resume }) {
  const { fname, lname, desiredRole, email, phone, city, summary } =
    resume.personal
  const { role, company, startDate, endDate } = resume.experience
  const { degree, school } = resume.education
  const { skills, color } = resume.skillsAndStyle

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.nameRow}>
          <Text style={styles.title}>{fname}</Text>
          <Text style={[styles.title, { color }]}>{lname}</Text>
        </View>
        <Text style={[styles.role, { color }]}>{desiredRole}</Text>

        <View style={[styles.additionalInfo, { borderBottomColor: color }]}>
          <Text>{email}</Text>
          <Text>{phone}</Text>
          <Text>{city}</Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color }]}>PROFILE</Text>
          <Text style={styles.paragraph}>{summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color }]}>EXPERIENCE</Text>
          <Text style={styles.largeSubHeader}>{role}</Text>
          <Text style={styles.subHeader}>{company}</Text>
          <Text style={styles.paragraph}>
            {fmt(startDate)} - {fmt(endDate)}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color }]}>EDUCATION</Text>
          <Text style={styles.largeSubHeader}>{degree}</Text>
          <Text style={styles.paragraph}>{school}</Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color }]}>SKILLS</Text>
          <View style={styles.skillsRow}>
            {skills
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean)
              .map((skill, i) => (
                <View
                  key={`${skill}-${i}`}
                  style={[styles.skill, { borderColor: color }]}
                >
                  <Text style={[styles.skillText, { color }]}>{skill}</Text>
                </View>
              ))}
          </View>
        </View>
      </Page>
    </Document>
  )
}
