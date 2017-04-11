$(document).ready(function() {
	$('#hideButton').click(function() {
		$('#hiddenParagraph').toggle()
	})
});
var zodiac = [
	{
		sign: "aquarius",
		fortune: "Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
		image: "img/aquarius.png",
	},
	{
		sign: "aries",
		fortune: "Active, Demanding, Determined, Effective, Ambitious",
		image: "img/aries.png"
	},
	{
		sign: "cancer",
		fortune: "Emotion, Diplomatic, Intensity, Impulsive, Selective",
		image: "img/cancer.png"
	},
	{
		sign: "capricorn",
		fortune: "Determination, Dominance, Perservering, Practical, Willful",
		image: "img/capricon.png"
	},
	{
		sign: "gemini",
		fortune: "Communication, Indecision, Inquisitive, Intelligent, Changeable",
		image: "img/gemini.png"
	},
	{
		sign: "leo",
		fortune: "Ruling, Warmth, Generosity, Faithful, Initiative",
		image: "img/leo.png"
	},
	{
		sign: "libra",
		fortune: "Balance, Justice, Truth, Beauty, Perfection",
		image: "img/libra.png"
	},
	{
		sign: "pisces",
		fortune: "Fluctuation, Depth, Imagination, Reactive, Indecisive",
		image: "img/pisces.png"
	},
	{
		sign: "sagittarius",
		fortune: "Philosophical, Motion, Experimentation, Optimism",
		image: "img/sagittarius.png"
	},
	{
		sign: "scorpio",
		fortune: "Transient, Self-Willed, Purposeful, Unyielding",
		image: "img/scorpio.png"
	},
	{
		sign: "taurus",
		fortune: "	Security, Subtle strength, Appreciation, Instruction, Patience",
		image: "img/taurus.png"
	},
	{
		sign: "virgo",
		fortune: "Analyzing, Practical, Reflective, Observation, Thoughtful",
		image: "img/virgo.png"
	}
]
function horoscope() {
	var userdata = document.getElementById("zodiacInput")
	console.log(zodiacInput)
	console.log("users value is: " + zodiacInput.value)
	for(i = 0; i<zodiac.length; i = i + 1) {
		console.log("users value lowercase is: " + zodiacInput.value.toLowerCase())
		console.log("current zodiac sign in loop is: " + zodiac[i].sign)
		if(zodiacInput.value.toLowerCase() === zodiac[i].sign) {
			console.log("if statement ran")
			console.log("users typed in: " + zodiac[i].image)
			console.log("current fortune value is: " + zodiac[i].fortune)
			document.getElementById("yourSign").textContent = zodiacInput.value
			document.getElementById("icon").src = zodiac[i].image
			document.getElementById("yourHoroscope").textContent = "You're best attributes are: " + zodiac[i].fortune
			return 
		}
		console.log("no matches were found, user failed to type in a correct zodiac sign")
		document.getElementById("yourSign").textContent = "Your Zodiac Sign doesn't match. Are you Alien??"
		document.getElementById("yourHoroscope").textContent = ""
		document.getElementById("icon").src = ""
	}
  }