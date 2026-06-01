import { SITE_NAME } from "~/constant/app";
import { AppIcon } from "../ui/AppIcon";
import { MainNav } from "../blocks/MainNav";

export const Header = () => (
  <header className="border-b border-gray-800">
    <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="flex gap-2">
        <AppIcon />
        <h1 className="text-2xl font-bold">
          {SITE_NAME}
        </h1>
      </div>
      <MainNav />
    </div>
  </header>
)
