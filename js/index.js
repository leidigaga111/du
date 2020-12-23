function initImg() {
    const imgBox = document.getElementsByClassName("imgBox")[0]
    let index = 30
    if (document.body.clientWidth < 450) {
        index = 15
    }
    for (var i = 0; i < index; i++) {
        var src = 0
        if (Math.random() > 0.5) {
            src = Math.floor(Math.random() * 6) + 1;
        } else {
            src = "0" + (Math.floor(Math.random() * 6) + 1);
        }
        var img = document.createElement("img")
        img.src = `./img2/${src}.jpg`;
        img.className = 'add_img'
        imgBox.appendChild(img)
    }
}
initImg();
bindEvent()

function bindEvent() {
    const btn = document.getElementsByClassName("btn")[0]
    let audio = document.getElementById('audio')
    btn.onclick = function (e) {
        audio.play()
        let imgs = document.getElementsByClassName("add_img")
        for (let i = 0; i < imgs.length; i++) {
            setTimeout(() => {
                imgs[i].style.animation = "small 2s linear forwards"
            }, Math.random() * 1000);
        }
        let btn = document.getElementsByClassName("btn")[0]
        btn.style.animation = 'display 4s linear forwards'
        setTimeout(() => {
            showCircle()
        }, 3000);
    }
}

function showCircle() {
    let imgs = document.getElementsByClassName("add_img")
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.animation = ''
        imgs[i].style.opacity = 0
        imgs[i].style.transform = "rotateY(0deg) translateZ(-" + Math.random() * 500 + "px)"
        imgs[i].style.transition = "all 1.5s linear"
        setTimeout(() => {
            imgs[i].style.opacity = 1
            imgs[i].style.transform = "rotateY(-360deg) translateZ(0)"
        }, Math.random() * 1000);
    }
    setTimeout(() => {
        displayImg()
    }, 2000);
}

function displayImg() {
    let imgs = document.getElementsByClassName("add_img");
    let wrap = document.getElementsByClassName('wrapper')[0]
    for (let i = 0; i < imgs.length; i++) {
        setTimeout(() => {
            imgs[i].style.animation = "displayImg 1s linear forwards"
            if (i == imgs.length - 1) {
                setTimeout(() => {
                    wrap.style.display = 'none';
                }, 1500)
            }
        }, Math.random() * 1000);
    }

}