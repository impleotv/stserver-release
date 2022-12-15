# Manual install using Docker Compose

1\. Download **stserver-install.tar.gz** file that contains **docker-compose.yml** and accompanying configuration files and save them to a local folder (for example, **~/stserver/**). 

```bash
wget https://impleotv.com/content/stserver2/setup/stserver-install.tar.gz
```

Extract files:

```bash
tar -xvf stserver-install.tar.gz
```

2\. In a terminal, change directory to the location of **docker-compose.yml** file.  
3. Edit [.env](./env-file.md) file, if needed.



4\. Start all the services by running ***docker-compose***:
```
docker-compose up -d
```  
> **Note**  
> If you have a newer (V2) docker compose, run

```
docker compose up -d
```  

When you run this for the first time, docker will download the required images and start containers.    

***That's it! the server should be running now!***  


> To run as non root, you can set UID environmental variable or run *export UID* before calling *docker-compose*  

[Remote Docker deployment](./deploy-to-remote-host.md). 


5\. Open your browser (http://localhost or at the server IP, port 80) and check that everything starts up correctly 

> Note, we use **network_mode: host** so the server could receive **udp multicast**. In this case container’s network stack is not isolated from the Docker host (the container shares the host’s networking namespace). In production, you should put a reverse proxy in front of the server.


To stop the services use the following command: 
```
docker-compose down
```  
> **Note**  
> If you have a newer (V2) docker compose, run  

```
docker compose down
```  

