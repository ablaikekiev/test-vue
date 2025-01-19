<script setup lang="ts">
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher.vue";
import UIIcon from "@/components/UIIcon/UIIcon.vue";

</script>

<template>
  <div class="headerWrapper">
    <RouterLink to="/" class="headerTitle">
      BLABLA <span class="headerSpan">Coin Market</span>
    </RouterLink>
    <div class="work-area-flex">
      <ThemeSwitcher />

      <UIIcon name="user" :size="24" class="headerIcon" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  &Wrapper {
    padding: 12px 40px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid var(--fields-border-default);

    position: fixed;

    top: 0;
    left: 0;

    width: 100%;
    height: 62px;

    background: var(--fields-background-action);
  }

  &Title {
    color: var(--label-primary);
    font-variant-numeric: lining-nums tabular-nums;

    text-shadow: 0 32px 64px rgba(0, 0, 0, 0.20);

    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 135%;
    
    @media (max-width: 425px) {
      font-size: 14px;
    }
  }

  &Span {
    color: var(--system-secondary);
  }

  &Currency {
    color: var(--label-secondary);
  }

  &Settings {
    display: none;
    align-items: center;
    justify-content: flex-end;

    grid-gap: 24px;
  }

  &Icon {
    color: var(--label-secondary);

    @media (max-width: 425px) {
      display: none;
    }
  }
}

</style>