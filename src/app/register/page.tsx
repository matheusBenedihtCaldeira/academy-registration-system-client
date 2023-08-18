import {Home as HomeIcon, Search, Users, Library, User, LogOut, UserCog, UserCircle} from 'lucide-react';

export default function Home() {
    return (
        <div className="h-screen flex flex-col">
            <div className="flex flex-1">
                <aside className="w-64 bg-slate-700 p-6">
                    <nav className="space-y-6">
                        <a href="/" className="flex items-center gap-3 text-base font-semibold hover:text-indigo-300">
                            <HomeIcon />
                            Home
                        </a>
                        <a href="" className="flex items-center gap-3 text-base font-semibold hover:text-indigo-300">
                            <Search />
                            Search
                        </a>
                        <a href="" className="flex items-center gap-3 text-base font-semibold hover:text-indigo-300">
                            <Users />
                            Customers
                        </a>
                        <a href="" className="flex items-center gap-3 text-base font-semibold hover:text-indigo-300">
                            <Library />
                            Services
                        </a>
                    </nav>
                    <nav className="mt-7 pt-6 border-t border-slate-600 flex flex-col gap-2 space-y-2">
                        <a href="" className="flex items-center gap-4 text-base hover:text-indigo-300">
                            <User />
                            My Acount</a>
                        <a href="" className="flex items-center gap-4 text-base hover:text-indigo-300">
                            <UserCog />
                            User Settings</a>
                        <a href="" className="flex items-center gap-4 text-base hover:text-red-500">
                            <LogOut />
                            Log-Out</a>
                    </nav>
                </aside>
                <main className="flex-1 p-6">
                    <form>
                        <div className="space-y-12">
                            <div className="border-b border-gray-300 pb-12">
                                <h2 className='text-base font-semibold leading-7 text-gray-200'>Profile</h2>
                                <p className='mt-1 text-sm leading-6 text-gray-50'>This information will be displayed</p>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
                                  
                                    <div className="sm:col-span-1">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-200">
                                            Full name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-1">
                                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-200">
                                            E-mail
                                        </label>
                                        <div className="mt-2">
                                            <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-200">
                                            Password
                                        </label>
                                        <div className="mt-2">
                                            <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-200">
                                            Photo
                                        </label>
                                        <div className="mt-2 flex items-center gap-x-3">
                                            <UserCircle className="h-12 w-12 text-gray-300" aria-hidden="true" />
                                            <button
                                            type="button"
                                            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-300"
                                            >
                                            Change
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                    <button type="button" className="text-sm font-semibold leading-6 text-gray-200">
                                    Cancel
                                    </button>
                                    <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                    Save
                                    </button>
                            </div>
                        </div>
                    </form> 
                </main>
            </div> 
            <footer className="bg-slate-600 border-t border-slate-500 p-6"></footer>
        </div>
    )

}