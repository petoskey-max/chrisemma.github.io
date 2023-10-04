const counters = document.querySelectorAll('.counter')
counters.forEach(counter =>
    {
    counter.innerText = '0'
    const updateCounter = () =>
    {
        const target = +counter.getAttribute('data-bs-target')
        const c = +counter.innerText
        const increment = target / 5
        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else{
            counter.innerText = target
        }
    }
    updateCounter()
});

let mybutton = document.getElementById("btn");
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
    mybutton.style.display ="block";
  } else{
    mybutton.style.display = 'none'
  }
}

