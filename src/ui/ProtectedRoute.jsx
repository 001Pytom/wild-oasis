import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. Load the authenticated user
  const { isLoading, isAUthenticate, isFetching } = useUser();

  //3. if theres no authenticated user, redirect to /login
  useEffect(
    function () {
      if (!isAUthenticate && isLoading && !isFetching) navigate("/login");
    },
    [isLoading, isAUthenticate, navigate, isFetching]
  );
  //2. while loading , show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  //4if there is a user , reidrect the app
  if (isAUthenticate) return children;

  return children;
}

export default ProtectedRoute;
