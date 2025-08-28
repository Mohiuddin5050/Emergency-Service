
// Heart icon
const heartIcons = document.getElementsByClassName("button-1")

for(const heartIcon of heartIcons){
    heartIcon.addEventListener("click", function(){
        const totalHeart=parseInt(document.getElementById("heart-count").innerText)
        const totalHeartCount=totalHeart+1
        document.getElementById("heart-count").innerText = totalHeartCount
    })
}

// Call button


