

// Heart icon
const heartIcons = document.getElementsByClassName("button-1")

for (const heartIcon of heartIcons) {
    heartIcon.addEventListener("click", function () {
        const totalHeart = parseInt(document.getElementById("heart-count").innerText)
        const totalHeartCount = totalHeart + 1
        document.getElementById("heart-count").innerText = totalHeartCount
    })
}

function getElement(id) {
    const element = document.getElementById(id);
    return element;
}
const cardButton = document.getElementsByClassName("call-btn-1")
for (const card of cardButton) {
    card.addEventListener("click", function () {
        const totalCoin = parseInt(document.getElementById("coin-count").innerText)
        if (totalCoin < 20) {
            alert("You don't have enough coins, you need at least 20 coins to make a call.")
            return
        }

        const totalCoinCount = totalCoin - 20
        document.getElementById("coin-count").innerText = totalCoinCount
        document.getElementById("block").style.display = "block"
        const serviceName = card.parentNode.parentNode.children[1].children[0].innerText;
        const serviceNumber = card.parentNode.parentNode.children[1].children[2].innerText;
        const time = new Date().toLocaleTimeString()
        alert(`calling ${serviceName} ${serviceNumber}...`)
        const container = getElement("container")
        const div = document.createElement("div")
        div.innerHTML = `<div class="flex justify-between items-center gap-2 pt-3">
                        <div>
                            <h2 class="font-bold">${serviceName}</h2>
                            <p>${serviceNumber}</p>
                        </div>
                        <div>
                            <p>${time}</p>
                        </div>
                    </div>`
        container.appendChild(div);

    })

}

const copyButton = document.querySelectorAll(".copy-btn");
const hotlines = document.querySelectorAll(".hotline");

copyButton.forEach((button) => {
    button.addEventListener("click", function () {
        const totalCopy = parseInt(document.getElementById("copy-count").innerText);
        const totalCopyCount = totalCopy + 1;
        document.getElementById("copy-count").innerText = totalCopyCount;
       

        const hotline = this.closest(".copy-parent").querySelector(".hotline").innerText
        navigator.clipboard.writeText(hotline);
        alert(`The number has been copied ${hotline}`)
    });
});






document.getElementById("clear-btn").addEventListener("click", function () {
    document.getElementById("container").innerHTML = ""
})
