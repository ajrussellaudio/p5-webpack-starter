# [P5.js](https://p5js.org/) & webpack

I got P5 and webpack working together and I'm pushing it so I can remind myself how to do it later.

I'm not sure if this is the best way to do it, because it works by attaching the P5 `setup()` and `draw()` methods to `window`, which seems kinda sucky to me, but I guess that's what happens when you pull P5 in through a `<script>` tag. So whatever. It works.

## Usage

Install dependencies:

```
npm install
```

Run in development mode:

```
npm run dev
```

Make changes to `src/sketch.js` and `src/main.css`. The dev server includes hot reloading so changes should be reflected straight away.

To deploy, build a production bundle:

```
npm run build
```

And upload the contents of the `dist` folder somewhere.
