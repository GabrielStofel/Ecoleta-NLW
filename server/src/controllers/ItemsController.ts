import { Request, Response } from "express";
import knex from "../database/connection";

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex("items").select("*");

    // Se chama serialized porque as informações do banco não estão exatamente
    // da maneira como precisamos para retornar para o front-end, para o cliente
    // O processo de tranformar os dados se chama "Serialização"
    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.0.16:3333/uploads/${item.image}`,
      };
    });

    return response.json(serializedItems);
  }
}

export default ItemsController;
