export function compilePath(path) {
  const keys = [];
  const pattern = path.replace(/:([^/]+)/g, (_, key) => {
    keys.push(key);
    return '([^/]+)';
  });
  const regex = new RegExp('^' + pattern + '$');
  return { regex, keys };
}
export function matchRoute(routePath, pathname) {
  const { regex, keys } = compilePath(routePath);
  const m = pathname.match(regex);
  if (!m) return null;
  const params = {};
  keys.forEach((k, i) => (params[k] = decodeURIComponent(m[i + 1])));
  return params;
}
