<template>
    <el-menu :default-active="activeIndex" mode="horizontal" class="el-menu-demo" :router="true">
        <el-menu-item index="1">
            <router-link to="/">
                <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
                    Swanv
            </router-link>
        </el-menu-item>
        <el-menu-item index="2">
            <router-link to="/">Home</router-link>
        </el-menu-item>
        <el-menu-item index="2">
            <router-link to='/profile'>profile</router-link>
        </el-menu-item>
        <el-menu-item index="3">
            <router-link to='/login'>登录</router-link>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>