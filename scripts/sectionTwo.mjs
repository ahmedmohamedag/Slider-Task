export const sectionTwo = () => {
    let carts = Array.from(document.querySelectorAll('#carts img'));
    let layer = document.querySelector('#layer');
    let cart = document.querySelector('#cart');
    let btnLeft = document.querySelector('#left');
    let btnRight = document.querySelector('#right');
    let btnClose = document.querySelector('#close');
    let currentIndex = 0;
    
    carts.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            layer.style.display = "flex";
            cart.style.backgroundImage = `url(${e.target.getAttribute('src')})`;
            console.log(cart.style.backgroundImage)
            currentIndex = index;
        });
    });

    btnLeft.addEventListener('click', () => {
        currentIndex = (currentIndex - 1) % carts.length;
        // if (currentIndex == carts.length //==6) {
        //     currentIndex = 0
        // }

        updateCartBackground();
    });

    btnRight.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carts.length;
        // if (currentIndex == -1) {
        //     currentIndex =  carts.length - 1 //== 6
        // }

        updateCartBackground();
    });

    btnClose.addEventListener('click', close);

    function close() {
        layer.style.display = "none";
    }

    function updateCartBackground() {
        cart.style.backgroundImage = `url(${carts[currentIndex].getAttribute('src')})`;
        // console.log(carts[currentIndex].getAttribute('src'));
        console.log( cart.style.backgroundImage);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % carts.length;
            updateCartBackground();
        } else if (e.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + carts.length) % carts.length;
            updateCartBackground();
        } else if (e.key === "Escape") {
            close();
        }
    });

    layer.addEventListener('click', (e) => {
        if (e.target !== cart && e.target !== btnLeft && e.target !== btnRight) {
            close();
        }
    });
}
