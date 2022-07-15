import { Typography, Box } from "@mui/material";
import ModalRemove from "../modalRemove";
export default function Card({ item, setFiltredList }) {
  return (
    <Box
      key={item.name}
      sx={{
        height: "50%",
        border: "2px solid black",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          height: "15%",
          padding: "0px 15px",
          borderBottom: "2px solid black",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography component="h2" fontSize="20px" fontWeight="bold">
          {item.name}
        </Typography>
        <ModalRemove item={item} setFiltredList={setFiltredList} />
      </Box>

      <Box
        sx={{
          height: "85%",
          padding: "0px 15px",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Box
          sx={{
            padding: "10px",
            height: `${item.value1}px`,
            width: "15px",
            backgroundColor: "green",
            margin: "0px 50px",
            color: "wheat",
          }}
        >
          1
        </Box>
        <Box
          sx={{
            padding: "10px",
            height: `${item.value2}px`,
            width: "15px",
            backgroundColor: "blue",
            margin: "0px 50px",
            color: "wheat",
          }}
        >
          2
        </Box>
        <Box
          sx={{
            padding: "10px",
            height: `${item.value3}px`,
            width: "15px",
            backgroundColor: "black",
            margin: "0px 50px",
            color: "wheat",
          }}
        >
          3
        </Box>
        <Box
          sx={{
            padding: "10px",
            height: `${item.value4}px`,
            width: "15px",
            backgroundColor: "brown",
            margin: "0px 50px",
            color: "wheat",
          }}
        >
          4
        </Box>
        <Box
          sx={{
            padding: "10px",
            height: `${item.value5}px`,
            width: "15px",
            backgroundColor: "purple",
            margin: "0px 50px",
            color: "wheat",
          }}
        >
          5
        </Box>
      </Box>
    </Box>
  );
}
