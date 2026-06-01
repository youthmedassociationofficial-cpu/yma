import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YMA Leadership | Heth Maheswari & Executive Board",
  description: "Meet the global team of student leaders, including Co-President & Executive Director Heth Maheswari, driving the Youth Medical Association's (YMA) initiatives.",
  keywords: "Heth Maheswari, Heth, Maheswari, YMA Executive Director, YMA Co-President, Youth Medical Association Leadership, Student Leaders YMA, Pre-med Researchers",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
