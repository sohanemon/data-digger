import Navbar from "../components/navbar";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      {/* done: navbar */}

      <body>
        {" "}
        <div className='bg-red-200 py-5 '>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
