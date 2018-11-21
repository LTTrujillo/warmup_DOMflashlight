document.addEventListener('DOMContentLoaded', () => {
    var el = document.getElementById('flashlight')

    el.addEventListener('click', function() {
      el.classList.toggle("on")
      el.classList.toggle("off")     
    })
})
