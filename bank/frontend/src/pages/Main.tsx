import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Header from '../components/Header';
import Money from '../../assets/money.png';
import Waage from '../../assets/waage.png';
import Dollar from '../../assets/dollar.png';
import Book from '../../assets/book.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Footer from '../components/Footer';
import BottomPopup from '../components/BottomPopup';
import {useState} from 'react';
import CommonMenuItem from '../components/CommonMenuItem';

function Main(): React.JSX.Element {
  const [createModalOpen, setCreateModalOpen] = useState<boolean>(false);

  return (
    <View className="w-full h-full bg-gray-100">
      <Header
        menu={[
          {title: 'magnify', onPress: () => {}},
          {title: 'menu', onPress: () => {}},
        ]}
      />
      <ScrollView className="w-full h-full bg-gray-100">
        <View className="w-full px-10 py-6">
          <Text className="text-lg font-semibold">이정호님,</Text>
          <Text className="text-lg font-semibold">
            조아은행에 오신 것을 환영합니다.
          </Text>
        </View>
        <View className="w-full p-6 pb-12 flex space-y-4">
          <View className="w-full py-4 px-6 rounded-3xl flex flex-row justify-between items-center shadow-sm shadow-black  bg-gray-50">
            <View className="flex flex-grow space-y-1">
              <Text className="text-md font-medium">조아은행 발행 적금</Text>
              <Text className="text-md font-semibold">
                조건없이 최대 연 4.3% (세전)
              </Text>
            </View>
            <Image source={Money} className="w-16 h-12" />
          </View>
          <View className="w-full py-4 px-6 relative rounded-3xl bg-pink-200 flex space-y-2 shadow-sm shadow-black">
            <View className="absolute top-4 right-4">
              <Icon
                name={'dots-vertical'}
                color={'#777'}
                onPress={() => {}}
                size={20}
              />
            </View>
            <View className="w-full">
              <Text className="text-md">저축예금[입출금]</Text>
              <Text className="text-md">123-123456-12-123</Text>
            </View>
            <View className="w-full flex flex-row items-center justify-center space-x-2">
              <Text className="text-2xl font-bold">999,999,999원</Text>
              <Icon
                name={'refresh'}
                color={'#aaa'}
                onPress={() => {}}
                size={20}
              />
            </View>
            <View className="w-full flex flex-row items-center justify-center space-x-2">
              <View className="flex items-center justify-center w-12 h-6 bg-pink-300 rounded-full">
                <Text className="text-sm font-semibold shadow-md">이체</Text>
              </View>
              <View className="flex items-center justify-center w-12 h-6 bg-pink-300 rounded-full">
                <Text className="text-sm font-semibold shadow-md">출금</Text>
              </View>
            </View>
            <View className="w-full flex flex-row justify-center items-center pt-2 space-x-1">
              <View className="bg-slate-500 w-8 h-1" />
              <View className="bg-slate-400 w-1 h-1" />
              <View className="bg-slate-400 w-1 h-1" />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => setCreateModalOpen(true)}
            className="w-full h-14 bg-gray-50 rounded-3xl flex items-center justify-center shadow-sm shadow-black">
            <Icon name={'plus'} color={'#777'} onPress={() => {}} size={25} />
          </TouchableOpacity>
        </View>
        <View className="w-full px-6 flex flex-row space-x-4">
          <View className="bg-gray-50 w-32 h-32 rounded-2xl shadow-sm shadow-black flex p-6 justify-center space-y-3">
            <Image source={Waage} className="w-10 h-10" />
            <View>
              <Text className="font-bold text-md ">예적금 상품</Text>
              <Text className="font-bold text-md">비교하기</Text>
            </View>
          </View>
          <View className="bg-gray-50 w-32 h-32 rounded-2xl shadow-sm shadow-black flex p-6 justify-center space-y-5">
            <Image source={Dollar} className="w-10 h-10" />
            <View>
              <Text className="font-bold text-md ">환율 조회</Text>
            </View>
          </View>
          <View className="bg-gray-50 w-32 h-32 rounded-2xl shadow-sm shadow-black flex p-6 justify-center space-y-3">
            <Image source={Book} className="w-10 h-10" />
            <View>
              <Text className="font-bold text-md ">돈이 되는</Text>
              <Text className="font-bold text-md">이야기</Text>
            </View>
          </View>
        </View>
        <Footer />
      </ScrollView>
      {createModalOpen && (
        <BottomPopup>
          <View className="w-full flex flex-grow space-y-8">
            <CommonMenuItem
              title={'입출금통장'}
              subtitle={'손쉬운 계좌개설'}
              underline={false}
            />
            <CommonMenuItem
              title={'정기예금'}
              subtitle={'실시간 이자가 쌓여요'}
              underline={false}
            />
            <CommonMenuItem
              title={'자유적금'}
              subtitle={'매일/매주/매월 자유롭게'}
              underline={false}
            />
            <CommonMenuItem
              title={'한달적금'}
              subtitle={'한달동안 매일매일 적금'}
              underline={false}
            />
            <CommonMenuItem
              title={'26주 적금'}
              subtitle={'즐거운 도전'}
              underline={false}
            />
          </View>
        </BottomPopup>
      )}
    </View>
  );
}

export default Main;
