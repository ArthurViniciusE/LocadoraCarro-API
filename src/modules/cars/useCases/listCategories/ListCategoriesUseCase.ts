import { IcategoriesRepository} from "../../repositories/ICategoriesRepository";



class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute(): void {
        const categories = this.categoriesRepository.list();
        
        return categories;
    }
}


export { ListCategoriesUseCase };
