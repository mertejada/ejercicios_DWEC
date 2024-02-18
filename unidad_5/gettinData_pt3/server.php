<?php

    $cityList = ["Granada", "Alicante", "Barcelona", "Málaga", "Tarragona", "Jaen", "Badajoz", "Almería", "Madrid", "Girona", "Córdoba"];

    if(isset($_GET["letter"])) {
        $letter = $_GET["letter"];
        $cities = [];
        foreach($cityList as $city) {
            if($city[0] == $letter) {
                array_push($cities, $city);
            }
        }
        echo json_encode($cities);
    } else {
        echo json_encode($cityList);
    }
