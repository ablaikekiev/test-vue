<script setup lang="ts">
export interface ButtonProps {
  variant: 'filled' | 'text' | 'outlined';
  href?: string;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  [key: string]: any;
}

const {
  variant = 'filled',
  href,
  size = 'medium',
  fullWidth = false,
  disabled = false,
  type = 'button'
} = defineProps<ButtonProps>()

const emits = defineEmits(['click-handler'])

const buttonClassName = {
  button: true,

  filled: variant === 'filled',
  text: variant === 'text',
  outlined: variant === 'outlined',

  disabled: disabled,

  fullWidth: fullWidth,

  // colorError: color === 'error',
  // colorSuccess: color === 'success',
  // colorSecondary: color === 'secondary',

  // sizeSmall: size === 'small',
  sizeMedium: size === 'medium',
  // sizeLarge: size === 'large',
}
</script>

<template>
  <RouterLink v-if="href && !disabled" :to="href" :style="style" class="" :className=buttonClassName>
    <slot/>
  </RouterLink>
  <button
      :type="type"
      :style=style
      :disabled=disabled
      :class="buttonClassName"
      @click="emits('click-handler')"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  grid-gap: 8px;
  vertical-align: middle;
  text-decoration: none;
  box-sizing: border-box;
  text-transform: uppercase;
  background-color: transparent;
  cursor: pointer;

  font-size: 14px;
  font-weight: 700;
  line-height: 1.57;
  letter-spacing: 0.7px;

  min-width: 64px;
  border-radius: 16px;
  outline: 0;
  border: 0;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  svg, img {
    font-size: 20px;
  }
}

.fullWidth {
  width: 100%;
}

.size {
  &Medium {
    padding: 12px 32px;
    font-size: 14px;
  }


  // for sizes
  //&Large {
  //  padding: 8px 11px;
  //  font-size: 0.9375rem;
  //}
}

.filled {
  color: var(--system-button-white);
  background-color: var(--fields-border-action);

  &:hover {
    background-color: var(--system-hover);
  }

  &:focus {
    background-color: var(--fields-border-action);
    box-shadow: 0 0 2px 2px rgba(54, 107, 214, 0.50);
  }

  // for colors
  //&.color {
  //  &Secondary {
  //    color: #9c27b0;
  //  }
  //
  //  &Success {
  //    color: #2e7d32;
  //  }
  //
  //  &Error {
  //    color: #d32f2f;
  //  }
  //}

  &.disabled {
    pointer-events: none;
    cursor: default;
    color: var(--system-button-white);
    background-color: var(--label-quartenary);
  }
}

.outlined {
  color: var(--fields-border-action);
  border: 1px solid var(--fields-border-action);
  background-color: transparent;

  &:hover {
    background-color: var(--label-quartenary);
  }

  &:focus {
    box-shadow: 0 0 2px 2px rgba(54, 107, 214, 0.50);
  }

  // for colors
  //&.color {
  //  &Secondary {
  //    color: #9c27b0;
  //  }
  //
  //  &Success {
  //    color: #2e7d32;
  //  }
  //
  //  &Error {
  //    color: #d32f2f;
  //  }
  //}

  &.disabled {
    pointer-events: none;
    cursor: default;
    color: var(--label-quartenary);
    border-color: var(--label-quartenary);
  }
}

.text {
  color: var(--fields-border-action);
  background-color: transparent;

  border: 1px dashed;
  border-color: transparent;

  &:hover {
    color: #4D7BD8;
  }

  &:focus {
    border-color: var(--fields-border-action);
  }

  // for colors
  //&.color {
  //  &Secondary {
  //    color: #9c27b0;
  //  }
  //
  //  &Success {
  //    color: #2e7d32;
  //  }
  //
  //  &Error {
  //    color: #d32f2f;
  //  }
  //}

  &.disabled {
    pointer-events: none;
    cursor: default;
    color: var(--label-quartenary);
  }
}

</style>