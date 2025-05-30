import {Menu} from './core/menu'

export class ContextMenu extends Menu {
	setup() {
	  window.addEventListener('contextmenu', e => {
		e.preventDefault()
		const clickX = e.clientX
		const clickY = e.clientY
  
		this.el.style.display = 'block'
		this.el.style.left = `${clickX}px`
		this.el.style.top = `${clickY}px`
		console.log(this.el)
	  })
	}
	
  
	close() {
		this.el.style.display = 'none'
	}

  }
  
