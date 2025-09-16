
import { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

type UseApiResult<T> = {
  data: T | null;
  loading: boolean;
  error: unknown;
  refetch: () => Promise<void>;
};

/**
 * Custom React hook for performing API requests using Axios.
 *
 * @template T The expected response data type.
 * @param url - The URL to send the request to.
 * @param options - Optional Axios request configuration.
 * @returns An object containing:
 *   - `data`: The response data or `null` if not loaded.
 *   - `loading`: Boolean indicating if the request is in progress.
 *   - `error`: Any error encountered during the request.
 *   - `refetch`: Function to manually trigger the request again.
 *
 * @example
 * const { data, loading, error, refetch } = useApi<User[]>('/api/users');
 */
function useApi<T = any>(
  url: string,
  options: AxiosRequestConfig = {}
): UseApiResult<T> {
  // Memoize options to prevent infinite loop if a new object is passed each render
  const memoizedOptions = useMemo(() => options, [JSON.stringify(options)]);
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);


  const fetchData = useCallback(async (): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const response: AxiosResponse<T> = await axios(url, memoizedOptions);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url, memoizedOptions]);


  useEffect(() => {
    fetchData();
  }, [fetchData]);


  return { data, loading, error, refetch: fetchData };
}


export default useApi;