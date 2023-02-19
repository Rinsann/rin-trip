import rinRequest from "@/services/request/index";

export function getHomeHotSuggests() {
  return rinRequest.get({ url: "/home/hotSuggests" });
}

export function getHomeCategories() {
  return rinRequest.get({
    url: "/home/categories",
  });
}

export function getHomeHouseList(currentPage) {
  return rinRequest.get({
    url: "/home/houselist",
    params: {
      page: currentPage,
    },
  });
}
