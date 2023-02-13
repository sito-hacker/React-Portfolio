import React from 'react'

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    })
  return (
    <a href="#" className='scrollup'>
        <i class="fa-solid fa-arrow-up"></i>
    </a>
  )
}

export default ScrollUp;