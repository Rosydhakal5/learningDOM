console.log("hello world!")
 
//using getElementByTagName ----------->
const heading = document.getElementsByTagName("h1");
heading[0].style.color ="blue"
console.log(heading);

const subHeading = document.getElementsByTagName("h2");
subHeading[0].style.fontSize ="32px"
console.log(subHeading);



const items = document.getElementsByClassName("item");
console.log(items);

const comment = document.getElementById("comments-section");
comment.setAttribute("style", "color: green");
console.log(comment);


const submitButton = document.querySelector("#comments-section button");
submitButton.addEventListener("click",function(){
    // alert("form has been submitted")
    heading[0].setAttribute("class", "documentTitle")
    heading[0].style.color = "green"
})
console.log(submitButton);

const paragraph = document.querySelector("p");
console.log(paragraph);


const para = document.querySelector(".para");
console.log(para);

const link = document.createElement("a");
console.log(link);
link.setAttribute("href", "https://x.com")
//adding text
link.innerText = "twitter"
//appending 
comment.appendChild(link);

//inner text and inner html
console.log(comment.innerHTML)
console.log(paragraph.innerHTML)


//
paragraph.innerText = "This is NOT DOM";
paragraph.innerHTML = "<H1> This is NEW DOM </H1>";

setTimeout(() => {
    subHeading[0].style.textTransform = "UpperCase"
}, 3000);

const personName = document.getElementById("name");
console.log(personName);

const address = document.getElementById("address");
console.log(address);

const detailSection = document.querySelector(".details");
console.log(detailSection);

const addButton = document.querySelector(".addButton");
console.log(addButton);
addButton.addEventListener("click", function(){
    console.log("the add button is cliked")
    const nameValue = personName.value;
    const addressValue = address.value;
    console.log(nameValue, addressValue)

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.addEventListener("click", () =>{
    detailSection.removeChild(spanDetails); })

    const spanDetails = document.createElement('p')
    spanDetails.innerHTML = `<span> ${nameValue} </span> - <span> ${addressValue} </span>`
    detailSection.appendChild(spanDetails)
    spanDetails.appendChild(removeButton)

})


