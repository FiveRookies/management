<template>
    <div>
        <div id="div1" class="toolbar"></div>
        <div id="div2" class="text"></div>
      
    </div>
</template>

<script>
    import E from 'wangeditor'
    var editor = new E('#div1')
    export default {
      name: 'Editor',
      data () {
        return {
          editorContent: ''
        }
      },
      methods: {
        getContent: function () {
            alert(this.editorContent)
        }
      },
      mounted() {
        var editor = new E("#div1","#div2")
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
        }
        editor.customConfig.uploadImgServer = '/loader';
       
        editor.create();
      }
    }
</script>

<style>
.toolbar{
    border: 1px solid #ccc;
}
.text{
    border: 1px solid #ccc;
    height: 400px;
}

</style>
