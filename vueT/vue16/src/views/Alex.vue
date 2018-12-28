<template>
<div>
<h1> this is test</h1>
<router-link :to="{ name: 'alex-info'}">Info</router-link> |
<router-link to="/alex/youtube">Youtube</router-link>
<router-view></router-view>
</div>
</template> 