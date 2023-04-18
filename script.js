//9.18


window.addEventListener('load', function () {
	const canvas = document.getElementById('canvas1');
	const ctx = canvas.getContext('2d');
	canvas.width = 1280;
	canvas.height = 720;



	class InputHandler {
		constructor(game) {
			this.game = game;
			window.addEventListener('keydown', e => {
				this.game.lastkey = 'P' + e.key;
				console.log(this.game.lastkey);

			});
			window.addEventListener('keyup', e => {
				this.game.lastkey = 'R' + e.key;
				console.log(this.game.lastkey);

			});
		}
	}


	class Owlbear {
		constructor(game) {
			this.game = game;

			this.spriteWidht = 200;
			this.spriteHeight = 200;

			this.width = this.spriteHeight;
			this.height = this.spriteWidht;
			this.x = 200;
			this.y = 200;
			this.speedX = 0;
			this.speedY = 0;
			this.maxSpeed = 10;
			this.image = owlbear;
		}
		draw(context) {
			context.fillRect(this.x, this.y, this.width, this.height);
			context.drawImage(this.image, 0 * this.spriteWidht, 6 * this.spriteWidht, this.spriteWidht, this.spriteHeight, this.x, this.y, this.width, this.height);
		}

		setSpeed(speedX, speedY) {
			this.speedX = speedX;
			this.speedY = speedY;
		}

		update() {
			if (this.game.lastkey == 'PArrowLeft') {
				this.setSpeed(-this.maxSpeed, 0);


			} else if (this.game.lastkey == 'PArrowRight') {
				this.setSpeed(this.maxSpeed, 0);


			} else if (this.game.lastkey == 'PArrowUp') {
				this.setSpeed(0, -this.maxSpeed);

			} else if (this.game.lastkey == 'PArrowDown') {
				this.setSpeed(0, this.maxSpeed);



			} else {
				this.setSpeed(0, 0);
			}
			this.x += this.speedX;
			this.y += this.speedY;
			//horizontalboundares

			if (this.x < 0) {
				this.x = 0;
			} else if (this.x > this.game.width - this.width) {
				this.x = this.game.width - this.width;
			}

			//vertical boundares

			if (this.y < 0 + this.game.topMargin) {
				this.y = 0 + this.game.topMargin;
			} else if (this.y > this.game.height - this.height) {
				this.y = this.game.height - this.height;
			}
		}
	}




	class Object {

	}


	class Game {
		constructor(width, height) {
			this.width = width;
			this.height = height;

			this.lastkey = undefined;
			this.input = new InputHandler(this);
			this.Owlbear = new Owlbear(this);
			this.topMargin = 200;
		}
		render(context) {
			this.Owlbear.draw(context);
			this.Owlbear.update();
		}
	}


	const game = new Game(canvas.width, canvas.height);
	game.render(ctx);

	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		game.render(ctx);
		requestAnimationFrame(animate);
	}
	animate();

});
//39

