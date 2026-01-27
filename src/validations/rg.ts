const RG_validate = (rg: string): boolean => {
  const clean = rg.toUpperCase().replace(/[^0-9X]/g, "");

  if (clean.length < 7 || clean.length > 9) return false;

  if (clean.length === 9) {
    const base = clean.substring(0, 8);
    const digitoInformado = clean[8];

    let soma = 0;

    for (let i = 0; i < 8; i++) {
      soma += Number(base[i]) * (i + 2);
    }

    const resto = soma % 11;
    let digitoEsperado = "";

    if (resto === 0) {
      digitoEsperado = "0";
    } else if (resto === 1) {
      digitoEsperado = "X";
    } else {
      digitoEsperado = (11 - resto).toString();
    }

    return digitoInformado === digitoEsperado;
  }

  return true;
};

export { RG_validate };