import { Box, CircularProgress, SxProps, Theme } from "@mui/material";

const Spinner = ({ className = "", sx }: { className?: string, sx?: SxProps<Theme> }) => {
    return (
        <Box className={"w-full flex justify-center items-center " + className} sx={sx}>
            <CircularProgress
                sx={{
                    minHeight: "50px",
                    minWidth: "50px",
                    color: "white"
                }}
            />
        </Box>
    );
};

export default Spinner;
