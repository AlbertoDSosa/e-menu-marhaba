// import styles from './styles.module.css';

import { ProductList, InfoList } from 'definitions/models';

import VariantList from './VariantList';
import NormalList from './NormalListLayout';

interface ItemListProps {
  list: ProductList | InfoList;
  lang: string;
}

const ItemList: React.FC<ItemListProps> = ({ list, lang }) => {
  return list.hasVariants ? (
    <VariantList list={list} lang={lang} />
  ) : (
    <NormalList list={list} lang={lang} />
  );
};

export default ItemList;
