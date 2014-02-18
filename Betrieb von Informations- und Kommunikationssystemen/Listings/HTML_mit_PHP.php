...
  <body>
    ....
    <?php
      $photos = mysql_query("SELECT name, description FROM panorama");
      while($row = mysql_fetch_assoc($photos)){
        echo("
          <div>
            <p onclick='toggleDescription(this)'>Der Name des Panoramas ".$row['name']."</p>
            <p >Die Beschreibung des Panoramas ".$row['description']."</p>
          </div>
        ");
      }
    ?>
  </body>
<html>