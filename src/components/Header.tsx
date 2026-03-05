import { MonitorSmartphone, Menu } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

const Header = () => {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-10 py-4 bg-background-light dark:bg-background-dark sticky top-0 z-50">
            <div className="flex items-center gap-4">
                <div className="text-primary text-2xl">
                    <MonitorSmartphone />
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
                    TechMomentum
                </h2>
            </div>
            <nav className="hidden md:flex flex-1 justify-end gap-8 pr-4 border-r border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-9">
                    <a
                        className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                        href="#"
                    >
                        Laptops
                    </a>
                    <a
                        className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                        href="#"
                    >
                        Gaming
                    </a>
                    <a
                        className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                        href="#"
                    >
                        Smart Home
                    </a>
                </div>
            </nav>
            <div className="flex items-center gap-4 ml-4 md:ml-0">
                <ThemeToggle />
                <div className="md:hidden">
                    <Menu className="cursor-pointer" />
                </div>
            </div>
        </header>
    )
}

export default Header
