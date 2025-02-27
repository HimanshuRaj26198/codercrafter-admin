import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ContentContextProvider } from "@/lib/context/ContentContext";
import Navbar from "./_components/Navbar/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/uikit.css" />
        <link rel="stylesheet" href="/assets/css/icons.css" />
        <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" /> */}

        {/* <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script> */}
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous"></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ContentContextProvider>
          <Navbar />
          <div id="wrapper" className="horizontal" >
            {/* <Navbar /> */}
            {/* <div id="popupContainer" className="popup_container" > */}
            {/* <ContactPopup />
            <EnrollPopup /> */}
            {/* </div> */}
            <div
              className="uk-sticky-placeholder"
              style={{ height: 72, margin: 0 }}
              bis_skin_checked={1}
            />
            {children}
            <div className="lg:mt-28 mt-10 mb-7 px-12 border-t pt-7" bis_skin_checked={1}>
              <div
                className="flex flex-col items-center justify-between lg:flex-row max-w-6xl mx-auto lg:space-y-0 space-y-3"
                bis_skin_checked={1}
              >
                <p className="capitalize font-medium"> © copyright 2024 CodeCrafter</p>
                <div
                  className="lg:flex space-x-4 text-gray-700 capitalize hidden"
                  bis_skin_checked={1}
                >
                  <a href="/about-us"> About</a>
                  <a href="#"> Help</a>
                  <a href="#"> Terms</a>
                  <a href="#"> Privacy</a>
                </div>
              </div>
            </div>

          </div>
        </ContentContextProvider>
      </body>
    </html>
  );
}
