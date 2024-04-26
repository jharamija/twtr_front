<template>
    <div name="post">
        <!-- <h2>{{ post.user_id }}</h2>
        <p>{{ post.body }}</p> -->
        <slot name="pfp"></slot>
        <slot name="username"></slot>
        <slot name="body"></slot>
        <slot name="likes"></slot>
        <slot name="comments"></slot>
        <slot name="retweets"></slot>
    </div>
</template>

<!-- <style>

</style> -->