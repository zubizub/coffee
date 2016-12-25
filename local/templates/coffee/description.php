<?
use Bitrix\Main\Localization\Loc;

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}

//IncludeTemplateLangFile(__FILE__);
Loc::loadLanguageFile(__FILE__);

$arTemplate = Array(
    "NAME" => "Coffee",
    "DESCRIPTION" => "Coffee template"
);

?>