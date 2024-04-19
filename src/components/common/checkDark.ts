export const checkDark = () =>
  window.window.matchMedia('(prefers-color-scheme: dark)').matches;

console.log('[env] current theme is: ', checkDark() ? 'dark' : 'light');
