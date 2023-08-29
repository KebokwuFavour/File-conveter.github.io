<?php

require 'vendor/autoload.php';

use PhpOffice\PhpWord\IOFactory;
use PhpOffice\PhpWord\Settings;

$target_dir = "vendor/uploads/";
$target_file = $target_dir . basename($_FILES["file"]["name"]);

if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
  echo "The file " . htmlspecialchars(basename($_FILES["file"]["name"])) . " has been uploaded.";
} else {
  echo "Sorry, there was an error uploading your file.";
}

// Specify the TCPDF rendering library and its path
Settings::setPdfRendererPath('vendor/tecnickcom/tcpdf');
Settings::setPdfRendererName('TCPDF');

// Load the docx file
$docx = IOFactory::load($target_dir . $_FILES["file"]["name"]);

// Save as PDF
$pdfFilePath = 'vendor/outputs/' . $_FILES["file"]["name"] . '.pdf';
$pdfWriter = IOFactory::createWriter($docx, 'PDF');
$pdfWriter->save($pdfFilePath);

// PDF saved successfully
// Redirect to the previous page with a success message
header("Location: index.php?fileID=" . $_FILES["file"]["name"] . ".pdf&success=true");
