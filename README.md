
<div align="center">
  <a >
    <img src="images/impleo_logo.png" alt="Logo" >
  </a>
</div>

# StServer

**STANAG On Demand Server** delivers On-Demand / Live FMV and geo-spatial metadata to video analysts and field operators in order to help them easily access, analyze, and present mission information.
More [info](https://impleotv.com/products/stanagondemand-server/).

## System Requirements

OS: Linux.

## Installation (using Docker Compose)

**STANAG On Demand Server** is installed as a set of microservices. 

1. Make sure you have [Docker](https://docs.docker.com/) and [Docker Compose](https://docs.docker.com/compose/install/) on your machine ( or download and install them, then reboot (important!!!).
2. Download **stserver-install.tar.gz** file that contains **docker-compose.yml** and accompanying configuration files and save them to a local folder (for example, ~/stserver/).
```
wget https://impleotv.com/content/stserver2/setup/stserver-install.tar.gz
```
3. Extract files:
```
tar -xvf stserver-install.tar.gz
```

4. Edit **.env** file, if needed.

5. Start all the services by running **docker-compose**:
```
docker-compose up -d
```

***That's it! the server should be running now!***


More info [here](https://stserver.impleotv.com/help/user-guide/installation/)


## Direct Download link

|          | Version             | Download link                                                           | 
|:---------|:-------------------:|:------------------------------------------------------------------------|
| **StServer** |  2.1.29 | [stserver-install.tar.gz](https://impleotv.com/content/stserver2/setup/stserver-install.tar.gz) | 

*Released on Wed, 17 Nov, 10:32 GMT+2*

This server version uses the following components:  

|          | Version             | CHANGELOG                                                          | 
|:---------|:-------------------:|:------------------------------------------------------------------------|
| **Frontend** |  2.1.29 | [CHANGELOG-FRONTEND.md](./CHANGELOG-FRONTEND.md) | 
| **FrontendComp** |  1.1.1 | [CHANGELOG-FRONTEND-COMP.md](./CHANGELOG-FRONTEND-COMP.md) | 
  

## License

**STANAG On Demand Server** is a node locked software. Without license it will work in demo mode (with restrictions). 

### License options

StServer optional features are enabled by License

Options:  

- **VOD** - basic license. File upload and video on demand services  
- **Live** - live stream playback  
- **Multi sensor** - multi-sensor platform support  
- **Number of concurrent users** - number of allowed concurrent clients  

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