import { describe, it, expect } from 'vitest';
import { RG_validate } from '../src/validations/rg.js';

describe('Validação de RG', () => {
  it('deve aceitar RG com 7 dígitos (apenas tamanho)', () => {
    expect(RG_validate('12.345.67')).toBe(true);
  });

  it('deve aceitar RG com 9 dígitos (matematicamente válido)', () => {
    expect(RG_validate('25.634.720-7')).toBe(true);
  });

  it('deve aceitar RG terminando em X', () => {
    expect(RG_validate('11.520.147-X')).toBe(true);
  });

  it('deve rejeitar RG com menos de 7 dígitos', () => {
    expect(RG_validate('123456')).toBe(false);
  });

  it('deve rejeitar RG com mais de 9 dígitos', () => {
    expect(RG_validate('1234567890')).toBe(false);
  });
});