import { SortEnum } from "../../components/sort/sort.props";
import { PageCategory, PageModel } from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";
export type SortActions = { type: SortEnum.Price } | { type: SortEnum.Rating } | { type: 'reset'; initialState: ProductModel[] };

export interface SortReducerState {
	sort: SortEnum;
	products: ProductModel[];
}


export interface CoursePageComponentProps {
	firstCategory: PageCategory;
	page: PageModel;
	products: ProductModel[];
	
}
export const sortReducer = (state: SortReducerState, action: SortActions) => {
	switch (action.type) {
		case SortEnum.Rating:
			return {
				sort: SortEnum.Rating,
				products: state.products.sort((a, b) => (a.initialRating > b.initialRating ? -1 : 1)),
			};
		case SortEnum.Price:
			return {
				sort: SortEnum.Price,
				products: state.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
			};
		case 'reset':
			return {
				sort: SortEnum.Rating,
				products: action.initialState,
			};
		default:
			throw new Error('Something went wrong');
	}
}