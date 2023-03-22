//Create
const modal = document.querySelector('.modal')
const signModal = document.querySelector('.signup')
const login = document.querySelector('.login')
const signUp = document.querySelector('.sign-up')
const closeLogin = document.querySelector('.modal__close')
const closeSignUp = document.querySelector('.signup__close')
const burgerMenuModal = document.querySelector('.header__menu')
const burgerMenuBtn = document.querySelector('.header__burger')

//Event
login.addEventListener('click', modalLogin)
signUp.addEventListener('click', modalSignUp)
closeLogin.addEventListener('click', loginClose)
closeSignUp.addEventListener('click', signUpClose)
burgerMenuBtn.addEventListener('click', function (e) {
	burgerMenuModal.classList.toggle('open')
	console.log(e.currentTarget)
})
window.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		modal.classList.remove('open')
		signModal.classList.remove('open')
		document.body.style.overflowY = 'scroll'
	}
})

document.querySelector('.modal__inner').addEventListener('click', (e) => {
	e._isClickWithInModal = true
})
document.querySelector('.signup__inner').addEventListener('click', (e) => {
	e._isClickWithInModal = true
})

modal.addEventListener('click', (e) => {
	if (e._isClickWithInModal) return
	e.currentTarget.classList.remove('open')
	document.body.style.overflowY = 'scroll'
})

signModal.addEventListener('click', (e) => {
	if (e._isClickWithInModal) return
	e.currentTarget.classList.remove('open')
	document.body.style.overflowY = 'scroll'
})

//Function
function modalLogin() {
	modal.classList.add('open')
	document.body.style.overflowY = 'hidden'
}

function modalSignUp() {
	signModal.classList.add('open')
	document.body.style.overflowY = 'hidden'
}

function loginClose() {
	modal.classList.remove('open')
	document.body.style.overflowY = 'scroll'
}
function signUpClose() {
	signModal.classList.remove('open')
	document.body.style.overflowY = 'scroll'
}

function showPass() {
	const input = document.getElementById('password')
	if (input.type === 'password') {
		input.type = 'text'
	} else {
		input.type = 'password'
	}
	document.body.style.overflowY = 'hidden'
}
