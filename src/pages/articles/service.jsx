import { client } from "../../api/client";

const articlesUrl = "api/v1/adverts";

export const getArticles = () => {
  return client.get(articlesUrl);
};

//("Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmN2FlN2U0Mi00MTQ2LTQ2YmMtODI5Zi0yMGY3OTZkZjk4NmYiLCJpYXQiOjE3MTQ0MTAyODYsImV4cCI6MTc0NTk2Nzg4Nn0.x7WCXysyk_SqOosSHZ60AreN0mMpDmZQW7Q92tiNvzE");
