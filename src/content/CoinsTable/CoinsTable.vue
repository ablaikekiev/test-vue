<script setup lang="ts">

import InputField from "@/components/UIInput/UIInput.vue";
import { ref } from "vue";
import TextEditor from "@/components/TextEditor/TextEditor.vue";
import { useMarket } from "@/store/coins.ts";
import UIIcon from "@/components/UIIcon/UIIcon.vue";

const inputValue = ref<string>()

const market = useMarket()

market.getCoins()
market.getPairs()

const findCoin = (coin: string) => {
  let icon = market.coins.find(el => el.code === coin)?.icon;

  if (icon) {
    return atob(icon).replace('<svg', '<svg width="24" height="24"');
  }
}
</script>

<template>
  <div>
    <div class="coinsTableInputWrapper">
      <InputField
          v-model="inputValue"
          placeholder="Search"
          :full-width="true"
      />

      <!--      <Button variant="text">Поиск</Button>-->
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
      <div
          v-for="pair in market.pairs"
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
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.coinsTable {

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
      }
    }
  }
}

</style>