<?php
	$img = $_POST['img'];
	$img = str_replace('data:image/png;base64,', '', $img);
	$img = str_replace(' ', '+', $img);
	$data = base64_decode($img);
	$file = 'images/' . uniqid() . '.png';
	if (file_put_contents($file, $data))
		print $file;
	else
		header("HTTP/1.1 500 Internal Server Error");
?>