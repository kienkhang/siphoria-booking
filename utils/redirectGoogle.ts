export const redirectGoogleUrl = () => {
  const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`

  const options = {
    redirect_uri: import.meta.env.VITE_GG_REDIRECT_URL as string,
    client_id: import.meta.env.VITE_GG_CLIENT_ID as string,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: 'email openid profile',
    state: 'gacondangyeu'
  }

  const qs = new URLSearchParams(options)

  window.location.href = `${rootUrl}?${qs.toString()}`

  // return `${rootUrl}?${qs.toString()}`;
}
