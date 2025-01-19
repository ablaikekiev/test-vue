<script setup lang="ts">
import UILayout from "@/components/UILayout/UILayout.vue";
import UIIcon from "@/components/UIIcon/UIIcon.vue";
import TextEditor from "@/components/TextEditor/TextEditor.vue";

</script>

<template>
<UILayout>
  <RouterLink to="/" class="linkBack">
    <UIIcon name="arrowLeft" :size="24" />

    <TextEditor variant="body-1">
      Back
    </TextEditor>
  </RouterLink>


</UILayout>
</template>

<style scoped lang="scss">
.linkBack {
  padding: 32px 16px 32px 0;

  display: inline-flex;
  align-items: center;
  justify-content: flex-start;

  grid-gap: 8px;

  color: var(--label-primary);

  &:hover {
    color: var(--label-teriary);
  }
}

</style>