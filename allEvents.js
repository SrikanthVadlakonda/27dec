// Mouse Events
document.getElementById("clickBtn").addEventListener("click", () => {
    alert("Button clicked!");
});

document.getElementById("dblclickBtn").addEventListener("dblclick", () => {
    alert("Button double-clicked!");
});

document.getElementById("hoverBox").addEventListener("mouseover", () => {
    alert("Mouse entered the hover box!");
});

document.getElementById("hoverBox").addEventListener("mouseout", () => {
    alert("Mouse left the hover box!");
});

// Keyboard Events
document.getElementById("textInput").addEventListener("keydown", (event) => {
    console.log(`Key pressed: ${event.key}`);
});

document.getElementById("textInput").addEventListener("keyup", (event) => {
    console.log(`Key released: ${event.key}`);
});

// Form Events
document.getElementById("nameInput").addEventListener("focus", () => {
    console.log("Name input focused.");
});

document.getElementById("nameInput").addEventListener("blur", () => {
    console.log("Name input lost focus.");
});

document.getElementById("eventForm").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Form submitted!");
});

// Window Events
window.addEventListener("resize", () => {
    document.getElementById("resizeText").textContent = "Window resized!";
});

window.addEventListener("scroll", () => {
    document.getElementById("scrollText").textContent = "You are scrolling!";
});

// Other Events
document.getElementById("rightClickBox").addEventListener("contextmenu", (event) => {
    event.preventDefault();
    alert("Right-click detected!");
});

document.getElementById("rightClickBox").addEventListener("mousemove", (event) => {
    console.log(`Mouse moved at (${event.clientX}, ${event.clientY})`);
});

