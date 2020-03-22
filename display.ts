import { Game } from "snake";
export class Display {
    game: Game;
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;
    food_x: number;
    food_y: number;
    x: number;
    y: number;
    game_started: boolean;
    snake_size: number;
    food_size: number;
    score: HTMLElement;

    constructor(game: Game, canvas: HTMLCanvasElement, score: HTMLElement) {
        this.score = score;
        this.game = game;
        this.game_started = game.if_game_started();
        this.height = game.height();
        this.width = game.width();
        this.x = game.x();
        this.y = game.y();
        this.food_x = game.food_x();
        this.food_y = game.food_y();
        this.snake_size = game.snake_cell_size();
        this.food_size = game.food_cell_size();

        canvas.height = this.height;
        canvas.width = this.width;

        this.ctx = canvas.getContext('2d');

        window.addEventListener("keydown", event => {
            const { key } = event;

            switch (key) {
                case 'k':
                    game.set_directiion(0);
                    break;
                case 'j':
                    game.set_directiion(1);
                    break;
                case 'h':
                    game.set_directiion(2);
                    break;
                case 'l':
                    game.set_directiion(3);
                    break;
            }
        });


        window.addEventListener("keyup", () => {
            this.game.start_game();
        });
    }


    draw_field() {
        this.ctx.beginPath();
        this.ctx.rect(0, 0, this.width, this.height);
        this.ctx.fillStyle = "black";
        this.ctx.fill();
    };

    draw_line_snake(tx?: number[], ty?: number[]) {
        this.ctx.fillStyle = "lime";
        this.ctx.fillRect(this.x, this.y, this.snake_size, this.snake_size);
        for (let i in tx) {
            this.ctx.fillRect(tx[i], ty[i], this.snake_size, this.snake_size);
        }
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.food_x, this.food_y, this.food_size, this.food_size);
    };

    renderLoop = () => {
        this.x = this.game.x();
        this.y = this.game.y();

        let tail_x = this.game.tail_x();
        let tail_y = this.game.tail_y();

        this.food_x = this.game.food_x();
        this.food_y = this.game.food_y();

        this.draw_field();
        this.draw_line_snake(tail_x, tail_y);

        this.score.innerText = this.game.get_score();

        this.game.tick();

        requestAnimationFrame(this.renderLoop)
    };

    public start() {
        this.draw_field();
        this.draw_line_snake();

        if (!this.game_started) {
            this.renderLoop();
        }
    }
}