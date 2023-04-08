export function debounce<T extends unknown[]>(
  fn: (...argList: T) => void,
  timeout: number
) {
  let timer: number | undefined;
  return (...argList: T) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
      fn(...argList);
    }, timeout);
  };
}
