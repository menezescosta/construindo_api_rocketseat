import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import multer from "multer";

const categoriesRoutes=Router();

const upload=multer({
    dest:"./tmp"
});

categoriesRoutes.post('/',(request,response)=>{
    createCategoryController.handle(request,response);
});

categoriesRoutes.get('/',(request,response)=>{
    listCategoriesController.handle(request,response);
})



export {categoriesRoutes}