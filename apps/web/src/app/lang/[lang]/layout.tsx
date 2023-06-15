
export default async function RootLayout({ children, params }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}

