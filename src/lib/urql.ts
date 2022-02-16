import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from 'urql';

const isServerSide = typeof window === 'undefined';

const ssrCache = ssrExchange({ isClient: !isServerSide });

const client = createClient({
  url: 'https://api-ca-central-1.graphcms.com/v2/ckzpuod8c5dx501xk507e1y7j/master',
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
});

export { client, ssrCache };
