import {ActivityIndicator, Modal, View} from 'react-native';

interface IProps {
  isLoading: boolean;
}

function LoadingScreen({isLoading}: IProps): React.JSX.Element {
  return (
    <Modal animationType="fade" transparent={true} visible={isLoading}>
      <View className="fixed top-0 left-0 w-screen h-screen z-50 flex justify-center items-center bg-gray-950/30">
        <ActivityIndicator size={'large'} color={'#ffffff'} />
      </View>
    </Modal>
  );
}

export default LoadingScreen;
