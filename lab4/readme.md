# NPM Project

1. goto project folder (by cd)
2. type ```npm init -y```
3. open package.json
4. update```type:module```
5. install nodemon ```npm i nodemon -D```
6. update script in package.json

```
script {
    "start":"node app.js",
    "dev":"nodemon prg7.js"
}
```

7. add node_module to .gitignore
8. to run use `npm run dev`
# request type
1. get-get all,get by id
get all = url- /api/product
get by id = url- /api/product/101
2. post /api/product
data will be share by eco api body section
3. put/patch :- /api/product/201 {pass on body}
4. delete :- /api/product/110 // for delete product no 110

                                      