<?

class otherFunc{

  static function getItems($type, $string, $entity=0){

    switch($type){
      case 'iblock_element':
        $res = self::getListItems($entity, $string);
        break;
      case 'crm':
        $res = self::getCrmEntity($entity, $string);
        break;
      case 'employee':
        $res = self::getEmpls($string);
        break;
    }

    return json_encode($res);

  }

  static function getListItems($listID, $string){

    $arFilter = array(
      'IBLOCK_ID'=>$listID,
      '%NAME'=>$string
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

  static function getEmpls($string){
    
    $res = \Bitrix\Main\UserTable::getList(
      array(
        'filter'=>array(
          'ACTIVE'=>'Y', 
          '!UF_DEPARTMENT'=>false,
          array(
            'LOGIC'=>'OR',
            array('%NAME'=>$string),
            array('%LAST_NAME'=>$string)
          )
        ),
        'select'=>array('ID', 'NAME', 'LAST_NAME')
      )
    );
    
    while($ob=$res->fetch()){
      $result[] = array(
        'text' => $ob['NAME'] . ' ' . $ob['LAST_NAME'],
        'value' => $ob['ID']
      );
    }

    return $result;

  }

  static function getCrmEntity($type, $string){
    
    switch($type){
      case 'LEAD':
        $res = \Bitrix\Crm\LeadTable::getList(array(
          'filter'=>array('%TITLE'=>$string),
          'select'=>array('ID', 'TITLE'))
        );
        while($ob=$res->fetch()){
          $result[] = array(
            'text'=>$ob['TITLE'],
            'value'=>$ob['ID']
          );
        }
        break;
      case 'CONTACT':
        $res = \Bitrix\Crm\ContactTable::getList(array(
          'filter'=>array(
            array(
              'LOGIC'=>'OR',
              array('%NAME'=>$string),
              array('%LAST_NAME'=>$string)
            )
          ),
          'select'=>array('ID', 'NAME', 'LAST_NAME'))
        );
        while($ob=$res->fetch()){
          $result[] = array(
            'text'=>$ob['NAME'] . ' ' . $ob['LAST_NAME'],
            'value'=>$ob['ID']
          );
        }
        break;
      case 'COMPANY':
        $res = \Bitrix\Crm\CompanyTable::getList(array(
          'filter'=>array('%TITLE'=>$string),
          'select'=>array('ID', 'TITLE'))
        );
        while($ob=$res->fetch()){
          $result[] = array(
            'text'=>$ob['TITLE'],
            'value'=>$ob['ID']
          );
        }
        break;
      case 'DEAL':
        $res = \Bitrix\Crm\DealTable::getList(array(
          'filter'=>array('%TITLE'=>$string),
          'select'=>array('ID', 'TITLE'))
        );
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