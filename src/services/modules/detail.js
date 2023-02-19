import rinRequest from "../request";

export function getDetailInfos(houseId) {
  return rinRequest.get({
    url: "/detail/infos",
    params: {
      houseId,
    },
  });
}
