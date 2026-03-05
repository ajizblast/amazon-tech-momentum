import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CategoryCard from "./components/CategoryCard";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  const categories = [
    {
      title: "Top 10 Gaming Laptops",
      description:
        "From ultra-thin portables to heavy-duty desktop replacements, we've ranked the powerhouses featuring the latest RTX 50-series GPUs.",
      category: "Gaming",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA-87bLGP_B87zdSs5yAfTm08iJCH5ntmwB5L3Uqjg7bji41ZQ7DKjzyqE43OjbyzOB_mXYFZeb5K7ksGk-Cv8gjAhqLP93EfjyrfUiBMIgQoHxOPAVPXmdMAStYj076cdy5jPZx8Unh7VSrcPFbp3AChY3cCGHOKKZd6ETjlp6Ug6_IeR3UhSGPkfgKf7S_nsE70WcvtsnXL2bECrd4CIW5E8eskCYATREqYlaQgxqYDwrscWqpQRqU1EN8yxJjZ84eLzhav4k-qs",
      categoryColorClass: "bg-primary",
      linkText: "View Full List",
      isPrimary: true,
    },
    {
      title: "Top 10 Tech in Home Must Have",
      description:
        "Revolutionize your living space with the smartest appliances, security systems, and automation hubs essential for a modern 2026 home.",
      category: "Smart Home",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA-87bLGP_B87zdSs5yAfTm08iJCH5ntmwB5L3Uqjg7bji41ZQ7DKjzyqE43OjbyzOB_mXYFZeb5K7ksGk-Cv8gjAhqLP93EfjyrfUiBMIgQoHxOPAVPXmdMAStYj076cdy5jPZx8Unh7VSrcPFbp3AChY3cCGHOKKZd6ETjlp6Ug6_IeR3UhSGPkfgKf7S_nsE70WcvtsnXL2bECrd4CIW5E8eskCYATREqYlaQgxqYDwrscWqpQRqU1EN8yxJjZ84eLzhav4k-qs",
      categoryColorClass: "bg-emerald-600",
      linkText: "View Full List",
      isPrimary: false,
    },
    {
      title: "Top 10 Smartphone Gaming",
      description:
        "Discover mobile devices with high-refresh displays, advanced cooling, and dedicated gaming modes to dominate the competitive scene.",
      category: "Mobile",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA-87bLGP_B87zdSs5yAfTm08iJCH5ntmwB5L3Uqjg7bji41ZQ7DKjzyqE43OjbyzOB_mXYFZeb5K7ksGk-Cv8gjAhqLP93EfjyrfUiBMIgQoHxOPAVPXmdMAStYj076cdy5jPZx8Unh7VSrcPFbp3AChY3cCGHOKKZd6ETjlp6Ug6_IeR3UhSGPkfgKf7S_nsE70WcvtsnXL2bECrd4CIW5E8eskCYATREqYlaQgxqYDwrscWqpQRqU1EN8yxJjZ84eLzhav4k-qs",
      categoryColorClass: "bg-amber-600",
      linkText: "View Full List",
      isPrimary: false,
    },
  ];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex flex-1 justify-center py-10 px-4 md:px-8">
          <div className="layout-content-container flex flex-col max-w-[1100px] flex-1 gap-12">
            <HeroSection />
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((cat, idx) => (
                <CategoryCard key={idx} {...cat} />
              ))}
            </section>
            <div className="flex flex-col items-center gap-4 py-8 border-t border-slate-200 dark:border-slate-800 mt-6">
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                Looking for something else?
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Mechanical Keyboards",
                  "Wireless Earbuds",
                  "PC Peripherals",
                  "Smartwatches",
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 text-xs font-semibold cursor-pointer hover:border-primary transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
