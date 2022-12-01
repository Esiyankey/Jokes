const spans =document.querySelector('.joke-span')
const button =document.querySelector('.btn')
const loading = document.querySelector('.loader')


button.addEventListener('click',getapi)



async function getapi() {
    spans.innerText=""

    loading.classList.add('show')
    const config ={
        headers: {
         'Accept': 'application/json',
          },
    }
    const response = await fetch('https://icanhazdadjoke.com/',config);
    var data = await response.json();
    

    setTimeout(stopLoader(),200000)

    function stopLoader(){
        loading.classList.remove('show')
    }
    spans.innerText = data.joke
}
    
    