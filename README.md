# My Stock BackEnd NodeJS

## Project setup

### Clone Project

```
git clone https://github.com/csxman/my-stock-node-backend
```

### Install Project

```
npm install
```

### Compiles and hot-reloads for development

```
nodemon app.js
Or
node app.js
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## Project Config

### 1.Import/Restore Database File in MySQL Server

Import/Resotre database file in project name 'stock_db.sql' To MySQL Server in Porduction Server

### 2.Config Database Connection

Config Enveronment and Database Connection file in project name '.env'

```
NODE_ENV=production    // Production ENV
PORT=8088   // API Port
DB_USERNAME=root    // Username DB
DB_PASSWORD=    // Password DB
DB_DATABASE=db   // Database Name
DB_HOST=localhost   // Host Name
DB_PORT=3306    // Database Port
```
