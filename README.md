# vue-image-spinner2
vue-image-spinner2 is simple javascript package made with vue js that allows you to use your own image for spinner or loading indicator.

## Project setup
```
yarn add vue-image-spinner2 or npm i vue-image-spinner2
```
## usage
### script
````
import {Spinner} from 'vue-image-spinner2'
export default{
    components:{
        Spinner
    }
}
````

### template
````
<Spinner type="rotating" src="https://s.gravatar.com/avatar/dad090f47a794da4dd624eee6d301aba?size=100&default=retro"/>
<Spinner type="rotating" :src="require(`@/assets/logo.png`)"/>
````


## props

props name  | type | default | description
------------ | ------------ | ------------ | ------------
type  | string | rotating | spinner type
src  | string (required) | none | your image location, you can use image url, or use js require
top  | string | 50% | margin top, you can use % or px
overlay  | string | 'rgba(255, 255, 255, 0.0)'(no overlay) | overlay color, use rgba for transparent overlay
width  | string | 50px | your image size

## Spinner type

- rotating
- linear-rotating
- scale-up
- breathing
- jumping


## links
[npm](https://www.npmjs.com/package/vue-image-spinner)