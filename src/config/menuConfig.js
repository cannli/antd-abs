const menuList = [
  {
    path: '/overview/',   // 项目概况
    name: '项目概况',
    children: [
      {
        path: 'baseInfo',
        name: '项目基本信息',
      },                                       // 项目基本信息
      {
        path: 'dataEvaluate',
        name: '历史数据评估',
      },                               // 历史数据评估
      {
        path: 'dataImportHistory/dataImport',
        name: '历史数据概况',
      },
      {
        path: 'dataImportHistory',
        name: '历史数据上传',
      },
      {
        path: 'personalCenter',
        name: '个人中心',
      },
      {
        path: 'setProject/userDetails',
        name: '用户详情',

      }
    ]
  },
  {
    path: '/scenario/',
    name: '情景分析',
    children: [
      {
        path: 'analysis',
        name: '情景分析',
      },
      {
        path: 'analysis/set',
        name: '情景分析详情',
      },
      {
        path: 'defaultRateCalculate',
        name: '违约率测算',
      },
      {
        path: 'defaultRateCalculate/set',
        name: '违约率测算详情',
      }
    ]
  },
]
export default menuList;