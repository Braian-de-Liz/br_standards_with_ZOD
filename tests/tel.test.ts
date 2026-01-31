import { describe, it, expect } from 'vitest';
import { valide_tel } from '../src/validations/tel.js';

describe('Validação de Telefone/Celular', () => {
  it('deve retornar true para um celular válido com máscara (11 dígitos)', () => {
    expect(valide_tel('(11) 98888-7777')).toBe(true);
  });

  it('deve retornar true para um telefone fixo válido (10 dígitos)', () => {
    expect(valide_tel('47 3433-1234')).toBe(true);
  });

  it('deve retornar true apenas com números', () => {
    expect(valide_tel('11999998888')).toBe(true);
  });

  it('deve retornar false para DDD inexistente', () => {
    expect(valide_tel('01 98888-7777')).toBe(false); 
    expect(valide_tel('30 98888-7777')).toBe(false); 
  });

  it('deve retornar false para celular sem o dígito 9', () => {
    expect(valide_tel('11 88888-7777')).toBe(false);
  });

  it('deve retornar false para sequências repetidas', () => {
    expect(valide_tel('11111111111')).toBe(false);
  });

  it('deve retornar false para tamanho inválido', () => {
    expect(valide_tel('11 9888-777')).toBe(false); 
    expect(valide_tel('11 98888-77777')).toBe(false); 
  });
});