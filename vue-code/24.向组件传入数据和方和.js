/***
 * 但是如何获取得子组件的数据和方法？？？？！！！
 * @type {Vue}
 */
var vm=new Vue({
    el:'#app',
    data:{
        helloMessage:'this is a parent-component message!',
        name:'老李',
        //占位符
        sonName:'',
    },
    methods:{
        showName(){
            console.log(this.name)
        },
        showSonName(){
            console.log(this.sonName)
        }
    },
    components:{
        //定义一个私有的组件
        'my-comp1':{
            template:'#temp',
            data:function () {
                return {
                    //这里传入的组件私有的数据
                    son:{
                        name:'小李',
                        age:6
                    }
                }
            },
            //这里可以看到引用了父组件的哪些数据。
            props:['parentname'],
            methods: {
                showSonName(){
                    console.log(this.son.name)
                },
                showParentName(){
                    //调用父组件的方法。
                    this.$emit('parentfunc')

                }

            },
        },
    }
})
