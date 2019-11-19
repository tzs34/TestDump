import React from 'react'
import GoogleLogin from 'react-google-login'

const GoogleLoginButton = ({
  clientId,
  label = 'Log in using Gmail',
  onLogin
}) => {
  return (
    <GoogleLogin
      clientId={clientId}
      buttonText={label}
      onSuccess={onLogin}
      onFailure={onLogin}
      cookiePolicy={'single_host_origin'}
    />
  )
}

export default GoogleLoginButton
