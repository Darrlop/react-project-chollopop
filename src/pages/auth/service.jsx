import { client, setAuthorizationHeader } from "../../api/client";
import storage from "../../utils/storage";

export const login = (formValues) => {
  const credentials = {
    email: formValues.userMail,
    password: formValues.password,
  };
  const checked = formValues.check;
  console.log(credentials);

  return client.post("/api/auth/login", credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
    if (checked) {
      storage.set("token", accessToken);
    }
  });

  // return client.post("/api/auth/login", credentials).then(({ accessToken }) => {
  //   setAuthorizationHeader(accessToken);
  // });
};
