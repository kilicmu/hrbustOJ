<template>
  <Header :theme="theme" class="head_box">
    <Menu mode="horizontal" :theme="theme" active-name="1" id="head" if-show="show" replace=true>
      <div id="school_icon">
        <div id="icon"></div>
      </div>
      <p id="school_name">hrbustOnlineJudge</p>

      <div id="group">
        <MenuItem name="1" to="/">
          <Icon type="ios-home" />Home
        </MenuItem>

        <MenuItem name="2" to="/problems">
          <Icon type="md-code" />Problems
        </MenuItem>
        <MenuItem name="3">
          <Icon type="md-trophy" />Contest
        </MenuItem>
        <MenuItem name="4">
          <Icon type="md-stats" />Status
        </MenuItem>
        <MenuItem name="5">
          <Icon type="ios-people" />Rank
        </MenuItem>
        <Submenu name="6">
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
          <span>登录</span>
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
  </Header>
</template>


<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>

<style scoped>
.ivu-layout-header {
  background: #ffffff00;
  padding: 0;
}
#head_box {
  padding: 0;
}
#head {
  box-shadow: 2px 2px 2px #adadad79;
  width: 100%;

  position: fixed;
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
  background: url("../images/logo.png") no-repeat;
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