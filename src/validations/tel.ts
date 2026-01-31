const valide_tel = (telefone: string): boolean => {
    const digitos = telefone.replace(/\D/g, "");

    if (digitos.length !== 10 && digitos.length !== 11) return false;
    if (/^(\d)\1+$/.test(digitos)) return false;

    const validDDDs = [11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99];
    
    const ddd = parseInt(digitos.substring(0, 2));
    if (!validDDDs.includes(ddd)) return false;

    if (digitos.length === 11 && digitos[2] !== "9") return false;

    return true;
}

export { valide_tel };