<template>
    <div style="">
        <div class="block">
            <el-row :span="8" class="tac">
                <el-col :span="8">
                    <el-radio v-model="radio" label="1">备选项</el-radio>
                    <el-radio v-model="radio" label="2">备选项</el-radio>
                    <el-checkbox-group
                        v-model="checkList"
                        style="
                            margin-top: 10px;
                            margin-left: 10px;
                            margin-right: 10px;
                            margin-bottom: 10px;
                        "
                    >
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                        <el-checkbox label="禁用" disabled></el-checkbox>
                        <el-checkbox label="选中且禁用" disabled></el-checkbox>
                    </el-checkbox-group>
                    <el-input
                        class="sf-button"
                        v-model="input"
                        placeholder="请输入内容"
                    ></el-input>
                </el-col>
            </el-row>
        </div>
        <div class="demo-input-suffix">
            属性方式：
            <el-input
                placeholder="请选择日期"
                suffix-icon="el-icon-date"
                v-model="input1"
                class="sf-button"
                style="width: 200px"
            >
            </el-input>
            <el-input
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="input2"
                class="sf-button"
                style="width: 200px"
            >
            </el-input>
            <el-input-number
                v-model="num"
                @change="handleChange"
                :min="1"
                :max="10"
                label="描述文字"
            ></el-input-number>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select>
        </div>
        <div class="block">
            <span class="demonstration">默认 click 触发子菜单</span>
            <el-cascader
                v-model="value1"
                :options="options1"
                @change="handleChange1"
            ></el-cascader>
        </div>
        <div class="block">
            <span class="demonstration">hover 触发子菜单</span>
            <el-cascader
                v-model="value1"
                :options="options1"
                :props="{ expandTrigger: 'hover' }"
                @change="handleChange1"
            ></el-cascader>
            <el-switch
                v-model="value3"
                active-text="按月付费"
                inactive-text="按年付费"
                @change="handleChange1"
            >
            </el-switch>
            <el-switch
                style="display: block"
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="按月付费"
                inactive-text="按年付费"
                @change="handleChange1"
            >
            </el-switch>
        </div>
        <div class="block">
            <span class="demonstration">默认</span>
            <el-slider v-model="svalue1"></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">自定义初始值</span>
            <el-slider v-model="svalue2"></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">隐藏 Tooltip</span>
            <el-slider v-model="svalue3" :show-tooltip="false"></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">格式化 Tooltip</span>
            <el-slider
                v-model="svalue4"
                :format-tooltip="formatTooltip"
            ></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">禁用</span>
            <el-slider v-model="svalue5" disabled></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">禁用1</span>
            <el-slider v-model="svalue5" disabled></el-slider>
        </div>
        <div class="block">
            <span class="demonstration" style="z-index: -1">禁用2</span>
            <el-slider
                v-model="svalue5"
                disabled
                style="z-index: -1"
            ></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">禁用3</span>
            <el-slider v-model="svalue5" disabled></el-slider>
        </div>
        <div class="block" style="z-index: -1">
            <span class="demonstration">禁用4</span>
            <el-slider v-model="svalue5" disabled></el-slider>
        </div>
        <div
            class="block"
            style="
                margin-top: 10px;
                margin-left: 10px;
                margin-right: 10px;
                z-index: -1;
            "
        >
            <span class="demonstration">禁用5</span>
            <el-slider
                style="z-index: -1"
                v-model="svalue5"
                disabled
            ></el-slider>
        </div>
        <div class="block">
            <el-switch
                v-model="value3"
                active-text="按月付费"
                inactive-text="按年付费"
                @change="handleChange1"
            >
            </el-switch>
        </div>
        <div class="block">
            <el-switch
                style="display: block margin-top: 10px;
                        margin-left: 10px;
                        margin-right: 10px;
                        margin-bottom: 10px;"
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="1按月付费"
                inactive-text="1按年付费"
                @change="handleChange1"
            >
            </el-switch>
        </div>
        <div class="block">
            <el-switch
                style="display: block margin-top: 10px;
                        margin-left: 10px;
                        margin-right: 10px;
                        margin-bottom: 10px;"
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="2按月付费"
                inactive-text="2按年付费"
                @change="handleChange1"
            >
            </el-switch>
        </div>
        <div class="block">
            <el-switch
                style="display: block margin-top: 10px;
                        margin-left: 10px;
                        margin-right: 10px;
                        margin-bottom: 10px;"
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="3按月付费"
                inactive-text="3按年付费"
                @change="handleChange1"
            >
            </el-switch>
        </div>
        <div class="block">
            <el-switch
                style="display: block margin-top: 10px;
                        margin-left: 10px;
                        margin-right: 10px;
                        margin-bottom: 10px;"
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="4按月付费"
                inactive-text="4按年付费"
                @change="handleChange1"
            >
            </el-switch>
        </div>
        <div class="block">
            <el-switch
                style="display: block margin-top: 10px;
                        margin-left: 10px;
                        margin-right: 10px;
                        margin-bottom: 10px;"
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="5按月付费"
                inactive-text="5按年付费"
                @change="handleChange1"
            >
            </el-switch>
        </div>
        <div class="block">
            <el-switch
                style="display: block
                        margin-top: 10px;
                        margin-left: 10px;
                        margin-right: 10px;
                        margin-bottom: 10px;"
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="6按月付费"
                inactive-text="6按年付费"
                @change="handleChange1"
            >
            </el-switch>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            radio: "1",
            checkList: ["选中且禁用", "复选框 A"],
            input: "",
            input1: "",
            input2: "",
            num: 1,
            options: [
                {
                    value: "选项1",
                    label: "黄金糕",
                },
                {
                    value: "选项2",
                    label: "双皮奶",
                },
                {
                    value: "选项3",
                    label: "蚵仔煎",
                },
                {
                    value: "选项4",
                    label: "龙须面",
                },
                {
                    value: "选项5",
                    label: "北京烤鸭",
                },
            ],
            value: [],
            options1: [
                {
                    value: "zhinan",
                    label: "指南",
                    children: [
                        {
                            value: "shejiyuanze",
                            label: "设计原则",
                            children: [
                                {
                                    value: "yizhi",
                                    label: "一致",
                                },
                                {
                                    value: "fankui",
                                    label: "反馈",
                                },
                                {
                                    value: "xiaolv",
                                    label: "效率",
                                },
                                {
                                    value: "kekong",
                                    label: "可控",
                                },
                            ],
                        },
                        {
                            value: "daohang",
                            label: "导航",
                            children: [
                                {
                                    value: "cexiangdaohang",
                                    label: "侧向导航",
                                },
                                {
                                    value: "dingbudaohang",
                                    label: "顶部导航",
                                },
                            ],
                        },
                    ],
                },
                {
                    value: "zujian",
                    label: "组件",
                    children: [
                        {
                            value: "basic",
                            label: "Basic",
                            children: [
                                {
                                    value: "layout",
                                    label: "Layout 布局",
                                },
                                {
                                    value: "color",
                                    label: "Color 色彩",
                                },
                                {
                                    value: "typography",
                                    label: "Typography 字体",
                                },
                                {
                                    value: "icon",
                                    label: "Icon 图标",
                                },
                                {
                                    value: "button",
                                    label: "Button 按钮",
                                },
                            ],
                        },
                        {
                            value: "form",
                            label: "Form",
                            children: [
                                {
                                    value: "radio",
                                    label: "Radio 单选框",
                                },
                                {
                                    value: "checkbox",
                                    label: "Checkbox 多选框",
                                },
                                {
                                    value: "input",
                                    label: "Input 输入框",
                                },
                                {
                                    value: "input-number",
                                    label: "InputNumber 计数器",
                                },
                                {
                                    value: "select",
                                    label: "Select 选择器",
                                },
                                {
                                    value: "cascader",
                                    label: "Cascader 级联选择器",
                                },
                                {
                                    value: "switch",
                                    label: "Switch 开关",
                                },
                                {
                                    value: "slider",
                                    label: "Slider 滑块",
                                },
                                {
                                    value: "time-picker",
                                    label: "TimePicker 时间选择器",
                                },
                                {
                                    value: "date-picker",
                                    label: "DatePicker 日期选择器",
                                },
                                {
                                    value: "datetime-picker",
                                    label: "DateTimePicker 日期时间选择器",
                                },
                                {
                                    value: "upload",
                                    label: "Upload 上传",
                                },
                                {
                                    value: "rate",
                                    label: "Rate 评分",
                                },
                                {
                                    value: "form",
                                    label: "Form 表单",
                                },
                            ],
                        },
                        {
                            value: "data",
                            label: "Data",
                            children: [
                                {
                                    value: "table",
                                    label: "Table 表格",
                                },
                                {
                                    value: "tag",
                                    label: "Tag 标签",
                                },
                                {
                                    value: "progress",
                                    label: "Progress 进度条",
                                },
                                {
                                    value: "tree",
                                    label: "Tree 树形控件",
                                },
                                {
                                    value: "pagination",
                                    label: "Pagination 分页",
                                },
                                {
                                    value: "badge",
                                    label: "Badge 标记",
                                },
                            ],
                        },
                        {
                            value: "notice",
                            label: "Notice",
                            children: [
                                {
                                    value: "alert",
                                    label: "Alert 警告",
                                },
                                {
                                    value: "loading",
                                    label: "Loading 加载",
                                },
                                {
                                    value: "message",
                                    label: "Message 消息提示",
                                },
                                {
                                    value: "message-box",
                                    label: "MessageBox 弹框",
                                },
                                {
                                    value: "notification",
                                    label: "Notification 通知",
                                },
                            ],
                        },
                        {
                            value: "navigation",
                            label: "Navigation",
                            children: [
                                {
                                    value: "menu",
                                    label: "NavMenu 导航菜单",
                                },
                                {
                                    value: "tabs",
                                    label: "Tabs 标签页",
                                },
                                {
                                    value: "breadcrumb",
                                    label: "Breadcrumb 面包屑",
                                },
                                {
                                    value: "dropdown",
                                    label: "Dropdown 下拉菜单",
                                },
                                {
                                    value: "steps",
                                    label: "Steps 步骤条",
                                },
                            ],
                        },
                        {
                            value: "others",
                            label: "Others",
                            children: [
                                {
                                    value: "dialog",
                                    label: "Dialog 对话框",
                                },
                                {
                                    value: "tooltip",
                                    label: "Tooltip 文字提示",
                                },
                                {
                                    value: "popover",
                                    label: "Popover 弹出框",
                                },
                                {
                                    value: "card",
                                    label: "Card 卡片",
                                },
                                {
                                    value: "carousel",
                                    label: "Carousel 走马灯",
                                },
                                {
                                    value: "collapse",
                                    label: "Collapse 折叠面板",
                                },
                            ],
                        },
                    ],
                },
                {
                    value: "ziyuan",
                    label: "资源",
                    children: [
                        {
                            value: "axure",
                            label: "Axure Components",
                        },
                        {
                            value: "sketch",
                            label: "Sketch Templates",
                        },
                        {
                            value: "jiaohu",
                            label: "组件交互文档",
                        },
                    ],
                },
            ],
            value1: "",
            value3: true,
            value2: true,
            svalue1: 0,
            svalue2: 50,
            svalue3: 36,
            svalue4: 48,
            svalue5: 42,
        };
    },
    methods: {
        handleChange(value) {
            console.log(value);
        },
        handleChange1(value) {
            console.log(value);
        },
        formatTooltip(val) {
            return val / 100;
        },
    },
};
</script>

<style scoped>
.sf-button {
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
}

.sidebar-wrapper .el-scrollbar__wrap {
    overflow-x: hidden;
}
.is-horizontal {
    display: none;
}
.body_clear {
    clear: both;
}

.hidden_hello {
    height: 100%;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    margin: 10px;
}
</style>