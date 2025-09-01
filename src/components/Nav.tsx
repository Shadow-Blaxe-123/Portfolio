import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

function Nav() {
  const items = ["Home", "Skills", "Projects", "Blog", "Contact Me"];

  return (
    <div className="z-50 w-full">
      <div className="flex items-center  justify-between backdrop-blur-md rounded-xl px-4 py-2">
        {/* Left side: nav items */}
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-6 text-white font-black">
            {items.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink>{item}</NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side: Resume button */}
        <Button>Resume</Button>
      </div>
    </div>
  );
}

export default Nav;
