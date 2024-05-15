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

info.style.display = 'flex'
icons.style.display = 'none'


shareBox.style.opacity = '0'
share.disabled = false

// function toggleShare(){
//     if(shareBox.style.opacity === '0'){
//         shareBox.style.opacity = '1'
//         shareBubble.classList.add('anim')
//         console.log('sharebox showing')
//     } else if(shareBox.style.opacity === '1'){
//         shareBox.style.opacity = '0'
//         shareBubble.classList.remove('anim')
//         console.log('sharebox hidden')
//     }
// }
// function toggleShareMobile(){
//     if(info.style.display === 'flex'){
//         info.style.display = 'none'
//         icons.style.display = 'flex'
//     } else if (info.style.display = 'none'){
//         icons.style.display = 'none'
//         info.style.display = 'flex'
//     }
// }
share.addEventListener('click', function () {
    function handleQueryChangeL(mediaQuery) {
        if (mediaQuery.matches) {
            container.style.border = '1px solid red'
            function toggleShare(){
                if(shareBox.style.opacity === '0'){
                    shareBox.style.opacity = '1'
                    shareBubble.classList.add('anim')
                    console.log('sharebox showing')
                } else if(shareBox.style.opacity === '1'){
                    shareBox.style.opacity = '0'
                    shareBubble.classList.remove('anim')
                    console.log('sharebox hidden')
                }
            }
            toggleShare()
            console.log('clicked on pc')
        } else {
            function toggleShareMobile(){
                if(info.style.display === 'flex'){
                    info.style.display = 'none'
                    icons.style.display = 'flex'
                    bottomLine.classList.add('after')
                } else if (info.style.display = 'none'){
                    icons.style.display = 'none'
                    info.style.display = 'flex'
                    bottomLine.classList.remove('after')
                }
            }
            toggleShareMobile()
            container.style.border = '1px solid green'
            console.log('clicked on mobile')
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

// // function handleQueryChange(mediaQueryM) {
// //     if (mediaQueryM.matches) {
// //       container.style.border = '1px solid green'
// //       share.addEventListener('click', function () {
// //             container.style.border = '1px solid black'
// //             console.log('clicked on mobile')
// //         })
// //     }
// // }

// //   // Initial call to set the initial state based on the media query
// //   handleQueryChange(mediaQueryM);

// //   // Add a listener to react to changes in the media query
// //   mediaQueryM.addEventListener('change', function (event) {
// //     handleQueryChange(event.target);
// // });