import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between py-4">
      <span className="text-3xl font-bold">Logo</span>
      <ul className="flex gap-4 font-semibold">
        <li>
          <NavLink>Trending</NavLink>
        </li>
        <li>
          <NavLink>Search</NavLink>
        </li>
        <li>
          <NavLink>Account</NavLink>
        </li>
        <li>
          <NavLink>Cart</NavLink>
        </li>
        <li>
          <NavLink>Wishlist</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
