/********************************************************************************************************************
 * 비밀번화 모듈
 * ******************************************************************************************************************/

import bcrypt from 'bcryptjs';

export const password = {
  /********************************************************************************************************************
   * 비밀번호 해싱
   * @param password 해싱할 비밀번호
   * @returns 해싱된 비밀번호
   * ******************************************************************************************************************/
  hash(password: string): string {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, salt);
  },

  /********************************************************************************************************************
   * 비밀번호 확인
   * @param password 비밀번호
   * @param hash 해싱된 비밀번호
   * @returns 비밀번호 일치 여부
   * ******************************************************************************************************************/
  check(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  },
};

export default password;
