import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Button,
  useTheme,
} from "@mui/material";

interface Stat {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface PassionCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  svgIcon: React.ReactNode;
  stats?: Stat[];
  buttonText?: string;
  buttonHref?: string;
  buttonIcon?: React.ReactNode;
}

const PassionCard = ({
  title,
  subtitle,
  description,
  svgIcon,
  stats = [],
  buttonText,
  buttonHref,
  buttonIcon,
}: PassionCardProps) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        height: "100%",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: 3,
        },
        borderRadius: 5,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              bgcolor: "transparent",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 2,
            }}
          >
            {svgIcon}
          </Box>

          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 0.5 }}>
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="body2" color="text.secondary">
                {subtitle}
              </Typography>
            )}
          </Box>
        </Box>

        {description && (
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
            {description}
          </Typography>
        )}

        {stats.length > 0 && (
          <Grid container spacing={2} sx={{ mb: buttonText ? 3 : 0 }}>
            {stats.map((stat, index) => (
              <Grid size={{ xs: 6 }} key={index}>
                <Card variant="outlined" sx={{ p: 2, borderRadius: 5 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    {stat.icon && (
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mr: 1,
                          color: theme.palette.primary.contrastText,
                        }}
                      >
                        {stat.icon}
                      </Box>
                    )}
                    <Typography variant="body1">{stat.label}</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {stat.value}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {buttonText && (
          <Button
            onClick={() => window.open(buttonHref, "_blank")}
            variant="contained"
            startIcon={buttonIcon}
            sx={{
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            {buttonText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default PassionCard;
