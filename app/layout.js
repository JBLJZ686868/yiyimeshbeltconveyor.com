import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.yiyimeshbelt.com"),
  title: "YIYI Mesh Belt",
  description: "Automated Metal Conveyor Belt Manufacturer for OEMs & Distributors",
  applicationName: "YIYI Mesh Belt",
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
