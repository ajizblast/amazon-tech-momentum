import { MonitorSmartphone } from "lucide-react";

const Footer = () => {
    return (
        <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark py-12 px-6 md:px-10">
            <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="text-primary text-2xl">
                            <MonitorSmartphone />
                        </div>
                        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
                            TechMomentum
                        </h2>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
                        <strong>Affiliate Disclosure:</strong> TechMomentum is a participant
                        in the Amazon Services LLC Associates Program. As an Amazon
                        Associate, we earn from qualifying purchases made through our links
                        to help keep the site running.
                    </p>
                </div>
                <div className="flex flex-col md:items-end gap-6">
                    <div className="flex gap-8">
                        <a
                            className="text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
                            href="#"
                        >
                            Privacy Policy
                        </a>
                        <a
                            className="text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
                            href="#"
                        >
                            Terms of Service
                        </a>
                        <a
                            className="text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
                            href="#"
                        >
                            Contact Us
                        </a>
                    </div>
                    <p className="text-xs text-slate-400 dark:text-slate-600">
                        © 2026 TechMomentum Hub. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
