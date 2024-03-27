import {IProduct} from '@/models/product';
import {Pressable, Text} from 'react-native';

interface IProps {
  product: IProduct;
  link: () => void;
}

function ProductListItem({product, link}: IProps): React.JSX.Element {
  return (
    <Pressable onPress={link}>
      <Text>{product.name}</Text>
    </Pressable>
  );
}

export default ProductListItem;
