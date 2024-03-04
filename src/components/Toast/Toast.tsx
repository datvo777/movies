import {useEffect, useState} from 'react'
import http from '../../utils/http';
import './Toast.scss'
function Toast() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    http.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          const { data: { status_message} } = error.response;
          setMessage(status_message);
          return Promise.reject(error);
        }
      }
    );
  }, [])
  useEffect(() => {
    setTimeout(() => {
      setMessage('')
    }, 5 * 1000);
  }, [message])
  
  return message ? (
      <div className="toast" aria-live="assertive">
        <p className="toast-message">{message}</p>
        <span className="toast-icon">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
          <path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"></path><path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"></path>
          </svg>
        </span>
        <div className="toast-progress">
          <div className={`toast-progress-bar`}></div>
        </div>
      </div>
    ) : <></>
}

export default Toast