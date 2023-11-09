const sites = [
    {
        name: "Google",
        url: "https://www.google.com",
        buttonColor: "btn-warning"
    },
    {
        name: "W3 Schools",
        url: "https://www.w3schools.com/js",
        buttonColor: "btn-primary"
    },
    {
        name: "My Page",
        url: "http://127.0.0.1:5501/NewTabs/images.html",
        buttonColor: "btn-danger"
    }
]



document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("content");
    const button = document.getElementById("button");

    button.addEventListener("click", () => {
        window.open("https://google.com/")
    })


    sites.forEach(site => {
        // add a button that opens the site in a new window
        const newButton = document.createElement("button");

        newButton.innerText = site.name;
        newButton.classList.add("btn");
        newButton.classList.add(site.buttonColor);

        newButton.addEventListener("click", () => {
            window.open(site.url)
        })

        main.appendChild(newButton);
    })
})
