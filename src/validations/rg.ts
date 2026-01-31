const RG_validate = (rg: string): boolean => {
  const clean = rg.toUpperCase().replace(/[^0-9X]/g, "");

  if (clean.length < 7 || clean.length > 9) return false;

  if (clean.includes("X") && clean.indexOf("X") !== clean.length - 1) {
    return false;
  }

  if (/^(\d)\1+$/.test(clean)) return false;

  return true;
};

export { RG_validate };