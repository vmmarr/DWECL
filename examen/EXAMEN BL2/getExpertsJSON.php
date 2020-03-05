<?php
	header("Access-Control-Allow-Origin: *");

	class Plantilla{
		public $info;
		
	}

	$personal = new Plantilla();



	$personal->info=array(
		array("cod"=>"e01", "Nombre"=>"Juan Martinez", "Incorporacion"=>"2010","Imagen"=>"man1.png"),
		array("cod"=>"e02", "Nombre"=>"Pablo Marmol", "Incorporacion"=>"2015", "Imagen"=>"man2.png"),
		array("cod"=>"e03", "Nombre"=>"Isabel Perez", "Incorporacion"=>"2016", "Imagen"=>"woman1.png"),
		array("cod"=>"e04", "Nombre"=>"Silvia Delgado", "Incorporacion"=>"2008", "Imagen"=>"woman2.png"),
		array("cod"=>"e05", "Nombre"=>"Antonio Martinez", "Incorporacion"=>"2011","Imagen"=>"man3.png"),
		array("cod"=>"e06", "Nombre"=>"Pablo Marmol", "Incorporacion"=>"2018", "Imagen"=>"man4.png"),
		array("cod"=>"e07", "Nombre"=>"Maria del Carmen Rico", "Incorporacion"=>"2017", "Imagen"=>"woman3.png"),				
	);


	header('Content-type: application/json; charset=utf-8');
	echo json_encode($personal);


?>