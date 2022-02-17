<?

class otherFunc{

  static function getListItems($listID){

    $arFilter = array(
      'IBLOCK_ID'=>$listID
    );
    $arSelect = array(
      'ID',"NAME"
    );
    $res = CIBlockElement::getList(array(), $arFilter, false, false, $arSelect);
    while($ob=$res->fetch()){
      $result[] = array(
        'value' => $ob['ID'],
        'text' => $ob['NAME']
      );
    }
    return $result;
  
  }

  static function getEmpls(){
    
    $res = \Bitrix\Main\UserTable::getList(array('select'=>array('ID', 'NAME', 'LAST_NAME')));
    while($ob=$res->fetch()){
      $result[] = array(
        'text' => $ob['NAME'] . ' ' . $ob['LAST_NAME'],
        'value' => $ob['ID']
      );
    }
    return $result;

  }

  static function getCrmEntity($type){
    
    switch($type){
      case 'LEAD':
        $res = \Bitrix\Crm\LeadTable::getList(array('select'=>array('ID', 'TITLE')));
        while($ob=$res->fetch()){
          $result[] = array(
            'text'=>$ob['TITLE'],
            'value'=>$ob['ID']
          );
        }
        break;
      case 'CONTACT':
        $res = \Bitrix\Crm\ContactTable::getList(array('select'=>array('ID', 'NAME', 'LAST_NAME')));
        while($ob=$res->fetch()){
          $result[] = array(
            'text'=>$ob['NAME'] . ' ' . $ob['LAST_NAME'],
            'value'=>$ob['ID']
          );
        }
        break;
      case 'COMPANY':
        $res = \Bitrix\Crm\CompanyTable::getList(array('select'=>array('ID', 'TITLE')));
        while($ob=$res->fetch()){
          $result[] = array(
            'text'=>$ob['TITLE'],
            'value'=>$ob['ID']
          );
        }
        break;
      case 'DEAL':
        $res = \Bitrix\Crm\DealTable::getList(array('select'=>array('ID', 'TITLE')));
        while($ob=$res->fetch()){
          $result[] = array(
            'text'=>$ob['TITLE'],
            'value'=>$ob['ID']
          );
        }
        break;
    }
    return $result;
    
  }

  static function saveFiles($files, $oldFilesIDs){
    
    $factory = \Bitrix\Crm\Service\Container::getInstance()->getFactory(140);
    $fields = $factory->getFieldsCollection();
    $field = $fields->getField('UF_CRM_1_1642580600');
    $fUp = \Bitrix\Crm\Service\Container::getInstance()->getFileUploader();
    if(count($oldFilesIDs)>0){
      foreach($oldFilesIDs as $fileID){
        $arFile = CFile::MakeFileArray($fileID);
        $result[] = $fUp->saveFileTemporary($field, $arFile);
      }
    }
    for($i=0;$i<count($files['name']);$i++){
      $arFile = array(
        "name" => $files['name'][$i],
        "size" => $files['size'][$i],
        "tmp_name" => $files['tmp_name'][$i],
        "type" => "",
        "old_file" => "",
      );
      $result[] = $fUp->saveFileTemporary($field, $arFile);
      //$result[] = $fUp->saveFilePersistently($field, $arFile);
    }
    return $result;
  }

}