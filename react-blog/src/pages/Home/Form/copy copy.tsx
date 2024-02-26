<template>
  <div>
    <div class="card p-3 mb-5 mt-5">
      <div
        class="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
      >
      <div class="col-4">
        <div class="row">
          <div class="col-lg-6 fv-row">
            <select
              name="category"
              class="form-select form-select-lg form-select-solid"
              data-allow-clear="true"
              data-hide-search="true"
              as="select"
              @change="selectFilter(selectedFilter)"
              v-model="selectedFilter"
            >
              <option
                v-for="(item, index) in filtersEnum"
                :key="index"
                :value="index"
              >
                {{ item }}
              </option>
            </select>
          </div>
          <div class="col-lg-6 fv-row" v-if="selectedFilter">
            <select
              name="category2"
              class="form-select form-select-lg form-select-solid"
              data-allow-clear="true"
              data-hide-search="true"
              as="select"
              @change="selectFilter2(selectedFilter2)"
              v-model="selectedFilter2"
            >
              <option
                v-for="(item, index) in filters2"
                :key="index"
                :value="item._id"
              >
                {{ item.name }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <div class="col-8 card-toolbar align-self-end">
        <div class="row ">
          <div class="col-7 d-flex align-items-stretch justify-content-end">
            <ul class="nav text-end">
              <span class="text-gray-700 fw-bold p-3 me-1"></span>
              
                <li class="nav-item"
                  v-for="(item, index) in Object.entries(driveFilter)"
                  :key="index"
                  :value="item[1]"
                >  
                  <a
                    class="nav-link btn btn-sm btn-color-muted btn-active btn-active-light text-active-primary fw-bold px-4 me-1"
                    :class="{ active: index === selectedDriveIndex}"
                    data-bs-toggle="tab"
                    :id="item[1]"
                    :href="item[1]"
                    @click="selectDriveFilter(index)"
                    >
                    {{ item[1] }}
                  </a>              
                </li>
            </ul>
          </div>
          <div class="col-5 d-flex align-items-stretch justify-content-end">
            <div class="row ">
              <!-- <div class="col text-gray-700 fw-bold p-3 text-end">Temporalité :</div> -->
              <div class="col-4 p-3">
                <span class="text-gray-700 fw-bold "> Temporalité</span>
              </div>

              <div class="col-4">
                <select
                  name="category"
                  class="form-select form-select-sm form-select-solid"
                  style="width:auto;"
                  data-allow-clear="true"
                  data-hide-search="true"
                  as="select"
                  @change="setPeriod(selectedPeriod)"
                  v-model="selectedPeriod"
                >Sort
                <option :value="PeriodEnum.DAY">Jour</option>
                  <option :value="PeriodEnum.WEEK">Semaine</option>
                  <option :value="PeriodEnum.MONTH">Mois</option>
                  <option disabled :value="PeriodEnum.YEAR">Année</option>
                </select>
              </div>
              <div class="col-3">
                <VueDatePicker 
                  v-model="date"
                  :max-date="maxDate"
                  :min-date="minDate" 
                  :start-date="startDate"
                  focus-start-date
                  range 
                  :auto-range="autoRange"
                  no-disabled-range
                  multi-calendars
                  @update:model-value="selectDate"       
                  :enable-time-picker="false"  
                  >
                </VueDatePicker>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>   
    <div class="row mb-10 mt-10 " >
      <div class="col-4">
        <Widget2
          className="h-100"
          :icon="false"
          stats="NC"
          description="Produits"
          labelColor="dark"
          textColor="gray-300" 
          :products="companyProductsDetails"
        />
      </div>
      <div class="col-4">
        <div class="row h-100">
          <div class="col-6 h-100">
            <StatisticsWidget5
              widget-classes="pt-2 h-50 mb-1"
              color="success"
              icon-color="white"
              :title="`${widgetStats.present}`"
              description="Produits repérés"
              :difference="widgetStats.presentVariation"
            >
            </StatisticsWidget5>

            <StatisticsWidget5
              widget-classes="pt-2 h-50"
              color="success"
              icon-color="white"
              :title="widgetStats.avgPrice + '€'"
              description="Prix moyen"
              :difference="widgetStats.avgPriceVariation"
            >
            </StatisticsWidget5>
          </div>

          <div class="col-6 h-100">
            <StatisticsWidget5
              widget-classes="pt-2 h-50 mb-1"
              color="success"
              icon-color="white"
              :title="`${widgetStats.stores}`"
              description="Magasins distributeurs"
              :difference="widgetStats.storesVariation"
            >
            </StatisticsWidget5>

            <StatisticsWidget5
              widget-classes="pt-2 h-50"
              color="success"
              icon-color="white"
              :title="`${widgetStats.outStock}`"
              description="Produits en rupture"
              :difference="widgetStats.outStockVariation"
            >
            </StatisticsWidget5>
          </div>
        </div>
      </div>

      <div class="col-4">
        <!-- <MixedWidget3
          widget-classes="card-xl-stretch h-md-100"
          chart-height="150"
          chart-color="success"
          :series="[]"
          :datas="[]"
          :categories="[]"
        ></MixedWidget3> -->
        <Widget9 v-if="!loader && series[0]" class="h-100" :loader="loader" :series="series" :title="title" :ymax="ymax" :amount="amount" :dataType="dataType" />
      </div>
      <!--end::Col-->
    </div>
  </div>
</template>


<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, getCurrentInstance,computed, onMounted, ref, watch } from "vue";
import * as productsApi from "@/composable/api/companyProducts";
import * as widgetApi from "@/composable/api/graphs/widgets";
import * as listsApi from "@/composable/api/lists";
import { useFiltersStore } from "@/stores/userFilters";
import Widget2 from "@/components/octopus/dashboard-default-widgets/Widget2.vue";
import Widget9 from "@/components/octopus/dashboard-default-widgets/Widget9.vue";
import StatisticsWidget5 from "@/components/octopus/widgets/statistics/Widget5.vue";
import { DriveTypeEnum, PeriodEnum } from "@/composable/enum/categoriesType.enum";
import type { BodyInterface } from "@/composable/interfaces/serie.interface";
import { useAuthStore } from "@/stores/auth";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default defineComponent({
  name: "list-sort",
  components: {
    Widget2,
    StatisticsWidget5,
    Widget9,
    VueDatePicker
  },
  props: {
    series: {type: Array, required: false, default:[{data:[]}]},
    title: {type: String, required: false, default:""},
    amount: {type: String, required:false, default:""},
    dataType: {type: String, required:false},
    loader: {
      type: Boolean,
      required: false,
      default:false
    },
    typeFilter:Number,
    filters:Object,
    ymax:{type: Number, required:false}
  },
  emits: ["item-selected", "drive-selected", "period-selected"],
  setup(props, { emit }) {
    const filtersStore = useFiltersStore();
    const authStore = useAuthStore();
    const widgetStats = ref<any>({
      avgPrice: 0,
      avgPriceVariation: 0,
      outStock: 0,
      outStockVariation: 0,
      present: 0,
      presentVariation: 0,
      stores: 0,
      storesVariation: 0,
    })
    const selectedFilter = ref<any>(0);
    const selectedFilter2 = ref<any>("");
    const selectedDrive = ref<DriveTypeEnum|string|null>(null)
    const selectedDriveIndex = ref<any>(0);
    const filtersEnum = ref<string[]>([
      "Sélectionner",
      "Un produit",
      "Une liste de produits",
    ]);
    const driveFilter= {all: "Tous les drives", in: "Drive in", out: "Drive out"}
    const date = ref([new Date(), new Date()])
    let companyProductsDetails = ref<any[]>([{
      name:"", brandId:{name: ""}, packaging:"", medias: [{_id:""}]
    }])

    let filters2 = ref<any[]>([]);
    let productList = ref<Array<string>>([]);
    let res3: {
        status: boolean;
        datas: any;
    };

    //configure datepicker data 
    const selectedPeriod = ref<PeriodEnum>(PeriodEnum.DAY)
    const startDate = ref<any>("")
    const endDate = ref<any>("")
    const maxDate = ref<any>("")
    const minDate = ref<any>("")
    const autoRange = ref<number>(7);

    onMounted(async () => {
      filtersStore.setDefaultPeriod() // set period to week if no data stored in localstorage
      companyProductsDetails.value = filtersStore.getAnalyzedProductsDetails() 
      if (companyProductsDetails.value == null) {
        await filtersStore.setDefaultFilters()
        companyProductsDetails.value = filtersStore.getAnalyzedProductsDetails()
      }
      productList.value = filtersStore.getAnalysedProductsId() ;
      //define Drive
      const storeDrive : string|null = filtersStore.getUserFilter("DRIVE_SELECTED");
      selectedDrive.value = storeDrive
      if (!storeDrive){ 
        selectedDrive.value = null
      }
      if (storeDrive == "in") selectedDriveIndex.value = 1
      if (storeDrive == "out") selectedDriveIndex.value = 2
      

      //define Period
      selectedPeriod.value = filtersStore.getUserFilter("PERIOD_SELECTED") ? filtersStore.getUserFilter("PERIOD_SELECTED") as PeriodEnum : PeriodEnum.DAY
      
      //define datePicker's options
      if (filtersStore.getUserFilter("START_DATE")) {
        startDate.value = new Date(JSON.parse(filtersStore.getUserFilter("START_DATE") as string))
      } else {
        startDate.value = new Date()
      }
      setDatePickerOption(selectedPeriod.value, startDate.value)

      //set widgets statistiques
      setWidgetStats(selectedDrive.value)
    });


    const selectFilter = async (filterIndex) => {
      switch (filterIndex) {
        case 1:
          let res = await productsApi.getCompanyProducts(authStore.getCompanyId() as string);

          filters2.value = res.datas.products;
          break;
        case 2:
          let res2 = await listsApi.getListsByUSerId(
            authStore.getUserId() as string
          );
          filters2.value = res2.datas;
          break;

        default:
          break;
      }
    };

    const selectFilter2 = async (selectedItem: string) => {
      switch (selectedFilter.value) {
        case 1:
          productList.value = []
          res3 = await productsApi.getProductInfo(selectedItem);
          productList.value.push(selectedItem)
          filtersStore.setUserFilters("ANALYZED_PRODUCTS_DETAILS", [res3.datas]);
          companyProductsDetails.value = [res3.datas];

          break;
        case 2:
          res3 = await listsApi.getClientsProductsByListId(selectedItem);
          productList.value = res3.datas.products.map(p => p._id)
          filtersStore.setUserFilters("ANALYZED_PRODUCTS_DETAILS", res3.datas.products);
          companyProductsDetails.value = res3.datas.products;
        break;
          
        default:
          break;
        }
          
      filtersStore.setUserFilters("ANALYZED_PRODUCTS",productList.value);
      emit("item-selected", productList.value);
      setWidgetStats(selectedDrive.value)
    
    };

    const selectDriveFilter = (selectedDriveFilter:number ) => {
      const driveNumberToEnum : string|null = selectedDriveFilter ? Object.values(DriveTypeEnum)[selectedDriveFilter] as string : null
      filtersStore.setUserFilters("DRIVE_SELECTED",driveNumberToEnum);
      selectedDrive.value = driveNumberToEnum
      emit("drive-selected", driveNumberToEnum);
      setWidgetStats(selectedDrive.value)

    }

    //save selectedPeriod in localStorage
    const setPeriod = (periodToSet: PeriodEnum) => {
      selectedPeriod.value = periodToSet
      filtersStore.setUserFilters("PERIOD_SELECTED",periodToSet);
      //setDatePickerOption(selectedPeriod.value, startDate.value)
      if (filtersStore.getUserFilter("START_DATE")) {
        startDate.value = new Date(JSON.parse(filtersStore.getUserFilter("START_DATE") as string))
      } else {
        startDate.value = new Date()
      }
      setDatePickerOption(selectedPeriod.value, startDate.value)
      emit("period-selected", {periodSelected: selectedPeriod.value, startDate: startDate.value, endDate: endDate.value})
    }

    // const setDatePicker = () => {
    //   let period = filtersStore.getUserFilter("PERIOD_SELECTED") ? filtersStore.getUserFilter("PERIOD_SELECTED") as PeriodEnum : PeriodEnum.DAY
    //   setAutoRange(period)
    //   setStartDate()
    //   setMaxDate()
    //   setMinDate()
    //   setRangeDate(period)
    //   return startDate.value
    // }

    //autoRange = automatic selection of a range of days depending on period
    const setAutoRange = (selectedPeriod: PeriodEnum) => {
      switch (selectedPeriod) {
        case PeriodEnum.DAY:
          autoRange.value = 6
        break
        case PeriodEnum.WEEK:
          autoRange.value = 6
        break
        case PeriodEnum.MONTH:
          autoRange.value = 29
        break
        default:
          autoRange.value = 6
        break
      }
    } 


    // set default start date
    // const setStartDate = () => {
    //   let today = new Date()
    //   startDate.value = new Date(today.setDate(today.getDate() - 7))
    //   filtersStore.setUserFilters("START_DATE", startDate.value)
    // }

    // // cannot select Today nor a day in the future
    // const setMaxDate = () => {
    //   let today = new Date()
    //   maxDate.value = new Date(today.setDate(today.getDate() - 1))
    // }

    // // cannot select day before mindate 
    // const setMinDate = () => {
    //   let today = new Date()
    //   minDate.value = new Date(today.setDate(today.getDate() - 30))
    // }


    const setDatePickerOption = (period:PeriodEnum, date) => {
      console.log("🚀 ~ setDatePickerOption ~ period:", period)
      switch (period) {
        case PeriodEnum.DAY:
        console.log("🚀 ~ setDatePickerOption ~ date:", date)

          //setAutoRange(period)
          //setRangeDate(period)
          startDate.value = new Date(date.setDate(date.getDate() - 7))
          endDate.value = new Date(startDate.value.setDate(startDate.value.getDate() + 6))
          filtersStore.setUserFilters("START_DATE", startDate.value)
          maxDate.value = new Date(date.setDate(date.getDate() - 1))
          minDate.value = new Date(date.setDate(date.getDate() - 30))
          


          console.log("🚀 ~ setDatePickerOption ~ startDate.value:", startDate.value)
          console.log("🚀 ~ setDatePickerOption ~ endDate.value:", endDate.value)
          break
        case PeriodEnum.WEEK:
          // Calculate the date of 8 days ago
          setAutoRange(period)
          //setRangeDate(period)
          startDate.value = new Date(date.setDate(date.getDate() - 7))
          filtersStore.setUserFilters("START_DATE", startDate.value)
          maxDate.value = new Date(date.setDate(date.getDate() - 1))
          minDate.value = new Date(date.setDate(date.getDate() - 30))
         
          break
        case PeriodEnum.MONTH:
          // Calculate the date of 30 days ago
          setAutoRange(period)
          //setRangeDate(period)
          startDate.value = new Date(date.setDate(date.getDate() - 7))
          filtersStore.setUserFilters("START_DATE", startDate.value)
          maxDate.value = new Date(date.setDate(date.getDate() - 1))
          minDate.value = new Date(date.setDate(date.getDate() - 30))
          
          break
        default:
          // default PeriodEnum.DAY
          setAutoRange(period)
          //setRangeDate(period)
          startDate.value = new Date(date.setDate(date.getDate() - 7))
          filtersStore.setUserFilters("START_DATE", startDate.value)
          maxDate.value = new Date(date.setDate(date.getDate() - 1))
          minDate.value = new Date(date.setDate(date.getDate() - 30))
          
          break
        }
      filtersStore.setUserFilters("START_DATE", startDate.value)
      filtersStore.setUserFilters("END_DATE", endDate.value)
      emit("period-selected", {periodSelected: selectedPeriod.value, startDate: startDate.value, endDate: endDate.value})
    }



    const selectDate = (dateSelected) => {
      startDate.value = dateSelected[0]
      endDate.value = dateSelected[1]
      filtersStore.setUserFilters("START_DATE", startDate.value)
      filtersStore.setUserFilters("END_DATE", endDate.value)

      // setDatePicker()
      emit("period-selected", {periodSelected: selectedPeriod.value, startDate: startDate.value, endDate: endDate.value})
    }

    //set an array of two dates : startDate and endDate (depending on period)
    const setRangeDate = (period:PeriodEnum) => {
      let lastDate = new Date(startDate.value)
      switch (period) {
        case PeriodEnum.WEEK:
        date.value = [ startDate.value,  new Date(lastDate.setDate(startDate.value.getDate() + 6))] ;
        break
        case PeriodEnum.MONTH:
        date.value = [ startDate.value, new Date(lastDate.setDate(startDate.value.getDate() + 29))]
        break
        default:
        date.value = [startDate.value,  new Date(lastDate.setDate(startDate.value.getDate() + 6))]
        break
      }
    }

    const setWidgetStats = async (drive: string|null) => {
      let body : BodyInterface = {
        period : selectedPeriod.value as PeriodEnum, 
        products: productList.value,
        drive : drive,
        startDate: startDate.value
      }
      if (props.filters && Object.keys(props.filters).length > 0) body.filters = props.filters
      if (props.typeFilter) body.typeFilter = props.typeFilter
      let res = await widgetApi.getWidgetStats(body)
      widgetStats.value = res.datas
    }

    return {
      getAssetPath,
      selectFilter,
      selectFilter2,
      selectedFilter,
      selectedFilter2,
      selectedPeriod,
      filtersEnum,
      filters2,
      productList,
      companyProductsDetails,
      Widget2,
      StatisticsWidget5,
      Widget9,
      setPeriod,
      date,
      driveFilter,
      selectDriveFilter,
      selectedDriveIndex,
      PeriodEnum,
      widgetStats,
      startDate,
      maxDate, 
      autoRange,
      selectDate,
      minDate
    };
  },
});
</script>

