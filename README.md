# PasseiPor

**PasseiPor** é uma plataforma onde os usuários podem registrar suas viagens como uma **recordação digital**. É possível buscar países, marcar onde já estiveram e escrever relatos da experiência. Cada viagem se torna uma lembrança única, funcionando como um diário pessoal de descobertas pelo mundo.

---

## Base do Projeto

O PasseiPor utiliza uma **API de países** para fornecer informações sobre cada país visitado e registra os dados localmente em um banco SQLite.

### URLs

* **API Terceirizada**: [`https://api.passeipor.com`](https://api.passeipor.com)
* **API Local (Projeto)**: [`http://localhost:3000`](http://localhost:3000)


---

## Endpoints da API

### GET `/country`

**Descrição:** Retorna a lista de países disponíveis na API com informações detalhadas.

**Exemplo de resposta:**

```json
[
  {
    "flags": {
      "png": "https://flagcdn.com/w320/br.png",
      "svg": "https://flagcdn.com/br.svg",
      "alt": "The flag of Brazil has a green field with a large yellow rhombus in the center..."
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
      "BRL": {
        "name": "Brazilian real",
        "symbol": "R$"
      }
    },
    "capital": ["Brasília"],
    "region": "Americas",
    "subregion": "South America",
    "languages": {
      "por": "Portuguese"
    },
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

**Descrição:** Registra um país visitado pelo usuário.

**Requisição:**

```json
{
  "ccn3": "string", // Código do país (obrigatório)
  "note": "string"  // Anotações sobre a visita (obrigatório)
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

**Descrição:** Atualiza as informações de um país já registrado.

**Requisição:**

```json
{
  "note": "string" // Anotações sobre a visita (obrigatório)
}
```

**Resposta:**

```json
{
  "status": 200,
  "message": "Country updated successfully"
}
```

---

### DELETE `/country/{id}`

**Descrição:** Remove um país registrado pelo usuário.

**Resposta:**

```json
{
  "status": 200,
  "message": "Country deleted successfully"
}
```

---

## Banco de Dados

O PasseiPor utiliza **SQLite** e possui uma estrutura simples com uma tabela principal:

### Tabela: `countries_visited`

| Coluna | Tipo/Propriedades                 |
| ------ | --------------------------------- |
| id     | INTEGER PRIMARY KEY AUTOINCREMENT |
| ccn3   | TEXT NOT NULL                     |
| notes  | TEXT NOT NULL                     |

> Esta tabela armazena o código do país (`ccn3`) e as anotações do usuário sobre cada visita.

---

## Observações

* Use `GET /country` para obter informações completas sobre qualquer país antes de registrar ou atualizar dados.
* Sempre valide os dados no frontend antes de enviar para a API.
* O banco de dados é local (`database.db`) e **não deve ser versionado** no repositório.
* Para rodar a aplicação, instale as dependências com `npm install` e inicie o servidor com `npm run dev`.
