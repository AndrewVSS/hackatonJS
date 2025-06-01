import { Module } from '../core/module'
import { random } from '../utils'

function getBGColor() {
	const r = random(0, 255)
	const g = random(0, 255)
	const b = random(0, 255)
	return `rgb(${r}, ${g}, ${b})`
  }

export class ShapeModule extends Module {
    constructor() {
        super('shape', 'Случайная фигура')
        this.label = 'Случайная фигура'
        this.shapes = ['circle', 'square', 'rectangle', 'triangle']
    }

    trigger() {
		const exShape = document.querySelector('.random-shape')
        if(exShape) {
            exShape.remove()
        }

        const shape = document.createElement('div')
        shape.className = ('random-shape')
        shape.style.position = 'absolute'

        const size = random(100, 250)
        const index = random(0, this.shapes.length)
        const shapeType = this.shapes[index]
        const color = getBGColor()
        const x = random(0, window.innerWidth - size)
        const y = random(0, window.innerHeight - size)

        if (shapeType === 'circle') {
            shape.style.width = `${size}px`
            shape.style.height = `${size}px`
            shape.style.borderRadius = '50%'
            shape.style.backgroundColor = color
        } else if (shapeType === 'rectangle') {
            shape.style.width = `${size}px`
            shape.style.height = `${random(120, 140)}px`
            shape.style.backgroundColor = color
        } else if (shapeType === 'square') {
            shape.style.width = `150px`
            shape.style.height = `150px`
            shape.style.backgroundColor = color
        } else if (shapeType === 'triangle') {
            shape.style.width = `${size}px`
            shape.style.height = `${size}px`
            shape.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)'
            shape.style.backgroundColor = color
        }

        shape.style.left = `${x}px`
        shape.style.top = `${y}px`

        document.body.append(shape)
	}

    render() {
	 	const el = document.createElement('li')
		el.className = 'menu-item'
		el.textContent = this.label
		el.addEventListener('click', (event) => {event.stopPropagation(); this.trigger()})
		return el
	}

}