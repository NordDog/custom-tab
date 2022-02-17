<?

use Bitrix\Main\Config\Option;

$tabs = array(
  'act' => array(
    array(
      'type' => 'block',
      'blockName' => 'Краткое описание',
      'order' => 1,
      'fields' => array(
        'UF_CRM_1_1642579600' => array( //краткое описание
          'order' => 1,
          'advancedType' => 'btnpnl',
        ),
        'UF_CRM_1_1642579806' => array( //нарушение
          'order' => 2,
          'advancedType' => 'switchList',
          'dependences' => array(
            'field' => 'UF_CRM_1_1642579600',
            'values' => array('2811')
          )
        ),
        'UF_CRM_1_1642580052' => array( //подробно
          'order' => 3,
          'dependences' => array(
            'field' => 'UF_CRM_1_1642579600',
            'values' => array('2810', '2812')
          )
        ),
      ),
    ),
    array(
      'type' => 'block',
      'blockName' => 'Номер договора',
      'order' => 3,
      'fields' => array(
        'UF_CRM_1_1642580240' => array( //Б/Н
          'order' => 1,
        ),
        'UF_CRM_1_1642580325' => array( //номер договора
          'order' => 2,
          'dependences' => array(
            'field' => 'UF_CRM_1_1642580240',
            'values' => array(true, 'true', 1, '1')
          )
        )
      )
    ),
    'UF_CRM_1_1642580451' => array( //дата процесса
      'order' => 6
    ),
    'UF_CRM_1_1642580467' => array( //номер документа
      'order' => 7
    )
  ),
  'claim' => array(
    array(
      'type' => 'block',
      'blockName' => 'Удержание',
      'order' => 9,
      'fields' => array(
        'UF_CRM_1_1642581077' => array(
          'order' => 1,
          'advancedType' => 'btnpnl',
        ),
        'UF_CRM_1_1642581145' => array( //комментарий
          'order' => 2
        ),
        'UF_CRM_1_1642581259' => array( //сумма
          'order' => 3
        ),
        'UF_CRM_1_1642581875' => array( //сотрудник - сумма
          'order' => 4
        ),
        'UF_CRM_1_1642582057' => array( //сотрудник
          'order' => 5
        ),
        'UF_CRM_1_1642581894' => array( //объект - сумма
          'order' => 6
        ),
      )
    ),
    array(
      'type' => 'block',
      'blockName' => 'Лимит по сумме',
      'order' => 7,
      'fields' => array(
        'UF_CRM_1_1642581014' => array( //лимит по сумме
          'order' => 1
        )
      )
    ),
    'UF_CRM_1_1642580896' => array( //номер претензии
      'order' => 3
    ),
    'UF_CRM_1_1642580926' => array( //дата претензии
      'order' => 4
    ),
  ),
  'common' => array(
    array(
      'type' => 'block',
      'blockName' => 'Контрагент',
      'order' => array('act'=>2, 'claim'=>1),
      'fields' => array(
        'UF_CRM_1_1642580108' => array( //тип
          'order' => 1
        ),
        'UF_CRM_1_1642580140' => array( //поставщик
          'order' => 2
        ),
        'UF_CRM_1_1642580177' => array( //наименование
          'order' => 3
        ),
        'UF_CRM_1_1642580195' => array( //инн
          'order' => 4
        )
      )
    ),
    array(
      'type' => 'block',
      'blockName' => 'Виновное лицо',
      'order' => array('act'=>9, 'claim'=>6),
      'fields' => array(
        'UF_CRM_1_1645099677' => array( //есть/нет
          'order' => 1
        ),
        'UF_CRM_1_1642580508' => array( //тип
          'order' => 2
        ),
        'UF_CRM_1_1642580547' => array( //менеджер
          'order' => 3
        ),
        'UF_CRM_1_1642580573' => array( //сотрудник
          'order' => 4
        )
      )
    ),
    'UF_CRM_1_1642580354' => array( //объект
      'order' => array('act'=>4, 'claim'=>2)
    ),
    'UF_CRM_1_1642580428' => array( //дата события
      'order' => array('act'=>5, 'claim'=>5)
    ),
    'UF_CRM_1_1642580481' => array( //сумма требования по претензии
      'order' => array('act'=>8, 'claim'=>8)
    ),
    'UF_CRM_1_1642580600' => array( //вложение
      'order' => array('act'=>10)
    ),
  )
);

$result = COption::SetOptionString('main', 'claimFieldsDescription', serialize($tabs));