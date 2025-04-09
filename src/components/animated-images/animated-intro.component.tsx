import Lottie from "lottie-react";
import setupAnimation from "../../assets/setup-animation.json";
import bracketAnimation from "../../assets/bracket-animation.json";
import { Box } from "@mui/material";

const AnimatedIntro = () => {
  return (
    <Box
      sx={{
        width: 350,
        mx: "auto",
        mb: 2,
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
