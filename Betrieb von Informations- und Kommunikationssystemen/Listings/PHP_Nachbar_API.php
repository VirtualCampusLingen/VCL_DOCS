<?php
$id = mysql_real_escape_string($_GET['id']);
$requestedPanorama = mysql_query("SELECT panorama_id, name, panorama_path FROM panorama WHERE panorama_id = $id");

while ($row = mysql_fetch_assoc($requestedPanorama)) {
  $neighbour = mysql_query("SELECT *  FROM neighbour AS n INNER JOIN panorama AS p ON n.neighbour = p.panorama_id WHERE n.panorama = $id");
  $neighbours = array();
  $i = 0;
  while ($row2 = mysql_fetch_assoc($neighbour)) {
    $neighbours[$i] = array('neighbour_id'=>$row2['neighbour'],'heading' => $row2['heading']);
    $i++;
  }
}

echo (json_encode(array(
  'Panoid'=> array(
    'id' => $id,
    'neighbours' => $neighbours,
  )
)));
?>