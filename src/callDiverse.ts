import { Response } from "node-fetch";
import { DIVERSE_URL, DiverseAPI } from "./diverse_constants";

const fetch = require("node-fetch");

/**
 * Returns the response body of the requested url, url should be encoded with encodeURIComponent if there are additional
 * parameters for the requested url.
 *
 * Example request using URL query parameters:
 *   https://us-central1-<project-id>.cloudfunctions.net/cors?url=https%3A%2F%2Fapi.ipify.org%3Fformat%3Djson
 * Example request using request body with cURL:
 *   curl -H 'Content-Type: application/json' \
 *        -d '{"url": "https://api.ipify.org/?format=json"}' \
 *        https://us-central1-<project-id>.cloudfunctions.net/cors
 *
 * This endpoint supports CORS.
 */
export function callDiverse<T>(api: DiverseAPI, data: T) {
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
      .then((r: Response) => {
        return r.headers.get("content-type") === "application/json" ? r.json() : r.text();
      });
}
