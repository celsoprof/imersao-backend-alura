import express from "express";
import multer from "multer";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
};

import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";

// ESTE TRECHO É NECESSÁRIO APENAS PARA WINDOWS
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// })

// const upload = multer({ dest: "./uploads" , storage})

// PARA LINUX E MACOS BASTA A LINHA ABAIXO DO MULTER
const upload = multer({ dest: "./uploads" })

const routes = (app) => {

    app.use(express.json());
    app.use(cors(corsOptions));

    app.get("/posts", listarPosts);

    app.post("/posts", postarNovoPost);

    app.post("/upload", upload.single("imagem"), uploadImagem);

    app.put("/upload/:id", atualizarNovoPost);

}

export default routes;