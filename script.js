const count = {pt1: 3, pt21: 9, pt22: 12, pt23: 9};

function addLikes(element) {
    console.log(element);
    
    var numOfLikes = count[element];
    console.log(numOfLikes);
    
    count[element]++;

    console.log(count[element])

    document.querySelector("." + element).innerText = count[element] + " like(s)";
}