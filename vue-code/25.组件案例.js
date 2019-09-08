var vm=new Vue({
    el:'#app',
    data:{
        list:[
            {id:1, user:'李白', content:'天生我才必有用'},
            {id:Date.now(), user:'杜甫', content:'安得广厦千万间'},
            {id:3, user:'李商隐', content:'蜡炬成灰泪始干'},
        ]
    },
    methods:{
        loadFunc(){
            console.log('loadFunc')
            this.list=JSON.parse(localStorage.getItem('ctms')||'[]')
        },
    },
    created(){
        this.loadFunc()
    },
    components:{
        'cmtbox':{
            template:'#commentBox',
            data:function () {
                return{
                    cmtUser:'',
                    cmtComments:''
                }
            },

            methods:{
                addData(){
                    /*
                     * 问题： 获取到的父类数据应该如何在子组件的方法中引用。
                     * 页面中的引用可以使用{{插值表达式}}的形式
                     */
                    //先新建一个对象保存页面上输入的值
                    var comments={id:Date.now(),user:this.cmtUser,comments:this.cmtComments}
                    //获得已经存储了的键值对(coomnets)。假设键名为ctms
                    var list=JSON.parse(localStorage.getItem('ctms')||'[]')
                    //添加新的数据到list数组中
                    list.unshift(comments)
                    //保存新的数据
                    //这是把所有的数据全部都写到了一个ctms键里面了，每一次都追加一个。
                    localStorage.setItem('ctms',JSON.stringify(list))
                    this.$emit('parentfunc')
                    this.cmtComments=this.cmtUser=''
                }
            }
        }
    }
})
