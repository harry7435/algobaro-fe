import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { ChangeEvent } from 'react';

import { Button, CheckBox, Icon, MultiDropDown } from '@/components';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import useRoomFilterStore from '@/store/useRoomFilterStore';

import { DummyDataSet } from '../DummyData';
import * as S from './HomeNav.style';

export default function HomeNav() {
  const latestUpdate = '1분전';
  const { theme } = useCustomTheme();
  const {
    searchInputValue,
    selectedPrivate,
    selectedAccess,
    setSearchInputValue,
    setSelectedPrivate,
    setSelectedAccess,
  } = useRoomFilterStore();

  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  return (
    <S.NavContainer>
      <Button>방 만들기</Button>

      <S.SearchOptionsContainer>
        {/* 작업할 input 영역  */}
        <S.SearchInputWrapper>
          <S.SearchInput
            type="text"
            placeholder="방 제목을 검색해 주세요."
            value={searchInputValue}
            onChange={handleSearchTextChange}
          />
          <Icon>
            <SearchRoundedIcon />
          </Icon>
        </S.SearchInputWrapper>
        {/* 작업할 input 영역  */}

        <MultiDropDown
          dataId="search-code-language"
          dataSet={DummyDataSet}
          labelId="search-code-language-label"
          labelName="언어"
          fontSize={theme.size.M}
          width="13.3rem"
        />

        <CheckBox
          label="비밀방"
          checked={selectedPrivate}
          onChange={() => setSelectedPrivate(!selectedPrivate)}
        />

        <CheckBox
          label="입장 가능"
          checked={selectedAccess}
          onChange={() => setSelectedAccess(!selectedAccess)}
        />
      </S.SearchOptionsContainer>

      <S.UpdateData>
        {`마지막 업데이트: ${latestUpdate}`}
        <Icon>
          <RefreshRoundedIcon />
        </Icon>
      </S.UpdateData>
    </S.NavContainer>
  );
}