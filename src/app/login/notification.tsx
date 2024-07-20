export function requestNotificationPermission() {
  //   if (!('Notification' in window)) {
  //     return true
  //   }

  if (Notification.permission === 'granted') {
    return false
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        return false
      } else {
        return true
      }
    })
  }
  return true
}
