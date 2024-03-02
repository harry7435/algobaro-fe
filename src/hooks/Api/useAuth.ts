import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { LOCAL_ACCESSTOKEN } from '@/constants/localStorageKey';
import { PATH } from '@/routes/path';
import { signIn } from '@/services/Auth';

import { useLocalStorage } from '../useLocalStorage';

/**
 * 로그인 signIn API 통신 함수를 사용하는 useMutation를 반환하는 훅이다.
 * - 로그인 성공 시 액세스 토큰을 로컬 스토리지에 저장한다.
 * - 저장 후 메인 페이지(홈)으로 다이렉팅한다.
 */
export const useSignIn = () => {
  const navigate = useNavigate();
  const [, setAccessToken] = useLocalStorage(LOCAL_ACCESSTOKEN);

  return useMutation({
    mutationFn: signIn,
    onSuccess: ({ response }) => {
      setAccessToken(response.accessToken);
      navigate(PATH.HOME);
    },
  });
};