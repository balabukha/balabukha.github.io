<?php

$frm_name  = "Youname";
$recepient = "agragregra@ya.ru";
$sitename  = "Armata Financical Group";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);

$message = "
Форма: $formname <br>
Имя: $name <br>
Телефон: $phone
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
