const login = (value) => {
  console.log(value);
  if (value.username === 'jack' && value.password === 'redballoon') {
    alert('登陆成功！')
  } else {
    alert('登陆失败，用户名密码错误！')
  }
}

export { login }