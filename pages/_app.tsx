import { ErrorFallbackProps, ErrorComponent, ErrorBoundary, AppProps } from "@blitzjs/next"
import { AuthenticationError, AuthorizationError } from "blitz"
import React, { useEffect, useState } from "react"
import { withBlitz } from "app/blitz-client"
import { GlobalStyles, PageWrapper } from "app/projects/components/Html/styles"
import NavBar from "app/projects/components/NavBar"
import SocialBar from "app/projects/components/SocialBar"
import EmailBar from "app/projects/components/EmailBar"
import { AnimatePresence } from "framer-motion"
import { useWindowSize } from "app/core/hooks/useWindowSize"

function RootErrorFallback({ error }: ErrorFallbackProps) {
  if (error instanceof AuthenticationError) {
    return <div>Error: You are not authenticated</div>
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent
        statusCode={(error as any)?.statusCode || 400}
        title={error.message || error.name}
      />
    )
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const windowSize = useWindowSize();
  const [showChild, setShowChild] = useState(false);
  const [itsMobile, setItsMobile] = useState(false);

  useEffect(() => {
    if(!windowSize?.width) return;
    if(windowSize.width <= 1020){
      setItsMobile(true)
    } else {
      setItsMobile(false)
    }
  }, [windowSize])

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  }

  if(itsMobile){
    return (
      <ErrorBoundary FallbackComponent={RootErrorFallback}>
        <GlobalStyles />
        <NavBar />
        <PageWrapper>
        <AnimatePresence mode="wait" >
            <Component {...pageProps} />
        </AnimatePresence>
        </PageWrapper>
      </ErrorBoundary>
    )
  }

  return (
    <ErrorBoundary FallbackComponent={RootErrorFallback}>
      <GlobalStyles />
      <NavBar />
      <PageWrapper>
        <SocialBar />
      <AnimatePresence mode="wait" >
          <Component {...pageProps} />
      </AnimatePresence>
      <EmailBar />
      </PageWrapper>
    </ErrorBoundary>
  )
}

export default withBlitz(MyApp)
