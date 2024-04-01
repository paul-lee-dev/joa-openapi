import {memberDataAtom} from '@/store/atoms';
import {useRecoilValue} from 'recoil';
import {useEffect} from 'react';
import {axiosInstance} from '@/api';

function Interceptor({children}: any): React.JSX.Element {
  const memberData = useRecoilValue(memberDataAtom);

  useEffect(() => {
    axiosInstance.interceptors.request.use(
      config => {
        console.log(memberData);
        if (memberData.isLogin && memberData.member) {
          config.headers.memberId = memberData.member.id;
        } else {
          config.headers.memberId = '';
        }
        console.log(config.headers);
        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );
  }, [memberData]);

  return children;
}

export default Interceptor;
