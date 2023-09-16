> this----指向当前组件实例
> this. $ root 获取根组件实例对象,一般是   new vue创建的实例对象
> this.$ el访问当前组件的根标签
> this.$data获取当前组件的data选项
> this. $ options获取当前组件的props选项
> this.$ parent获取当前组件的父组件
> this.$ children获取当前组件的直接子组件//在父组件中可以找到子组件实例，然后通过该实例访问子组件的属性和方法
> this.$ solt获取插槽的内容,包括标签和文本