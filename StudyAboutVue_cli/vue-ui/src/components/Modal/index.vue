<template>
  <div id="modal">
    <div class="modal-body">
      <div class="modal-title">
        <slot name="modal-title"></slot>
      </div>
      <div class="modal-content">
        <slot name="modal-content"></slot>
      </div>
      <div class="modal-footer">
        <slot name="modal-footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#modal {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

#modal .modal-body {
  width: 200px;
  background: white;
}
</style>
