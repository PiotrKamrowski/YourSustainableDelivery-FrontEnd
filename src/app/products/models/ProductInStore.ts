import {Product} from './Product';

export interface ProductInStore {


  id_store: number;
  id_item: number;
  quanity: number;
  minSupply: number;
  inOrders: number;
  price: number;
  block: boolean;


  productDetail: Product;


}
