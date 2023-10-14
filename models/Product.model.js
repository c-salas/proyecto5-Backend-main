import mongoose from "mongoose";

const Schema = mongoose.Schema

const productSchema = new Schema (
    {
        Nombre: {type: String, required: true},
        codigo: {type: Number, required: true, unique: true},
        precio: {type: Number, required: true},
        stock: {type: Number, required: true},
        url: {type: String, required: true},
    },
    {
        versionKey: false
    })

// Aquí 'products' es el nombre de la colección a la que me quiero conectar (el nombre debe coincidir)
export const Product = mongoose.model ('products', productSchema)
