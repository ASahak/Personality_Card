import React, { useCallback, useState } from 'react';
import {useSelector} from 'react-redux';
import View from './view';
import {selectUser} from 'store/selectors';

const AvatarContainer = () => {
  const user = useSelector(selectUser);
  const [isReady, setIsReady] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const onReady = useCallback(() => {
    setIsReady(true);
  }, []);

  const onFailed = useCallback(() => {
    setIsFailed(true);
  }, []);

  return <View
    src={user.avatar}
    onReady={onReady}
    onFailed={onFailed}
    isImageReady={isReady}
    isFailed={isFailed}
  />
}
AvatarContainer.displayName = 'AvatarContainer';
export default React.memo(AvatarContainer)