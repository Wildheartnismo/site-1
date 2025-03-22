const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "firefox.jpg") {
        myImage.setAttribute("src", "firefox2.jpg");
    } else {
        myImage.setAttribute("src", "firefox.jpg");
    }
    let myButton = document.querySelector("button");
    let myHeading = document.querySelector("h1");
    function setUserName() {
        const myName = prompt("Please enter you name.");
        if (!myName){
            setUserName();
        } else {
            localStorage.setItem("name", myName);
            myHeading.textContent = `Mozilla is cool, ${myName}`;    
         }
    }
    if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Mozilla is cool, ${storedName}`;
    }
    myButton.addEventListener("click", () => {
        setUserName();
    });
});