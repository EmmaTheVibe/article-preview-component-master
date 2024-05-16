const share = document.querySelector('.share')
const shareIcon = document.querySelector('.icon')
const shareBox = document.querySelector('.share-box')
const shareBubble = document.querySelector('.share-bubble')
const mediaQueryM = window.matchMedia('(max-width: 600px)')
const mediaQuery = window.matchMedia('(min-width: 601px)')
const container =  document.querySelector('.container')
const info = document.querySelector('.info')
const icons = document.querySelector('.icons')
const bottomLine = document.querySelector('.bottom-line')
const after = document.querySelector('.after')

info.style.display = 'flex'
icons.style.display = 'none'

shareBox.style.opacity = '0'

share.addEventListener('click', function () {
    function handleQueryChangeL(mediaQuery) {
        if (mediaQuery.matches) {
            function toggleShare(){
                if(shareBox.style.opacity === '0'){
                    shareBox.style.opacity = '1'
                    shareBubble.classList.add('anim')
                } else if(shareBox.style.opacity === '1'){
                    shareBox.style.opacity = '0'
                    shareBubble.classList.remove('anim')
                }
            }
            toggleShare()
        } else {
            function toggleShareMobile(){
                if(info.style.display === 'flex'){
                    info.style.display = 'none'
                    icons.style.display = 'flex'
                    after.style.opacity = '1'
                } else if (info.style.display = 'none'){
                    icons.style.display = 'none'
                    info.style.display = 'flex'
                    after.style.opacity = '0'
                }
            }
            toggleShareMobile()
        }
    }
    if(share.classList.contains('clicked')){
        share.classList.remove('clicked')
        shareIcon.classList.remove('clicked-icon')
    } else {
        share.classList.add('clicked')
        shareIcon.classList.add('clicked-icon')
    }
    handleQueryChangeL(mediaQuery);
    mediaQuery.addEventListener('change', function (event) {
        handleQueryChangeL(event.target);
    })
})

function handleQueryChangeL(mediaQuery) {
    if (mediaQuery.matches) {
      info.style.display = 'flex'
      icons.style.display = 'none'
    }
}

  handleQueryChangeL(mediaQuery);

  mediaQuery.addEventListener('change', function (event) {
    handleQueryChangeL(event.target);
});
