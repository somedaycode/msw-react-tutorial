import React, {useState, useCallback } from 'react';
import type {User} from './mocks/types/User';

export const Users = () => {
  const [userData, setUserData] = useState<User[]>([]);

  const getUserList = useCallback(() => {
    fetch('/users')
      .then((res) => res.json())
      .then(setUserData);
  }, []);

  if (userData.length > 0) {
    return (
      <main>
        <h1>유저 목록</h1>
        <ul>
          {userData.map((user:User) => (
            <li key={user.id}>
              <span>이름:</span>
              <span>{user.name}</span>
            </li>
          ))}
        </ul>
      </main>
    );
  }

  return (
    <button type="button" onClick={getUserList}>
      유저 목록 불러오기
    </button>
  );
};
