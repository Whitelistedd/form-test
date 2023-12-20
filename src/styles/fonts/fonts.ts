import localFont from "next/font/local";

// Font files can be colocated inside of `app`
export const TtTravels = localFont({
  src: [
    {
      path: "./TTTravels-Trial-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./TTTravels-Trial-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./TTTravels-Trial-Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./TTTravels-Trial-ExtraBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--TT-Travels-Trail",
});
