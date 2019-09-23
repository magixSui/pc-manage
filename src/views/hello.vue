<template>
  <div class="hello">
    <a-table :columns="columns"
    :rowKey="record => record._id"
    :dataSource="data"
    :loading="loading"
    >
      <template slot="show" slot-scope="show">
        {{ show }}
      </template>
      <span slot="operation" slot-scope="text, record, index">
        <a-button @click="edit(record)">编辑</a-button>
        <a-button @click="editProps(record)">属性</a-button>
      </span>
    </a-table>
    <a-modal
      :width="720"
      title="组件配置"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
    >
      <div class="form-item">
        <span class="label">显示名称：</span><a-input placeholder="请输入..." v-model="label"/>
      </div>
      <div class="form-item">
        <span class="label">是否显示：</span>
        <a-radio-group :options="options" @change="onChange" :defaultValue="true" v-model="show"/>
        <!-- <a-input placeholder="请输入..." v-model="show"/> -->
      </div>
      <div class="form-item">
        <span class="label">组件类型：</span>
        <a-select :defaultValue="0" style="width: 120px" v-model="type">
          <a-select-option :value="0">基础</a-select-option>
          <a-select-option :value="1">高级</a-select-option>
        </a-select>
      </div>
      <div class="form-item">
        <span class="label">图标：</span><a-input placeholder="请输入..." v-model="icon"/>
      </div>
    </a-modal>

    <a-modal
      :width="720"
      title="属性配置"
      :visible="visibleProps"
      @ok="handlePropsOk"
      :confirmLoading="propsLoading"
      @cancel="handlePropsCancel"
    >
      <ul v-for="(item, index) in props" :key="index">
        <li>
          <div class="prop-item">
            <span class="label">属性：</span><span>{{item.p_name}}</span>
          </div>
          <div class="prop-item">
            <span class="label">显示名称：</span><a-input placeholder="请输入..." v-model="item.p_label"/>
          </div>
          <div class="prop-item">
            <span class="label">是否显示：</span>
            <a-radio-group :options="options" :defaultValue="true" v-model="item.p_show"/>
          </div>
          <!-- <div class="prop-item">
            <span class="label">类型：</span><a-input placeholder="请输入..." v-model="label"/>
          </div> -->
        </li>
      </ul>
    </a-modal>
  </div>
</template>

<script>
import { Field } from "vant";
import uri from '../utils/uri';
import axios from 'axios';

const columns = [
  {
    title: '名称',
    dataIndex: 'label',
  },
  {
    title: 'name',
    dataIndex: 'name'
  },
  { 
    title: '显示',
    dataIndex: 'show',
    scopedSlots: { customRender: 'show' },
  },
  {
    title: '图标',
    dataIndex: 'icon'
  },
  {
    title: '类型',
    dataIndex: 'type',
  },
  {
  title: 'operation',
  key: 'operation',
  scopedSlots: { customRender: 'operation' },
}
];

export default {
  name: "hello",
  data() {
    return {
      label: null,
      show: null,
      icon: null,
      type: null,
      _id: null,
      options: [{
        label: '显示', value: true
      },{
        label: '不显示', value: false
      }],
      data: [],
      props: null,
      columns,
      loading: false,
      visible: false,
      confirmLoading: false,
      visibleProps: false,
      propsLoading: false
    };
  },
  mounted() {
    this.loading = true;
    // 如果需要更新，訪問接口更新存储未上传的组件，否则查询
    this.init();
  },
  methods: {
    init() {
      axios.get(uri.component.list,{params: {
        index: 0,
        count: 10
      }}).then(res => {
        this.loading = false;
        let resultLength = res.data.data.length;
        this.data = res.data.data.components;
      });
    },
    edit (data) {
      this.label = data.label;
      this.icon = data.icon;
      this.type = data.type;
      this.show = data.show;
      this._id = data._id;
      this.visible = true;
    },
    editProps(data) {
      this.props = data.props;
      this._id = data._id;
      this.visibleProps = true;
    },
    handleOk() {
      axios.post(uri.component.edit, {
        label: this.label,
        show: this.show,
        type: this.type,
        icon: this.icon,
        _id: this._id
      }).then(res => {
        this.init();
        this.visible = false;
      });
    },
    handleCancel() {
      this.visible = false;
    },
    handlePropsOk() {
      axios.post(uri.component.editProp, {
        _id: this._id,
        props: this.props
      }).then(res => {
        this.init();
        this.visibleProps = false;
      });
    },
    handlePropsCancel() {
      this.visibleProps = false;
    },
    onChange() {
      console.log(this.show)
    }
  }
};
</script>

<style scoped>
.hello {
  padding: 2rem;
}
.form-item, .prop-item {
  display:flex;
  margin-bottom:2rem;
}
.form-item .label, .prop-item .label {
  min-width:120px;
}
</style>