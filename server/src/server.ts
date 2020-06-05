import express from "express";
import routes from "./routes";
import path from "path";
import cors from "cors";
import { errors } from "celebrate";

// A definicao de tipos traz para o editor as informacoes de todas as opcoes que eu tenho no express
// os parametros que ela recebe, os retornos de suas funcoes

// Toda vez que criamos uma aplicação TypeScript nós precisamos ter um arquivo de configuração do
// TypeScipt, especificando quais features a gente quer usar e quais a gente não quer usar
// para isso, você pode executar o comando: "npx tsc --init", que cria um arquivo de configuração

const app = express();

// O "use" serve basicamente para colocar um plug-in no express, para colocar uma funcionalidade a mais dentro dele
app.use(cors());
app.use(express.json());
app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.use(errors());

app.listen(3333);

/* ---------------------------------------------------------------
CÓDIGO E COMENTÁRIOS SOBRE ROTAS, RECURSOS E PARÂMETROS ABAIXO:
------------------------------------------------------------------


// O Request serve para receber dados da requisição que está acontecendo na nossa aplicação
// O Response serve para devolver uma resposta para o Browser
app.get("/", (request, response) => {
  const search = String(request.query.search);

  const filteredUsers = search
    ? users.filter((user) => user.includes(search))
    : users;

  // Usando uma API RESTful, quando uma requisição for feita, nós estaremos retornando em JSON
  // JSON - JavaScipt Object Notation (Assim, temos uma API que pode ser utilizada por vários clientes)
  // Diferentemente do estilo MVC, que retornava, em vez de JSON, HTML direto
  return response.json(filteredUsers);
});



// O dois pontos (:) significa que um parâmetro será passados
app.get("/users/:id", (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);
});

// Não tem problema essa rota embaixo ser diferente contanto que os métodos sejam diferentes
app.post("/users", (request, response) => {
  const data = request.body;

  console.log(data);

  const user = {
    name: data.name,
    email: data.email,
  };

  // Usar o return para forçar a quebra de execução e retornar algo logo
  return response.json(user);
});
*/
