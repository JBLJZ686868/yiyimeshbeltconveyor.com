import "./globals.css";

export const metadata = {
  title: "YIYI Mesh Belt",
  description: "Automated Metal Conveyor Belt Manufacturer for OEMs & Distributors"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
