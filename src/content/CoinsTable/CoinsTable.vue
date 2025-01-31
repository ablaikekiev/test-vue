<script setup lang="ts">
import { ref, watch } from "vue";
import { useDebounce } from "@vueuse/core";

import InputField from "@/components/UIInput/UIInput.vue";
import TextEditor from "@/components/TextEditor/TextEditor.vue";
import UIIcon from "@/components/UIIcon/UIIcon.vue";

import { useMarket } from "@/store/market.ts";

import type { Coin } from "@/types/types.ts";

const inputValue = ref<string>()

const market = useMarket()

const findCoin = (coin: string) => {
  let icon = market.marketData.coins.find((el: Coin) => el.code === coin)?.icon;

  if (icon) {
    return atob(icon).replace('<svg', '<svg width="24" height="24"');
  }
}

const debounced = useDebounce(inputValue, 500);

watch([debounced], () => {
  market.sortPairs(debounced.value)
})
</script>

<template>
  <div class="coinsTable">
    <div class="coinsTableInputWrapper">
      <InputField
          v-model="inputValue"
          placeholder="Search"
          :full-width="true"
      />
    </div>

    <div class="coinsTableHeader">
      <div class="coinsTableHeaderItem">
        <TextEditor variant="caption" color="label-secondary">
          Coins
        </TextEditor>
      </div>
      <div class="coinsTableHeaderItem">
        <TextEditor
            variant="caption"
            color="label-secondary"
            className="coinsTableText"
        >
          Last Price
        </TextEditor>
      </div>
      <div class="coinsTableHeaderItem">
        <TextEditor
            variant="caption"
            color="label-secondary"
            className="coinsTableText"
        >
          Best Bid
        </TextEditor>
      </div>
      <div class="coinsTableHeaderItem">
        <TextEditor
            variant="caption"
            color="label-secondary"
            className="coinsTableText"
        >
          Best Offer
        </TextEditor>
      </div>
      <div class="coinsTableHeaderItem">
        <TextEditor
            variant="caption"
            color="label-secondary"
            className="coinsTableText"
        >
          Change
        </TextEditor>
      </div>
    </div>

    <div class="coinsTableBody">
      <RouterLink
          v-for="pair in market.marketData.pairs"
          :to="`/coin/${pair.pair.primary}-${pair.pair.secondary}`"
          class="coinsTableBodyRow"
          :key="'coins-table' + pair.price.bestBid"
      >
        <div class="coinsTableBodyRowItem">
          <div class="coinsTableBodyRowItemName">
            <div class="coinsTableBodyRowItemNameIcon" v-html="findCoin(pair.pair.primary)" />
            <TextEditor variant="paragraph" color="label-primary">

              {{ pair.pair.primary }}  \
            </TextEditor>
            <div class="coinsTableBodyRowItemNameIcon" v-html="findCoin(pair.pair.secondary)" />
            <TextEditor variant="paragraph" color="label-primary">
              {{ pair.pair.secondary }}
            </TextEditor>
          </div>
        </div>
        <div class="coinsTableBodyRowItem">
          <TextEditor
              variant="paragraph"
              color="label-primary"
              className=coinsTableText
          >
            {{ pair.price.last }}
          </TextEditor>
        </div>
        <div class="coinsTableBodyRowItem">
          <TextEditor
              variant="paragraph"
              color="label-primary"
              className=coinsTableText
          >
            {{ pair.price.bestBid }}
          </TextEditor>
        </div>
        <div class="coinsTableBodyRowItem">
          <TextEditor
              variant="paragraph"
              color="label-primary"
              className="coinsTableText"
          >
            {{ pair.price.bestOffer }}
          </TextEditor>
        </div>
        <div class="coinsTableBodyRowItem">
          <div class="coinsTableBodyRowItemChange">
            <div class="coinsTableBodyRowItemChangeDescription">
              <UIIcon name="arrowIncrease" :size="8" :class="{
                coinsTableBodyRowItemChangeDescriptionDown: pair.price.change.direction === 'Down',
                coinsTableBodyRowItemChangeDescriptionUp: pair.price.change.direction === 'Up',
              }" />
              <TextEditor
                  variant="caption"
                  :color="pair.price.change.direction === 'Down' ? 'system-error' : 'system-check'"
                  className="coinsTableText"
              >
                {{ pair.price.change.percent }}%
              </TextEditor>
            </div>
            <TextEditor
              variant="paragraph"
              color="label-primary"
              className="coinsTableText"
            >
              {{ pair.price.change.amount }}
            </TextEditor>

          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.coinsTable {
  @media (max-width: 760px) {
    overflow: auto;
  }

  &Input {

    &Wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 12px 0;

      grid-gap: 12px;
    }
  }

  &Header {
    margin: 16px 0;

    background-color: var(--fields-background-default);
    color: var(--label-secondary);

    display: grid;
    grid-template-columns: 220px 240px 240px 240px 240px;

    padding: 8px;

    min-width: 688px;

    @media (max-width: 1280px) {
      grid-template-columns: 170px 190px 190px 190px 190px;
    }

    @media (max-width: 1000px) {
      grid-template-columns: 160px 140px 140px 140px 140px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 160px 120px 120px 120px 120px;
    }

    &Item {
      display: flex;
      justify-content: flex-end;

      &:first-child {
        justify-content: flex-start;
        padding: 0 12px;
      }
    }
  }

  &Text {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  &Body {

    &Row {
      padding: 4px 8px;

      display: grid;
      grid-template-columns: 220px 240px 240px 240px 240px;

      cursor: pointer;

      @media (max-width: 1280px) {
        grid-template-columns: 170px 190px 190px 190px 190px;
      }

      @media (max-width: 1000px) {
        grid-template-columns: 160px 140px 140px 140px 140px;
      }

      @media (max-width: 768px) {
        grid-template-columns: 160px 120px 120px 120px 120px;
      }

      &Item {
        padding: 8px 4px;

        &Name {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          grid-gap: 8px;

          &Icon {
            width: 24px;
            height: 24px;

            svg {
              width: 24px !important;
              height: 24px !important;
            }
          }
        }

        &Change {
          width: 100%;

          display: flex;
          justify-content: flex-end;
          align-items: center;

          grid-gap: 8px;

          &Description {
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;

            grid-gap: 8px;

            &Up {
              color: var(--system-check);
            }

            &Down {
              color: var(--system-error);

              transform: rotate(90deg);
            }
          }
        }

        &:first-child {
          padding: 8px 12px;
        }
      }

      &:nth-child(even) {
        background: var(--fields-border-default);

        min-width: 688px;
      }

      &:hover {
        background: var(--label-teriary);
      }
    }
  }
}

</style>