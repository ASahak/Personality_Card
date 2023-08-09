import { useEffect, useRef } from 'react';
import axios from 'axios';
import useSWRProvider, { mutate as mutateSWR } from 'swr';
import HttpClient from 'utils/http';

const fetcher = (args, HttpInstance = HttpClient) => HttpInstance(args);
const useSWR = ({ url, key, fetcherOpts, opts = {}, HttpInstance }) => {
  const _key = key || url;
  const { data, error, isValidating, mutate } = useSWRProvider(
    key ? { key, url } : url,
    () => {
      SWR.handleAbort(_key);
      const signal = SWR.getSignal(_key);
      return fetcher({ ...fetcherOpts, url, signal }, HttpInstance);
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

export const useSWRCancelUnMount = () => {
  const subscribers = useRef([]);

  const runTask = ({ key, ...rest }) => {
    subscribers.current.push(key);
    return SWR.mutate({ key, ...rest });
  };

  useEffect(
    () => () => {
      subscribers.current.forEach((key) => SWR.cancel(key));
    },
    []
  );

  return runTask;
};

export const SWR = (() => {
  const _store = {};

  return {
    hasCanceled: (err) => axios.isCancel(err),
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
    mutate: ({ url, key, fetcherOpts, opts = {}, HttpInstance }) => {
      const _key = key || url;
      SWR.handleAbort(_key);
      const signal = SWR.getSignal(_key);
      return mutateSWR(
        key ? { key, url } : url,
        () => fetcher({ ...fetcherOpts, url, signal }, HttpInstance),
        opts
      );
    },
  };
})();
export default useSWR;
