import Navbar from "./components/navbar/Navigation";
import "./globals.css";

export const metadata = {
  title: "Demo App",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}</body>
    </html>
  );
}
