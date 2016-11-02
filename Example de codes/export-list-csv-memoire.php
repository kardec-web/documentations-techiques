<?php

require_once( dirname(__FILE__) . '/templates/partial/common.php');

$page_title='Gestion des contact';

$action = get_action_request(array('export-to-csv'));

$result = $database->query('SELECT id, name, email, phone_number, gsm_number FROM contact ORDER BY name, email');
$contact_list = $result->fetchAllRows();

if ($action == 'export-to-csv')
{
	$file = fopen('php://temp/maxmemory:'.(12 * 1024 * 1024), 'r+');
	fputcsv($file, array('Id', 'Nom', 'E-mail', 'Numéro de téléphone', 'Numéro de GSM'));

	foreach ($contact_list as $current_contact) 
	{
	fputcsv($file, $current_contact);
	}
	rewind($file);
	$output = stream_get_contents($file);
	fclose($file);

	header('Content-Type: text/csv');
	header('Content-Disposition: attachement; filename="contact-export-'.date('Y-m-d').'.csv"');

	echo utf8_decode($output);
	exit();
}

require(BaseTemplatesPathAdmin . 'contact-list.php');
