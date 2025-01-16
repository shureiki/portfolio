export default function Button({ href, children, className }) {
    const ButtonComponent = href ? 'a' : 'button';

    return (
        <ButtonComponent href={href} target='_blank' className={`border-2 px-2 py-1 border-accent text-accent text-start text-xl font-extrabold font-bigShouldersDisplay uppercase hover:text-black hover:bg-accent ${className}`}>
            {children}
        </ButtonComponent>
    );
}