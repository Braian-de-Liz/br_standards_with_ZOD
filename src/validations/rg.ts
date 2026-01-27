// src\validations\rg.ts
const validateDígitoRG = (rg: string): boolean => {
    const base = rg.substring(0, 8);
    const dvInformado = rg.substring(8, 9);

    let soma = 0;
    for (let i = 0; i < 8; i++) {
        soma += parseInt(base[i]!) * (i + 2);
    }

    const resto = soma % 11;
    const dvCalculado = resto === 0 ? "0" : (11 - resto).toString();

    return dvInformado === dvCalculado;
};

const RG_validate = (RG: string): boolean => {
    const digitos = RG.replace(/\D/g, "");

    if (digitos.length < 7 || digitos.length > 9) {
        return false;
    }

    if (digitos.length === 9) {
        return validateDígitoRG(digitos);
    }

    return true;
};


export { RG_validate };