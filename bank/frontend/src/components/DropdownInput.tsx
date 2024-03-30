import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

interface IProps {
  data: any[];
  labelField: string;
  valueField: string;
  search: boolean;
  placeholder: string;
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}

function DropdownInput({
  data,
  labelField,
  valueField,
  search,
  placeholder,
  value,
  setValue,
}: IProps): React.JSX.Element {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <View className="w-full py-4">
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: '#ec4899'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search={search}
        maxHeight={300}
        labelField={labelField}
        valueField={valueField}
        placeholder={!isFocus ? placeholder : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item[valueField]);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <View />
          //   <AntDesign
          //     style={styles.icon}
          //     color={isFocus ? 'blue' : 'black'}
          //     name="Safety"
          //     size={20}
          //   />
        )}
      />
    </View>
  );
}

export default DropdownInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 36,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
