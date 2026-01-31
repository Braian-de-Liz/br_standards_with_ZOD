// src\index.ts
import { z } from "zod";
import { Valid_CPF } from "./validations/cpf.js";
import { Validation_cnpj } from "./validations/cnpj.js";
import { RG_validate } from "./validations/rg.js";
import { valide_tel } from "./validations/tel.js";
import { valida_cep } from "./validations/cep.js";

const zbr = {

    cpf: (msg?: string) => z.string()
        .transform(v => v.replace(/\D/g, ""))
        .refine(val => val.length === 11, "CPF deve ter 11 dígitos")
        .refine(Valid_CPF, { message: msg || "CPF inválido" }),

    cnpj: (msg?: string) => z.string()
        .transform(v => v.replace(/\D/g, ""))
        .refine(val => val.length === 14, "CNPJ deve ter 14 dígitos")
        .refine(Validation_cnpj, { message: msg || "CNPJ inválido" }),

    rg: (msg?: string) => z.string()
        .transform(v => v.replace(/[^0-9X]/gi, "").toUpperCase())
        .refine(RG_validate, { message: msg || "RG inválido" }),

    tel: (msg?: string) => z.string().transform(v => v.replace(/\D/g, ""))
        .refine(valide_tel, { message: msg || "Telefone inválido" }),

    cep: (msg?: string) => z.string().transform(v => v.replace(/\D/g, ""))
        .refine(valida_cep, { message: msg || "cep inválido" })
};

export { zbr };