let number = 0;
let data = [];
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const videoArea = document.getElementById("video");

function getData() {
    return new Promise((resolve) => {
        const request = new XMLHttpRequest();
        request.open('GET', 'javascript/ajax.json', true);
        request.onload = function() {
            if (request.status === 200) {
                resolve(JSON.parse(request.responseText));
            }
        };
        request.send();
    });
}

function changeVideo() {
    if (data.length > 0) {
        const videoData = data[number];
        titleArea.textContent = videoData.title;
        videoArea.src = videoData.url;
        number = (number + 1) % data.length;
    }
}

window.onload = async () => {
    data = await getData(); 
    changeVideo(); 
    button.addEventListener('click', changeVideo); 
};

