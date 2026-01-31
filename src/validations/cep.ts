const valida_cep = (cep: string): boolean => {
    
    const digitos: string = cep.replace(/\D/g, "");

    if (digitos.length !== 8) return false;
    if (/^(\d)\1+$/.test(digitos)) return false;


    return true;
}

export { valida_cep };