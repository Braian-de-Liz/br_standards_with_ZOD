// src\validations\rg.ts

const RG_validate = (RG: string): boolean => {
    const digitos: string = RG.replace(/\D/g, "");

    if (digitos.length < 7 || digitos.length > 9) {
        return false;
    }

    return true
}

export { RG_validate };