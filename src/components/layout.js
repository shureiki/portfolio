import Box from "./box";

export default function Layout({ children }) {
    return (
        <>
            <div>
                <Box className='p-2 h-50 w-full'>
                    <p>Test</p>
                </Box>
            </div>
            <div>{children}</div>
        </>
    );
}