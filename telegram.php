<?php

/* https://api.telegram.org/bot1313215110:AAHy5saaYYo8ZVyPkQVtsfNwN859ydHaJTg/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['username'];
$message = $_POST['message'];
$email = $_POST['mail'];
$subject = $_POST['subject'];
$token = "1313215110:AAHy5saaYYo8ZVyPkQVtsfNwN859ydHaJTg";
$chat_id = "-462672521";
$arr = array(
  'Імя: ' => $name,
  'Повідомлення: ' => $message,
  'Email' => $email,
  'Субєкт' => $subject
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>
