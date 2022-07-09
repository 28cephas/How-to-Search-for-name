const inputFilter = document.getElementById('inputFilter')

inputFilter.addEventListener('keyup', () => {
    const filterValue =  document.getElementById('inputFilter').value.toUpperCase()

    //INCASE you want to specify the list to filter
    // const ul = document.getElementById('filter')
    // const li = ul.querySelectorAll('li.contact-names')

    const li = document.querySelectorAll('li.contact-names')

    for (let i= 0; i< li.length; i++) {
      const a = li[i].getElementsByTagName('a')[0]
    
       if(a.innerHTML.toUpperCase().indexOf(filterValue)>-1){
        li[i].style.display=''
       }else{
        li[i].style.display='none'
       }
    }
})

// function filterName() {
//     const filterValue =  document.getElementById('inputFilter').value.toUpperCase()

//     // const ul = document.getElementById('filter')

//     const li = document.querySelectorAll('li.contact-names')

//     for (let i= 0; i< li.length; i++) {
//       const a = li[i].getElementsByTagName('a')[0]
    
//        if(a.innerHTML.toUpperCase().indexOf(filterValue)>-1){
//         li[i].style.display=''
//        }else{
//         li[i].style.display='none'
//        }
//     }
// }
