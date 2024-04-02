import {
 NavigationMenu,
 NavigationMenuContent,
 NavigationMenuItem,
 NavigationMenuLink,
 NavigationMenuList,
 NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import React from "react";
import { Button } from "./ui/button";

import { ModeToggle } from "./ToggleTheme";
import { Github, GithubIcon, LucideGithub } from "lucide-react";
import { NavigationMenuDemo } from "./Navigation";
// import { IoLogoGithub } from "react-icons/io5";

const Header = () => {

  return (
   <div className="container h-20 w-full flex items-center justify-between">
    {/* <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resume-builder</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>About</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Support</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem></NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}
    <NavigationMenuDemo />
    <div className="flex gap-4 w-full justify-end">
     <ModeToggle />
    </div>
   </div>
  );
}

export default Header