# reactdemo1
react demo

解决在linux下使用nodejs出现的ENOSPC: System limit for number of file watchers reached 问题:
执行 echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p