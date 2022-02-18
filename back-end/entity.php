<?

use function PHPSTORM_META\type;
use Bitrix\Crm\Item;
require_once "./fields.php";
require_once "./help.php";

class entity{

  private $id; 
  
  public function __construct($id){
    $this->id = $id;
  }

  function getEntity(){
    
    $factory = \Bitrix\Crm\Service\Container::getInstance()->getFactory(140);
    if($this->id > 0){
      $item = $factory->getItem($this->id);
      $res['data'] = $item->getCompatibleData();//getData()
    }

    $allFields = allFieldsFuncs::getAllFields();
    $result = allFieldsFuncs::cardBuilder('claim');

    $res['blocks'] = $result['fields'];
    
    $res['items'] = $result['needitems'];//TODO: вот этот массив перебрать, найти итемы этих полей и кинуть их довеском к результу масиивом типа array('UF_CRM_1_'=>array('name'=>Тестовый, 'value'=>2155))

    foreach($allFields['fileFields'] as $fileField){
      foreach($res['data'][$fileField] as $fid){
        //get file link
        $res['data'][$fileField]['links'][] = array(
          'link'=>'https://spets.company'.CFile::GetFileArray($fid)['SRC'],
          'name'=>CFile::GetFileArray($fid)['ORIGINAL_NAME']
        );
      }
    }
    
    return json_encode($res);
  }

  function update($fields, $files){
    
    $fields = json_decode($fields, true);
    if(count($files) > 0){
      foreach($files as $key=>&$value){
        if(isset($fields[$key]['links'])) unset($fields[$key]['links']);
        $filesIDs = otherFunc::saveFiles($value, $fields[$key]);
        $fields[$key] = $filesIDs;
      }
    }
    $factory = \Bitrix\Crm\Service\Container::getInstance()->getFactory(140);
    $item = $factory->getItem($this->id);
    $item->setFromCompatibleData($fields);
    $item->save();
    return json_encode($fields);
    
  }

  static function create($type, $fields){
    
    $factory = \Bitrix\Crm\Service\Container::getInstance()->getFactory(140);
    $stages = $factory->getStages($type);

    foreach($stages as $s){
      $stageID = $s->getStatusId();
      break;
    }

    $item = $factory->createItem([
      Item::FIELD_NAME_STAGE_ID => $stageID,
    ]);
    $item->setFromCompatibleData(json_decode($fields, true));
    $item->save();
    
  }

}