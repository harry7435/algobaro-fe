import { RoomDataProps } from '.';

export const DummyDataSet: { [key: string]: string } = {
  python: '파이썬',
  javascript: '자바스크립트',
  cPlusPlus: 'C++',
  java: 'Java',
};

export const DummyImgLink = {
  python:
    'data:image/png;base64,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',
  javascript:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEX33x4AAAD/5x/95B+klBRjWgz64h7/6R9dVAv85B/03B6bjBPizBv23h58cA/Ouhm0ohZORgnaxRpVTQofHATs1R1JQgnBrheGeRDGsxi6qBcsKAWMfhFSSgrArRczLgZzaA4jIAStnBWThRJqYA0aFwPcxxsSEAJCOwjo0RyhkhNwZQ0XFQMuKgU5MweCdRAMCwGYeiDHAAAHAUlEQVR4nO2caXuyOhCGIbGJAVosaqvUWpdudv//v+5A7VsVJhuCSa8z99dimocMk2QykyBAEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARB5DAmCOFbCKGUue4QQNHDOkYdZZSwLF9fDO+Wo9Hy5nm4mA2ygAjPVIrZsF9jmOt7KXjSG4Z1buOMiBN03BjSB3oZvlDdz85Xz9APv3mLx2ZWcBLIGdTHnlohiWZSeVsuNuREArQ0UMhErNFXMol0dnAi7BWSxzsDgQUpP50MBdYKSc9MX8HaC0u1VUgujAWG4b0PTtVSoQBdr5ShBy7VTiH8tIJb9+7GSiG3MdEt986/RRuFZGUtMAxnrj2qhUKWNBAYhnPHhmqhkF81UhiO3bobc4V03kxgOHRrp+YKxXtDheHAqZ0aK2TXTQUWdupA2C/GCvltY4GxA107TBWyjVzB+2Kynr3K1uOXidsp0VQhfZEIeFuNOaGCEh7l0KZ4xR2v3EwVEomRXgS71TXlg+qf+2PnyzZTheewwPhwJhDjQ4ebux7AwFghS0GBr9WpjgV7lro4dz6AgbFCWrO/b6Jaeyz6+vnb09T1inSLqUIw9HQBeEmWbf82YT4MYGCsEN7az6GvjJRxqndPgjSBucJ76LEE9CPkI1x7FN43VQhGLzagDpZmzre9e3SgMGD+DGBwpJWmXkmRcJSn0QT//cB0tviEHrvyxmEqMFUIH1X8BTM1XbXloMKbwH+JpgozUGE49O3Et86Re4vwY+zD2YQK4/3hpUSiFzskFaYKFaeit5nXGo3jNJIP8Zv7zKNz+yrmsbalQmI4nHJfZ39jhdJQ1A/LXuTnQJrHvCO1woLZ2McP0lwh0WWYFJylfmULlVicPcmmxAM+BsSzD9JCoSQaVeWhd+7TBtjuDNg0TWHtS7ZQidU5/m+kUEvsS6TNUiF7NFVYHhp64lftsk3o1Fzic+bH/tgyY4jYHHX/qaj+7nmLUQwffIgLW2fuieTBQuOn+x2yffYli2xy2y4j1xKb5AhzzSL8gKfN38kY2vtRYpO2AJ9unIxGCgPG5xZfoyT4fyKaKSwcDjNJ9t4ycvotNlVY/HI8MZV46XIp3lxhWZSwNlyousz4PkZhsYoLVksjiY/u7PQ4hWVx0NRkerxyN4jHKiz8KkkMPsips0E8XmGpMVjd6AbR2Qq1DYUFVMzllV7fZK4GsSWF5SIgVZYqQLk3J6E1haWxPiqczlfrXTekRYXf4yhPlXZ1XtyqwrJyVho3jh3tMVpWWGytZPngfUcfYusKAwInaoaho/mifYXS4qHz1jpt1532FQYcnhodzYhdKJRU1zhyptYKGasnBleBjxrBbNT2kLUOn7asZKeAjKTLhdZlENBMpY22AWOycBCcRbKS1ZBuyiFPtfcRNLvGoDnFUmM5kp1EjKDOXIPvgwbb6Vy7AINNv7spn47L5NAePOEKqC/gbo7xwdPPn880dgrXSHWVq8noz/QEFjpK0mQAx86zvY9rrZbIwEY7KtLbdawP9YrC9wfU3CWNDlNoB6olmKT8pJPZQux3DHqHksrXSl9Y/UUMFKPI4Ry4DqJRrLJ+qvtTiZEexjcZnwIxihepRCLJaGjfSA++nJJ67Fnytj/3FZIE3tcuJEf1spX3R9srbxHVk8/fK7VyfA135sCepYG00TWQ5sU4nE1cvLZ2x5BxeIE/3cvLotIsp31zporIxDDlhyegjG9eZQ/Dc2xjgVUD3XVqGnAqhCAkkoarb/btSVUeW4xjnLHvEtKiTcKja7AsY4t+OWsDXcj/09PlZB2vXz/kT6wP7EmXz/Zw+RmvBoNefKG8kaDlCzLYWN0rNZX5ni2Paewfbc+GJomEMp4rb1sygdtx13qUBl44GZHXSoIkLteGdv1MiZA5bS0P9W0cga6es6KLM1IiddsacmCjer48UmE32Qrgzk/LFXg1jXLK0BN3EitteGEO/LYbNvbDWUfBYGGTgvaPlaQzbNPMJEreu9EXyBf5CuTzMos0B4RS3jq8ZKh+T4WGW4U5MaJYKCn46DSbxipXUnuBnPULK+l3XPcsEt0B+x4LnUMQY7sr98La1SAdwALjW+RW+s4wkj/pG9rxfJLKfJ4qthE7rsyuAhLsxThh/2t1okooRgZaUx3lxp0RbGD0ym5WwelOfYWYKxNCn3Nqc6YgSKo1/fspPe2pNuNJLNmg3sWJde0gI3Q6kV5F+7CYBw4q9Rgl4+tJxRfeTvINbZZsXraXvrxWlgFf/VmeMHeFiEWvOEvS9DrP82maUE7oUbNV2R4Xm6xscZqm2YYc22IrsF98bRBBEARBEARBEAT5n/EfVqVYu543+OgAAAAASUVORK5CYII=',
  cPlusPlus: '',
  java: '',
};

export const DUMMY_DATA: RoomDataProps[] = [
  {
    id: 123,
    title: '백준 같이 푸실분',
    roomAccess: true,
    currentRoomMember: 1,
    roomMemberLimit: 6,
    tags: [
      '태그1',
      '태그2',
      '태그3',
      'MeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeow',
      '태그5',
    ],
    language: ['python', 'javascript', 'cPlusPlus', 'java'],
    roomStatus: '대기중 ',
  },
  {
    id: 124,
    title: '코테 초보만',
    roomAccess: false,
    currentRoomMember: 2,
    roomMemberLimit: 6,
    tags: [
      'Meow MeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeow',
      'Meow MeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeow',
      'Meow MeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeow',
      'Meow MeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeow',
      'Meow MeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeow',
    ],
    language: ['javascript'],
    roomStatus: '대기중',
  },
  {
    id: 125,
    title: '방 제목 입니다.',
    roomAccess: true,
    currentRoomMember: 3,
    roomMemberLimit: 6,
    tags: [
      '태그1',
      '태그2',
      '태그3',
      'MeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeowMeow',
      '태그5',
    ],
    language: ['cPlusPlus', 'java'],
    roomStatus: '대기중',
  },
];
