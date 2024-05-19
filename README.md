# Number Rolling

The React library for number rolling animation.

![화면 기록 2024-05-18 22 56 51](https://github.com/fecapark/number-rolling/assets/101973955/2eb6bda9-d587-4290-b859-5a02cfd82c87)

- [Demo](https://number-rolling-web.vercel.app/)
- [NPM](https://www.npmjs.com/package/@fecapark/number-rolling)

## Install

```
npm i @fecapark/number-rolling
```

```
yarn add @fecapark/number-rolling
```

<br />

## Usage

### All Properties

```tsx
import { Roller } from "@fecapark/number-rolling";

<Roller
  value={13000}
  suffix="",
  suffixPosition="back",
  align="center",
  fontSize={48},
  rollDuration={0.6},
  shiftDuration={0.45},
  staggering={false},
  diff={false},
  rollWay="down",
  showAfterFontNameLoaded="",
/>;
```

| prop                    | description                                                                                                                                                                                                                                           | type                          | initial value               | required |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | --------------------------- | -------- |
| value                   | Number(integer, float) value to display.                                                                                                                                                                                                              | `number`                      | value required              | `true`   |
| suffix                  | Suffix string to display.                                                                                                                                                                                                                             | `string`                      | "" (empty string)           | `false`  |
| suffixPosition          | Determines position of the suffix string.                                                                                                                                                                                                             | `front` or `back`             | `back`                      | `false`  |
| align                   | Text align of animation container width change.                                                                                                                                                                                                       | `left` or `center` or `right` | `center`                    | `false`  |
| fontSize                | Font size of value and suffix.                                                                                                                                                                                                                        | `number`                      | 48                          | `false`  |
| rollDuration            | Duration of value rolling animation.                                                                                                                                                                                                                  | `number` (seconds)            | 0.6 (seconds)               | `false`  |
| shiftDuration           | Duration of width changing animation.                                                                                                                                                                                                                 | `number` (seconds)            | 0.45 (seconds)              | `false`  |
| staggering              | Determines trigger each value's rolling animation as sequence or randomly.                                                                                                                                                                            | `boolean`                     | `false` (triggers randomly) | `false`  |
| diff                    | Determines trigger rolling aniamtion for only changed values.                                                                                                                                                                                         | `boolean`                     | `false`                     | `false`  |
| rollWay                 | Rolling animation's roll direction.                                                                                                                                                                                                                   | `up` or `down`                | `down`                      | `false`  |
| showAfterFontNameLoaded | This component will be show after setted font-face loaded. If you setted `font-family` through any styling to this component, you should set this prop values as your `font-family` values for preventing CLS(Cumulative Layout Shift). See examples. | `string[]`                    | [] (empty array)            | `false`  |

<br />

## Examples

### Simple usage

```tsx
import { Roller } from "@fecapark/number-rolling";

<Roller value={13000} />;
```

![화면 기록 2024-05-18 23 28 00](https://github.com/fecapark/number-rolling/assets/101973955/19e67774-a3f3-4b49-8e5c-a690434771a3)

<br />

### With suffix

```tsx
import { Roller } from "@fecapark/number-rolling";

<Roller value={...} suffix="%" />;
```

![화면 기록 2024-05-18 23 30 50](https://github.com/fecapark/number-rolling/assets/101973955/3a8af789-e368-41e4-953c-3bc7a18f78fc)

```tsx
import { Roller } from "@fecapark/number-rolling";

<Roller value={...} suffix="$" suffixPosition="front" />;
```

![화면 기록 2024-05-18 23 31 24](https://github.com/fecapark/number-rolling/assets/101973955/3e4caa8d-4485-4260-b24a-dfc1f5ffa107)

<br />

### Align

For use `align` props,  
`Roller` component should be wrapped in an element that has **enough width.**

```tsx
import { Roller } from "@fecapark/number-rolling";

<div style={{ width: 600 }}>
  <Roller value={...} align="right" />;
</div>
```

![화면 기록 2024-05-18 23 34 26](https://github.com/fecapark/number-rolling/assets/101973955/424f6acd-de14-4592-94c7-a40bf81db18e)

```tsx
import { Roller } from "@fecapark/number-rolling";

<div style={{ width: 600 }}>
  <Roller value={...} align="left" />;
</div>
```

![화면 기록 2024-05-18 23 36 57](https://github.com/fecapark/number-rolling/assets/101973955/be67fecf-cc57-4b7f-aeeb-5494f5257bd3)

<br />

### Staggering

```tsx
import { Roller } from "@fecapark/number-rolling";

<Roller value={...} staggering={true} />;
```

![화면 기록 2024-05-18 23 39 34](https://github.com/fecapark/number-rolling/assets/101973955/613b4169-5fb2-45c6-a648-b376ac10b66c)

```tsx
import { Roller } from "@fecapark/number-rolling";

<Roller value={...} staggering={false} />;
```

![화면 기록 2024-05-18 23 40 03](https://github.com/fecapark/number-rolling/assets/101973955/713a5f91-bd47-4793-be2f-8da900c9d49d)

<br />

### Diff

```tsx
import { Roller } from "@fecapark/number-rolling";

<Roller value={...} diff={true} />;
```

![화면 기록 2024-05-18 23 44 10](https://github.com/fecapark/number-rolling/assets/101973955/c8116b29-ac3b-41b0-b7e6-6f6da5b14e01)

```tsx
import { Roller } from "@fecapark/number-rolling";

<Roller value={...} diff={false} />;
```

![무제](https://github.com/fecapark/number-rolling/assets/101973955/479c1d98-9f60-4cc8-9c8f-1dfc0d027814)

<br />

### Rollway

```tsx
import { Roller } from "@fecapark/number-rolling";

<Roller value={...} rollWay="up" />;
```

![화면 기록 2024-05-18 23 53 52](https://github.com/fecapark/number-rolling/assets/101973955/9b5dfe9f-56ef-432c-ad77-88c91d1dc7fc)

```tsx
import { Roller } from "@fecapark/number-rolling";

<Roller value={...} rollWay="down" />;
```

![화면 기록 2024-05-18 23 54 38](https://github.com/fecapark/number-rolling/assets/101973955/36ddbbb1-2536-4c4c-a317-0aa005c743e7)

<br />

### showAfterFontNameLoaded

If you setted font-family, recommended to use this property.

In example below, the font `Roboto` and `Noto Sans` are setted. After all setted fonts are loaded, if any one of the fonts is successfully loaded, the components are displayed on the screen.

```tsx
import { Roller } from "@fecapark/number-rolling";

<div style={{
  fontFamily: "Roboto, 'Noto Sans' sans-serif"
}}>
  <Roller value={...}  showAfterFontNameLoaded={["Roboto", "Noto Sans"]} />;
</div>
```

| Roboto Loaded | Noto Sans Loaded | Result   |
| ------------- | ---------------- | -------- |
| `loaded`      | `loaded`         | show     |
| `failed`      | `failed`         | not show |
| `loaded`      | `failed`         | show     |
| `failed`      | `loaded`         | show     |
