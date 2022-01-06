<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Icons</title>
<style>
span {
	border: 1px solid #ddd;
	padding: 10px 18px;
	margin: 2px;
	display: inline-block;
}
</style>
</head>
<body>
	<?php 
	foreach(glob('icons/*.svg') as $icon) {
		$icon_name = str_replace('icons/', '', $icon);
		echo '<span><img src="'.$icon.'"> &nbsp; '.$icon_name.'</span>';
	}
	?>
	<footer style="margin-top: 150px;">
		<a href="//icomoon.io/" target="_blank">Icones svg por IcoMoon</a>
	</footer>
</body>
</html>