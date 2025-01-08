export default function Button({ children, className }) {
    return (
        <button className={`border-2 px-2 py-1 border-accent text-accent text-start text-2xl font-extrabold font-bigShouldersDisplay uppercase hover:text-black hover:bg-accent ${className}`}>{children}</button>
    );
}