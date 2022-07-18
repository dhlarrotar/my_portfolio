
const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = "cCRaBg4bXJsVgiGYJzqdRHgoXVsdCt7T0VnKu8Fg";

const fetchNASAData = async () => {
    try {
      const response = await fetch(`${baseUrl}${apiKey}`)
      const data = await response.json()
      console.log('NASA APOD data', data)
      displayData(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  const displayData = data => {
    if(data.copyright){
    document.querySelector('.apodCopy').textContent = data.copyright
    }
    document.querySelector('.apodTitle').textContent = data.title
    document.querySelector('.apodDate').textContent = data.date
    document.querySelector('.home_container').style.backgroundImage = "url("+data.hdurl+")";
    document.querySelector('.apodPhoto').src = data.hdurl;
    document.querySelector('.apodExplanation').textContent = data.explanation

  }


  fetchNASAData().onload
