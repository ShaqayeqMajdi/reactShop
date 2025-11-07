import { Box, Button, Card, Typography } from "@mui/material";
export default function ProductsCard({title, image, price, category,rating,}) {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "300px",
        height: 420,
        // borderRadius: 4,
        // border: "1px solid #ececec",
        boxShadow: "0",
        // bgcolor: "#fff",
        p: 2.5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "start",
        transition: "all 1s ease",
        // cursor: "pointer",
        // "&:hover": {
        //   boxShadow: "0 5px 10px rgba(0,0,0,0.08)",
        // },
        "&:hover > div:first-of-type img": {
          transform: "scale(1.05)",
        },
      }}
    >
      {/* Product Image */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "300px",
          height: 200,
          bgcolor: "#F0EEED",
          borderRadius: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          mb: 2,
          "& img": {
            transition: "transform 0.4s ease",
          },
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            padding: "15px",
          }}
        />
      </Box>

      {/* Category */}
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{
          textTransform: "capitalize",
          letterSpacing: 0.4,
          fontWeight: 500,
          fontFamily: "Quicksand, sans-serif",
        }}
      >
        {category}
      </Typography>

      {/* Title */}
      <Typography
        variant="subtitle1"
        fontWeight="medium"
        sx={{
          textAlign: "left",
          mb: 1,
          lineHeight: 1.3,
          color: "#333",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {title}
      </Typography>

      {/* Rating */}
      <Box display="flex" alignItems="center" gap={1} mb={1}>
        <img
          src="./images/shared/rating.png"
          alt="rating"
          style={{ width: "70px", opacity: 0.9 }}
        />
        <Typography
          variant="caption"
          fontFamily="Quicksand, sans-serif"
          color="text.secondary"
          fontWeight={500}
        >
          {rating?.rate}/5
          <span style={{ opacity: 0.8, marginLeft: 3}}>({rating?.count})</span>
        </Typography>

        {/* <Divider sx={{ width: "80%", my: 1 }} /> */}
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Typography
          variant="h7"
          fontFamily="Quicksand, sans-serif"
          fontWeight="bold"
          color="#111  "
        >
          ${price}
        </Typography>

        <Button
          sx={{
            fontWeight: 900,
            px: 2.5,
            py: 1,
            bgcolor: "#f3f4f6",
            color: "#4a5565",
            borderRadius: 2,
            textTransform: "none",
            fontFamily: "Quicksand, sans-serif",
            fontSize: "0.85rem",
            transition: "all 0.25s ease",
            "&:hover": {
              // bgcolor: "#e2e8f0",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            },
          }}
        >
          View Product
        </Button>
      </Box>
    </Card>
  );
}
