import './globals.css';

export const metadata = {
  title: "Coldfragrant"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}