import { Category } from './categoryModel';

const categoryController = {
  category: categoryID => Category.findOne({ _id: categoryID }),
  categories: () => Category.find({}),
  addCategory: category => {
    const newCategory = new Category({ name: category.name });
    return newCategory.save();
  },
};

export { categoryController };
