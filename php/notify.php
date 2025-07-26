<?php
$ip = $_SERVER['REMOTE_ADDR'];
$userAgent = $_SERVER['HTTP_USER_AGENT'];

$token = "ТВОЙ_ТОКЕН_БОТА";
$chat_id = "ТВОЙ_CHAT_ID";

$message = "👤 Новый гость!\nIP: $ip\nБраузер: $userAgent";

file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=" . urlencode($message));
