export const initMetaPixel = (id, options = {}) => {
  if (!window.fbq) return
  window.fbq('init', id, options)
}

export const trackPageView = () => {
  if (!window.fbq) return
  window.fbq('track', 'PageView')
}

export const trackEvent = (event, params = {}) => {
  if (!window.fbq) return
  window.fbq('track', event, params)
}
