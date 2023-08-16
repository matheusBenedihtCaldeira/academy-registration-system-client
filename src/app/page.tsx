import {Home as HomeIcon, Search, Users, Library, User} from 'lucide-react';

export default function Home() {
    return (
        <div className="h-screen flex flex-col">
            <div className="flex flex-1">
                <aside className="w-64 bg-slate-700 p-6">
                    <nav className="space-y-6">
                        <a href="" className="flex items-center gap-3 text-base font-semibold hover::bg-slate-500">
                            <HomeIcon />
                            Home
                        </a>
                        <a href="" className="flex items-center gap-3 text-base font-semibold hover::bg-slate-500">
                            <Search />
                            Search
                        </a>
                        <a href="" className="flex items-center gap-3 text-base font-semibold hover::bg-slate-500">
                            <Users />
                            Customers
                        </a>
                        <a href="" className="flex items-center gap-3 text-base font-semibold hover::bg-slate-500">
                            <Library />
                            Services
                        </a>
                    </nav>
                    <nav className="mt-7 pt-6 border-t border-slate-600 flex flex-col gap-2">
                        <a href="" className="flex items-center gap-3 text-base">
                            <User />
                            Users</a>
                        <a href="" className="text-base">Config</a>
                        <a href="" className="text-base">Config</a>
                    </nav>
                </aside>
                <main className="flex-1 p-6">main</main>
            </div> 
            <footer className="bg-slate-600 border-t border-slate-500 p-6">footer</footer>
        </div>
    )

}