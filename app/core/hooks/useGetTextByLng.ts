import { useRouter } from "next/router"
import languages from "app/core/languages"

export const useGetTextByLng = (text: string): string => {
  const { locale, defaultLocale = "es" } = useRouter()
  const lng = locale || defaultLocale
  return languages[lng][text]
}
