import { Link, Navigate, useNavigate } from "react-router-dom";
import { deleteArticle } from "./service";
import Button from "../../components/shared/Button";

export default function deleteButton({ articleId }) {
  const navigate = useNavigate();

  const handleDeleteCLick = async (event) => {
    const deleteOK = window.confirm("¿Deseas eliminar este artículo?");
    if (deleteOK) {
      try {
        navigate("/articles");
        await deleteArticle(articleId);
      } catch (error) {
        alert("Error en el borrado del artículo: " + error.mesagge);
      }
    }
  };

  return <Button onClick={handleDeleteCLick}>Eliminar</Button>;
}
