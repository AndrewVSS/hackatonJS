import {Module} from '../core/module'

export class ClicksModule extends Module {
    constructor() {
        super('click', 'Считать клики (за 3 секунды)')
        this.label = 'Считать клики (за 3 секунды)'
        this.time = 3000
        this.counter = 0
        this.running  = false


    }

    endCounter() {
        if (this.running) {
            this.running = false
            alert(`Количество кликов: ${this.counter}`)
            this.counter = 0
            document.body.removeEventListener('click', this.clickHandler.bind(this))
        }
    }

    clickHandler() {
            if(this.running) {
                this.counter++
            } else {
                this.running = true
                setTimeout(this.endCounter.bind(this), this.time)
            }
    }

    trigger() {    
        document.body.addEventListener('click', this.clickHandler.bind(this))
    }

    render() {
	 	const el = document.createElement('li')
		el.className = 'menu-item'
		el.textContent = this.label
		el.addEventListener('click', (event) => {event.stopPropagation(); this.trigger()})
		return el
	}
}