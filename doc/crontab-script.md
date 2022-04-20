# Using crontab to run st-launcher on startup

1\. Create a simple script **run-on-reboot.sh** and copy it to the location of the application, for example */home/myuser/stserver*:

```bash
#!/bin/bash

./st-launcher.run
```

2\. Make it executable:
```bash
sudo chmod +x run-on-reboot.sh
```

3\. setup **crontab**

```bash
sudo crontab -e
```

Make script run on startup by adding the following line

```bash
@reboot sleep 30 && cd /home/myuser/stserver && ./run-on-reboot.sh
```

