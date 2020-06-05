import knex from "knex";
import path from "path";

const connection = knex({
  client: "sqlite3",
  connection: {
    // Nome do arquivo que contém o banco de dados
    // __dirname retorna o diretório deste arquivo aqui
    filename: path.resolve(__dirname, "database.sqlite"),
  },
  useNullAsDefault: true,
});

export default connection;
