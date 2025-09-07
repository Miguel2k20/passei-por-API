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
[ ... ]
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
  "id": "423",
  "ccn3": "045",
  "notes": "Lorem ipsum",
  "country-info": { ... }
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
            "eng": {
                "official": "Jamaica",
                "common": "Jamaica"
            },
            "jam": {
                "official": "Jamaica",
                "common": "Jamaica"
            }
        }
    },
    "ccn3": "388",
    "currencies": {
        "JMD": {
            "name": "Jamaican dollar",
            "symbol": "$"
        }
    },
    "capital": [
        "Kingston"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "translations": {
        "ara": {
            "official": "جامايكا",
            "common": "جامايكا"
        },
        "bre": {
            "official": "Jamaika",
            "common": "Jamaika"
        },
        "ces": {
            "official": "Jamajka",
            "common": "Jamajka"
        },
        "cym": {
            "official": "Jamaica",
            "common": "Jamaica"
        },
        "deu": {
            "official": "Jamaika",
            "common": "Jamaika"
        },
        "est": {
            "official": "Jamaica",
            "common": "Jamaica"
        },
        "fin": {
            "official": "Jamaika",
            "common": "Jamaika"
        },
        "fra": {
            "official": "Jamaïque",
            "common": "Jamaïque"
        },
        "hrv": {
            "official": "Jamajka",
            "common": "Jamajka"
        },
        "hun": {
            "official": "Jamaica",
            "common": "Jamaica"
        },
        "ind": {
            "official": "Jamaika",
            "common": "Jamaika"
        },
        "ita": {
            "official": "Giamaica",
            "common": "Giamaica"
        },
        "jpn": {
            "official": "ジャマイカ",
            "common": "ジャマイカ"
        },
        "kor": {
            "official": "자메이카",
            "common": "자메이카"
        },
        "nld": {
            "official": "Jamaica",
            "common": "Jamaica"
        },
        "per": {
            "official": "جامائیکا",
            "common": "جامائیکا"
        },
        "pol": {
            "official": "Jamajka",
            "common": "Jamajka"
        },
        "por": {
            "official": "Jamaica",
            "common": "Jamaica"
        },
        "rus": {
            "official": "Ямайка",
            "common": "Ямайка"
        },
        "slk": {
            "official": "Jamajka",
            "common": "Jamajka"
        },
        "spa": {
            "official": "Jamaica",
            "common": "Jamaica"
        },
        "srp": {
            "official": "Јамајка",
            "common": "Јамајка"
        },
        "swe": {
            "official": "Jamaica",
            "common": "Jamaica"
        },
        "tur": {
            "official": "Jamaika",
            "common": "Jamaika"
        },
        "urd": {
            "official": "جمیکا",
            "common": "جمیکا"
        },
        "zho": {
            "official": "牙买加",
            "common": "牙买加"
        }
    },
    "maps": {
        "googleMaps": "https://goo.gl/maps/Z8mQ6jxnRQKFwJy9A",
        "openStreetMaps": "https://www.openstreetmap.org/relation/555017"
    },
    "population": 2961161,
    "notes": "teste",
    "visited": true
  },
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
