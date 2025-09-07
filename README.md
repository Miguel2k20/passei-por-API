# PasseiPor / API

## Visão Geral

O **PasseiPor** é um projeto onde a pessoa registra viagens como uma **recordação digital**. É possível buscar países, marcar onde já esteve e escrever um relato da experiência. Assim, cada viagem vira uma lembrança única dentro da plataforma, criando um diário pessoal de descobertas pelo mundo.

---

## Base URL

* API terceirizada: [`https://restcountries.com/`](https://restcountries.com/)
* API Projeto local: [`http://localhost:3000`](http://localhost:3000)

---

## Endpoints

### GET `/country`

**Função:** Retorna a lista de países disponíveis na API.

**Resposta:** 200 OK

```json
[
  {
    "flags": {
      "png": "https://flagcdn.com/w320/br.png",
      "svg": "https://flagcdn.com/br.svg",
      "alt": "The flag of Brazil has a green field with a large yellow rhombus in the center. Within the rhombus is a dark blue globe with twenty-seven small five-pointed white stars depicting a starry sky and a thin white convex horizontal band inscribed with the national motto 'Ordem e Progresso' across its center."
    },
    "name": {
      "common": "Brazil",
      "official": "Federative Republic of Brazil",
      "nativeName": {
        "por": {
          "official": "República Federativa do Brasil",
          "common": "Brasil"
        }
      }
    },
    "ccn3": "076",
    "currencies": {
      "BRL": {"name": "Brazilian real", "symbol": "R$"}
    },
    "capital": ["Brasília"],
    "region": "Americas",
    "subregion": "South America",
    "languages": {"por": "Portuguese"},
    "maps": {
      "googleMaps": "https://goo.gl/maps/waCKk21HeeqFzkNC9",
      "openStreetMaps": "https://www.openstreetmap.org/relation/59470"
    },
    "population": 212559409
  }
]
```

---

### POST `/country`

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

---

### PUT `/country/{id}`

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

---

### DELETE `/country/{id}`

**Função:** Deleta um país visitado pelo usuário.

**Resposta:**

```json
{
  "status": 200,
  "message": "Country deleted successfully"
}
```

---

### GET `/country-visited/{id}`

**Função:** Recupera as informações de um país junto com as anotações do usuário.

**Resposta:**

```json
{
  "id": 423,
  "ccn3": "045",
  "notes": "Lorem ipsum",
  "country-info": {
    "flags": {
      "png": "https://flagcdn.com/w320/br.png",
      "svg": "https://flagcdn.com/br.svg",
      "alt": "The flag of Brazil has a green field with a large yellow rhombus in the center. Within the rhombus is a dark blue globe with twenty-seven small five-pointed white stars depicting a starry sky and a thin white convex horizontal band inscribed with the national motto 'Ordem e Progresso' across its center."
    },
    "name": {
      "common": "Brazil",
      "official": "Federative Republic of Brazil",
      "nativeName": {"por": {"official": "República Federativa do Brasil","common": "Brasil"}}
    },
    "ccn3": "076",
    "currencies": {"BRL": {"name": "Brazilian real", "symbol": "R$"}},
    "capital": ["Brasília"],
    "region": "Americas",
    "subregion": "South America",
    "languages": {"por": "Portuguese"},
    "maps": {"googleMaps": "https://goo.gl/maps/waCKk21HeeqFzkNC9", "openStreetMaps": "https://www.openstreetmap.org/relation/59470"},
    "population": 212559409
  }
}
```

---

### GET `/country-visited/`

**Função:** Recupera todas as informações dos países visitados pelo usuário.

**Resposta:** 200 OK

```json
[
  {
    "flags": {
      "png": "https://flagcdn.com/w320/jm.png",
      "svg": "https://flagcdn.com/jm.svg",
      "alt": "The flag of Jamaica is divided by a gold diagonal cross into four alternating triangular areas of green at the top and bottom, and black on the hoist and fly sides"
    },
    "name": {
      "common": "Jamaica",
      "official": "Jamaica",
      "nativeName": {
        "eng": {"official": "Jamaica", "common": "Jamaica"},
        "jam": {"official": "Jamaica", "common": "Jamaica"}
      }
    },
    "ccn3": "388",
    "currencies": {"JMD": {"name": "Jamaican dollar", "symbol": "$"}},
    "capital": ["Kingston"],
    "region": "Americas",
    "subregion": "Caribbean",
    "translations": {
      "por": {"official": "Jamaica", "common": "Jamaica"}
    },
    "maps": {"googleMaps": "https://goo.gl/maps/Z8mQ6jxnRQKFwJy9A", "openStreetMaps": "https://www.openstreetmap.org/relation/555017"},
    "population": 2961161,
    "notes": "teste",
    "visited": true
  }
]
```

---

## Banco de Dados

### Tabela: `countries_visited`

| Coluna | Tipo/Propriedades                 |
| ------ | --------------------------------- |
| id     | INTEGER PRIMARY KEY AUTOINCREMENT |
| ccn3   | TEXT NOT NULL                     |
| notes  | TEXT NOT NULL                     |

---

## Como Rodar o Projeto

1. Certifique-se de usar **Node.js v22.16.0**.
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

## Observações

* Use `GET /country` para obter informações completas sobre qualquer país antes de registrar ou atualizar dados.
* Sempre valide os dados no frontend antes de enviar para a API.
* O banco de dados é local (`database.db`) e **não deve ser versionado** no repositório.
