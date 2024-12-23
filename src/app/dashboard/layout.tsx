import Link from "next/link";
import { Search, Briefcase, Users, DollarSign, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const sidebarItems = [
  { icon: Search, label: "Search", href: "/dashboard" },
  { icon: Briefcase, label: "Jobs", href: "/dashboard/jobs" },
  { icon: Users, label: "Team", href: "/dashboard/team" },
  { icon: DollarSign, label: "Spend", href: "/dashboard/spend" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-16 border-r bg-white flex flex-col items-center py-4 gap-4">
        <Link href="/" className="p-2">
          <div className="w-8 h-8 bg-primary rounded-lg" />
        </Link>
        {sidebarItems.map((item) => (
          <Link key={item.label} href={item.href}>
            <Button variant="ghost" size="icon" className="rounded-lg">
              <item.icon className="h-5 w-5" />
              <span className="sr-only">{item.label}</span>
            </Button>
          </Link>
        ))}
      </aside>
      {children}
    </div>
  );
}
