import { describe, it, expect } from 'vitest';
import { Valid_CPF } from '../src/validations/cpf';

describe('Validação de CPF', () => {
  it('deve retornar true para um CPF válido e formatado', () => {
    expect(Valid_CPF('123.456.789-09')).toBe(true);
  });

  it('deve retornar true para um CPF válido apenas com números', () => {
    expect(Valid_CPF('12345678909')).toBe(true);
  });

  it('deve retornar false para CPFs com dígitos verificadores errados', () => {
    expect(Valid_CPF('123.456.789-00')).toBe(false);
  });

  it('deve retornar false para CPFs com todos os números iguais', () => {
    expect(Valid_CPF('111.111.111-11')).toBe(false);
  });

  it('deve retornar false para strings com tamanho inválido', () => {
    expect(Valid_CPF('123.456.789-0')).toBe(false);
  });
});