## To run the app
#### 1) cd compose
#### 2) docker compose up
#### 3) docker exec -it {vault container id} sh
#### 4) initialise vault via user interface at localhost:8200
#### 5) enable userpass auth method in vault ui -> access tab
#### 6) paste token into \NgSpringApp\src\main\java\io\ando5360\app\service\VaultService.java where the placeholder 'xxx' is. (I know this is practise I need to configure application properties)
#### 7) mvn spring-boot:run
#### 8) cd \NgSpringApp\src\main\ng-front
#### 9) Ensure you have @angular/core + @angular/cli in npm
#### 10) ng serve from the root of the ng-front folder
#### 11) angular app should be at localhost:4200
