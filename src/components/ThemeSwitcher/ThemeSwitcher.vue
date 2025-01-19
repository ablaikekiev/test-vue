<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import UIIcon from "@/components/UIIcon/UIIcon.vue";


const currentTheme = ref();

onMounted(() => {
  currentTheme.value = localStorage.getItem('theme') || 'light'
})

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
};

watch(currentTheme, (newTheme) => {
  if (currentTheme.value === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
  localStorage.setItem('theme', newTheme);
});

document.documentElement.className = currentTheme.value;
</script>

<template>
  <label class="switch">
    <input
        type="checkbox"
        :checked="currentTheme === 'dark'"
        @change="toggleTheme"
    />
    <div class="slider">
      <div class="thumb">
        <UIIcon name="sun" v-if="currentTheme === 'light'" :size="10" />
        <UIIcon name="crescent" v-if="currentTheme === 'dark'" :size="10" />
      </div>
    </div>
  </label>
</template>

<style scoped lang="scss">
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--label-secondary);
  transition: 0.4s;
  border-radius: 24px;

  .thumb {
    position: absolute;
    content: '';
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background-color: var(--system-button-white);
    transition: 0.4s;
    border-radius: 50%;
  }

  .crescentIcon {
    color: var(--system-primary);
  }
}

input:checked + .slider .thumb {
  transform: translateX(16px);
}

</style>