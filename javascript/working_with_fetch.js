console.log('fetch demo start')
if ('fetch' in window) {
  console.log('browser is updated')
} else {
  console.log('upgrade browser')
}
url = "http://dog.ceo/api/breeds/image/random"
const getData = () => {
  console.log('Before fetch')
  fetch(url, {
    mode: 'no-cors'
  })
  .then((respnse) => response.json())
  .then((data) => {
    console.log(data)
    })
  .catch((rejected) => {
    console.log(rejected)
  })
  console.log('After fetch')
}

getData()
console.log('fetch demo end')