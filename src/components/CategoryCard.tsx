import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    categoryColorClass: string;
    linkText: string;
    isPrimary?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    title,
    description,
    category,
    imageUrl,
    categoryColorClass,
    linkText,
    isPrimary = false,
}) => {
    return (
        <article className="group flex flex-col rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300 hover:border-primary/50 hover:shadow-primary/5 overflow-hidden">
            <div className="h-52 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                <div
                    className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url("${imageUrl}")` }}
                ></div>
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                    <span
                        className={`${categoryColorClass} text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase`}
                    >
                        {category}
                    </span>
                </div>
            </div>
            <div className="p-6 flex flex-col flex-1 gap-4">
                <h2 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                    {title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed grow">
                    {description}
                </p>
                <a
                    className={`w-full flex items-center justify-center rounded-lg h-11 gap-2 text-sm font-bold transition-all ${isPrimary
                        ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
                        : "bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700"
                        }`}
                    href="#"
                >
                    <span>{linkText}</span>
                    <ArrowRight className="w-[18px] h-[18px]" />
                </a>
            </div>
        </article>
    );
};

export default CategoryCard;
