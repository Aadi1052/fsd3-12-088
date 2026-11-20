# Frontend using react
## Create React Project
```
1. cd frontend #goto frontend (should be small case) folder
2. npm create vite@latest #y if asked to install
3. press . as project name 
4. select react as framework
5. select javascript as variant 
6. select ESlint as linter
7. select yes and continue
```
## Add Tailwind for UI
```
1. goto https://tailwindcss.com/ and click on get started 
2. stop the frontend (cntrl+c) then install by npm install tailwindcss @tailwindcss/vite
3. open vite.config.js then add dependency as below 
    import { defineConfig } from 'vite';
    import tailwindcss from '@tailwindcss/vite'
    ```
    export default defineConfig({
  plugins: [react(),
    tailwindcss()],
    })
   ```
4. open src/index.css and remove all contents then paste @import "tailwinds" ; as first line.
```
### React componment
 
