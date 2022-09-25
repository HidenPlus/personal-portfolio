import languages from "."

export default function getLocaleString(text: string): string {
  if (typeof window !== "undefined") {
    const locale = window.localStorage.getItem("locale") || "es"
    return languages[locale][text]
  }
  return ""
}
