let d = document
let gBtn = d.querySelector('.generatBtn')
let ftext = d.querySelector('.fileTxt')
let fname = d.querySelector('.fileName')

gBtn.addEventListener('click',function(e){
  e.preventDefault()
  let ftextval = ftext.value
  let fnameval = fname.value
  if (ftextval == '' || fnameval == '') {
    alert('plese fill-up the form')
  }else{
    var innerFileText = new Blob([ftextval])
    saveAs(innerFileText, fnameval)
    ftext.value = ''
    fname.value = ''
  }
})




