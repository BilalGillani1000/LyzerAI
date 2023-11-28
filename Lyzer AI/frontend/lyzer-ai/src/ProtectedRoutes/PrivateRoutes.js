import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../utils/init-firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

const PrivateRoutesLayout = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return "Loading...";
  }
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" />
  );
};


export default PrivateRoutesLayout;