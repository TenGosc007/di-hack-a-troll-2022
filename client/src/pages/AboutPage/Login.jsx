import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setCredentials } from 'reduxStore/auth';
import { useLoginMutation } from 'reduxStore/services/user';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const handlEemail = ({ target: { value } }) => setEmail(value);
  const handlePassword = ({ target: { value } }) => setPassword(value);
  const hadleClickBtn = async () => {
    try {
      const user = await login({ email, password });
      setErrorMsg('');
      if (user.error) setErrorMsg(user.error.data);
      else dispatch(setCredentials(user.data));
    } catch (err) {
      console.log(err);
      setErrorMsg('login error');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <input type="email" placeholder="email" value={email} onChange={handlEemail} />
      <input type="password" placeholder="password" value={password} onChange={handlePassword} />
      {!isLoading ? <button onClick={hadleClickBtn}>continue</button> : <p>...Loading</p>}
      {errorMsg && <p>{errorMsg}</p>}
    </div>
  );
};
