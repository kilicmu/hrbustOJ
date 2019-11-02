<style scoped>
.ivu-layout-header {
  background: #ffffff00;
  padding: 0;
}

#head {
  box-shadow: 2px 2px 2px #adadad79;
  width: 100%;
}

#group {
  float: right;
}

#login {
  margin-right: 120px;
}

#school_icon {
  margin-left: 30px;
  width: 50px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  float: left;
}

#icon {
  margin-top: 5px;
  background: url("~@/images/logo.png") no-repeat;
  background-size: 100%;
  width: 100%;
  height: 60px;
}

#school_name {
  float: left;
  margin-top: 3px;
  margin-left: 20px;
  height: 60px;
  font-size: 24px;
  font-family: "Courier New", Courier, monospace;
  text-align: center;
  color: rgba(54, 54, 54, 0.507);
}
</style>
<template>
  <Menu mode="horizontal" :theme="theme1" id="head" :active-name="is_active">
    <div id="school_icon">
      <div id="icon"></div>
    </div>
    <p id="school_name">hrbustOnlineJudge</p>

    <div id="group">
      <MenuItem name="home" to="/">
        <Icon type="ios-home" />Home
      </MenuItem>

      <MenuItem name="problems" to="/problems">
        <Icon type="md-code" />Problems
      </MenuItem>
      <MenuItem name="contest">
        <Icon type="md-trophy" />Contest
      </MenuItem>
      <MenuItem name="status">
        <Icon type="md-stats" />Status
      </MenuItem>
      <MenuItem name="rank">
        <Icon type="ios-people" />Rank
      </MenuItem>
      <Submenu name="about">
        <template slot="title">
          <Icon type="ios-menu" />About
        </template>
        <MenuGroup title="使用">
          <MenuItem name="6-1">新增和启动</MenuItem>
          <MenuItem name="6-2">活跃分析</MenuItem>
          <MenuItem name="6-3">时段分析</MenuItem>
        </MenuGroup>
        <MenuGroup title="留存">
          <MenuItem name="6-4">用户留存</MenuItem>
          <MenuItem name="6-5">流失用户</MenuItem>
        </MenuGroup>
      </Submenu>
      <span class="ivu-avatar ivu-avatar-circle ivu-avatar-icon">
        <i class="ivu-icon ivu-icon-ios-person"></i>
      </span>

      <button type="button" class="ivu-btn ivu-btn-text ivu-btn-large">
        <span>Login in</span>
      </button>

      <Dropdown id="login">
        <a href="javascript:void(0)">
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>修改密码</DropdownItem>
          <DropdownItem>信息管理</DropdownItem>
          <DropdownItem divided>退出登录</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </Menu>
</template>


<script>
export default {
  data() {
    return {
      show: false,
      theme1: "light",
      w: "1600",
      is_active: "home"
    };
  },
  methods: {},
  watch: {
    "$route.path": function() {
      let path = window.location.pathname;
      let patt = new RegExp("/([A-Z]*)", "i");
      let act = patt.exec(path)[1];
      if (act === "") {
        this.is_active = "home";
      } else {
        this.is_active = patt.exec(path)[1];
      }
    }
  }
};
</script>

