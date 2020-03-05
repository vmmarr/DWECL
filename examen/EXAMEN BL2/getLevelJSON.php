<?php

header("Access-Control-Albajo-Origin: *");

$know["e01"]["Javascript"] = "alto";
$know["e01"]["Jquery"] = "medio";
$know["e01"]["Jquery UI"] = "bajo";
$know["e02"]["Javascript"] = "alto";
$know["e02"]["Angular"] = "medio";
$know["e03"]["Javascript"] = "alto";
$know["e03"]["React"] = "medio";
$know["e04"]["Php"] = "alto";
$know["e04"]["Yii"] = "bajo";
$know["e05"]["Typescript"] = "alto";
$know["e05"]["React"] = "alto";
$know["e06"]["Java"] = "alto";
$know["e06"]["Javascript"] = "alto";
$know["e07"]["Java"] = "alto";
$know["e07"]["Python"] = "medio";


if(isset($_POST["expert"])) {
  $expert = trim($_POST["expert"]);
  $knowledge = $know[$expert];

  foreach($knowledge as $conocimiento => $nivel) {
    $elementos_json[] = "\"$conocimiento\": \"$nivel\"";
  }  /* */
} 
echo "{".implode(",", $elementos_json)."}"

?>
