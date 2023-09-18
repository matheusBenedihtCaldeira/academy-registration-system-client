import {
    HomeIcon,
    Library,
    LogOut,
    Search,
    User,
    UserCog,
    Users,
} from "lucide-react";

export default function Nav() {
    return (
        <aside className="w-64 bg-slate-700 p-6">
            <nav className="space-y-6">
                <a
                    href="/"
                    className="flex items-center gap-3 text-base font-semibold hover:text-indigo-300"
                >
                    <HomeIcon />
                    Home
                </a>
                <a
                    href=""
                    className="flex items-center gap-3 text-base font-semibold hover:text-indigo-300"
                >
                    <Search />
                    Search
                </a>
                <a
                    href=""
                    className="flex items-center gap-3 text-base font-semibold hover:text-indigo-300"
                >
                    <Users />
                    Customers
                </a>
                <a
                    href=""
                    className="flex items-center gap-3 text-base font-semibold hover:text-indigo-300"
                >
                    <Library />
                    Services
                </a>
            </nav>
            <nav className="mt-7 pt-6 border-t border-slate-600 flex flex-col gap-2 space-y-2">
                <a
                    href=""
                    className="flex items-center gap-4 text-base hover:text-indigo-300"
                >
                    <User />
                    My Acount
                </a>
                <a
                    href=""
                    className="flex items-center gap-4 text-base hover:text-indigo-300"
                >
                    <UserCog />
                    User Settings
                </a>
                <a
                    href=""
                    className="flex items-center gap-4 text-base hover:text-red-500"
                >
                    <LogOut />
                    Log-Out
                </a>
            </nav>
        </aside>
    );
}
