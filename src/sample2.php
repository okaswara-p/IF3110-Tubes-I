<?php
	// Contoh dari file content.

	// Selalu include ini di awal.
	require_once('ref.php');

	// Include auth.php, untuk memeriksa user sudah login atau belum.
	require_once('auth.php');

	// Include begin.
	require_once('begin.php');
?>
<?php
databaseConnect();
var_dump(getUserDataFromUsername('john'));
?>
<?php
	require_once('end.php');
?>