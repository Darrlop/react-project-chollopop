import { client } from "../../api/client";

const articlesUrl = "api/v1/adverts";

export const getArticles = () => {
  return client.get(articlesUrl);
};

export const getArticle = (articleId) => {
  const url = articlesUrl + "/" + articleId;
  return client.get(url);
};

export const deleteArticle = (articleId) => {
  const url = articlesUrl + "/" + articleId;
  return client.delete(url);
};

export const postArticle = async (formValues) => {
  //Uso formData debido al envío del file
  const formData = new FormData();
  formData.append("name", formValues.name);
  formData.append("sale", formValues.sale === "venta" ? true : false);
  formData.append("price", formValues.price);
  formData.append("tags", formValues.tags);
  if (formValues.photo !== null) {
    formData.append("photo", formValues.photo);
  }

  try {
    const response = await client.post(articlesUrl, formData, {
      //Añado cabecera para que el tipo sea el indicado por swagger
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Respuesta del servidor:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al enviar la imagen:", error);
    throw error;
  }
};

//("Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmN2FlN2U0Mi00MTQ2LTQ2YmMtODI5Zi0yMGY3OTZkZjk4NmYiLCJpYXQiOjE3MTQ0MTAyODYsImV4cCI6MTc0NTk2Nzg4Nn0.x7WCXysyk_SqOosSHZ60AreN0mMpDmZQW7Q92tiNvzE");
