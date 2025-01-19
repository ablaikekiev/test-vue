<script setup lang="ts">
import { empty } from "@/utils/empty.ts";

interface Props {
  variant:
      | 'heading-1'
      | 'heading-2'
      | 'heading-3'
      | 'heading-4'
      | 'caption'
      | 'body-1'
      | 'body-2'
      | 'paragraph';
  color?:
      | 'system-primary'
      | 'system-secondary'
      | 'system-check'
      | 'system-error'
      | 'system-button-white'
      | 'label-primary'
      | 'label-secondary'
      | 'label-tertiary'
      | 'label-quaternary';
  className?: string;
}

const { variant, color, className } = defineProps<Props>()
</script>

<template>
  <div 
      :class="{
        [`${className}`]: !empty(className),
        textColorSystemPrimary: color === 'system-primary',
        textColorSystemSecondary: color === 'system-secondary',
        textColorSystemCheck: color === 'system-check',
        textColorSystemError: color === 'system-error',
        textColorSystemButtonWhite: color === 'system-button-white',
        textColorLabelPrimary: color === 'label-primary',
        textColorLabelSecondary: color === 'label-secondary',
        textColorLabelTertiary: color === 'label-tertiary',
        textColorLabelQuartenary: color === 'label-quaternary',

        textOrderFirst: variant === 'heading-1',
        textOrderSecond: variant === 'heading-2',
        textOrderThird: variant === 'heading-3',
        textOrderFourth: variant === 'heading-4',

        textBodyFirst: variant === 'body-1',
        textBodySecond: variant === 'body-2',

        textCaption: variant === 'caption',

        textParagraph: variant === 'paragraph',
      }"
  >
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.text {
  &Order {
    &First {
      font-variant-numeric: lining-nums tabular-nums;

      font-size: 48px;
      font-style: normal;
      font-weight: 800;
      line-height: 0.8;
    }

    &Second {
      font-variant-numeric: lining-nums tabular-nums;

      font-size: 34px;
      font-style: normal;
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    &Third {
      font-variant-numeric: lining-nums tabular-nums;

      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      line-height: 1.3;
    }

    &Fourth {
      font-variant-numeric: lining-nums tabular-nums;

      font-size: 21px;
      font-style: normal;
      font-weight: 700;
      line-height: 1.14;
    }
  }

  &Caption {
    font-variant-numeric: lining-nums tabular-nums;

    font-size: 10px;
    font-style: normal;
    font-weight: 800;
    line-height: 1.4;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  &Body {
    &First {
      font-variant-numeric: lining-nums tabular-nums;

      font-size: 17px;
      font-style: normal;
      font-weight: 400;
      line-height: 1.17;
    }

    &Second {
      font-variant-numeric: lining-nums tabular-nums;

      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: 1.2;
    }
  }

  &Paragraph {
    font-variant-numeric: lining-nums tabular-nums;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4;
  }

  &Color {
    &System {
      &Primary {
        color: var(--system-primary);
      }

      &Secondary {
        color: var(--system-secondary);
      }

      &Check {
        color: var(--system-check);
      }

      &Error {
        color: var(--system-error);
      }

      &ButtonWhite {
        color: var(--system-button-white);
      }
    }

    &Label {
      &Primary {
        color: var(--label-primary);
      }

      &Secondary {
        color: var(--label-secondary);
      }

      &Tertiary {
        color: var(--label-teriary);
      }

      &Quartenary {
        color: var(--label-quartenary);
      }
    }
  }
}

</style>