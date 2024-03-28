import {IProduct} from '@/models/product';
import {getProductTypeName} from '@/utils';
import {Text, TouchableOpacity, View} from 'react-native';

interface IProps {
  product: IProduct;
  link: () => void;
}

function ProductListItem({product, link}: IProps): React.JSX.Element {
  return (
    <View className="w-full h-40 flex flex-row py-4 px-8 bg-gray-50">
      <View className="flex-grow flex space-y-2">
        <View className="w-full flex flex-row">
          <View className="border border-pink-300 px-2 py-1 rounded-lg">
            <Text className="text-sm text-pink-400 font-semibold">
              {getProductTypeName(product.productType)!.title}
            </Text>
          </View>
        </View>
        <View className="w-full flex space-y-2">
          <Text className="text-xl font-bold">{product.name}</Text>
          <Text
            numberOfLines={1}
            className="text-md font-medium w-52 overflow-clip overflow-ellipsis break-words">
            {product.description}
          </Text>
        </View>
      </View>
      <View className="w-20 flex justify-between ">
        <View className="w-20 h-20 border rounded-full flex justify-center items-center border-pink-500">
          <Text className="text-xs text-gray-600">최고 연</Text>
          <Text className="text-xl font-bold text-pink-800">{`${product.rate}%`}</Text>
        </View>
        <View className="w-full flex flex-row justify-end">
          <TouchableOpacity
            onPress={link}
            className="px-2 py-1 flex flex-row bg-pink-300 rounded-lg">
            <Text className="text-sm text-white font-semibold">가입하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ProductListItem;
