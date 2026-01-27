import { describe, it, expect } from 'vitest';
import { Validation_cnpj } from '../src/validations/cnpj.js';

describe('Validação de CNPJ', () => {
  it('deve retornar true para um CNPJ válido com máscara', () => {
    expect(Validation_cnpj('06.990.590/0001-04')).toBe(true);
  });

  it('deve retornar true para um CNPJ válido apenas números', () => {
    expect(Validation_cnpj('06990590000104')).toBe(true);
  });

  it('deve retornar false para CNPJ com dígitos errados', () => {
    expect(Validation_cnpj('12.345.678/0001-99')).toBe(false);
  });

  it('deve retornar false para sequências repetidas', () => {
    expect(Validation_cnpj('11111111111111')).toBe(false);
  });
});