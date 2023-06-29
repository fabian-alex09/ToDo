import './globals.css'

export const metadata = {
  title: 'Simple To Do List App',
  description: 'Uses next.js to create a to do list',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
