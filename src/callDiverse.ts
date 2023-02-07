import {DIVERSE_URL, DiverseEndpoint} from "./diverse_constants";
import fetch from 'cross-fetch';
export function callDiverse<T, R>(api: DiverseEndpoint, data: T): Promise<R> {
  let url = DIVERSE_URL[api];

  if (!url) {
    throw new Error("URL is empty.");
  }

  console.log("Request:", url);

  if (url.startsWith("/")) {
    url = url.slice(1);
  }

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "text/html; charset=UTF-8",
    },
    body: JSON.stringify(data),
  })
    .then(async (r: Response) => {
      return (r.headers.get("content-type")?.includes("application/json")
        ? await r.json()
        : await r.text()) as R;
    });
}
