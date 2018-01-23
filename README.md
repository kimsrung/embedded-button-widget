# embedded-button-widget
embedded script to generate a button and initialize iframe with provided url

## clone the project and run
```
$ git clone git@github.com:kimsrung/embedded-button-widget.git  
$ cd embedded-button-widget
$ http-server -p 4000
```

## include to your own project
copy and past this code to your index.html and script's src is depended on your server 
```
  <script type="text/javascript">
    window.pulseSettings = {
      link: "any link to be displayed in iframe"
    };
  </script>
  <script type="text/javascript" src="http://localhost:4000/script.js"></script>
```

##Author

Application developed by [Kimsrung Lov](https://www.linkedin.com/in/kimsrung-lov-a8897522?trk=nav_responsive_tab_profile_pic).


