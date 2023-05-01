const url =
    "https://images.pexels.com/photos/974470/nature-stars-milky-way-galaxy-974470.jpeg?q=100";
const img = document.getElementById("huge-image");
const loadButton = document.getElementById("load");
const stopButton = document.getElementById("stop");

let controller;

function startLoading() {
    loadButton.disabled = true;
    loadButton.textContent = "Loading...";
    stopButton.disabled = false;
}
function stopLoading() {
    loadButton.disabled = false;
    loadButton.textContent = "Load HUGE Image";
    stopButton.disabled = true;
}

loadButton.onclick = async function () {
    startLoading();
    controller = new AbortController();
    const signal = controller.signal;

    try {
        const response = await fetch(url, { signal });
        const blob = await response.blob();
        const imgUrl = URL.createObjectURL(blob);
        img.src = imgUrl;
        stopLoading();
    }
    catch (error) {
        console.error(error.message);
    }
};

stopButton.onclick = function () {
    stopLoading();

    // Abort the fetch request
    controller.abort();
};
