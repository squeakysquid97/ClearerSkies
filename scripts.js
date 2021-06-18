var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=oqzHsVH4n3nVmGXAVh6l7FHjmCkXSfRG&q=76116", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));