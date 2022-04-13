* ***APP Used [ CircleCI ] As The CI/CD Platform.***  

## Pipeline Process
===============
#### [1] Front-End Install
```
command: | npm run frontend:install
```
###### Which Means To Go  To The Frontend File [udagram-frontend] And Install  All The Dependencies That It'll Need To Work Without Any Errors.
&nbsp;

#### [2] Back-End Install
```
command: | npm run backend:install
```
###### Which Means To Go  To The Backend File [udagram-api] And Install  All The Dependencies That It'll Need To Work Without Any Errors.

&nbsp;

#### [3] Front-End Build
```
command: | npm run frontend:build
```
###### Which Will Compile And Convert Our Code From Typescript To Javascript Into A New Folder Called [www] inside [udagram-frontend] Folder.

&nbsp;

#### [4] Back-End Build
```
command: | npm run backend:build
```
###### Which Will Compile And Convert Our Code From Typescript To Javascript Into A New Folder Called [www] inside [udagram-api] Folder.

&nbsp;

#### [5] Deploy Frontend
```
command: | npm run frontend:deploy
```
###### Which Will Deploy/Upload The Frontend Compiled Folder [www] To Our S3 Bucket  [mo-nagy-udagram] Automatically.

#### [6] Deploy Backend
```
command: | npm run backend:deploy
```
###### Which Will Deploy/Upload The Backend Compiled Folder [www] To Our Elastic Beanstalk Automatically.