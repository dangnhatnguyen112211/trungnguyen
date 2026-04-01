import { Sora } from "next/font/google";

export const soraSans = Sora({
  variable: "--soraSans-font",
  subsets: ["latin"],
  display: "fallback",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// `Onest` is not a valid export from `next/font/google` and caused build
// errors. Re-use `Sora` as the site's primary sans-serif font so usages
// such as `onestSans.className` remain available. If you intended a
// different font, replace this with a valid Google font import or a
// local font via `next/font/local`.
export const onestSans = Sora({
  variable: "--onestSans-font",
  subsets: ["latin"],
  display: "fallback",
  weight: ["300", "400", "500", "600", "700", "800"],
});
