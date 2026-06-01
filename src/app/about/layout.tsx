import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About YMA | Youth Medical Association",
  description: "Learn about the Youth Medical Association (YMA), our core values, financial transparency, and our global impact. Meet our advisors and executive board including Heth Maheswari.",
  keywords: "About YMA, Youth Medical Association Mission, Medical Non-Profit, Heth Maheswari, YMA Executive Board, Medical Volunteering, Pre-med non-profit",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
