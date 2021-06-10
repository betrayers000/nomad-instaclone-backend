# Instaclone


Instaclone Backend

npm install apollo-server graphql
npm install --save-dev nodemon @babel/core @babel/presets @babel/node

npx prisma init

prisma migrate
npx prisma migrate dev --name init --preview-feature
npx prisma migrate dev

pgadmin4 
postgres.app
create database instaclone;

$ docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres

prisma docker connect
docker exec -i -t ndb bash
su - postgres
psql -d postgres -U postgres
database list : \l
relation : \dt
database select : \c database-name

혹시 오류가 나면 프리즈마 버전을 맞춰야 한다.
prisma version 2.22.1 
```json
  "dependencies": {
    "@prisma/client": "2.22.1"
  },
  "devDependencies": {
    "prisma": "2.22.1"
  }
```
위 버전을 추가

`const loadedResolvers = loadFilesSync(`${__dirname}/**/*.{mutations,queries}.js`)`
여기서 `muations`와 `queries` 사이를 띄어쓰기하면 뒤에 있는 파일은 인식하지 못한다. 