import React, { useState, useCallback } from 'react';

export const Users = () => {
  const [userData, setUserData] = useState(null);

  const getUserList = useCallback((event) => {
    event.preventDefault();

    fetch('/users')
      .then((res) => res.json())
      .then(setUserData);
  }, []);

  if (userData) {
    return (
      <main>
        <h1>유저 목록</h1>
        <ul>
          {userData.map((user) => (
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
