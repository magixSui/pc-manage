<template>
  <div class="hello">
    <a-table :columns="columns" :dataSource="data">
      <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
      <span slot="customTitle">
        <a-icon type="smile-o" />Name
      </span>
      <span slot="tags" slot-scope="tags">
        <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
      </span>
      <span slot="action" slot-scope="text, record">
        <a href="javascript:;">Invite 一 {{record.name}}</a>
        <a-divider type="vertical" />
        <a href="javascript:;">Delete</a>
        <a-divider type="vertical" />
        <a href="javascript:;" class="ant-dropdown-link">
          More actions
          <a-icon type="down" />
        </a>
      </span>
    </a-table>
  </div>
</template>

<script>
import { Field } from "vant";
import uri from '../utils/uri';
import axios from 'axios';

const columns = [
  {
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" }
  },
  {
    title: "value",
    dataIndex: "value",
    key: "value"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" }
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

export default {
  name: "hello",
  data() {
    return {
      components: {
        SdField: {
          name: "sd-field",
          props: {},
          watch: { $props: { immediate: true, deep: true } }
        },
        SdButton: {
          name: "sd-button",
          props: {},
          watch: { $props: { immediate: true, deep: true } }
        },
        SdText: {
          name: "sd-text",
          props: {},
          watch: { $props: { immediate: true, deep: true } }
        }
      },
      props: [],
      data: [],
      columns
    };
  },
  mounted() {
    this.props = Field.props;
    let arr = [];
    let queue = [];
    for (let key in this.components) {
      arr.push({
        name: this.components[key].name,
        value: this.components[key].name
      });
    }
    // 如果需要更新，訪問接口更新存储未上传的组件，否则查询
    axios.get(uri.component.list,{params: {
      index: 0,
      count: 10
    }}).then(res => {
      let resultLength = res.data.data.length;
      if (arr.length !== resultLength) {
        // TODO 
      } else {
        this.data = res.data.data.components;
      }
    });
    // axios.post(uri.component.insertmany, {components: arr}).then(res => {
    //   console.log(res);
    // });
  },
  methods: {}
};
</script>

<style>
.hello {
  padding: 2rem;
}
</style>