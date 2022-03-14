const express = require('express');

const app = express();

app.use(express.json());

/**
 * GET - Buscar info no servidor
 * POST - Inserir info no servidor
 * PUT - Alterar info no servidor
 * PATCH - Alterar uma info específica no servidor
 * DELETE - Apagar uma info do servidor
 */

/**
 * Tipos de parametros
 * 
 * route params => identificar um recurso para editar/deletar/buscar tal recurso
 * queue params => paginação / filtro
 * body params => objetos inserção/alteração de recurso
 */

//localhost:3333

app.get("/courses", (request, response) => {
  const query = request.query;
  console.log(query);  

  return response.json([
    "Curso 1",
    "Curso 2",
    "Curso 3",
    "Curso 4"
  ]);
});

app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body);

  return response.json([
    "Curso 1",
    "Curso 2",
    "Curso 3",
    "Curso 4",
    "Curso 5",
  ]);
});

app.put("/courses/:id", (request, response) => {
  const { id } = request.params;
  console.log(id);
  
  return response.json([
    "Curso 6",
    "Curso 2",
    "Curso 3",
    "Curso 4",
    "Curso 5",
  ]);
});

app.patch("/courses/:id", (request, response) => {
  return response.json([
    "Curso 6",
    "Curso 7",
    "Curso 3",
    "Curso 4",
    "Curso 5",
  ]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json([
    "Curso 6",
    "Curso 7",
    "Curso 4",
    "Curso 5",
  ]);
});

app.listen(3333);