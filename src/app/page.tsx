import {Home as HomeIcon, Search, Users} from 'lucide-react';

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
                            Buscar
                        </a>
                        <a href="" className="flex items-center gap-3 text-base font-semibold hover::bg-slate-500">
                            <Users />
                            Clientes
                        </a>
                        
                    </nav>
                </aside>
                <main className="flex-1 p-6">main</main>
            </div>
            <footer className="border-t p-6">footer</footer>
        </div>
    )

}