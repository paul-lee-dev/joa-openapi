import {Switch, View} from 'react-native';

interface IProps {
  toggleSwitch: () => void;
  isEnabled: boolean;
}

function ToggleSwitch({toggleSwitch, isEnabled}: IProps): React.JSX.Element {
  return (
    <View className="flex justify-center items-center">
      <Switch
        trackColor={{false: '#d1d5db', true: '#fce7f3'}}
        thumbColor={isEnabled ? '#fbcfe8' : '#9ca3af'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

export default ToggleSwitch;
