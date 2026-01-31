# br_standards_with_zod

Biblioteca leve, moderna e tipada para validação de documentos brasileiros (CPF, CNPJ, RG, CEP e Telefone), integrada nativamente ao **Zod**.

Diferente de validações baseadas apenas em expressões regulares, esta biblioteca realiza a **validação matemática dos dígitos verificadores** e segue as normas da Anatel e Correios, garantindo que o dado seja estruturalmente válido.

[![npm version](https://img.shields.io/npm/v/br_standards_with_zod.svg)](https://www.npmjs.com/package/br_standards_with_zod)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?logo=typescript)](https://www.typescriptlang.org/)

---

## Por que usar esta biblioteca?

- **Validação real**: cálculo matemático de dígitos verificadores (CPF e CNPJ).
- **Padrões Oficiais**: Validação de DDDs reais e nono dígito para celulares.
- **Aceita máscara ou não**: entradas como `123.456.789-09` ou `(47) 99999-8888` são normalizadas automaticamente.
- **Transformação automática**: retorno sempre limpo (apenas números/letras relevantes), pronto para persistência.
- **Integração nativa com Zod**: sem necessidade de `refine` manual.
- **Bloqueio de sequências inválidas**: ex.: `00000000000`, `11111111`.
- **Dual build**: compatível com ESM e CommonJS.

---

## Instalação

```bash
npm install br_standards_with_zod zod
````

Exemplo (TypeScript / ESM)
````typescript
import { z } from 'zod';
import { zbr } from 'br_standards_with_zod';

const userSchema = z.object({
  name: z.string().min(3),
  cpf: zbr.cpf("CPF inválido"),
  tel: zbr.tel("Telefone fora do padrão"),
  cnpj: zbr.cnpj(),
  cep: zbr.cep()
});

const data = userSchema.parse({
  name: "João da Silva",
  cpf: "123.456.789-09",
  tel: "(47) 99888-7766",
  cep: "89201-000",
  cnpj: "12.345.678/0001-00"
});

console.log(data); 
/* { 
    name: "João da Silva", 
    cpf: "12345678909", 
    tel: "47998887766", 
    cep: "89201000" ,
    cnpj: "12345678000100"
  } 
*/
````

Exemplo Typescript CommonJS(.cjs)
`````typescript
const { z } = require('zod');
const { zbr } = require('br_standards_with_zod');

const registerSchema = z.object({
  name: z.string().min(3),
  cpf: zbr.cpf("CPF inválido"),
  tel: zbr.tel("Telefone fora do padrão"),
  cnpj: zbr.cnpj()
});

const data = registerSchema.parse({
  name: "João da Silva",
  cpf: "123.456.789-09",
  tel: "(47) 99888-7766",
  cnpj: "12.345.678/0001-00"
});

console.log(data.cpf);  // "12345678909"
console.log(data.cnpj); // "12345678000100"

`````

Métodos disponíveis
| Método        | Documento   | Validação aplicada                                                                 |
|---------------|-------------|------------------------------------------------------------------------------------|
| `zbr.cpf(msg?)`   | CPF         | Cálculo dos dígitos verificadores (módulo 11) + bloqueio de sequências repetidas    |
| `zbr.cnpj(msg?)`  | CNPJ        | Validação matemática completa + normalização                                        |
| `zbr.rg(msg?)`    | RG          | Aceita 7 a 9 caracteres; permite `X` apenas no final; bloqueia sequências inválidas |
| `zbr.cep(msg?)`   | CEP         | Verifica exatamente 8 dígitos numéricos e rejeita sequências como `11111111`        |
| `zbr.tel(msg?)`   | Telefone    | Valida DDDs reais da Anatel, exige nono dígito em celulares (11 dígitos) e aceita fixos (10 dígitos) |

> A mensagem de erro é opcional. Caso não informada, uma mensagem padrão será utilizada.

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
