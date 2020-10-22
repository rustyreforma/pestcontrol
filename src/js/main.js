// Import your JS components here 
//import { menuToggle } from './components/menuToggle.js';
import AOS from '../../node_modules/aos/dist/aos.js';
import $ from "jquery";
import '../../node_modules/slick-carousel/slick/slick';
import '../js/components/carousel';

class App {
  constructor() {
    this.components = [];
  }

  component(component) {
    this.components.push(component);
  }

  boot() {
    this.components.forEach((component) => component.init());
  }
}

const app = new App();
// Push imported JS to component variable using .component method
//app.component(new menuToggle);

document.addEventListener("DOMContentLoaded", () => app.boot());


// initialize AOS
AOS.init({
  offset: 400,
  delay: 0,
  duration: 1000,
  disable: 'mobile',
  once: true,
});