window.addEventListener('DOMContentLoaded', function() {

  let info_header = '.info-header'
  let info_header_tab = '.info-header-tab'
  let info_tabcontent = '.info-tabcontent'




  'use strict';
  let info = document.querySelector(info_header)
  let tab = document.querySelectorAll(info_header_tab)
  let tabContent = document.querySelectorAll(info_tabcontent)

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show')
      tabContent[i].classList.add('hide')
    }
  }

  hideTabContent(1)

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide')
      tabContent[b].classList.add('show')
    }
  }

  info.addEventListener('click', function(event) {
    let target = event.target
    // console.log(target, target.classList.contains('info-header-tab'))
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0)
          showTabContent(i)
          break
        }
      }
    }
  })
})