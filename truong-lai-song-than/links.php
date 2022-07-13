<?php 
$x = 0;
foreach(new DirectoryIterator(__DIR__) as $file) {
	echo '<a href="'.$file.'">'.$file.'</a>'.'<br>';
	if (strpos($file, '.php') !== false) {
		$x++;
	}
}
$x = $x - 3;
echo 'Tổng số view thực tế: '.$x;
?>