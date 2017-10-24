<?php
    //function saveRecord() {

        date_default_timezone_set('UTC');
        
        $date = date('l jS \of F Y');
        $wName = $_POST['wName'];
        $wScore = $_POST['wScore'];
        
        $wName_clean = htmlspecialchars($wName);
        $wScore_clean = htmlspecialchars($wScore);
        
        $document_root = $_SERVER['DOCUMENT_ROOT'];
        $fs = fopen("$document_root/record.txt", "ab");
        
        $string = "$date\t$wName_clean\t$wScore_clean";
        
        fwrite($fs, $string."\n", strlen($string));
        fclose($fs);
        
        
        include("index.php");
        //document.print("Saved");
    
    //}
?>