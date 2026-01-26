# 🇧🇷 br_standards_with_zod

Uma biblioteca leve, moderna e de alto desempenho para validação de documentos brasileiros (CPF, CNPJ, RG) integrada nativamente ao **Zod**.

[![npm version](https://img.shields.io/npm/v/br_standards_with_zod.svg)](https://www.npmjs.com/package/br_standards_with_zod)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?logo=typescript)](https://www.typescriptlang.org/)

## 🚀 Por que usar esta biblioteca?

Diferente de validações baseadas apenas em Expressões Regulares (Regex), a **br_standards_with_zod** executa o cálculo matemático dos dígitos verificadores, garantindo que o documento seja real e válido.

- **Limpeza Automática:** Aceita documentos com máscara (ex: `123.456.789-01`) e retorna apenas os números (`12345678901`) através do `.transform()`.
- **Dual Build:** Suporte nativo para **ESM** (`import`) e **CommonJS** (`require`), graças ao build otimizado com `tsup`.
- **Zero Boilerplate:** Não precisa criar funções de refinamento complexas no Zod; já entregamos o método pronto e tipado.
- **Segurança:** Bloqueia automaticamente sequências repetidas (ex: `111.111.111-11`).

---

## 📦 Instalação

```bash
npm install br_standards_with_zod zod
# ou
yarn add br_standards_with_zod zod


Tchuu-Tchuu
Gem personalizado
Aqui está o conteúdo completo para o seu arquivo README.md, pronto para copiar e colar.

Markdown
# 🇧🇷 br_standards_with_zod

Uma biblioteca leve, moderna e de alto desempenho para validação de documentos brasileiros (CPF, CNPJ, RG) integrada nativamente ao **Zod**.

[![npm version](https://img.shields.io/npm/v/br_standards_with_zod.svg)](https://www.npmjs.com/package/br_standards_with_zod)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?logo=typescript)](https://www.typescriptlang.org/)

## 🚀 Por que usar esta biblioteca?

Diferente de validações baseadas apenas em Expressões Regulares (Regex), a **br_standards_with_zod** executa o cálculo matemático dos dígitos verificadores, garantindo que o documento seja real e válido.

- **Limpeza Automática:** Aceita documentos com máscara (ex: `123.456.789-01`) e retorna apenas os números (`12345678901`) através do `.transform()`.
- **Dual Build:** Suporte nativo para **ESM** (`import`) e **CommonJS** (`require`), graças ao build otimizado com `tsup`.
- **Zero Boilerplate:** Não precisa criar funções de refinamento complexas no Zod; já entregamos o método pronto e tipado.
- **Segurança:** Bloqueia automaticamente sequências repetidas (ex: `111.111.111-11`).

---

## 📦 Instalação

```bash
npm install br_standards_with_zod zod
# ou
yarn add br_standards_with_zod zod
🛠️ Como Usar
A biblioteca oferece o objeto zbr, que contém métodos encadeáveis ao Zod.

Exemplo em TypeScript / ESM
TypeScript
import { z } from 'zod';
import { zbr } from 'br_standards_with_zod';

const registerSchema = z.object({
  name: z.string().min(3),
  cpf: zbr.cpf("CPF inválido!"), // Mensagem customizada é opcional
  cnpj: zbr.cnpj()
});

// A lib aceita entradas com ou sem máscara
const data = registerSchema.parse({
  name: "Braian de Liz",
  cpf: "123.456.789-09",
  cnpj: "12.345.678/0001-00"
});

// O Zod retorna o dado limpo (apenas números), pronto para o banco de dados
console.log(data.cpf);  // Saída: "12345678909"
console.log(data.cnpj); // Saída: "12345678000100"
🔍 Métodos Disponíveis
Método	Descrição	Regra de Validação
zbr.cpf(msg?)	Cadastro de Pessoa Física	Validação matemática de dígitos (Módulo 11) + bloqueio de repetidos.
zbr.cnpj(msg?)	Cadastro Nacional de Pessoa Jurídica	Validação matemática completa e remoção automática de máscara.
zbr.rg(msg?)	Registro Geral	Validação de formato básico (7 a 9 dígitos numéricos).
⚙️ Compatibilidade
Esta biblioteca foi projetada para ser universal.

Frontend & Backend: Funciona no Navegador, Node.js, Bun e Deno.

Fullstack: Compatível com React Hook Form, Fastify, NestJS, Next.js e Express.

Tipagem: Suporte total a IntelliSense para uma melhor experiência de desenvolvimento.

🧪 Testes
Nós utilizamos o Vitest para garantir a precisão de cada validador. Para rodar os testes localmente:

Bash
npm test
📄 Licença
Distribuído sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Feito com ❤️ por Braian de Liz da Silva

