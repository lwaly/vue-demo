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
  }
];
