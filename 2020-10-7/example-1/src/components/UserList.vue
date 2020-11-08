<template>
    <div class="customzie">
        <div class="search-box">
            <div>
                <span>
                    id：
                    <el-input
                        clearable
                        placeholder="请输入"
                        size="small"
                        style="width: 160px"
                        v-model.number="id"
                        type="number"
                    >
                    </el-input>
                </span>
                <span>
                    性别：
                    <el-radio-group v-model.number="sex" @change="getSex">
                        <el-radio :label="1">男</el-radio>
                        <el-radio :label="2">女</el-radio>
                    </el-radio-group>
                </span>
                <span>
                    登录方式：
                    <el-checkbox
                        v-model="loginTypeWx"
                        label="微信"
                    ></el-checkbox>
                    <el-checkbox
                        v-model="loginTypeWb"
                        label="微博"
                    ></el-checkbox>
                    <el-checkbox v-model="loginTypeQq" label="qq"></el-checkbox>
                </span>
                <div class="block">
                    <span class="demonstration">注册时间</span>
                    <el-date-picker
                        v-model="startTime"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                    >
                    </el-date-picker>
                </div>
                <el-button
                    type="primary"
                    plain
                    size="small"
                    @click="UserListGet"
                    >查询</el-button
                >
                <el-button type="primary" plain size="small">重置</el-button>
            </div>
        </div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column label="日期" align="center" width="180">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{
                        scope.row.create_time
                    }}</span>
                </template>
            </el-table-column>
            <el-table-column label="姓名" align="center">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>姓名: {{ scope.row.nickname }}</p>
                        <p>住址: {{ scope.row.address }}</p>
                        <div slot="reference" class="nickname-wrapper">
                            <el-tag size="medium">{{
                                scope.row.nickname
                            }}</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button
                    >
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalCount"
        >
        </el-pagination>
    </div>
</template>

<script>
import Store from "@/store/store";
import api from "@/api/api";

export default {
    components: {
    },
    data() {
        return {
            // 显示提示框
            showMsg: true,
            totalCount: 1,
            tableData: [],
            id: "",
            sex: "",
            loginTypeWx: false,
            loginTypeWb: false,
            loginTypeQq: false,
            startTime:"",
            endTime:"",
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    destroyed() {},
    methods: {
        handleEdit(index, row) {
            // this.$refs.dialog.visible = true;
            this.showMsg = true;
            // 显示确定编辑的弹窗
            console.log(index);
            console.log(row);
            console.log("###");
            console.log(Store.state.user);
            console.log("###");
        },
        getSex(val) {
            this.sex = val;
            console.log("获得的单选框值是：", val, typeof val);
        },
        handleDelete(index, row) {
            // this.$refs.dialog.visible = true;
            this.showMsg = false;
            // 提示是否确认删除
            console.log(index);
            console.log(row);
        },
        UserListGet() {
            var parm = { page_index: 1, page_size: 10 };
            if (0 != this.id) {
                parm.id = this.id;
            }
            if (0 != this.sex) {
                parm.sex = this.sex;
            }
            if (this.loginTypeWx) {
                parm.login_type = 1;
            } else if (this.loginTypeWb) {
                parm.login_type = 2;
            } else if (this.loginTypeQq) {
                parm.login_type = 3;
            }
            if (0<(new Date(this.startTime[0])).getTime() / 1000){
                parm.start_time=(new Date(this.startTime[0])).getTime() / 1000
            }
            if (0<(new Date(this.startTime[1])).getTime() / 1000){
                parm.end_time=(new Date(this.startTime[1])).getTime() / 1000
            }
            console.log(this.startTime,(new Date(this.startTime[0])).getTime() / 1000)
            api.postJSON("/MuzenBAS/User/UserFind", parm).then((res) => {
                console.log(res);
                if (0 == res.data.code) {
                    // Store.state.user = res.data.data;
                    this.tableData = res.data.data.data.slice(0, 10);
                    this.totalCount = res.data.data.count;
                    console.log(res.data.data);
                }
            });
        },
        /**
         *@description: 点击确定执行的方法
         */
        confirm() {
            // this.$refs.dialog.visible = false;
            console.log("执行确认方法");
        },
        handleCurrentChange(pageIndex) {
            api.postJSON("/MuzenBAS/User/UserFind", {
                page_index: pageIndex,
                page_size: 10,
            }).then((res) => {
                console.log(res);
                if (0 == res.data.code) {
                    // Store.state.user = res.data.data;
                    this.tableData = res.data.data.data.slice(0, 10);
                    this.totalCount = res.data.data.count;
                    console.log(res.data.data);
                }
            });
        },
    },
};
</script>
<style lang='scss' scoped>
.customzie {
    // @import '@/assets/style/table.scss';

    width: 100%;
    height: vh(550);
    .search-box {
        position: relative;
        .btn-right {
            position: absolute;
            top: 0;
            right: 0;
        }
    }
}
.el-pagination {
    text-align: right;
}
</style>
