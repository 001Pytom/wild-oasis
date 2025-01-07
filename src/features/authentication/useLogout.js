import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    /**
     * Navigates to the login page after a successful logout.
     *
     * This ensures that the user is sent to a login page after they have
     * successfully logged out, and that the navigation is a replacement
     * (i.e. the user can't navigate back to the previous page).
     */
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });
  return { logout, isLoading };
}
