import { Verified } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="@container">
            <div
                className="flex min-h-[450px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl items-center justify-center p-8 relative overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(rgba(16, 22, 34, 0.6), rgba(16, 22, 34, 0.85)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdBL7V0Vx6uN8JdxQcqA3Uk-gbNX9OqA1Iqj5dQ8KU-BHLcuK47QPjTVkiK2aapPmqA4DW00Fp0ZEbYrKfAPv5opzJq3lPwBKKtmQQI2vhJhwjqeTx1ZRtjSBjjSuR6aHgPuLvf_FYTR9Mtrt5MfKUuC7CX0D_YnVXHV09BjNmYfr102zxpPPPuKYqNND6T7CVNyAZtYQ40JlNvYBY4Be7sKcEDN6Uz9X2AazBZts5_wm89sxrlyhbY3zZ5yzOmIBKtVeCpOvKX2A")`,
                }}
            >
                <div className="flex flex-col gap-4 text-center z-10 relative max-w-3xl">
                    <div className="inline-flex items-center justify-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold mx-auto border border-primary/30 uppercase tracking-widest">
                        <Verified className="w-4 h-4" />
                        Expert Tech Curation
                    </div>
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl lg:text-7xl">
                        Discover Your Next Must-Have Tech
                    </h1>
                    <p className="text-slate-300 text-lg md:text-xl font-medium mt-4">
                        Browse our meticulously researched "Top 10" lists to find the
                        perfect gadgets for your lifestyle, home, and gaming setup.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
