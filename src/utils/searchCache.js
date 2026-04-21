export function saveSearch(query) {
  if (!query.trim()) return;

  let searches = JSON.parse(localStorage.getItem("recent_searches")) || [];

  searches = searches.filter(
    (item) => item.toLowerCase() !== query.toLowerCase(),
  );

  searches.unshift(query);

  searches = searches.slice(0, 3);

  localStorage.setItem("recent_searches", JSON.stringify(searches));
}

export function getSearches() {
  return JSON.parse(localStorage.getItem("recent_searches")) || [];
}
