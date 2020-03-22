# Wasm Snake game display

This is a graphical implementation of [Wasm Snake game](https://github.com/Shimon1995/Snake)

Here's "display" class, which makes displaying wasm values through canvas easier.

```typescript
import { Display } from "display";

let display = new Display(
    wasm_game_class,
    canvas_html_elemnt, 
    score_html_element
);
display.start();
```