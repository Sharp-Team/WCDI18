<template>
  <button
    class="button my-btn"
    :style="{ backgroundColor: background, color: color }"
    :data-toggle="dataToggle"
    :data-target="dataTarget">
    <span class="button__mask"></span>
    <span class="button__text">{{ content }}</span>
    <span class="button__text button__text--bis" :style="{ backgroundColor: backgroundHover }">
      {{ content }}
    </span>
  </button>
</template>

<script>
export default {
  props: {
    content: String,
    background: String,
    backgroundHover: String,
    color: String,
    dataToggle: String,
    dataTarget: String
  }
};

</script>

<style lang="scss" scoped>
@import '~/assets/scss/variable.scss';
$anim-text-offset: 1em;
.button{
  user-select: none;
  display: inline-block;
  border: 0;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  opacity: 1;
  border-radius: 4px;
  padding: 0 25px;
  &__text{
    display: block;
    padding: 5px 25px 0 25px;
    height: 36px;
    font-weight: 500;
    &:before{
      content: attr(title);
    }
    &--bis{
      display: block;
      position: absolute;
      top: 0; left:0; right: 0; bottom: 0;
      transform: translateX(-1 * $anim-text-offset);
      opacity: 0;
    }
  }
  &__mask{
    display: block;
    position: absolute;
    padding: 0 25px;
    top: 0; left: 0; right: 0; bottom: 0;
    background: white;
    transform: translateX(-100%) rotate(45deg);
    transition: all 0.3s;
  }
}

.button:hover{
  opacity: 1;
  .button__text{
    animation: fx-text .3s ease-out;
    &--bis{
      animation: fx-text-bis .3s ease-out;
    }
  }
  .button__mask{
    animation: fx-mask .3s ease-out;
  }
}

.button:active{
  opacity: 1;
  background: white;
  color: inherit;
}

@keyframes fx-mask {
  0%{
    transform: translateX(-100%) rotate(45deg);
  }
  100%{
    transform: translateX(100%) rotate(45deg);
  }
}

@keyframes fx-text {
  0%{
    transform: translateX(0);
    opacity: 1;
  }
  100%{
    transform: translateX($anim-text-offset);
    opacity: 0;
  }
}
@keyframes fx-text-bis {
  0%{
    transform: translateX(-1 * $anim-text-offset);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
}
</style>

