import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { ThemeProvider } from './theme-provider'
import "../styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white dark:bg-dark-bg text-grey-90 dark:text-dark-fg">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className="relative">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
