<template>
  <div class="detail1_2">
    <button type="button" class="btn btn-default">（默认样式）btn-default</button>
    <button type="button" class="btn btn-primary">（首选项）btn-primary</button>
    <ul class="nav nav-tabs">
      <li role="presentation" class="active"><a href="#">Home</a></li>
      <li role="presentation"><a href="#">Profile</a></li>
      <li role="presentation" class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
          Dropdown <span class="caret"></span>
        </a>
        <ul class="dropdown-menu">
          <li><a href="#">Dropdown link</a></li>
          <li><a href="#">Dropdown link</a></li>
        </ul>
      </li>
    </ul>
    <hr />
    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
      Launch demo modal
    </button>
    <div id="myModal" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Modal title</h4>
          </div>
          <div class="modal-body">
            <p>One fine body&hellip;</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button id="save" @click="save" type="button" class="btn btn-primary" data-dismiss="modal">Save changes</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <button id="b" @click="click">$('#myModal').modal('toggle')</button>

    <router-view/>
  </div>
</template>
<script>
  import $ from 'jquery';
  /*window.jQuery=$;
  window.$=$;
  window.jQuery = $;
  export default $;*/

  //import 'jquery/jquery.js';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'popper.js/dist/popper-utils.min.js';
  //import 'bootstrap/dist/js/bootstrap.min.js';
export default {
  //name: 'Project1'
  mounted(){

  },
  methods:{
    save(){
        alert('Saved successfully.');
    },
    click(){
      $('#myModal').modal('toggle');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../assets/mycss.css';

</style>
