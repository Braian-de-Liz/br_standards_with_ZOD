// src\validations\cpf.ts
const Valid_CPF = (cpf: string): boolean => {
    const digitos = cpf.replace(/\D/g, "");

    if (digitos.length !== 11 || /^(\d)\1+$/.test(digitos)) {
        return false;
    }

    const calcDigit = (slice: string, factor: number): number => {
        const sum = slice
            .split("")
            .reduce((acc, digit, idx) => acc + parseInt(digit) * (factor - idx), 0);

        const result = (sum * 10) % 11;
        return result === 10 ? 0 : result;
    };

    const digit1 = calcDigit(digitos.substring(0, 9), 10);
    if (digit1 !== parseInt(digitos.substring(9, 10))) {
        return false;
    }

    const digit2 = calcDigit(digitos.substring(0, 10), 11);
    if (digit2 !== parseInt(digitos.substring(10, 11))) {
        return false;
    }

    return true;
}

export { Valid_CPF }