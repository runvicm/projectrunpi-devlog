import { House } from "lucide-react";
import { Link } from "react-router";

export const MainNav = () => (
  <nav className="flex gap-6 text-gray-400">
    <Link to="https://projectrunpi.com" className="hover:text-white transition">
      <div className="flex">
        <House />
        <span className="mx-2">
          Project Runpi
        </span>
      </div>
    </Link>
  </nav>
)
