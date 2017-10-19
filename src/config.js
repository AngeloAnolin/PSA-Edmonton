const baseUrl = 'http://localhost/Psa-Api/'
const serverUrl = 'http://angeloanolin.ca/PSA/'

let apiUrl = () => {
  return ''
}

let teamApiUrl = () => {
  var w = window.location.href
  if (w.indexOf('localhost') >= 0) {
    return baseUrl + ''
  } else {
    return serverUrl
  }
}

let bracketApiUrl = () => {
  var w = window.location.href
  if (w.indexOf('localhost') >= 0) {
    return baseUrl + 'api/v1/bracket'
  } else {
    return serverUrl + 'api/v1/bracket'
  }
}

let gameDateApiUrl = () => {
  var w = window.location.href
  if (w.indexOf('localhost') >= 0) {
    return baseUrl + 'api/v1/gamedate'
  } else {
    return serverUrl + 'api/v1/gamedate'
  }
}

let gameApiUrl = () => {
  var w = window.location.href
  if (w.indexOf('localhost') >= 0) {
    return baseUrl + 'api/v1/game'
  } else {
    return serverUrl + 'api/v1/game'
  }
}

export default {
  apiUrl,
  teamApiUrl,
  bracketApiUrl,
  gameDateApiUrl,
  gameApiUrl
}
