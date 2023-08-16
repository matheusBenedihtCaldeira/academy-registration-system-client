export default function Home() {
    return (
        <div className="h-screen flex flex-col">
            <div className="flex flex-1 p-6">
                <aside className="w-64">
                    <nav className="space-y-6">nav bar</nav>
                </aside>
                <main className="flex-1 p-6">main</main>
            </div>
            <footer className="border-t p-6">footer</footer>
        </div>
    )

}