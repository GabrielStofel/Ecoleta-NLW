import express from "express";
import { celebrate, Joi } from "celebrate";
import multer from "multer";
import multerConfig from "./config/multer";
import knex from "./database/connection";
import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

// O express Router permite desacoplar as rotas
// do arquivo principal
const routes = express.Router();
// Passado como parâmetro antes de passar o método
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

// index (listagem), show (exibir um único registro), create, update e delete
routes.get("/items", itemsController.index);

routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);

routes.post(
  "/points",
  upload.single("image"),
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  pointsController.create
);

export default routes;
