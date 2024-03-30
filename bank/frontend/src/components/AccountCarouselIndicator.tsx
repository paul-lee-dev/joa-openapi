import {View} from 'react-native';

interface IProps {
  total: number;
  current: number;
}

function AccountCarouselIndicator({total, current}: IProps): React.JSX.Element {
  return (
    <View className="absolute bottom-2 w-full h-6 flex flex-row space-x-1 justify-center items-center">
      {[...Array(total).keys()].map(page => {
        return page === current ? (
          <View className="bg-slate-500 w-8 h-1 rounded-lg" key={page} />
        ) : (
          <View className="bg-slate-400 w-1 h-1 rounded-lg" key={page} />
        );
      })}
    </View>
  );
}

export default AccountCarouselIndicator;
