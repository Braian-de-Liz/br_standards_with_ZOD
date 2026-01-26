// src\validations\cnpj.ts
const Validation_cnpj = (cnpj: string): boolean => {
    const digitos = cnpj.replace(/\D/g, "");

    if (digitos.length !== 14 || /^(\d)\1+$/.test(digitos)) {
        return false;
    }

    const calcDigit = (slice: string): number => {
        let pesos = slice.length === 12 ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

        const sum = slice.split("").reduce((acc, digit, idx) => {
            return acc + parseInt(digit) * (pesos[idx] || 0);
        }, 0);

        const resto = sum % 11;
        return resto < 2 ? 0 : 11 - resto;
    };

    const digit1 = calcDigit(digitos.substring(0, 12));
    if (digit1 !== parseInt(digitos.substring(12, 13))) return false;

    const digit2 = calcDigit(digitos.substring(0, 13));
    if (digit2 !== parseInt(digitos.substring(13, 14))) return false;

    return true;
}

export { Validation_cnpj };