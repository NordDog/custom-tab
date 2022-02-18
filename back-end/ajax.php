<?
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: origin, content-type, accept');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('X-Content-Type-Options: nosniff');
define("NEED_AUTH", false);
define("NOT_CHECK_FILE_PERMISSIONS", true);
define("NOT_CHECK_PERMISSIONS", true);

require_once($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php');

if($_REQUEST['key'] != 'j1xTeoRyYZUlf6J9qm7S8hz9vEQWOUcc') die;

CModule::IncludeModule('crm');
CModule::IncludeModule('main');

require_once($_SERVER['DOCUMENT_ROOT'] . "/local/custom-tab/fields.php");
require_once("./entity.php");
require_once("./help.php");

switch($_REQUEST['action']){
  case 'getAllFields':
    $obj = new entity(4);//$_REQUEST['id']
    $res = $obj->getEntity();
    break;
  case 'updateElement':
    $obj = new entity(4);//$_REQUEST['id']
    $res = $obj->update($_REQUEST['fields'], $_FILES);
    break;
  case 'create':
    entity::create($_REQUEST['type'], $_REQUEST['fields']);
    break;
  case 'getItems':
    $res = otherFunc::getItems($_REQUEST['type'], $_REQUEST['string'], $_REQUEST['entity']);
    break;
}

echo(str_ireplace('&quot;', '\"', $res));

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/epilog_after.php");