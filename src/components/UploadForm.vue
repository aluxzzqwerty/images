<template>
  <div class="dropper">
    <input type="file" v-on:change="uploadImages"
        multiple
        accept="image/*"
    />
    <span>Drag a file here or click!</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UploadForm",
  methods: mapActions(["uploadImages"]),
};
</script>

<style>
.dropper {
  height: 30vh;
  border: 1px solid #333;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.dropper:hover {
  background-color: #eee;
}
input {
  height: 30vh;
  width: 100%;
  opacity: 0;
  position: absolute;
}
</style>