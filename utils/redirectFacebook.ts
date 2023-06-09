export function redirectFacebookUrl() {
  // https://developers.facebook.com/docs/facebook-login/guides/advanced/manual-flow
  const rootUrl = `https://www.facebook.com/v17.0/dialog/oauth`
  const options = {
    redirect_uri: import.meta.env.VITE_FB_REDIRECT_URL as string,
    client_id: import.meta.env.VITE_GG_CLIENT_ID as string,
    access_type: 'offline',
    response_type: 'code',
    // prompt: "consent",
    // scope: [
    //   "https://www.googleapis.com/auth/userinfo.profile",
    //   "https://www.googleapis.com/auth/userinfo.email",
    // ].join(" "),
    state: 'gacondangyeu'
  }

  const qs = new URLSearchParams(options)

  window.location.href = `${rootUrl}?${qs.toString()}`

  // return `${rootUrl}?${qs.toString()}`;
}
