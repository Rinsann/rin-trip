import rinRequest from "../request";

export function getCityAll() {
  return rinRequest.get({
    url: "/city/all",
  });
}
