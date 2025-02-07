import type { AppProps } from "next/app";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/lib/dark-mode";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className="absolute top-6 right-6">
        <ModeToggle />
      </div>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
