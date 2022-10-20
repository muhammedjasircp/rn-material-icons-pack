# React Native Material Icons

React native implementation for the popular [MaterialIcons](https://marella.me/material-design-icons/demo/svg/)

### Install

Using yarn

```bash
yarn add rnmaterialicons
```

Using npm

```bash
npm install rnmaterialicons
```

This library relies on the `react-native-svg` package to render svg icons. Install the `react-native-svg` package,

```bash
yarn add react-native-svg
```

or

```bash
npm install react-native-svg
```

### Usage

```javascript
import {MaterialIcon, TYPES} from 'rnmaterialicons/src';
```

```javascript
<MaterialIcon name="home" size="48" color="red" type={TYPES.ROUND}>
```

### Props

| Prop  | Default          | Description                                                                                   |
| ----- | ---------------- | --------------------------------------------------------------------------------------------- |
| name  | `remixicon-fill` | Name of the icon. Explore [MaterialIcons](https://marella.me/material-design-icons/demo/svg/) |
| size  | `24`             | Size of the icon                                                                              |
| color | `black`          | Color of the icon                                                                             |
| type  | `round`          | 'round','filled','outlined','sharp'                                                           |
