import { StyleSheet } from "@react-pdf/renderer"

export const styles = StyleSheet.create({
  page: {
    padding: 48,
    fontSize: 11,
    lineHeight: 1.6,
    color: "#3f3f46",
  },
  nameRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    color: "#18181b",
    fontWeight: "bold",
    marginBottom: 20,
  },
  role: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: 600,
  },
  additionalInfo: {
    flexDirection: "row",
    gap: 14,
    fontSize: 11,
    marginTop: 12,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
  },
  section: {
    marginTop: 18,
  },
  sectionTitle: {
    fontSize: 11,
    letterSpacing: 1.5,
    fontWeight: "bold",
  },
  largeSubHeader: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: "bold",
    color: "#18181b",
  },
  subHeader: {
    fontSize: 12,
    fontWeight: "bold",
  },
  paragraph: {
    marginTop: 4,
    fontSize: 11,
  },
  skillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  skill: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 999,
    borderWidth: 1,
    borderStyle: "solid",
  },
  skillText: {
    fontSize: 10,
    lineHeight: 1,
  },
})
