<script setup lang="ts">
import UserIcon from '@/assets/images/icons/user.svg';
import CrescentIcon from '@/assets/images/icons/crescent.svg'
import SunIcon from '@/assets/images/icons/sun.svg'
import ArrowIncrease from '@/assets/images/icons/arrow-increase.svg'
import ArrowLeft from '@/assets/images/icons/arrow-left.svg'

const icons: Record<string, any> = {
  user: UserIcon,
  sun: SunIcon,
  crescent: CrescentIcon,
  arrowIncrease: ArrowIncrease,
  arrowLeft: ArrowLeft,
};

interface IconProps {
  name: string; // Имя иконки
  size?: number; // Размер
  className?: string; // Классы
}

const props = defineProps<IconProps>();

const SvgComponent = icons[props.name];

if (!SvgComponent) {
  console.error(`Icon "${props.name}" not found.`);
}
</script>

<template>
  <div v-if="SvgComponent">
    <component
        :is="SvgComponent"
        :width="size || 24"
        :height="size ||  24"
        :fill="'currentColor'"
        :class="className"
        v-bind="$attrs"
    />
  </div>
  <div v-else>
    <p>Icon not found</p>
  </div>
</template>