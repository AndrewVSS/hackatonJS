import {Menu} from './core/menu'
import { BackgroundModule } from './modules/background.module'
import { ShapeModule } from './modules/shape.module'
import {TimerModule} from "./modules/timer.module";
import { ClicksModule } from './modules/clicks.module'

export class ContextMenu extends Menu {
	constructor(selector) {
		super(selector)
		this.modules = [
			new BackgroundModule(),
			new ShapeModule(),
			new TimerModule(),
			new ClicksModule()
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
		this.el.style.display = 'block'
		
	  }

	close() {
		this.el.style.display = 'none'
	}

  }
  
