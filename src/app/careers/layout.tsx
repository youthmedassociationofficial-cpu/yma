import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Youth Medical Association",
  description: "Join the Youth Medical Association (YMA) team. Explore student volunteer opportunities, committee roles, and help empower future healthcare leaders.",
  keywords: "Youth Medical Association Careers, YMA Volunteer Opportunities, High School Pre-med Clubs, Medical Case Competition Volunteers, Healthcare Non-Profit Roles, Student Leadership",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
