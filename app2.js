const server = [
	{ name: 'Леха', age: 21, money: 2000 },
	{ name: 'Кирилл', age: 10, money: 500 },
	{ name: 'Нарек', age: 30, money: 20000 },
	{ name: 'Даня', age: 45, money: 200000 },
	{ name: 'Никита', age: 23, money: 2000000 },
	{ name: 'Польский', age: 22, money: 80000 },
	{ name: 'Джаха', age: 21, money: 100000 },
	{ name: 'Иск', age: 18, money: 20000 },
	{ name: 'Христина', age: 19, money: 25000 },
	{ name: 'Филин', age: 20, money: 30000 },
	{ name: 'Папа', age: 50, money: 2000000000 }
]

const form = () => {
	return (
		`
			<form class="form">
				<input type="text" id="input">
				<button>Показать</button>
			</form>
			`
	)
}

const li = (obj) => {
	return (
		`
			<li>
			Имя: <span>${obj.name}, </span>
			Возраст: <span>${obj.age}, </span>
			Бюджет: <span>${obj.money}.</span>
			</li>
		`
	)
}

function findLi(event) {
	let val = event.value.trim().toLowerCase()
	console.log(val)
	let allItems = document.querySelectorAll('.ul li')
	if (val !== '') {
		allItems.forEach(item => {
			console.log(item.innerText.toLowerCase())
			let SmallItem = item.innerText.toLowerCase()
			if(SmallItem.search(val) == -1){
				item.classList.add('hide')
				item.innerHTML = item.innerText
			} else{
				item.classList.remove('hide')
				let str = item.innerText
				item.innerHTML = markText(str, SmallItem.search(val), val.length)
			}
		})
	} else{
		allItems.forEach(item => {
			item.classList.remove('hide')
			item.innerHTML = item.innerText
		})
	}
}

function markText(str, pos, len) {
	return str.slice(0, pos) + '<mark>' + str.slice(pos, pos + len) + '</mark>' + str.slice(pos + len)
}


document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('root')
	const ul = document.getElementById('ul')
	root.innerHTML = form()
	server.forEach((item) => {
		ul.innerHTML += li(item)
	})
	const input = document.getElementById('input')
	input.oninput = function () {
		findLi(input)
	}
})
