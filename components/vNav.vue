<template>
  <nav class="absolute top-0 left-0 z-20 mt-5 ml-5">
    <ul>
       <li v-for="(n, i ) in nav" :key="i" class="inline-block">
           <NuxtLink :to="n.link" class="mr-3 text-gray-300 pt-2 pb-2 pl-5 pr-5 hover:bg-white hover:text-black transition rounded-r-full rounded-l-full  duration-300  ease-in-out">{{n.title}}</NuxtLink>
       </li>
    </ul>
</nav>
</template>

<script>
export default {
    data: ()=>({
        nav:[
            {title:"Home", link:"/"},
            {title:"App", link:"/App"}
        ]
    })
}
</script>

<style lang="less" scoped>
.nuxt-link-exact-active  {
  background-color: white;
  color:#000;
}
</style>