const scriptURL = 'https://script.google.com/macros/s/AKfycbyLqEELcQH-MRjIM2XRT58sRSKCIQ4Betdb3xrewSccFHWG8e4NC0AfSpob3le4pVcC/exec'
      const form = document.forms['submit-to-google-sheet']
      const msg = document.getElementById('msg');
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => 
          // console.log('Success!', response)
          {
            msg.innerHTML = "Thank you for your subscription!"
            setTimeout(() => {
              msg.innerHTML = ""
            }, 5000);
            form.reset()
          })
          .catch(error => console.error('Error!', error.message))
      })