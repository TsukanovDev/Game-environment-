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

			});
			window.addEventListener('keyup', e => {
				this.game.lastkey = 'R' + e.key;

			});
		}
	}


	class Owlbear {


	}


	class Object {

	}


	class Game {
		constructor(width, height) {
			this.width = width;
			this.height = height;
			this.lastkey = undefined;
			this.input = new InputHandler(this);
		}
	}


	const game = new Game(canvas.width, canvas.height);
	console.log(game);
});

