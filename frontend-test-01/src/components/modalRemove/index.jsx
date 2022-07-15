import { Button, IconButton, Modal, Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as yup from "yup";
import { removeNewItem, UpdateNewItem } from "../../store/modules/itens/thunks";
import "./style.css";

export default function ModalRemove({ item, setFiltredList }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatorio"),
    value1: yup.number().required("Campo obrigatorio"),
    value2: yup.number().required("Campo obrigatorio"),
    value3: yup.number().required("Campo obrigatorio"),
    value4: yup.number().required("Campo obrigatorio"),
    value5: yup.number().required("Campo obrigatorio"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    dispatch(UpdateNewItem(item, data));
    handleClose();
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <IconButton size="large" onClick={handleOpen}>
        <MoreVertIcon fontSize="inherit" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40%",
            height: "60%",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <form display="flex" onSubmit={handleSubmit(onSubmitFunction)}>
            <input placeholder="Nome" {...register("name")} />
            <input
              type="number"
              min="0"
              max="220"
              placeholder="Valor 1"
              {...register("value1")}
            />
            <input
              type="number"
              min="0"
              max="220"
              placeholder="Valor 2"
              {...register("value2")}
            />

            <input
              type="number"
              min="0"
              max="220"
              placeholder="valor 3"
              {...register("value3")}
            />
            <input
              type="number"
              min="0"
              max="220"
              placeholder="valor 4"
              {...register("value4")}
            />
            <input
              type="number"
              min="0"
              max="220"
              placeholder="valor 5"
              {...register("value5")}
            />
            <Button type="submit">Atualizar</Button>
            <Button
              color="error"
              onClick={() => {
                dispatch(removeNewItem(item));
                setFiltredList([]);
                handleClose();
              }}
            >
              Deletar
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}
