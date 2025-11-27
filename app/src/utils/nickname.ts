// 랜덤 닉네임 생성 유틸리티

const NICKNAME_PREFIXES = [
  '운동왕',
  '헬스광',
  '다이어터',
  '근육맨',
  '홈트족',
  '필라테스러버',
  '요가마스터',
  '러닝메이트',
  '피트니스광',
  '건강지킴이',
  '루틴왕',
  '체력왕',
  '식단전문가',
  '단백질러버',
  '칼로리계산왕',
];

/**
 * 랜덤 닉네임 생성 또는 기존 닉네임 가져오기
 * localStorage에 저장하여 브라우저마다 고유한 닉네임 유지
 */
export function getUserNickname(): string {
  const STORAGE_KEY = 'userNickname';
  
  // 기존 닉네임이 있으면 반환
  const existingNickname = localStorage.getItem(STORAGE_KEY);
  if (existingNickname) {
    return existingNickname;
  }
  
  // 새 닉네임 생성
  const randomPrefix = NICKNAME_PREFIXES[Math.floor(Math.random() * NICKNAME_PREFIXES.length)];
  const randomNumber = Math.floor(Math.random() * 10000);
  const newNickname = `${randomPrefix}${randomNumber}`;
  
  // localStorage에 저장
  localStorage.setItem(STORAGE_KEY, newNickname);
  
  return newNickname;
}

/**
 * 닉네임 재설정 (테스트용)
 */
export function resetUserNickname(): string {
  localStorage.removeItem('userNickname');
  return getUserNickname();
}
