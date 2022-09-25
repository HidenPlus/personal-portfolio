import Head from "next/head"
import React from "react"
import { BlitzLayout } from "@blitzjs/next"

// eslint-disable-next-line react/function-component-definition
const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => (
  <>
    <Head>
      <title>{title || "portfolioYojhanAtuesta"}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {children}
  </>
)

export default Layout
