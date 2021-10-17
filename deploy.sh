#!/usr/bin/env sh



# ensure arguments is passed
 if [ "$#" -eq  "0" ]
   then
     echo "\x1B[01;94m No arguments supplied. Supply sub/path to deploy. \x1B[0m \x1B[01;96m E.g ./deploy darkmode \x1B[0m" 
     echo "\x1B[01;94m This will deploy to \x1B[0m \x1B[01;93m https://username.github.io/darkmode \x1B[0m  \x1B[01;94m  github page \x1B[0m "
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