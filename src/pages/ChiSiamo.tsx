import { Box, Typography } from "@mui/material";

const ChiSiamo = () => {
    return (
        <Box className="py-10">
            <Typography variant="h3" className="font-bold text-primary">
                Chi siamo
            </Typography>
            <Typography className="mt-4 text-gray-700">
                Siamo un team di esperti nel settore farmaceutico, pronti ad assisterti per ogni tua esigenza di salute.
            </Typography>
        </Box>
    );
};

export default ChiSiamo;