// localStorage.setItem('them', 'light')

// const themColours = localStorage.getItem("them");

// const settings = {
// 	theme: "lights",
// 	notification: false,
// 	options: [1,2,3]
// }

// localStorage.setItem("settings", JSON.stringify(settings))
// const settingsData = localStorage.getItem("settings")
// const parseSettings = JSON.parse(settingsData)
// console.log(parseSettings)

const body = document.querySelector("body")
const btn = document.querySelector(".btn")
const theme = localStorage.getItem("theme")
if (theme) {
	body.classList.add(theme)
	
} else {
	body.classList.add('light')
	localStorage.setItem('theme', 'light')
}
btn.addEventListener("click",(e) => {
	
})
console.log(theme)