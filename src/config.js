// const baseUrl = 'http://localhost/Psa-Api/'
const baseUrl = 'http://angeloanolin.ca/PSA/'

let apiUrl = () => {
  return ''
}

let teamApiUrl = () => {
  return baseUrl + ''
}

let bracketApiUrl = () => {
  return baseUrl + 'api/v1/bracket'
}

export default {
  apiUrl,
  teamApiUrl,
  bracketApiUrl
}
