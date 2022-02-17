<?
require_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/prolog_before.php');
$request = \Bitrix\Main\Application::getInstance()->getContext()->getRequest()->getValues();
CModule::IncludeModule('crm');
?>

<script src="/local/custom-tab/front-end/js/chunk-vendors.8ab4bc8c.js"></script>
<script src="/local/custom-tab/front-end/js/app.72442406.js"></script>

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">
<link href="/local/custom-tab/front-end/css/app.360731cc.css" rel="preload" as="style">
<link href="/local/custom-tab/front-end/css/chunk-vendors.aaaefc60.css" rel="preload" as="style">
<link href="/local/custom-tab/front-end/js/app.72442406.js" rel="preload" as="script">
<link href="/local/custom-tab/front-end/js/chunk-vendors.8ab4bc8c.js" rel="preload" as="script">
<link href="/local/custom-tab/front-end/css/chunk-vendors.aaaefc60.css" rel="stylesheet">
<link href="/local/custom-tab/front-end/css/app.360731cc.css" rel="stylesheet">

<div style="position: relative;">
  <div class="crm-entity-section crm-entity-section-info">
    <div class="crm-entity-card-container mywrapperclass">
      <div id="app"></div>
    </div>
    <div class="crm-entity-stream-container">
    <?$APPLICATION->IncludeComponent(
        "bitrix:crm.timeline",
        '',
        array(
          'ENTITY_TYPE_ID' => 140,
          'ENTITY_ID' => $request['PARAMS']['entityID'],
          'ENTITY_INFO' => array(
            'ENTITY_ID'=>$request['PARAMS']['entityID'],
            'ENTITY_TYPE_ID'=>'140',
            'ENTITY_TYPE_NAME'=>'DYNAMIC_140',
            'TITLE'=>'Пример акта',
            'SHOW_URL'=>'/page/pretenzii/preteznii/type/140/details/'.$request['PARAMS']['entityID'].'/'
          ),
          'READ_ONLY' => 'Y'
        ),
        false,
        array('HIDE_ICONS' => 'Y')
      );?>
    </div>
  </div>
</div>

<?
require_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/epilog_after.php');
die();