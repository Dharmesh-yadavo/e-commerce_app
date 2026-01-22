import { AppSidebar } from "@/components/common/AppSideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import "../globals.css";
import {
  ClipboardList,
  LayoutDashboard,
  Package,
  Settings,
  LucideIcon,
} from "lucide-react";

export interface SidebarItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

const layoutName: string = "Vendor Dashboard";

const VendorLayout = ({ children }: { children: React.ReactNode }) => {
  const items: SidebarItem[] = [
    {
      title: "Dashboard",
      url: "/vendor",
      icon: LayoutDashboard,
    },
    {
      title: "Products",
      url: "/vendor/products",
      icon: Package,
    },
    {
      title: "Orders",
      url: "/vendor/orders",
      icon: ClipboardList,
    },
    {
      title: "Settings",
      url: "/vendor/settings",
      icon: Settings,
    },
  ];
  return (
    <SidebarProvider>
      <AppSidebar items={items} name={layoutName} />
      <main>{children}</main>
    </SidebarProvider>
  );
};
export default VendorLayout;
