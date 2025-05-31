import {Module} from '../core/module'
import { random } from '../utils'

function getBGColor() {
	const r = random(0, 255)
	const g = random(0, 255)
	const b = random(0, 255)
	return `rgb(${r}, ${g}, ${b})`
  }
export class BackgroundModule extends Module {
	constructor() {
		super('background', 'Случайный фон')
		this.label = 'Случайный фон'
	}
	
	trigger() {
		document.body.style.backgroundColor = getBGColor()
		setTimeout(() => {
			console.log('Can we still open menu?')
		  }, 500)
	}
	
	render() {
	 	const el = document.createElement('li')
		el.className = 'menu-item'
		el.textContent = this.label
		el.addEventListener('click', () => {event.stopPropagation(); this.trigger()})
		return el
	}
}
