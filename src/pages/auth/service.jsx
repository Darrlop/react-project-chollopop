import {
  client,
  deleteAuthorizationHeader,
  setAuthorizationHeader,
} from "../../api/client";
import storage from "../../utils/storage";

export const login = (formValues) => {
  const credentials = {
    email: formValues.userMail,
    password: formValues.password,
  };
  const checked = formValues.check;

  return client
    .post("/api/auth/login", credentials)
    .then(({ accessToken }) => {
      setAuthorizationHeader(accessToken);
      if (checked) {
        storage.set("token", accessToken);
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const logout = () => {
  return Promise.resolve().then(() => {
    deleteAuthorizationHeader();
    storage.remove("token");
  });
};
