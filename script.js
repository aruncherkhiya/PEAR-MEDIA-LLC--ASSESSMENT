let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = Math.ceil(Math.random() * 3600)

spinBtn.onclick = function(){
    console.log("wheel clicked")
    wheel.style.transform= "rotate("+ value + "deg)";
    value += Math.ceil(Math.random()*3600);
    setTimeout(function(){
        Swal.fire({
            title: 'Yay!',
            html:'You Won ' + '<h3>Want to Try Again</h3>',
            text: 'You Won ' + '<h3>Want to Try Again</h3>',
            imageUrl: 'giftbox.gif',
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    },7000)
    
}
