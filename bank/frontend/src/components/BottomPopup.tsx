import {View} from 'react-native';

interface IProps {
  children: React.ReactNode;
}

function BottomPopup({children}: IProps): React.JSX.Element {
  return (
    <View className="w-full h-full absolute bg-black/30">
      <View className="w-full h-2/3 absolute bottom-0 rounded-t-[40px] bg-white px-4 py-2 flex items-center">
        <View className="w-16 h-1 bg-slate-400/50 rounded-full mb-10" />
        {children}
      </View>
    </View>
  );
}

export default BottomPopup;
