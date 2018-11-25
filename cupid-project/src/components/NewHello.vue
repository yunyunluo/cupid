<template>
    <div>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    name : 'NewHello',
    data() {
        return {
            msg: 'Hello World'
        }
    },
    created() {
                fetch('http://localhost:8810/cupid/account/info/findByAccountId?accountId=10000')
                // .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
            }
}
</script>

