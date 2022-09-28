import { ErrorFallbackProps, ErrorComponent, ErrorBoundary, AppProps } from "@blitzjs/next"
import { AuthenticationError, AuthorizationError } from "blitz"
import React, { useEffect, useState } from "react"
import { withBlitz } from "app/blitz-client"
import { GlobalStyles, PageWrapper } from "app/projects/components/Html/styles"
import NavBar from "app/projects/components/NavBar"
import NavBarAdmin from "app/auth/components/NavBarAdmin"
import SocialBar from "app/projects/components/SocialBar"
import EmailBar from "app/projects/components/EmailBar"
import { AnimatePresence } from "framer-motion"
import { useWindowSize } from "app/core/hooks/useWindowSize"
import { useRouter } from "next/router"
import NavBarAuth from "app/auth/components/NavBarAuth"
import AlertDialog from "app/core/AlertDialog"
import ModalComponent from "app/core/components/ModalComponent"

function RootErrorFallback({ error }: ErrorFallbackProps) {
  if (error instanceof AuthenticationError) {
    return <div>Error: You are not authenticated</div>
  }
  if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  }
  return (
    <ErrorComponent
      statusCode={(error as any)?.statusCode || 400}
      title={error.message || error.name}
    />
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  const windowSize = useWindowSize()
  const [showChild, setShowChild] = useState(false)
  const [itsMobile, setItsMobile] = useState(false)
  const [itsAdmin, setItsAdmin] = useState(false)
  const { locale, ...router } = useRouter()

  useEffect(() => {
    if (
      router.pathname.includes("/auth") &&
      !router.pathname.includes("/login") &&
      !router.pathname.includes("/signup")
    ) {
      setItsAdmin(true)
    } else {
      setItsAdmin(false)
    }
  }, [router.pathname])

  useEffect(() => {
    window.localStorage.setItem("locale", locale || "en")
  }, [])

  useEffect(() => {
    if (!windowSize?.width) {
      return
    }
    if (windowSize.width <= 1020) {
      setItsMobile(true)
    } else {
      setItsMobile(false)
    }
  }, [windowSize])

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  if (typeof window === "undefined") {
    return <></>
  }

  if (itsAdmin) {
    return (
      <ErrorBoundary FallbackComponent={RootErrorFallback}>
        <GlobalStyles />
        <ModalComponent />
        <AlertDialog />
        <NavBarAdmin />
        <PageWrapper>
          <NavBarAuth />
          <AnimatePresence mode="wait">
            <Component {...pageProps} />
          </AnimatePresence>
        </PageWrapper>
      </ErrorBoundary>
    )
  }

  if (itsMobile) {
    return (
      <ErrorBoundary FallbackComponent={RootErrorFallback}>
        <GlobalStyles />
        <ModalComponent />
        <AlertDialog />
        <NavBar />
        <PageWrapper>
          <AnimatePresence mode="wait">
            <Component {...pageProps} />
          </AnimatePresence>
        </PageWrapper>
      </ErrorBoundary>
    )
  }

  return (
    <ErrorBoundary FallbackComponent={RootErrorFallback}>
      <GlobalStyles />
      <ModalComponent />
      <AlertDialog />
      <NavBar />
      <PageWrapper>
        <SocialBar />
        <AnimatePresence mode="wait">
          <Component {...pageProps} />
        </AnimatePresence>
        <EmailBar />
      </PageWrapper>
    </ErrorBoundary>
  )
}

export default withBlitz(MyApp)
