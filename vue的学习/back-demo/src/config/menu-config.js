module.exports = [
  {
    name: "基础",
    id: "basic",
    meta: {
      icon: 'el-icon-location',
      requireAuth: false,
      table: true,
    },
    sub: [
      {
        name: "Layout 布局",
        componentName: "BasicLayout",
        meta: {
          icon: 'el-icon-location',
          requireAuth: false,
          table: true,
        },
      },
      {
        name: "Container 布局容器",
        componentName: "BasicContainer",
        meta: {
          icon: 'el-icon-location',
          requireAuth: false,
          table: true,
        },
      }
    ]
  },
  {
    name: "Form",
    id: "form",
    meta: {
      icon: 'el-icon-location',
      requireAuth: false,
      table: true,
    },
    sub: [
      {
        name: "Radio 单选框",
        componentName: "FormRadio",
        meta: {
          icon: 'el-icon-location',
          requireAuth: false,
          table: true,
        },
      },
      {
        name: "Checkbox 多选框",
        componentName: "FormCheckbox",
        meta: {
          icon: 'el-icon-location',
          requireAuth: false,
          table: true,
        },
      }
    ]
  },
  {
    name: "数据可视化",
    id: "data-vis",
    meta: {
      icon: 'el-icon-location',
      requireAuth: false,
      table: true,
    },
    sub: [
      {
        name: "时间周期",
        componentName: "StockDate",
        meta: {
          icon: 'el-icon-location',
          requireAuth: false,
          table: true,
        },
      },
      {
        name: "多个图表",
        componentName: "StockDateMulti",
        meta: {
          icon: 'el-icon-location',
          requireAuth: false,
          table: true,
        },
      }
    ]
  }
];
