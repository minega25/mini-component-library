export function spreadStyles(styles) {
  const cssFormat = Object.entries(styles).reduce((acc, [key, value]) => {
    return `${acc} ${key}: ${value};`;
  }, '');

  return cssFormat;
}
