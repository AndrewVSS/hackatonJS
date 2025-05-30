import {Menu} from './core/menu'

export class ContextMenu extends Menu {
	constructor(selector) {
		super(selector)
		this.modules = [
		  // тут будут импортированные модули
		]
	  }
  
	setup() {
		window.addEventListener('contextmenu', e => {
		  e.preventDefault()
		  const clickX = e.clientX
		  const clickY = e.clientY
	
		  this.open(clickX, clickY) 
		})
	
		document.body.addEventListener('click', () => this.close())
	  }
	
	  open(x, y) {
		this.el.innerHTML = ''
		this.modules.forEach(mod => this.el.appendChild(mod.render()))
		this.el.style.left = `${x}px`
		this.el.style.top = `${y}px`
		
	  }
	

	close() {
		this.el.style.display = 'none'
	}

  }
  
