#!/usr/bin/env sh



# ensure arguments is passed
 if [ "$#" -eq  "0" ]
   then
     echo "No arguments supplied"
 else


    # abort on errors
    set -e

    # build
    yarn build

    # navigate into the build output directory
    cd dist

    # if you are deploying to a custom domain
    # echo 'www.example.com' > CNAME

    git init
    git add -A
    git commit -m 'deploy'

    # if you are deploying to https://<USERNAME>.github.io
    # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

    # if you are deploying to https://<USERNAME>.github.io/<REPO>
    # git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
    git push -f git@github.com:hungom/$1.git master:gh-pages

 fi

cd -