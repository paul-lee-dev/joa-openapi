import {memberDataAtom} from '@/store/atoms';
import {useRecoilValue} from 'recoil';
import {useEffect} from 'react';
import {axiosInstance} from '@/api';

function Interceptor({children}: any): React.JSX.Element {
  const memberData = useRecoilValue(memberDataAtom);

  useEffect(() => {
    axiosInstance.interceptors.request.use(
      config => {
        if (memberData.isLogin && memberData.member) {
          config.headers.memberId = memberData.member.memberId;
        }
        console.log(config);
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
