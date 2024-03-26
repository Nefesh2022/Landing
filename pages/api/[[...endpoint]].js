import getEndpointUrl from '@/utils/url';
import { API_BASE_URL, isDevelopment } from '@/services/constants';

const DEBUG_ENABLED = isDevelopment && true;

const log = (...args) => {
  // eslint-disable-next-line no-console
  if (DEBUG_ENABLED) console.log(...args);
};

const handler = async ({ method, query, body, headers }, resToFront) => {
  const url = getEndpointUrl(API_BASE_URL, query);
  log('URL: ', url);

  try {
    switch (method.toUpperCase()) {
      case 'GET': {
        const resFromBack = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: headers.authorization,
          },
          method,
          mode: 'cors',
        });
        log('RES: ', resFromBack);

        if (resFromBack.status !== 200)
          return resToFront.status(resFromBack.status).json({ data: null });

        const { data } = await resFromBack.json();
        return resToFront.status(200).json({ data });
      }
      case 'POST':
      case 'PUT':
      case 'DELETE': {
        const resFromBack = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: headers.authorization,
          },
          method,
          mode: 'cors',
          body: JSON.stringify(body),
        });
        log('RES: ', resFromBack);

        if (![200, 201].includes(resFromBack.status))
          return resToFront.status(resFromBack.status).json({ data: null });

        const { data } = await resFromBack.json();
        return resToFront.status(200).json({ data: data ?? null });
      }
      default:
        return resToFront.status(405).json({ data: null });
    }
  } catch (error) {
    log('Error: ', error);
    resToFront.status(500).json({ data: null });
  }
};

export default handler;
