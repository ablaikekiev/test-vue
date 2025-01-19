<script setup lang="ts">
import TextEditor from "@/components/TextEditor/TextEditor.vue";
import UIIcon from "@/components/UIIcon/UIIcon.vue";

import { empty } from "@/utils/empty.ts";

import type { Pair } from "@/types/types.ts";

interface Props {
  pair: Pair
}

const { pair } = defineProps<Props>()

console.log(pair)
</script>

<template>
  <div class="infoBlocks" v-if="!empty(pair)">
    <div class="infoBlocksItem">
      <TextEditor variant="body-1" color="label-secondary">
        Changes
      </TextEditor>

      <div class="infoBlocksItemGap">
        <div
            class="infoBlocksItemPercent"
            :class="{
              infoBlocksItemPercentDown: pair.price.change.direction === 'Down',
              infoBlocksItemPercentUp: pair.price.change.direction === 'Up',
            }"
        >
          <UIIcon name="arrowIncrease" :size="8"
                  :class="{infoBlocksItemPercentIcon: pair.price.change.direction === 'Down'}"/>
          <TextEditor variant="body-1">
            {{ pair.price.change.percent }} %
          </TextEditor>
        </div>
        <div class="infoBlocksItemHashrate">
          <TextEditor variant="heading-1" color="label-primary">
            {{ pair.price.change.amount }}
          </TextEditor>
          <TextEditor variant="heading-4" color="label-tertiary">
            {{ pair.pair.secondary }}
          </TextEditor>
        </div>
      </div>
    </div>
    <div class="infoBlocksItem">
      <TextEditor variant="body-1" color="label-secondary">
        Price
      </TextEditor>

      <div class="infoBlocksItemMedium">
        <div class="infoBlocksItemMediumHashrates">
          <TextEditor variant="body-1" color="label-secondary">
            Last
          </TextEditor>
          <TextEditor variant="body-1" color="label-primary">
            {{ pair.price.last }}
          </TextEditor>
        </div>
        <div class="infoBlocksItemMediumHashrates">
          <TextEditor variant="body-1" color="label-secondary">
            Best Bid
          </TextEditor>
          <TextEditor variant="body-1" color="label-primary">
            {{ pair.price.bestBid }}
          </TextEditor>
        </div>
        <div class="infoBlocksItemMediumHashrates">
          <TextEditor variant="body-1" color="label-secondary">
            Best Offer
          </TextEditor>
          <TextEditor variant="body-1" color="label-primary">
            {{ pair.price.bestOffer }}
          </TextEditor>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info {
  &Blocks {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    grid-gap: 16px;

    padding: 24px 0;

    @media (max-width: 425px) {
      flex-direction: column;
    }

    &Item {
      padding: 16px 24px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      min-height: 155px;
      width: 305px;

      border-radius: 8px;

      background-color: var(--fields-background-default);

      &Gap {
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: flex-start;

        row-gap: 12px;
      }

      &Percent {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        grid-gap: 8px;

        &Down {
          color: var(--system-error);
        }

        &Icon {
          transform: rotate(90deg);
        }

        &Up {
          color: var(--system-check);
        }
      }

      &Hashrate {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;

        grid-gap: 8px;
      }

      &Medium {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        width: 100%;

        row-gap: 4px;

        &Hashrates {
          display: flex;
          justify-content: space-between;
          align-items: center;

          width: 100%;
        }
      }
    }
  }
}

</style>