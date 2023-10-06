
window.addEventListener("load",()=>{
  let long;
  let lat;

  if(navigator.geolocation){
    console.log(navigator.geolocation);

    navigator.geolocation.getCurrentPosition("position",()=>{
      long = position.coord.longitude;
      lat = position.coord.latitude;

      const url = ``;

      fetch()
      .then((resp) => {
          resp.json()
      }
      )
      .then(data =>{
        console.log(data);
      })
    })
  }
})