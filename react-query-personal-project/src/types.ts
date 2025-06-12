export interface Product {
    id:number;
    product_name: string;
    hit: number;
    price: string;
    sale: string;
    product_poster: string;
    deliver:string;
    category:string;
}
export  interface Recipe {
    title: string;
    hit: number;
    likecount: number;
    poster: string;
    chef: string;
    no: number;
    num: number;
}
export interface RecipeListData {
    list:Recipe[];
    curpage: number;
    totalpage: number;
    startPage: number;
    endPage: number;
}

export interface ListImageProps {
    recipe: Recipe;
    index: number;
}

export interface PageData {
    curpage:number;
    totalpage:number;
    startPage:number;
    endPage:number;
}


interface ProductListProps {
    list: Product[];
    totalpage:number;
    curpage:number;
    startPage:number;
    endPage:number;
}
export interface PagePrintProps {
    data: ProductListProps;
    setCurpage:(page:number) => void;
};