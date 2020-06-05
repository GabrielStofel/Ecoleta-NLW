import Knex from "knex";

// Função que serve para realizar as modificações necessárias no banco de dados
export async function up(knex: Knex) {
  // CRIAR A TABELA
  return knex.schema.createTable("points", (table) => {
    // Para cada registro que adicionamos a esta tabela, é feito o
    // o incremento automaticamente do 'id'
    table.increments("id").primary();
    table.string("image").notNullable();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("whatsapp").notNullable();
    table.decimal("latitude").notNullable();
    table.decimal("longitude").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
  });
}

export async function down(knex: Knex) {
  // UTILIZADO PARA VOLTAR ATRAS (DELETAR A TABELA)
  return knex.schema.dropTable("point");
}
