import Container from "@mui/material/Container";
import ModalAdd from "../modalAdd";
import Card from "../card";

export default function Dashboard({ list, filtredList, setFiltredList }) {
  return (
    <Container>
      <Container
        sx={{
          overflowY: "auto",
          height: "85vh",
          border: "2px solid black",
          marginTop: "30px",
        }}
      >
        {filtredList.length > 0
          ? filtredList.map((i) => {
              return <Card item={i} setFiltredList={setFiltredList} />;
            })
          : list.map((i) => {
              return <Card item={i} setFiltredList={setFiltredList} />;
            })}
      </Container>
      <ModalAdd />
    </Container>
  );
}
