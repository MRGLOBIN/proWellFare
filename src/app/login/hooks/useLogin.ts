const useLogin = () => {
  const handleLogin = async () => {
    try {
      const base_url = 'http://10.8.100.14:3000/rms/v1/auth/login'
      const body = {
        mobile: '090078601',
        password: 'Testing@1',
        enc_password: '9789KqX7LEoQgbHe/HSiqQ==.I9KhRQF1lFypGalmMsYbjg==',
        fcmToken:
          'dAiSX9zQab67zz_nyEwJhX:APA91bEO5UgSf42LNdDlX-soHuTyFU4cjsUmasz0XnRPsRFiwUiCwcX58-DAJTeeSY3IIwoyuWgBbHG9x4Y-QcojpajMCKv7lhEwfr1CPwjaDCkpZ0uEb6g8uKYFLbLadKEYzxTzZlXp',
        deviceId: 'string',
        deviceName: 'string',
        deviceModel: 'string',
        deviceType: 'string',
        tzOffset: 18000,
      }

      const response = await fetch(base_url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log('response ', response)
    } catch (error) {}
  }

  const loginMethods = {
    handleLogin,
  }

  return {
    loginMethods,
  }
}

export default useLogin
