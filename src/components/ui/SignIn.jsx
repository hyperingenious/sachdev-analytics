import { useEffect, useState } from "react";
import styles from "./SignIn.module.css";
import { Button } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import {
  fetchLogin,
  fetchSession,
  resetAuthState,
} from "../../redux/authSlice";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { authenticated, status, error } = useSelector((store) => store.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // Credential check
    if (!credentials.email) {
      toast.error("Enter valid email");
      return;
    }
    if (!credentials.password) {
      toast.error("Enter valid password");
      return;
    }

    dispatch(resetAuthState());
    dispatch(fetchLogin(credentials));

    if (error) {
      toast.error("Invalid Credentials");
      return;
    }

    setCredentials((cred) => ({ ...cred, email: "", password: "" }));
  }

  useEffect(
    function () {
      dispatch(fetchSession());
      if (authenticated) navigate("/dashboard");
    },
    [error, authenticated, navigate, dispatch]
  );

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className={styles.container}>
        <h1 className={styles.title}>Add your credentials</h1>
        <div className={styles.card}>
          <form onSubmit={(e) => handleSubmit(e, credentials)}>
            <input
              type="email"
              placeholder="Email"
              value={credentials.email}
              onChange={(e) =>
                setCredentials((cred) => ({ ...cred, email: e.target.value }))
              }
            />
            <input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials((cred) => ({
                  ...cred,
                  password: e.target.value,
                }))
              }
            />
            <div className={styles.buttons}>
              <Button type="submit">
                {status === "loading" ? (
                  <Loader size="xs" type="oval" color="white" />
                ) : (
                  "Login"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
