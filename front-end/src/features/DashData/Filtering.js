import { useQuery } from "@tanstack/react-query";

async function filter(param) {
  const api = import.meta.env.VITE_API_BACKEND;
  try {
    // Handle undefined, null, or empty param
    const url = param ? `${api}/events/fil/${param}` : `${api}/events/fil/null`;

    const response = await fetch(url);

    if (!response.ok) {
      const errorText = await response.json();
      console.log("API error:", errorText);
      return { data: [], tags: [], message: errorText.message };
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Network error:", err);
    return { data: [], tags: [], message: "Unexpected error" };
  }
}

function useFiltering(param) {
  const { data, isLoading } = useQuery({
    queryKey: ['filter', param],
    queryFn: () => filter(param),
  });

  return { data, isLoading };
}

export default useFiltering;
