# .env file

**.env** file contains configuration parameters 

```
SERVER_NAME=StServer
LICENSE_DIR=~/licenses/stserver/
SERVER_PORT=8080
STLAUNCHER_PORT=8040
SUPERVISOR_PORT=8065
MONGO_PORT=27016
MONGO_CONNECTION_STR=mongodb://localhost:27016/dbS2 
MQTT_BROKER_HOST=tcp://localhost
USING_REVERSE_PROXY=false
HOST_VIDEO_DIR=~/videos/
HOST_ANNOTATIONS_DIR=~/annotations/
HOST_DOCUMENTS_DIR=~/documents/
HOST_UPLOAD=~/Movies/
USE_WEBRTC_VIDEO=true
USE_LIVE_LOW_LATENCY=true
USE_LIVE_RTSP_HLS=true
```  


If you're using the server without reverse proxy, set **SERVER_PORT=80**  
**LICENSE_DIR** entry specifies a path to the host folder where license files will be saved.  
**HOST_VIDEO_DIR**, **HOST_ANNOTATIONS_DIR** and **HOST_DOCUMENTS_DIR** specify a path to local folders that hold video, annotations and documents.  
**HOST_UPLOAD** specify a path to local folder that will be used for video content that is uploaded via ftp or any file copy method. 



The following syntax rules apply to the **.env** file:  

- Each line in an env file to be in VAR=VAL format.
- Lines beginning with # are processed as comments and ignored.
- Blank lines are ignored.  