## Conceitos Node

- Linguagem assíncrona;
- Single threaded (o Event loop);
- Módulos próprios (http, dns, fs, buffer, etc);

-> Event loop: o evento fica "escutando" a call stack e manda uma a uma as funções que são executadas para um thread do processador (maximo padrão: 4);

- Frameworks (Express, egg.js, nest.js, adonis.js...);

## Conceitos API Rest

# O que é API

- Conjunto de especificações de possíveis interações entre aplicações;
- Documentação para desenvolvedor;

# O que é REST (Representation State Transfer)

- Modelo de Arquitetura;
- 6 regras (não necessariamente são usadas todas elas atualmente);
    - Cliente-servidor;
    - Stateless (Toda requisição precisa passar todas as infos para que a mesma seja processada corretamente);
    - Cache;
    - Interface uniforme;
        -> identificação dos recursos (dentro do endereçamento especificar corretamente qual produto está sendo requisitado) 
        -> representação dos recursos (entrega do produto em xml, json, etc)
        -> mensagens auto-descritivas (entregar os retornos de execução da api de forma mais clara possível)
        -> HATEOAS (hypertext as the engine of application state), uma forma de ajudar os clientes a consumir o serviço sem precisar ter conhecimento profundo da API;
    - Camadas;
    - Código sob demanda;

## Métodos de Requisição

- GET (Leitura);
- POST (Criação);
- PUT (Atualização);
- DELETE (Apagar);
- PATCH (Atualização parcial);

- Códigos HTTP;
    - 1xx: Informativo - a solicitação foi aceita, ou o processo continua em andamento;
    - 2xx: Confirmação
        - 200 - Requisição bem sucessida
        - 201 - Created (Geralmente usado para POST após alguma inserção);
    - 3xx: Redirecionamento;
        - 301 - Moved permanently;
        - 302 - Moved;
    - 4xx: Erro do cliente;
        - 400 - Bad Request;
        - 401 - Unauthorized;
        - 403 - Forbidden;
        - 404 - Not Found;
        - 422 - Unprocessable Entity;
    - 5xx: Erro do servidor;
        - 500 - Internal Server Error;
        - 502 - Bad Gateway;

# Parâmetros das Requisições

- Header Params (parâmetros do cabeçalho);
- Query Params (parâmetros de pesquisa, que vem após a url);
- Route Params (parâmetros que vão no meio da rota, de forma dinâmica);
- Body Params (parâmetros no corpo da requisição);

# Boas Práticas de API Rest

- Utilização correta de métodos HTTP;
- Utilização correta dos status no retorno das respostas;
- Padrão da nomenclatura;