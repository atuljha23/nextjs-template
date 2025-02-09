import * as React from "react";
import { SunMoon, type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useTheme } from "next-themes";

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
  }[];
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const [currentTheme, setCurrentTheme] = React.useState("light");
  const [themeTitle, setThemeTitle] = React.useState("Dark Mode");
  const { setTheme } = useTheme();

  const switchTheme = () => {
    if (currentTheme === "light") {
      setTheme("dark");
      setCurrentTheme("dark");
      setThemeTitle("Light Mode");
    }
    if (currentTheme === "dark") {
      setTheme("light");
      setCurrentTheme("light");
      setThemeTitle("Dark Mode");
    }
  };
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild size="sm">
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem key={"darkmode"}>
            <SidebarMenuButton onClick={switchTheme} size="sm">
              <SunMoon />
              <span>{themeTitle}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
