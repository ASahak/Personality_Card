import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import View from './view';
import {selectUser} from 'store/selectors';

const UserInfoContainer = () => {
  const user = useSelector(selectUser);

  const getAge = useCallback(() => {
    return new Date().getFullYear() - new Date(user.date_of_birth).getFullYear();
  }, [user.date_of_birth]);

  return <View name={`${user.first_name} ${user.last_name}`} gender={user.gender} age={getAge()} />
}
UserInfoContainer.displayName = 'UserInfoContainer';
export default React.memo(UserInfoContainer)