<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $file = $_FILES['csvFile']['tmp_name'];
    
    $command = escapeshellcmd("python3 backend.py $file");
    $output = shell_exec($command);
    
    echo $output;
}
?>
