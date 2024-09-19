// import localFont from "next/font/local";
import "./globals.css";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="pt-BR">
//       <body>{children}</body>
//     </html>
//   );
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <nav style={{
          padding: '20px',
          backgroundColor: '#282828', /* color2 */
          textAlign: 'center',
        }}>
          <a href="/books" style={{ marginRight: '15px' }}>Books</a>
          <a href="/authors" style={{ marginRight: '15px' }}>Authors</a>
          <a href="/publishers" style={{ marginRight: '15px' }}>Publishers</a>
          <a href="/genres">Genres</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
