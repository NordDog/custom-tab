<?

use Bitrix\Main\Config\Option;

$tabs = array(
  'act' => array(
    array(
      'type' => 'block',
      'blockName' => 'Краткое описание',
      'order' => 1,
      'fields' => array(
        'UF_CRM_1_1642580052' => array(
          'order' => 1,
          'dependences' => array(
            'field' => 'UF_CRM_1_1655372597',
            'values' => array(3274)
          )
        ),
        'UF_CRM_1_1642579806' => array(
          'multiple' => 1,
          'order' => 2,
          'advancedType' => 'switchList',
          'dependences' => array(
            'field' => 'UF_CRM_1_1655372597',
            'values' => array(3275)
          )
        ),
        'UF_CRM_1_1655434118' => array(
          'order'=>3,
          'dependences'=>array(
            'field'=>'UF_CRM_1_1655372597',
            'values'=>array(3276)
          )
        ),
        'UF_CRM_1_1655372597' => array(
          'multiple' => 1
        ),
      )
    ),
    array(
      'type' => 'block',
      'blockName' => 'Номер договора',
      'order' => 3,
      'fields' => array(
        'UF_CRM_1_1642580240' => array(
          'order' => 1
        ),
        'UF_CRM_1_1650873820' => array(
          'realtype' => 'iblock_element',
          'order' => 2,
          'dependences' => array(
            'field' => 'UF_CRM_1_1642580240',
            'values' => array(true, 'true', 1, '1')
          )
        )
      )
    ),
    'UF_CRM_1_1642580451' => array(
      'order' => 6
    ),
    'UF_CRM_1_1642580467' => array(
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
          'advancedType' => 'btnpnl'
        ),
        'UF_CRM_1_1642581145' => array(
          'order' => 2
        ),
        'UF_CRM_1_1642581259' => array(
          'order' => 3,
          'dependences' => array(
            'field' => 'UF_CRM_1_1642581077',
            'values' => array('2824', '2825', '2826')
          )
        ),
        'UF_CRM_1_1642582057' => array(
          'order' => 4,
          'dependences' => array(
            'field' => 'UF_CRM_1_1642581077',
            'values' => array('2826')
          )
        ),
        'UF_CRM_1_1645432610' => array(
          'multiple' => 1,
          'order' => 6,
          'advancedType' => array(
            'type' => 'app_row',
            'cells' => array(
              array(
                'fieldType' => 'autocomplete',
                'items' => 'employee',
                'cols' => 2
              ),
              array(
                'fieldType' => 'string',
                'cols' => 1
              )
            )
          ),
          'dependences' => array(
            'field' => 'UF_CRM_1_1642581077',
            'values' => array('2827', '2826'),
            'if' => array(
              'condition' => '2826',
              'field' => 'UF_CRM_1_1642582057',
              'values' => array('2828')
            )
          )
        ),
        'UF_CRM_1_1642581894' => array(
          'multiple' => 1,
          'order' => 7,
          'advancedType' => array(
            'type' => 'app_row',
            'cells' => array(
              array(
                'fieldType' => 'autocomplete',
                'items' => 'iblock_element',
                'entity' => 36,
                'cols' => 2
              ),
              array(
                'fieldType' => 'string',
                'cols' => 1
              )
            )
          ),
          'dependences' => array(
            'field' => 'UF_CRM_1_1642581077',
            'values' => array('2825', '2826')
          )
        )
      )
    ),
    array(
      'type' => 'block',
      'blockName' => 'Лимит по сумме',
      'order' => 7,
      'fields' => array(
        'UF_CRM_1_1642581014' => array(
          'order' => 1
        )
      )
    ),
    'UF_CRM_1_1642580896' => array(
      'order' => 3
    ),
    'UF_CRM_1_1642580926' => array(
      'order' => 4
    )
  ),
  'common' => array(
    array(
      'type' => 'block',
      'blockName' => 'Контрагент',
      'order' => array(
        'act' => 2,
        'claim' => 1
      ),
      'fields' => array(
        'UF_CRM_1_1642580108' => array(
          'order' => 1
        ),
        'UF_CRM_1_1642580140' => array(
          'realtype' => 'crm',
          'order' => 2,
          'dependences' => array(
            'field' => 'UF_CRM_1_1642580108',
            'values' => array('2818', '')
          )
        ),
        'UF_CRM_1_1642580177' => array(
          'order' => 3,
          'dependences' => array(
            'field' => 'UF_CRM_1_1642580108',
            'values' => array('2819')
          )
        ),
        'UF_CRM_1_1642580195' => array(
          'order' => 4,
         'dependences' => array(
            'field' => 'UF_CRM_1_1642580108',
            'values' => array('2819')
          )
        )
      )
    ),
    array(
      'type' => 'block',
      'blockName' => 'Виновное лицо',
      'order' => array(
        'act' => 9,
        'claim' => 6
      ),
      'fields' => array(
        'UF_CRM_1_1645099677' => array(
          'order' => 1
        ),
        'UF_CRM_1_1642580508' => array(
          'order' => 2,
          'dependences' => array(
            'field' => 'UF_CRM_1_1645099677',
            'values' => array(true, 'true', 1, '1')
          )
        ),
        'UF_CRM_1_1642580547' => array(
          'realtype' => 'employee',
          'order' => 3,
          'dependences' => array(
            array(
              'field' => 'UF_CRM_1_1645099677',
              'values' => array(true, 'true', 1, '1')
            ),
            array(
              'field' => 'UF_CRM_1_1642580508',
              'values' => array('2820')
            )
          )
        ),
        'UF_CRM_1_1642580573' => array(
          'multiple' => 1,
          'order' => 4,
          'dependences' => array(
            array(
              'field' => 'UF_CRM_1_1645099677',
              'values' => array(true, 'true', 1, '1')
            ),
            array(
              'field' => 'UF_CRM_1_1642580508',
              'values' => array('2821')
            )
          )
        )
      )
    ),
    'UF_CRM_1_1642580354' => array(
      'realtype' => 'iblock_element',
      'order' => array(
        'act' => 4,
        'claim' => 2
      )
    ),
    'UF_CRM_1_1642580428' => array(
      'order' => array(
        'act' => 5,
        'claim' => 5
      )
    ),
    'UF_CRM_1_1642580481' => array(
      'order' => array(
        'act' => 8,
        'claim' => 8
      )
    ),
    'UF_CRM_1_1642580600' => array(
      'multiple' => true,
      'order' => array(
        'act' => 10,
        'claim' => 10
      )
    ),
    'UF_CRM_1_1650870988' => array(
      'order' => 0
    )
  )
);

$result = COption::SetOptionString('main', 'claimFieldsDescription', serialize($tabs));

print_r($result);