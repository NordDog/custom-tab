<?

require_once './help.php';

class allFieldsFuncs{


  //TODO:значения полей хранить в объекте открытого элемента, оттуда удобно обновлять


  static function getAllFields(){

    $factory = \Bitrix\Crm\Service\Container::getInstance()->getFactory(140);
    $fields = $factory->getUserFieldsInfo();
    $fieldsIds = $factory->getUserFields();

    foreach($fields as $code=>$field){

      $temp = array(
        'code'=>$code,
        'id'=>$fieldsIds[$code]['ID'],
        'title'=>$field['TITLE'],
        'type'=>$field['TYPE'],
        'items'=>$field['USER_TYPE']['BASE_TYPE']=='enum'?$field['ITEMS']:false
      );

      if(in_array('MUL',$field['ATTRIBUTES'])){
        $temp['multiple'] = true;
      }

      if($field['TYPE'] == 'string' && $field['SETTINGS']['ROWS'] > 1){
        $temp['type'] = 'app_textarea';
      }
      elseif($field['TYPE'] == 'enumeration' && count($field['ITEMS']) == 2){
        $temp['type'] = 'app_switch';
      }
      elseif($field['TYPE'] == 'enumeration'){
        $temp['type'] = 'app_select';
      }
      elseif($field['TYPE'] == 'file'){
        $temp['type'] = 'app_file';
        $res['fileFields'][] = $code;
      }
      elseif($field['TYPE'] == 'iblock_element'){
        $temp['type'] = 'autocomplete';
        //$temp['items'] = otherFunc::getListItems($field['SETTINGS']['IBLOCK_ID']);
        $temp['realtype'] = $field['TYPE'];
        $temp['entity'] = $field['SETTINGS']['IBLOCK_ID'];
      }
      elseif($field['TYPE'] == 'employee'){
        $temp['type'] = 'autocomplete';
        $temp['realtype'] = $field['TYPE'];
        //$temp['items'] = otherFunc::getEmpls();
      }
      elseif($field['TYPE'] == 'crm'){
        $temp['type'] = 'autocomplete';
        $temp['realtype'] = $field['TYPE'];
        $temp['entity'] = array_keys($field['SETTINGS']);
        //$temp['items'] = otherFunc::getCrmEntity(array_key_first($field['SETTINGS']));
      }
      elseif($field['TYPE'] == 'double'){
        $temp['type'] = 'string';
      }

      $res[] = $temp;
    }
    return $res;

  }

  static function createField($title, $name, $xmlid, $type, $multi, $require){

    $oUserTypeEntity = new CUserTypeEntity();
 
    $aUserFields    = array(
      'ENTITY_ID'         => 'CRM_1',
      'FIELD_NAME'        => 'UF_CRM_1_'.$title,
      'USER_TYPE_ID'      => $type,
      'XML_ID'            => 'XML_ID_'.$xmlid,
      'SORT'              => 500,
      'MULTIPLE'          => $multi,
      'MANDATORY'         => $require,
      'SHOW_FILTER'       => 'S',
      'SHOW_IN_LIST'      => 'Y',
      'EDIT_IN_LIST'      => 'Y',
      'IS_SEARCHABLE'     => 'N',
      'SETTINGS'          => array( //это сетинги для строки
        'DEFAULT_VALUE' => '',
        'SIZE'          => '20',
        'ROWS'          => '1',
        'MIN_LENGTH'    => '0',
        'MAX_LENGTH'    => '0',
        'REGEXP'        => '',
      ),
      'EDIT_FORM_LABEL'   => array(
        'ru'    => $name,
        'en'    => 'User field',
      ),
      'LIST_COLUMN_LABEL' => array(
        'ru'    => $name,
        'en'    => 'User field',
      ),
      'LIST_FILTER_LABEL' => array(
        'ru'    => $name,
        'en'    => 'User field',
      ),
      'ERROR_MESSAGE'     => array(
        'ru'    => 'Ошибка при заполнении пользовательского свойства',
        'en'    => 'An error in completing the user field',
      ),
      'HELP_MESSAGE'      => array(
        'ru'    => '',
        'en'    => '',
      ),
    );

    //здесь будем добавлять/изменять поля

    $iUserFieldId = $oUserTypeEntity->Add( $aUserFields );
  }

  static function updateField($ufId, $newName){
    
    $oUserTypeEntity = new CUserTypeEntity();

    $oUserTypeEntity->Update($ufId, array(
      'EDIT_FORM_LABEL'   => array(
        'ru'    => $newName,
      ),
      'LIST_COLUMN_LABEL' => array(
        'ru'    => $newName,
      ),
      'LIST_FILTER_LABEL' => array(
        'ru'    => $newName,
      ),
    ));

  }

  static function deleteField($ufId){

    $oUserTypeEntity = new CUserTypeEntity();

    $oUserTypeEntity->Delete( $ufId );

  }

  /** 
   * метод ниже забирает описание карточки открытой сущности, её блоков и полей
   * забирает все поля, которые созданы в смарт-процессах и выстраивает карточку
   * сортируя блоки и поля, добавляя полям "супер-типы(напр. поле с двумя колонками)"
   * и указывая связь для полей
   * а так же записывает в поле с привязкой его текущее значение
   */ 

  static function cardBuilder($type){//type = 'act'|'claim'

    $fieldsDesc = unserialize(COption::GetOptionString("main", "claimFieldsDescription", "0"));
    
    if($fieldsDesc === "0") return array('error'=>'В описании полей внезапно пусто');

    $fieldsarr = array_merge($fieldsDesc[$type], $fieldsDesc['common']);

    $orderedFields = array();

    $allFields = self::getAllFields();

    $needitem = array();

    foreach($fieldsarr as $key=>$value){

      if(strripos($key, 'UF_CRM_1_') !== false){//обработка поля
        
        $entityField = array_filter($allFields, function ($field) use ($key){
          return $field['code'] == $key;
        });
      
        if(count(array_values($entityField))>0){ //если есть с чем работать

          $entityField = array_values($entityField)[0];

          if(in_array('realtype', array_keys($entityField))){

            $needitem[] = $entityField;

          }

          if(is_array($value['order'])) $orderedFields[$value['order'][$type]] = array_merge($entityField, $value);
          else $orderedFields[$value['order']] = array_merge($entityField, $value);

        }

      }
      else{//забрать поля и обработать как блок

        foreach($value['fields'] as $blockFieldKey=>&$blockFieldValue){

          $entityField = array_filter($allFields, function ($field) use ($blockFieldKey){
            return $field['code'] == $blockFieldKey;
          });
          
          if(count(array_values($entityField))>0){ //если есть с чем работать

            $entityField = array_values($entityField)[0];

            if(in_array('realtype', array_keys($entityField))){

              $needitem[] = $entityField;
  
            }

            $blockFieldValue = array_merge($entityField, $blockFieldValue);

          }

        }

        if(is_array($value['order'])) $orderedFields[$value['order'][$type]] = $value;
        else $orderedFields[$value['order']] = $value;
        
      }
    
    }

      $result = array(
        'fields' => $orderedFields,
        'needitems' => $needitem,
      );


    return $result;

  }

}