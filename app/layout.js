import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata = {
  title: "Natura - Net Zero Homes",
  description:
    "Retrofit your homes to achivie net zero with Government Incentives",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-white transition-all ease-in-out duration-500 min-h-screen min-w-screen h-full w-full ${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
