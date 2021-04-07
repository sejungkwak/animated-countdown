# Animated Countdown

![screen recording](https://media.giphy.com/media/rI904DtuEWVV7ytE6j/giphy.gif)

#### project notes

1. HTML

- h: Go
- button: replay
- onload or after click: number changes 3=>2=>1=>0 & p: GET READY

2. CSS

- animation: translate, rotate, scale, cubic-bezier

3. JavaScript

- setTimeout or setInterval to change numbers
- click event listener

- Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'

#### Takeaways from the instructor

1. HTML

- numbers are hard coded

2. CSS

- no flex to body
- containers position: fixed, top: 50%, left: 50%, transform: translate(-50%, -50%) + scale(0) when hidden
- 2 animations for the counter(for hiding) and button page(for showing)
- 2 animations for the counter: one for from right to center, the other for from center to right.
- overflow: hidden for the counter box!
- transform-origin: bottom center

3. JavaScript

- animationend event listener to swap the animation and then containers
- element.classList.value = ''
