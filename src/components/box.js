export default function Box({ className, children }) {
    return (
        <div className={`relative border-2 border-white/13 ${className} drop-shadow-crushed shadow-accent`}>
            <div className='corner -top-0.75 -left-0.75 border-t-4 border-l-4'></div>
            <div className='corner -top-0.75 -right-0.75 border-t-4 border-r-4'></div>
            <div className='corner -bottom-0.75 -left-0.75 border-b-4 border-l-4'></div>
            <div className='corner -bottom-0.75 -right-0.75 border-b-4 border-r-4'></div>
            {children}
        </div>
    );
}