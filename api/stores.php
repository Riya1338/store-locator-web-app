<?php

header("Content-Type: application/json");

require_once "db.php";

$location = trim($_GET["location"] ?? "");
$type = trim($_GET["type"] ?? "");

$sql = "SELECT id, name, type, address, city, phone, hours
        FROM stores
        WHERE 1 = 1";

$params = [];

if ($location !== "") {
    $sql .= " AND (city LIKE :location OR address LIKE :location)";
    $params["location"] = "%" . $location . "%";
}

if ($type !== "") {
    $sql .= " AND type = :type";
    $params["type"] = $type;
}

$sql .= " ORDER BY name ASC";

$stmt = $pdo->prepare($sql);
$stmt->execute($params);

echo json_encode($stmt->fetchAll());
