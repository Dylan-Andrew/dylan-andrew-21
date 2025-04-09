import Lottie from "lottie-react";
import setupAnimation from "../../assets/setup-animation.json";
import bracketAnimation from "../../assets/bracket-animation.json";
import { Box } from "@mui/material";

const AnimatedIntro = () => {
  return (
    <Box
      sx={{
        width: {
          xs: 250,
          sm: 300,
          md: 350,
        },
        mx: "auto",
      }}
    >
      <Lottie
        animationData={Math.random() > 0.5 ? setupAnimation : bracketAnimation}
        loop={true}
      />
    </Box>
  );
};

export default AnimatedIntro;
