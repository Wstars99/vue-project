<template>
  <div class="box">
    <div class="title">用户登录</div>
    <a-form class="form" :model="formState" name="basic" :label-col="{ span: 4 }" :wrapper-col="{ span: 18 }"
      autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
      <a-form-item label="用户名" name="username" :rules="[{ required: true, message: '用户名不能为空!' }]">
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item label="密码" name="password" :rules="[{ required: true, message: '密码不能为空!' }]">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>


      <a-form-item :wrapper-col="{ offset: 6, span: 12 }">
        <a-button type="primary" block size="large" html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import { login } from '../api/user/login';

export default defineComponent({
  setup() {
    const formState = reactive({
      username: '',
      password: '',
    });

    const onFinish = values => {
      console.log('Success:', values);
      login(values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },

});
</script>

<style  scoped>
.title {
  width: 100%;
  height: 15%;
  line-height: 3;
  font-weight: 700;
  box-shadow: inset 1px 1px 4px 2px #ccc;
  text-align: center;
  font-size: 30px;
  border-radius: .5em;
}

.box {
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 1024px;
  height: 600px;
  border-radius: 1em;
  box-shadow: 2px 2px 10px 5px #ccc;
}

.form {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 15% auto;
}
</style>