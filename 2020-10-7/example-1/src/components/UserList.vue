<template>
    <div class="customzie">
        <div class="search-box">
            <div>
                <span>
                    单号：
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
                <el-radio-group v-model.number="sex" @change="getSex">
                    <el-radio :label="1">男</el-radio>
                    <el-radio :label="2">女</el-radio>
                </el-radio-group>
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
        <!-- <ConfirmDialog  @confirm="confirm" :showMsg.sync="showMsg"></ConfirmDialog> -->
        <!-- <Pagination></Pagination> -->
        <el-pagination
            @size-change="handleSizeChange"
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
// 确认提示框组件
import ConfirmDialog from "@/components/ConfirmDialog.vue";
import Store from "@/store/store";
import api from "@/api/api";

export default {
    components: {
        ConfirmDialog,
    },
    data() {
        return {
            // 显示提示框
            showMsg: true,
            totalCount: 1,
            tableData: [],
            id: "",
            sex: "",
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
            console.log('获得的单选框值是：', val, typeof(val))
        },
        handleDelete(index, row) {
            // this.$refs.dialog.visible = true;
            this.showMsg = false;
            // 提示是否确认删除
            console.log(index);
            console.log(row);
        },
        UserListGet() {
            parm = new Object();
            parm.page_index = 1;
            parm.page_size = 10;
            if (0 != this.id) {
                parm.id = this.id;
            }
            if (0 != this.sex) {
                parm.sex = this.sex;
            }
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
