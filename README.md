
<div align="center">
  <a >
    <img src="images/impleo_logo.png" alt="Logo" >
  </a>
</div>

# StServer

**STANAG On Demand Server** delivers On-Demand / Live FMV and geo-spatial metadata to video analysts and field operators in order to help them easily access, analyze, and present mission information.  
More [info](https://impleotv.com/products/stanagondemand-server/).

## System Requirements

OS: Linux x64.

## Installation (using Docker Compose)

**STANAG On Demand Server** is installed as a set of [microservices](https://www.impleotv.com/content/stserver2/help/microservices/microsevices_overview/). 

Make sure you have [Docker](https://docs.docker.com/) and [Docker Compose](https://docs.docker.com/compose/install/) installed on your machine ( or download and install them, then reboot (important!!!).

### Installing StServer with st-launcher

1\. Download **st-launcher.run** and save it to a local folder (for example, **~/stserver/**).  

Here are the [Download links and instructions](https://github.com/impleotv/st-launcher-release)


2\. Make sure **st-launcher.run** is executable 

```bash
sudo chmod +x st-launcher.run
```

3\. Run it

```
~/stserver$ ./st-launcher.run 
```
4\. Enter **install** command

```
Starting st-launcher. Ver. 1.0.0
st-launcher started: http://127.0.0.1:8040. Ctrl-C to exit.

Enter command (install/start/stop/update/quit):
Command: install 
```
5\. Wait until installation is complete, and edit [.env](./env-file.md) file, if needed.

6\. Start the server.

```
Enter command (install/start/stop/update/quit):
Command: start 
```

When you run this for the first time, docker will download all the required images and start containers.    

> Note, after reboot, the Server will start automatically, no need to use st-launcher to start it (except for the first time). 


You may also consider making **st-launcher.run** running after reboot, so the StServer could be updated from via frontend (admin page).  
Any method that allows execution on reboot will do. For example, you can [use crontab](./doc/crontab-script.md).

***That's it! the server should be running now!***  

You can also [install and run the server manually](./manual_install_with_docker_compose.md), without **st-launcher**.


> By default, the server will run on port **8080**. 

Please note, in case of production deployment, you should run a server behind reverse proxy with SSL.

More info [here](https://stserver.impleotv.com/help/user-guide/installation/)


## Direct Download link

|          | Version             | Download link                                                           | 
|:---------|:-------------------:|:------------------------------------------------------------------------|
| **StServer (Linux x64)** |  2.2.31 | [stserver-install.tar.gz](https://github.com/impleotv/stserver-release/releases/download/v2.2.31/stserver-install.tar.gz)  | 
| **StServer (VOD for WSL2)** |  2.2.31 | [stserver-install-wsl.tar.gz](https://github.com/impleotv/stserver-release/releases/download/v2.2.31/stserver-install-wsl.tar.gz)  | 

*Released on Tue, 31 Jan, 18:42 GMT+2*

## Components versions

Current server version uses the following components:  

|                  | Version             | CHANGELOG                                                          | 
|:-----------------|:-------------------:|:------------------------------------------------------------------------|
| **Backend**      |  2.2.31 | [CHANGELOG-SERVER.md](./CHANGELOG-FRONTEND.md) | 
| **Frontend**     |  2.1.51 | [CHANGELOG-FRONTEND.md](./CHANGELOG-FRONTEND.md) | 
| **FrontendComp** |  1.3.8 | [CHANGELOG-FRONTEND-COMP.md](./CHANGELOG-FRONTEND-COMP.md) | 
  

## License

**STANAG On Demand Server** is a node locked software, so without license it will work in demo mode (with restrictions). 

### License options

StServer optional features are enabled by License

Options:  

- **VOD** - basic license. File upload and video on demand services  
- **Live** - live stream playback  
- **Multi sensor** - multi-sensor platform support  
- **Number of concurrent users** - number of allowed concurrent clients 
- **VOD for StPlayer** - One web client and unlimited number of StPlayer clients.  This one is usually for on VOD playback only  

### Getting license

In order to get the license, please install the server and fill an [online form](https://docs.google.com/forms/d/e/1FAIpQLSd_XW6bDsFce1G1cpds4gMQNlwNax0CvkWzcMbscxZ5rLaIbA/viewform), providing the ***Node Info*** string (IMPORTANT!!!) for the target machine. Or contact ImpleoTV support.

There are 3 options to install the license:  

- Using GUI frontend to upload the license
- Passing license info as the arguments (with *--licenseFile* and *--licenseKey*)
- Copying license file (.lic) and a key (.txt) file into current working directory **LICENSE_DIR** defined in **.env**

![Node Info](./images/license.png)

### Uploading license
You will receive 2 files - license file and key file. Simply drag and drop them into the ***Upload*** dropzone.

![Upload license](./images/licenseUpload.png)


It is also possible to simply copy the licenses to the docker volume mounted directory 

----  
*Please don't hesitate to contact us at support@impleotv.com should you have any question.*