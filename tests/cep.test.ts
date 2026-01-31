import { describe, it, expect } from 'vitest';
import { valida_cep } from '../src/validations/cep.js';

describe('Validação de CEP', () => {
  it('deve retornar true para um CEP válido com máscara', () => {
    expect(valida_cep('89201-000')).toBe(true);
  });

  it('deve retornar true para um CEP válido apenas números', () => {
    expect(valida_cep('01001000')).toBe(true);
  });

  it('deve retornar false para CEP com tamanho errado', () => {
    expect(valida_cep('89201-00')).toBe(false);
    expect(valida_cep('892010000')).toBe(false);
  });

  it('deve retornar false para sequências repetidas', () => {
    expect(valida_cep('11111111')).toBe(false);
  });

  it('deve retornar false para strings vazias ou letras', () => {
    expect(valida_cep('abc-defgh')).toBe(false);
  });
});