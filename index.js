const $search = document.querySelector('#search')
const $search_btn = document.querySelector('#search-btn')

const getDigimonData = async digimon =>{
    document.querySelector('#show_error').classList.remove('show')
    document.querySelector('#show_error').classList.add('hidden')
        
    const url = `https://digimon-api.vercel.app/api/digimon/name/${digimon}`
    const response = await fetch(url)

    if(response.status == 400 || response.statusText == 'Not Found'){
        document.querySelector('#show_error').classList.add('show')
        document.querySelector('#show_error').classList.remove('hidden')
        return
    }
    console.log(response)
    const unDigimon = await response.json()

    if(unDigimon)

    console.log(unDigimon);

    mostrarDigimon(unDigimon);

}

const mostrarDigimon = function(digimon){

    console.log(digimon)
    console.log(digimon[0].name)

    document.querySelector('#update_img').setAttribute('src', digimon[0].img)
    document.querySelector('#update_name').innerHTML = digimon[0].name
    document.querySelector('#level').innerHTML = `Level ${digimon[0].level}`

}

$search_btn.addEventListener('click', () => getDigimonData($search.value))
$search.addEventListener('keyup' , (e)=>{
  
    if(e.keyCode == 13) {
        e.preventDefault();
        getDigimonData($search.value);
    }

}
) 