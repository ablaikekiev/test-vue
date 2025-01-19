<script setup lang="ts">

import { empty } from "@/utils/empty.ts";

interface Props {
  hint?: {
    message: string;
    status: 'hint' | 'error' | 'default';
  };
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  fullWidth?: boolean;
}

const {
  hint,
  label,
  disabled = false,
  fullWidth = false,
  placeholder = ''
} = defineProps<Props>()

const model = defineModel()
</script>

<template>
  <div class="inputWrapper">
    <div
        v-if="!empty(label)"
        class="inputLabel"
        :class="{inputLabelDisabled: disabled}"
    >
      {{ label }}
    </div>

    <input
        class="input"
        :class="{
          inputError: hint?.status === 'error',
          inputFullWidth: fullWidth
        }"
        type="text"
        :placeholder="placeholder"
        :disabled="disabled"
        v-model="model"
    />

    <div
        v-if="!empty(hint)"
        class="inputHint"
        :class="{
        inputError: hint?.status === 'error',
        inputHintDisabled: disabled
      }"
    >
      {{ hint.message }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.input {
  background-color: var(--fields-background-default);
  border: 1px solid var(--fields-border-default);

  padding: 8px 12px;

  border-radius: 10px;

  width: 350px;
  height: 35px;

  outline: none;

  color: var(--label-primary);

  &::placeholder {
    color: var(--label-secondary);
  }

  &:focus {
    border: 1px solid var(--system-primary);
  }

  &Error {
    border: 1px solid var(--system-error);
  }

  &FullWidth {
    width: 100%;
  }

  &:disabled {
    background-color: var(--fields-background-disabled);
    border: 1px solid transparent;

    &::placeholder {
      color: var(--label-teriary);
    }
  }

  &Wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    row-gap: 4px;

    width: 100%;
  }

  &Label {
    color: var(--label-secondary);
    font-variant-numeric: lining-nums tabular-nums;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4;

    padding-left: 8px;

    &Disabled {
      color: var(--label-teriary);
    }
  }

  &Hint {
    color: var(--label-secondary);
    font-variant-numeric: lining-nums tabular-nums;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4;

    padding-left: 12px;

    &Error {
      color: var(--system-error);
    }

    &Disabled {
      color: var(--label-teriary);
    }
  }
}
</style>