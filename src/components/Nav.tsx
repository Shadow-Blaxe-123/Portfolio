import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

function Nav() {
  const items = ["Home", "Skills", "Projects", "Blog", "Contact Me"];
  return (
    <div className="z-50 w-full border-black text-white font-extrabold text-3xl">
      <NavigationMenu>
        <NavigationMenuList className=" backdrop-blur-md rounded-xl px-4 py-2 hover:cursor-pointer">
          {items.map((item) => (
            <NavigationMenuItem>
              <NavigationMenuLink>{item}</NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
export default Nav;
