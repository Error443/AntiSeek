<?php
header('Content-Type: text/html');
{
  $denied = $_POST['Отказано'];
  $una = $_POST['Una'];
  $time = $_POST['Время'];
  $unk = $_POST['Unk'];
  $support = 'Не поддерживается!';

  if (isset($denied))
  {
    $f = fopen('result.txt', 'w+');
    fwrite($f, $denied);
    fclose($f);
  }
  elseif (isset($una))
  {
    $f = fopen('result.txt', 'w+');
    fwrite($f, $una);
    fclose($f);
  }
  elseif (isset($time))
  {
    $f = fopen('result.txt', 'w+');
    fwrite($f, $time);
    fclose($f);
  }
  elseif (isset($unk))
  {
    $f = fopen('result.txt', 'w+');
    fwrite($f, $unk);
    fclose($f);
  }
  else
  {
    $f = fopen('result.txt', 'w+');
    fwrite($f, $support);
    fclose($f);
  }
}
?>
