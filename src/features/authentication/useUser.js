import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const {
    isLoading,
    data: user,
    isFetching,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  return {
    isLoading,
    user,
    isAUthenticate: user?.role === "authenticated",
    isFetching,
  };
}
