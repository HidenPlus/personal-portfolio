import { useState, useEffect, useRef } from "react"

export const useWindowSize = () => {
  const isClient = typeof window === "object" // Object represents browser window
  const lastWidth: any = useRef()

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return
    } // Exit if not user/browser

    function handleResize() {
      if (window?.innerWidth !== lastWidth.current) {
        const width = getSize()
        lastWidth.current = width
        setWindowSize(width)
      }
    }
    window.addEventListener("resize", handleResize) // <-- I am only interested in window.innerWidth !
    // eslint-disable-next-line consistent-return
    return () => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}
