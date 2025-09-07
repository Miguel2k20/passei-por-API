# PasseiPor

**Visão Geral**

O **PasseiPor** é um projeto onde a pessoa registra viagens como uma **recordação digital**. É possível buscar países, marcar onde já esteve e escrever um relato da experiência. Assim, cada viagem vira uma lembrança única dentro da plataforma, criando um diário pessoal de descobertas pelo mundo.

---

# API do PasseiPor

Guia de referência para integração com a API de países usada pelo Passei Por.

## Base URL

* API tercerizada: [`https://api.passeipor.com`](https://api.passeipor.com)
* API Projeto: [`http://localhost:3000`](http://localhost:3000)


---

# Endpoints

## GET `/country`

**Função:** Retorna a lista de países disponíveis na API.

**Resposta:** 200 OK

```json
[ ... ]
```

## POST `/country`

**Função:** Registra um país visitado pelo usuário.

**Requisição:**

```json
{
  "ccn3": "string",
  "note": "string"
}
```

**Resposta:**

```json
{
  "status": 200,
  "message": "Country registered successfully"
}
```

## PUT `/country/{id}`

**Função:** Atualiza o país já visitado pelo usuário.

**Requisição:**

```json
{
  "note": "string"
}
```

**Resposta:**

```json
{
  "status": 200,
  "message": "Country visited updated successfully"
}
```

## DELETE `/country/{id}`

**Função:** Deleta um país visitado pelo usuário.

**Resposta:**

```json
{
  "status": 200,
  "message": "Country deleted successfully"
}
```

## GET `/country-visited/{id}`

**Função:** Recupera as informações de um país junto com as anotações do usuário.

**Resposta:**

```json
{
  "notes": "Lorem ipsum",
  "country-info": {
    "flags": { ... },
    "name": { ... },
    "ccn3": "076",
    "currencies": { ... },
    "capital": ["Brasília"],
    "region": "Americas",
    "subregion": "South America",
    "languages": { "por": "Portuguese" },
    "maps": { ... },
    "population": 212559409
  }
}
```

---

# Banco de Dados

O banco de dados do PasseiPor possui uma estrutura simples, utilizando apenas uma tabela principal para armazenar as informações dos países visitados pelos usuários.

## Tabela: `countries_visited`

| Coluna | Tipo/Propriedades                 |
| ------ | --------------------------------- |
| id     | INTEGER PRIMARY KEY AUTOINCREMENT |
| ccn3   | TEXT NOT NULL                     |
| notes  | TEXT NOT NULL                     |

---

# Como Rodar o Projeto

1. Certifique-se de estar usando **Node.js v22.16.0**.
2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
npm run dev
```

> O servidor estará disponível em `http://localhost:3000`.

---

# Observações

* Use `GET /country` para obter informações completas sobre qualquer país antes de registrar ou atualizar dados.
* Sempre valide os dados no frontend antes de enviar para a API.
* O banco de dados é local (`database.db`) e **não deve ser versionado** no repositório.
