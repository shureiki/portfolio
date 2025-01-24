const Icon = ({ component: Component, size = 24, ...props }) => {
    return <Component size={size} {...props} />;
};

export default Icon;
