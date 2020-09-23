import axios from 'axios';
import React, {useEffect, useState} from 'react';

const AuthPage = (props) => {
  const [authCode, setAuthCode] = useState(null);
  useEffect(() => {
    console.log(props.match.url);
    setAuthCode(props.match.url);
  }, []);
  useEffect(() => {
    if (authCode) {
      axios({method: 'post', url: '/backrouteForAuthCode', data: authCode})
        .then((res) => {})
        .catch((error) => {});
    }
  }, [authCode]);
  return <div>Content</div>;
};

export default AuthPage;
