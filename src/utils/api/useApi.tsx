import { HeadersInterface, IApiProps } from "@data/Interfaces/Api";
import { useState, useCallback } from "react";

export const useApi = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async ({ apiEndpoint, config, isAuthenticated }: IApiProps) => {
      try {
        setLoading(true);
        const headers: HeadersInterface = {
          headers: {
            "Content-Type": "application/json",
          },
          setAuthorization(token: string) {
            if (token) {
              headers.headers["Authorization"] = `Bearer ${token}`;
            }
          },
          addHeader(key: string, value: string) {
            headers.headers[key] = value;
          },
        };

        if (isAuthenticated) {
          const token = localStorage.getItem("token");
          headers.setAuthorization(token || "");
        }

        const response = await fetch(apiEndpoint, {
          method: config.httpVerb,
          headers: {
            "Content-Type": "application/json",
            ...headers.headers,
          },
          body: JSON.stringify(config.data),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          const responseData = await response.json();
          setData(responseData);
          setError(null);
          return responseData;
        }
      } catch (error: unknown) {
        if (typeof error === "string") {
          setError(error);
        } else if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
        return error;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const request = useCallback(
    ({ apiEndpoint, config, isAuthenticated }: IApiProps) => {
      return fetchData({ apiEndpoint, config, isAuthenticated });
    },
    [fetchData],
  );

  return {
    data,
    loading,
    error,
    request,
  };
};
