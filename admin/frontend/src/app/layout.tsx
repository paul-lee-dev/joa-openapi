import RecoilContextProvider from "../hooks/recoilContextProvider";
import ReactQueryProviders from "@/hooks/useReactQuery";

import { QueryClient } from "@tanstack/react-query";
export const metadata = {
  title: "joa-admin",
  description: "Composed by JoaOpenAPI",
  icons: {
    icon: "/favicon.ico",
  },
};

const queryClient = new QueryClient();
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body id={"root"}>
        <ReactQueryProviders>
          <RecoilContextProvider>{children}</RecoilContextProvider>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
