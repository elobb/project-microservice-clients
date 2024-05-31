import Link from "next/link";

const navItems = [
  { title: "Home", url: "/" },
  { title: "About Us", url: "about-us" },
  { title: "Blog", url: "blog" },
];
const NavItems = ({ activeItem = 0 }: { activeItem?: number }) => {
  return (
    <div className="flex gap-4">
      {navItems.map((item, index) => {
        return (
          <Link
            key={item.url}
            className={`px-4 py-1 rounded-md ${
              activeItem == index
                ? "bg-slate-600 text-slate-200"
                : "text-slate-400 "
            }`}
            href={item.url}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default NavItems;
