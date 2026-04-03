import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PRISM | Digital Registry for Hassle-Free Deployment",
  description: "Streamline your administrative workflow with automated reporting, accurate geofencing, and intelligent form generation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className="antialiased">
        <div style={{ overflowX: 'hidden', position: 'relative', width: '100%', maxWidth: '100%', minHeight: '100vh' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
