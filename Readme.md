# br_standards_with_zod

Biblioteca leve, moderna e tipada para validação de documentos brasileiros (CPF, CNPJ e RG), integrada nativamente ao **Zod**.

Diferente de validações baseadas apenas em expressões regulares, esta biblioteca realiza a **validação matemática dos dígitos verificadores**, garantindo que o documento seja estruturalmente válido.

[![npm version](https://img.shields.io/npm/v/br_standards_with_zod.svg)](https://www.npmjs.com/package/br_standards_with_zod)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?logo=typescript)](https://www.typescriptlang.org/)

---

## Por que usar esta biblioteca?

- **Validação real**: cálculo matemático dos dígitos verificadores (CPF e CNPJ).
- **Aceita máscara ou não**: entradas como `123.456.789-09` são automaticamente normalizadas.
- **Transformação automática**: retorno sempre limpo (apenas números), pronto para persistência.
- **Integração nativa com Zod**: sem necessidade de `refine` manual.
- **Bloqueio de sequências inválidas**: ex.: `00000000000`, `11111111111`.
- **Dual build**: compatível com ESM e CommonJS.
- **Tipagem completa**: excelente suporte a IntelliSense.

---

## Instalação

```bash
npm install br_standards_with_zod zod
# ou
yarn add br_standards_with_zod zod
````

Exemplo (TypeScript / ESM)
````typescript
import { z } from 'zod';
import { zbr } from 'br_standards_with_zod';
const registerSchema = z.object({
  name: z.string().min(3),
  cpf: zbr.cpf("CPF inválido"),
  cnpj: zbr.cnpj()
});

const data = registerSchema.parse({
  name: "Braian de Liz",
  cpf: "123.456.789-09",
  cnpj: "12.345.678/0001-00"
});

console.log(data.cpf);  // "12345678909"
console.log(data.cnpj); // "12345678000100"
````

Exemplo Typescript CommonJS(.cjs)
`````typescript
const { z } = require('zod');
const { zbr } = require('br_standards_with_zod');

const registerSchema = z.object({
  name: z.string().min(3),
  cpf: zbr.cpf("CPF inválido"),
  cnpj: zbr.cnpj()
});

const data = registerSchema.parse({
  name: "Braian de Liz",
  cpf: "123.456.789-09",
  cnpj: "12.345.678/0001-00"
});

console.log(data.cpf);  // "12345678909"
console.log(data.cnpj); // "12345678000100"

`````

Métodos disponíveis
Método	Documento	Validação aplicada
zbr.cpf(msg?)	CPF	Cálculo de dígitos (módulo 11) + bloqueio de sequências repetidas
zbr.cnpj(msg?)	CNPJ	Validação matemática completa + normalização
zbr.rg(msg?)	RG	Validação estrutural (7 a 9 dígitos numéricos)
A mensagem de erro é opcional. Caso não informada, uma mensagem padrão será utilizada.

Compatibilidade
Projetada para ambientes modernos e fullstack:

Frontend e Backend: Browser, Node.js, Bun e Deno

Frameworks: React Hook Form, Fastify, NestJS, Next.js, Express

TypeScript-first: tipagem estrita e previsível

Testes
Os validadores são cobertos por testes automatizados utilizando Vitest.

npm test
Licença
Distribuído sob a licença MIT.
Consulte o arquivo LICENSE para mais informações.

Desenvolvido por
Braian de Liz da Silva


---
