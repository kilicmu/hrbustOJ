<style lang="scss">
@import "~@/sass/config.scss";
@include flash-animation;
.state_card {
  height: 870px;
  width: 100%;
  position: relative;
  strong {
    font-size: 24px;
    color: $standard-title;
  }
  .status_flash_search {
    position: absolute;
    right: 20px;
    top: 50px;
    &_switch {
      margin-right: 10px;
    }
    &_search {
      margin-right: 10px;
    }
    &_flash {
    }
  }
  .status_list {
    margin-top: 50px;
    &_page {
      position: absolute;
      right: 30px;
      bottom: 30px;
    }
  }
}
</style>

<template lang="pug">

Content(:style="{padding: '0 50px'}")
  Card.state_card
    strong Status
      div.status_flash_search
        i-switch(size="large" v-model="show_self" @on-change="_switch").status_flash_search_switch
          span(slot="close") all
          span(slot="open") self
        Input(v-model="search_value" placeholder="search by author" @on-enter="enter_search" style="width: 200px").status_flash_search_search
        Button(type="primary" @click="reload").status_flash_search_flash reload
    transition(name="flash")
      status-list(:show_status_data="show_status_data" v-if="show_list").status_list
    Spin(size="large" fix v-if="!show_list")
    Page(:total="page_num" :page-size="one_page_size" show-elevator @on-change="status_change").status_list_page

</template>

<script>
import statusList from "./statusList.vue";
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      // all_status_data: [],
      status_data: [],
      show_status_data: [],
      // user: "",
      show_self: false,
      search_value: "",
      show_list: true,
      page_num: 0,
      one_page_size: 12
    };
  },
  methods: {
    _switch: function(statu) {
      this.show_list = false;
      if (statu) {
        let tmp = [];
        this.all_status_data.forEach(i => {
          if (i.anuther === this.user) {
            tmp.push(i);
          }
        });
        this.status_data = tmp;
        this.show_status_data = this.status_data.slice(0, 12);
        this.page_num = this.status_data.length;
      } else {
        this.status_data = this.all_status_data;
        this.show_status_data = this.status_data.slice(0, 12);
        this.page_num = this.status_data.length;
      }
      setTimeout(() => {
        this.show_list = true;
      }, 300);
    },

    enter_search: function() {
      this.show_list = false;
      let tmp = [];
      if (this.search_value === "") {
        this.status_data = this.all_status_data;
        this.show_status_data = this.status_data.slice(0, 12);
        this.page_num = this.status_data.length;
      } else {
        this.all_status_data.forEach(i => {
          if (i.anuther.includes(this.search_value)) {
            tmp.push(i);
          }
        });
        this.status_data = tmp;
        this.show_status_data = this.status_data.slice(0, 12);
        this.page_num = this.status_data.length;
      }
      setTimeout(() => {
        this.show_list = true;
      }, 300);
    },

    status_change: function(page) {
      this.show_list = false;
      this.show_status_data = this.status_data.slice(
        (page - 1) * 12,
        page * 12
      );
      setTimeout(() => {
        this.show_list = true;
      }, 300);
    },

    reload: function() {
      this.show_list = false;
      this.search_value = "";
      this.status_data = this.all_status_data;
      setTimeout(() => {
        this.show_list = true;
      }, 300);
    },

    ...mapMutations(["set_all_status_data"])
  },
  components: {
    "status-list": statusList
  },
  created() {
    // this.$api
    //   .status_init()
    //   .then(data => {
    this.$api
      .status_init()
      .then(data => {
        this.set_all_status_data(data);
        this.status_data = this.all_status_data;
        this.show_status_data = this.status_data.slice(0, 12);
        this.page_num = this.all_status_data.length;
      })
      .catch(err => {
        this.$Message.error("服务器开小差了");
      });

    // })
    // .catch(err => {
    //   this.$Message.error("服务器开小差了");
    // });
  },
  computed: { ...mapState(["user", "all_status_data"]) }
};
</script>