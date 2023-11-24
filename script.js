const spinBtn = document.querySelector(".spin");
const container = document.querySelector(".container");

spinBtn.addEventListener('click', handleSpin)

function handleSpin() {
    const promise = [...container.children].map(()=> createPromise())

    Promise.allSettled(promise)
    .then(items => {
        const isWinner = items.every(item => item.status = "fulfilled")|| items.every(item => item.status === "rejected");
    

    items.forEach((item,i) => {
        container.children[i].innerHTML = "";

        setTimeout(() => {

            const img = document.createElement('img');
            img.src = item.value || 'plum.png';
            img.alt = item.value ? 'Winner' : 'Loser';
            container.children[i].appendChild(img);


            if(i === items.length - 1)
            {
                const instance = basicLightbox.create(`<h1>${isWinner ? "Winner" : "Loser"}</h1>`)
                instance.show();
            }
        }, 1000 * (i + 1))
        })
    })
}

const createPromise = () =>{
    return new Promise((resolve, reject) => {
        const random = Math.random()

        if(random > 0.5)
        {
          resolve("banana.png")  
        }
        else
        {
            reject("plum.png")
        }
    })
}











