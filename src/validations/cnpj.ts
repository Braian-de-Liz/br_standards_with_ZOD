const Validation_cnpj = (cnpj: string): boolean => {
    const digits = cnpj.replace(/\D/g, "");

    if (digits.length !== 14 || /^(\d)\1+$/.test(digits)) return false;

    const calc = (slice: string, pesos: number[]) => {
        let sum = 0;
        for (let i = 0; i < slice.length; i++) {
            sum += Number(slice[i]) * pesos[i]!;
        }
        const mod = sum % 11;
        return mod < 2 ? 0 : 11 - mod;
    };

    const p1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const p2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const d1 = calc(digits.substring(0, 12), p1);
    const d2 = calc(digits.substring(0, 13), p2);

    return digits.endsWith(`${d1}${d2}`);
};

export { Validation_cnpj };