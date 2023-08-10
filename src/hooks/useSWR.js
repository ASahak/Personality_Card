import { useEffect, useRef } from 'react';
import useSWRProvider, { mutate as mutateSWR } from 'swr';

const fetcher = async (url, rest) => {
  const res = await fetch(url, rest);
  return res.json()
}
const useSWR = ({ url, key, fetcherOpts, opts = {} }) => {
  const _key = key || url;
  const { data, error, isValidating, mutate } = useSWRProvider(
    key ? { key, url } : url,
    () => {
      SWR.handleAbort(_key);
      const signal = SWR.getSignal(_key);
      if(fetcherOpts?.hasOwnProperty('params')) {
        url = url + '?' + new URLSearchParams({
          ...fetcherOpts.params
        })
      }
      return fetcher(url, { ...fetcherOpts, signal });
    },
    opts
  );

  return {
    data: data?.data,
    error,
    isError: !!error,
    isValidating,
    isLoading: !data && !error,
    mutate,
    cancel: () => SWR.cancel(_key),
  };
};

export const SWR = (() => {
  const _store = {};

  return {
    handleAbort(key) {
      if (_store[key]) {
        _store[key].abort();
        delete _store[key];
      }
      _store[key] = new AbortController();
    },
    getSignal: (key) => _store[key]?.signal,
    cancel: (key) => {
      if (key instanceof Array) {
        key.forEach((k) => {
          if (_store[k]) {
            _store[k].abort();
            delete _store[k];
          }
        });
      } else {
        if (_store[key]) {
          _store[key].abort();
          delete _store[key];
        }
      }
    },
    mutate: ({ url, key, fetcherOpts, opts = {} }) => {
      const _key = key || url;
      SWR.handleAbort(_key);
      const signal = SWR.getSignal(_key);
      if(fetcherOpts?.hasOwnProperty('params')) {
        url = url + '?' + new URLSearchParams({
          ...fetcherOpts.params
        })
      }
      return mutateSWR(
        key ? { key, url } : url,
        () => fetcher(url, { ...fetcherOpts, signal }),
        opts
      );
    },
  };
})();
export default useSWR;
