/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 9163:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(144);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js + 1 modules
var VApp = __webpack_require__(5404);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMain/VMain.js + 2 modules
var VMain = __webpack_require__(8303);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=900b9772&



var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{ref:"container",staticClass:"ghx-app",class:{
    'ghx-app--modal': _vm.store?.settings?.dialog,
    'ghx-app--page': !_vm.store?.settings?.dialog
  }},[_c(VApp/* default */.Z,{style:(!_vm.store?.settings?.dialog ?
      {
        width: _vm.settingsWidth,
        minHeight: _vm.settingsHeight,
      }
    : {}),attrs:{"id":"ghx-application"}},[_c(VMain/* default */.Z,[_c('Audigy')],1)],1)],1)
}
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(1819);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js + 5 modules
var VDialog = __webpack_require__(1147);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Audigy.vue?vue&type=template&id=80381630&



var Audigyvue_type_template_id_80381630_render = function render(){var _vm=this,_c=_vm._self._c;return _c(VContainer/* default */.Z,{staticClass:"ghx-audigy-app ma-0 pa-0"},[(_vm.isDialog)?_c(VDialog/* default */.Z,{attrs:{"content-class":_vm.loader ? 'prevent-click' : '',"persistent":"","transition":"dialog-bottom-transition","max-width":"1196","width":"100%"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('AudigySteps',{key:_vm.key,attrs:{"defaultLastPage":_vm.el},on:{"on-close":function($event){_vm.dialog = false},"on-reset":_vm.resetModal,"on-show-loader":function($event){_vm.loader = !_vm.loader}}})],1):(_vm.isReady)?_c('AudigySteps',{key:_vm.key,attrs:{"defaultLastPage":_vm.el},on:{"on-close":function($event){_vm.dialog = false},"on-reset":_vm.resetModal,"on-show-loader":function($event){_vm.loader = !_vm.loader}}}):_vm._e()],1)
}
var Audigyvue_type_template_id_80381630_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 4 modules
var VBtn = __webpack_require__(4469);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js + 1 modules
var VCard = __webpack_require__(2449);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(5255);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(7024);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js + 1 modules
var VDivider = __webpack_require__(5499);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(6930);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js + 1 modules
var VIcon = __webpack_require__(9530);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 4 modules
var VImg = __webpack_require__(9052);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js + 1 modules
var VProgressLinear = __webpack_require__(6790);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(7894);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(2515);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VStepper/VStepper.js + 1 modules
var VStepper = __webpack_require__(4736);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VStepper/VStepperContent.js
var VStepperContent = __webpack_require__(4538);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VStepper/index.js
var components_VStepper = __webpack_require__(2280);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VStepper/VStepperStep.js
var VStepperStep = __webpack_require__(2976);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AudigySteps.vue?vue&type=template&id=6392d526&

















var AudigyStepsvue_type_template_id_6392d526_render = function render(){var _vm=this,_c=_vm._self._c;return _c(VCard/* default */.Z,{staticClass:"ghx-audigy-app-modal elevation-0",class:[
    {
      'no-bg':
        _vm.is_empty(_vm.theme.backgroundColor) || 
        _vm.is_empty(_vm.theme.backgroundImage),
      'in-page': !_vm.store?.settings?.dialog,
    },
  ],attrs:{"flat":"","id":"ghx-modal-id"}},[_c(VCol/* default */.Z,{staticClass:"ghx-modal-btn-wrapper d-flex flex-row-reverse pt-6 pb-0 pr-6 col-sm-hide col-xs-hide",attrs:{"cols":"12"}},[_c(VBtn/* default */.Z,{staticClass:"ghx-modal-btn-close",class:{ hidden: (_vm.isShowSaveFormPage && !_vm.isExitClicked) || !_vm.store?.settings?.dialog },attrs:{"small":"","depressed":"","fab":"","text":""},on:{"click":_vm.onClickExit}},[_c(VIcon/* default */.Z,{staticClass:"ghx-btn__icon",attrs:{"aria-hidden":"","size":"34"}},[_vm._v("mdi-close")])],1)],1),_c(VCard/* default */.Z,{staticClass:"ghx-audigy-app-content",attrs:{"flat":""}},[_c(VRow/* default */.Z,{staticClass:"ghx-modal-header ma-0",class:[`ghx-modal-header--${_vm.theme.headerStyle}`]},[_c(VCol/* default */.Z,{staticClass:"ghx-app-modal--topbar pa-0 col-md-5 col-lg-5 pb-4 pb-sm-4 pb-lg-4 pb-md-4 pb-xl-4 pt-lg-2 pt-md-2 pt-xl-2",attrs:{"cols":"12"}},[_c('div',{staticClass:"ghx-stepper-title ghx-navy-color d-flex"},[_c('div',[(_vm.config.title)?_c('span',{staticClass:"ghx-stepper-title__text align-center"},[_vm._v(" "+_vm._s(_vm.config.title)+" ")]):_vm._e(),(_vm.store?.settings?.dialog)?_c('span',{staticClass:"ghx-stepper-title__branding--mobile mr-4 pr-0 pt-2 pb-0"},[(_vm.plugin_url + _vm.config.mobileLogo)?_c(VImg/* default */.Z,{attrs:{"src":_vm.plugin_url + _vm.config.mobileLogo,"contain":"","width":"45"}}):_vm._e()],1):_vm._e()]),(_vm.config.desktopLogo)?_c('div',[(_vm.store?.settings?.dialog)?_c('span',{staticClass:"ghx-stepper-title__branding",class:{ 
                'mt-2': _vm.config.title
              }},[_c(VImg/* default */.Z,{attrs:{"src":_vm.config.desktopLogo,"contain":""}})],1):_vm._e()]):_vm._e(),(_vm.el !== 1 || (_vm.el === 1 && _vm.selectedItem))?_c('span',{staticClass:"ghx-stepper-title__progress align-end",class:{'px-4': _vm.store?.settings?.dialog}},[_c(VProgressLinear/* default */.Z,{attrs:{"color":"navy","height":"12"},model:{value:(_vm.progressValue),callback:function ($$v) {_vm.progressValue=$$v},expression:"progressValue"}})],1):_vm._e()]),_c('div',{staticClass:"ghx-modal-btn-wrapper flex-row-reverse pt-6 pb-0 pr-6 pa-sm-0 pa-xs-0 col-lg-hide col-md-hide",style:(!_vm.store?.settings?.dialog 
            ? { width: '0px',}
            : '')},[_c(VBtn/* default */.Z,{staticClass:"ghx-modal-btn-close",class:{ 
              hidden: _vm.isShowSaveFormPage && !_vm.isExitClicked,
              'd-none': !_vm.store?.settings?.dialog,
            },attrs:{"small":"","depressed":"","fab":"","text":""},on:{"click":_vm.onClickExit}},[_c('SvgIcons',{attrs:{"name":"close"}})],1)],1)]),_c(VCol/* default */.Z,{staticClass:"ghx-stepper--header-wrapper pl-md-6 pl-sm-0 pl-0 pt-0 pr-0 pb-0 col-md-7 col-lg-7",attrs:{"cols":"12"}},[_c(VStepper/* default */.Z,{staticClass:"ghx-stepper overflow-visible",attrs:{"alt-labels":"","flat":""}},[_c(components_VStepper/* VStepperHeader */.Rp,{staticClass:"ghx-stepper--header"},[_vm._l((_vm.flowSelector),function(item,i){return [(
                  _vm.flowSelector.find((step) => step.step === item.step)
                    .order === item.order
                )?_c(VStepperStep/* default */.Z,{key:`${_vm.selectedFlow}-${i}`,staticClass:"ghx-stepper-step text-center white--text",class:[
                  'ghx-stepper-step' + item.step,
                  { 'ghx-stepper-step--active': _vm.el === item.order },
                ],attrs:{"color":"navy","step":item.step,"complete":_vm.el > item.order || _vm.el === _vm.flowSelector.length}},[_c('span',{domProps:{"innerHTML":_vm._s(item.header?.title)}}),_c(VDivider/* default */.Z,{key:`d-${_vm.selectedFlow}-${i}`,staticClass:"ghx-divider",class:[`ghx-divider--counter-${i + 1}`],attrs:{"data-items":_vm.onGetTotalItems('step', item.step, _vm.flowSelector).length}})],1):_vm._e()]})],2)],1)],1)],1),_c(VRow/* default */.Z,{staticClass:"ghx-stepper-wrapper mt-0"},[_c(VCol/* default */.Z,{staticClass:"pa-0",attrs:{"cols":"12"}},[_c(VStepper/* default */.Z,{directives:[{name:"show",rawName:"v-show",value:(!_vm.isShowSaveFormPage),expression:"!isShowSaveFormPage"}],staticClass:"ghx-stepper elevation-0",attrs:{"alt-labels":""},model:{value:(_vm.el),callback:function ($$v) {_vm.el=$$v},expression:"el"}},[(_vm.flowSelector.length >= _vm.el)?_c(components_VStepper/* VStepperItems */.gd,[_vm._l((_vm.flowSelector),function(page,i){return _c(VStepperContent/* default */.Z,{key:`step-content-${i}`,staticClass:"ghx-stepper-content ghx-stepper-content--items py-0 pl-1 pr-2",class:[
                page.style
                  ? `ghx-stepper-content--${page.style}`
                  : 'ghx-stepper-content--style-1',
                _vm.footerStyle
                  ? `ghx-stepper-content--footer-${_vm.footerStyle}`
                  : 'ghx-stepper-content--footer-style-1',
                `ghx-stepper-content--${page.form?.type}`,
                `page-${page.order}`,
              ],style:([i + 1 === _vm.animationStartAt && !_vm.isShowRedirectLoader ? { opacity: 1 } : '']),attrs:{"step":page.order},model:{value:(page.order),callback:function ($$v) {_vm.$set(page, "order", $$v)},expression:"page.order"}},[_c('div',{class:[page.form?.type === 'end' && !_vm.store?.settings?.dialog ? 'pt-8 pb-0': 'py-8']},[_c(transitions/* VFadeTransition */.Z5,{attrs:{"group":""}},[(page.form?.type === 'date')?[_c('PageDate',{key:`${page.form?.type}-${page.order}`,attrs:{"page":page,"currentOrder":_vm.el},on:{"on-item-selected":_vm.onSelectItem,"on-item-emptied":function($event){return _vm.onEmptyItem('date')}}})]:_vm._e(),(page.form?.type === 'radio')?[_c('PageRadio',{key:`${page.form?.type}-${page.order}`,attrs:{"page":page,"currentOrder":_vm.el},on:{"on-item-selected":_vm.onSelectItem,"on-item-emptied":function($event){return _vm.onEmptyItem('radio')}}})]:_vm._e(),(
                      page.form?.type === 'info1' ||
                      page.form?.type === 'info2' ||
                      page.form?.type === 'info3'
                    )?[_c('PageInstruction',{key:`${page.form?.type}-${page.order}`,attrs:{"page":page,"force-stop-audio":_vm.isExitClicked || _vm.isShowSaveFormPage,"currentOrder":_vm.el,"version":_vm.getVersion(page.form?.type)},on:{"on-save-spot":function($event){return _vm.onSaveSpotForm(false)}}})]:_vm._e(),(page.form?.type === 'init')?[_c('PageInit',{key:`${page.form?.type}-${page.order}`,attrs:{"page":page}})]:_vm._e(),(page.form?.type === 'screener')?[_c('PageScreener',{key:`${page.form?.type}-${page.order}`,ref:`screener${page.order}${page.form?.hz}`,refInFor:true,attrs:{"page":page,"force-stop-audio":_vm.isExitClicked || _vm.isShowSaveFormPage,"currentOrder":_vm.el},on:{"on-item-selected":_vm.onSelectItem,"on-item-emptied":function($event){return _vm.onEmptyItem('screener')}}})]:_vm._e(),(page.form?.type === 'result')?[_c('PageResult',{key:`${page.form?.type}-${page.order}`,attrs:{"page":page,"theme":_vm.theme,"currentOrder":_vm.el}})]:_vm._e(),(page.form?.type === 'video')?[_c('PageVideo',{key:`${page.form?.type}-${page.order}`,ref:"videoStep",refInFor:true,attrs:{"page":page,"currentOrder":_vm.el},on:{"video-start":_vm.handleVideoStart}})]:_vm._e(),(page.form?.type === 'end')?[_c('PageForm',{key:`${page.form?.type}-${page.order}`,attrs:{"page":page,"currentOrder":_vm.el,"isShow":_vm.isShowSaveFormPage,"disabled":_vm.buttonLoading},on:{"on-reset":function($event){return _vm.$emit('on-reset')},"on-item-selected":_vm.onSelectItem,"on-item-emptied":function($event){return _vm.onEmptyItem('end')},"on-hit-enter":function($event){return _vm.onHitEnterOnInput($event)}}})]:_vm._e()],2)],1)])}),(_vm.loadingGIF)?_c('PageLoader',{attrs:{"active":_vm.isShowRedirectLoader,"resultPage":_vm.hasResultPage,"footerStyle":_vm.footerStyle,"loadingGIF":_vm.plugin_url + _vm.loadingGIF}}):_vm._e(),(_vm.el)?_c(VCard/* default */.Z,{staticClass:"ghx-stepper__action ghx-glass-background pa-0 d-flex",class:[`ghx-stepper__action--${_vm.footerStyle}`]},[_c(VCol/* default */.Z,{staticClass:"col-lg-12 col-sm-12 ghx-action-btn-container d-flex pa-0",attrs:{"col":"12"}},[_c(components_VCard/* VCardActions */.h7,{staticClass:"ghx-stepper__action-wrapper pb-0 pt-4 px-0"},[(_vm.hideSaveSpotBtnInFinalPage)?_c(VBtn/* default */.Z,{staticClass:"ghx-btn ghx-btn--secondary ghx-btn--secondary--has-icon col-xs-hide col-sm-hide col-md-hide",class:[`ghx-btn--${_vm.btnStyle}`],attrs:{"large":"","rounded":"","depressed":"","text":"","ripple":false,"color":"undefined"},on:{"click":function($event){return _vm.onSaveSpotForm(false)}}},[_c(VIcon/* default */.Z,{staticClass:"mr-1",attrs:{"size":"30"}},[_vm._v("mdi-bookmark-outline")]),_vm._v(" "+_vm._s(_vm.currentPage?.btnSaveSpot || "Save My Spot And Exit")+" ")],1):_vm._e(),(_vm.hideSaveSpotBtnInFinalPage)?_c(VBtn/* default */.Z,{staticClass:"ghx-btn ghx-btn--secondary ma-0 col-lg-hide",class:[
                      `ghx-btn--${_vm.btnStyle}`,
                      {'ghx-btn--mobile': _vm.mobileAndTabletCheck}],attrs:{"large":"","rounded":"","depressed":"","text":"","color":"undefined","ripple":false},on:{"click":function($event){return _vm.onSaveSpotForm(false)}}},[_c(VIcon/* default */.Z,{attrs:{"size":"30"}},[_vm._v("mdi-bookmark-outline")]),_vm._v(" Save My Spot... ")],1):_vm._e(),_c(VSpacer/* default */.Z),(_vm.el > 1 && _vm.hideSaveSpotBtnInFinalPage)?_c(VBtn/* default */.Z,{staticClass:"ghx-btn ghx-btn--secondary ghx-btn--secondary--has-icon ghx-btn--animate-left mr-4 col-xs-hide col-sm-hide",class:[`ghx-btn--${_vm.btnStyle}`],attrs:{"large":"","rounded":"","depressed":"","text":"","ripple":false,"color":"undefined"},on:{"click":_vm.onPrevious}},[_c(VIcon/* default */.Z,{attrs:{"right":""}},[_vm._v("mdi-arrow-left")]),_vm._v(" Back ")],1):_vm._e(),(_vm.el > 1 && _vm.hideSaveSpotBtnInFinalPage)?_c(VBtn/* default */.Z,{staticClass:"ghx-btn ghx-btn--secondary col-md-hide col-lg-hide",class:[`ghx-btn--${_vm.btnStyle}`],attrs:{"rounded":"","depressed":"","text":"","ripple":false,"color":"undefined"},on:{"click":_vm.onPrevious}},[_c(VIcon/* default */.Z,{attrs:{"right":"","size":"30"}},[_vm._v("mdi-arrow-left")])],1):_vm._e(),(_vm.isFinalPage)?_c(VBtn/* default */.Z,{staticClass:"ghx-btn ghx-btn--primary ghx-btn--primary--text col-xs-hide col-sm-hide",class:[`ghx-btn--${_vm.btnStyle}`],attrs:{"loading":_vm.buttonLoading,"disabled":!_vm.selectedItem,"large":"","rounded":"","depressed":"","color":"undefined","height":"50"},on:{"click":function($event){return _vm.onClickContinue(false)}}},[_vm._v(" "+_vm._s(_vm.currentPage.btnSaveSpot || "Get My Results")+" ")]):_vm._e(),(_vm.isFinalPage)?_c(VBtn/* default */.Z,{staticClass:"ghx-btn ghx-btn--primary ghx-btn--primary--has-icon col-md-hide col-lg-hide",class:[`ghx-btn--${_vm.btnStyle}`,
                      {'ghx-btn--mobile': _vm.mobileAndTabletCheck}],attrs:{"loading":_vm.buttonLoading,"disabled":!_vm.selectedItem,"rounded":"","depressed":"","color":"undefined","height":"50"},on:{"click":function($event){return _vm.onClickContinue(false)}}},[_c(VIcon/* default */.Z,{attrs:{"right":""}},[_vm._v("mdi-arrow-right")])],1):(_vm.isExcludedBtn)?[_c(VBtn/* default */.Z,{staticClass:"ghx-btn ghx-btn--primary ghx-btn--primary--has-icon ghx-btn--primary--text ghx-btn--animate-right pl-6 col-xs-hide col-sm-hide",class:[`ghx-btn--${_vm.btnStyle}`],attrs:{"id":"ghx-btn--continue","loading":_vm.buttonLoading,"disabled":!_vm.selectedItem,"large":"","rounded":"","depressed":"","color":"undefined","height":"50"},on:{"click":function($event){return _vm.onClickContinue(false)}}},[_vm._v(" "+_vm._s(_vm.currentPage.btnContinue || "Continue")+" "),_c(VIcon/* default */.Z,{attrs:{"right":""}},[_vm._v("mdi-arrow-right")])],1),_c(VBtn/* default */.Z,{staticClass:"ghx-btn ghx-btn--primary ghx-btn--primary--has-icon col-md-hide col-lg-hide",class:[`ghx-btn--${_vm.btnStyle}`,
                      {'ghx-btn--mobile': _vm.mobileAndTabletCheck}],attrs:{"id":"ghx-btn--continue","loading":_vm.buttonLoading,"disabled":!_vm.selectedItem,"rounded":"","depressed":"","color":"undefined","height":"50"},on:{"click":function($event){return _vm.onClickContinue(false)}}},[_c(VIcon/* default */.Z,{attrs:{"right":""}},[_vm._v("mdi-arrow-right")])],1)]:[_c(VBtn/* default */.Z,{staticClass:"ghx-btn ghx-btn--primary ghx-btn--primary--has-icon ghx-btn--primary--text ghx-btn--animate-right pl-6 col-xs-hide col-sm-hide",class:[`ghx-btn--${_vm.btnStyle}`],attrs:{"id":"ghx-btn--continue","loading":_vm.buttonLoading,"large":"","rounded":"","depressed":"","color":"undefined","height":"50"},on:{"click":function($event){return _vm.onClickContinue(true)}}},[_vm._v(" "+_vm._s(_vm.currentPage.btnContinue || "Continue")+" "),_c(VIcon/* default */.Z,{attrs:{"right":""}},[_vm._v("mdi-arrow-right")])],1),_c(VBtn/* default */.Z,{staticClass:"ghx-btn ghx-btn--primary ghx-btn--primary--has-icon col-md-hide col-lg-hide",class:[`ghx-btn--${_vm.btnStyle}`,
                      {'ghx-btn--mobile': _vm.mobileAndTabletCheck}],attrs:{"id":"ghx-btn--continue","loading":_vm.buttonLoading,"rounded":"","depressed":"","color":"undefined","height":"50"},on:{"click":function($event){return _vm.onClickContinue(true)}}},[_c(VIcon/* default */.Z,{attrs:{"right":""}},[_vm._v("mdi-arrow-right")])],1)]],2)],1)],1):_vm._e()],2):(_vm.isShowFinalPage)?_c(components_VStepper/* VStepperItems */.gd,[_c(VCol/* default */.Z,{staticClass:"pa-0 ghx-stepper-content",attrs:{"col":"12"}},[_c('ul',_vm._l((_vm.finalResult.data),function(value,name){return _c('li',{key:name},[(typeof value === 'object')?_c('span',[_c('list-comp',{attrs:{"item":value}})],1):_c('span',[_vm._v(" "+_vm._s(value)+" ")])])}),0)]),_c(VCard/* default */.Z,{staticClass:"ghx-stepper__action ghx-glass-background pa-0 d-flex",class:[`ghx-stepper__action--${_vm.footerStyle}`]},[_c(VCol/* default */.Z,{staticClass:"ghx-action-btn-container d-flex pa-0",attrs:{"col":"12"}},[_c(components_VCard/* VCardActions */.h7,{staticClass:"ghx-stepper__action-wrapper pb-0 px-0"},[_c(VSpacer/* default */.Z),_c(VBtn/* default */.Z,{staticClass:"ghx-btn ghx-btn--primary ghx-btn--primary--text col-xs-hide col-sm-hide",class:[`ghx-btn--${_vm.btnStyle}`],attrs:{"large":"","rounded":"","depressed":"","color":"undefined","height":"50"},on:{"click":_vm.getResult}},[_vm._v(" Get My Results ")]),_c(VBtn/* default */.Z,{staticClass:"ghx-btn ghx-btn--primary ghx-btn--primary--has-icon col-md-hide col-lg-hide",class:[`ghx-btn--${_vm.btnStyle}`],attrs:{"rounded":"","depressed":"","color":"undefined","height":"50"},on:{"click":_vm.getResult}},[_c('SvgIcons',{attrs:{"name":"continue"}})],1)],1)],1)],1)],1):_vm._e()],1),(_vm.saveForLater)?_c(VStepper/* default */.Z,{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowSaveFormPage),expression:"isShowSaveFormPage"}],staticClass:"ghx-stepper elevation-0",attrs:{"alt-labels":""}},[_c(components_VStepper/* VStepperItems */.gd,[_c('div',{staticClass:"ghx-stepper-content",class:[
                _vm.saveForLaterStyle
                  ? `ghx-stepper-content--${_vm.saveForLaterStyle}`
                  : 'ghx-stepper-content--style-1',
                _vm.footerStyle
                  ? `ghx-stepper-content--footer-${_vm.footerStyle}`
                  : 'ghx-stepper-content--footer-style-1',
              ]},[_c('div',{staticClass:"v-stepper__wrapper"},[_c('div',{class:[!_vm.store?.settings?.dialog ? 'pt-8 pb-0': 'py-8']},[_c('SaveAndExit',{attrs:{"isShow":_vm.isShowSaveFormPage},on:{"on-reset":function($event){return _vm.$emit('on-reset')},"on-item-selected":_vm.onFilledForm,"on-item-emptied":function($event){return _vm.onEmptyForm()}}})],1)])]),(_vm.el)?_c(VCard/* default */.Z,{staticClass:"ghx-stepper__action ghx-glass-background pa-0 d-flex",class:[`ghx-stepper__action--${_vm.footerStyle}`]},[_c(VCol/* default */.Z,{staticClass:"ghx-action-btn-container d-flex pa-0",attrs:{"col":"12"}},[_c(components_VCard/* VCardActions */.h7,{staticClass:"ghx-stepper__action-wrapper pb-0 pt-4 px-0"},[(_vm.isExitClicked)?[(
                        _vm.isSaveForLaterStyle1 && _vm.hideSaveSpotBtnInFinalPage
                      )?_c(VBtn/* default */.Z,{staticClass:"ghx-btn ghx-btn--secondary ghx-btn--secondary--has-icon ghx-btn--secondary--text ml-0",class:[`ghx-btn--${_vm.btnStyle}`],attrs:{"large":"","rounded":"","depressed":"","text":"","ripple":false,"min-width":"0","color":"undefined"},on:{"click":_vm.onContinueSteps}},[_vm._v(" Cancel ")]):_vm._e(),_c(VSpacer/* default */.Z),(
                        _vm.isSaveForLaterStyle2 && _vm.hideSaveSpotBtnInFinalPage
                      )?_c(VBtn/* default */.Z,{staticClass:"ghx-btn ghx-btn--secondary ghx-btn--secondary--has-icon ghx-btn--animate-left mr-4 col-xs-hide col-sm-hide",class:[`ghx-btn--${_vm.btnStyle}`],attrs:{"large":"","rounded":"","depressed":"","text":"","ripple":false,"color":"undefined"},on:{"click":_vm.onContinueSteps}},[_c('SvgIcons',{attrs:{"name":"back"}}),_vm._v(" Back ")],1):_vm._e(),_c(VBtn/* default */.Z,{staticClass:"ghx-btn ghx-btn--primary ghx-btn--primary--text",class:[`ghx-btn--${_vm.btnStyle}`],attrs:{"loading":_vm.saveSpotBtnLoading,"large":"","rounded":"","depressed":"","color":"undefined","height":"50"},on:{"click":_vm.onClickedExit}},[_vm._v(" Exit ")])]:[_c(VBtn/* default */.Z,{staticClass:"ghx-btn ghx-btn--secondary ghx-btn--secondary--has-icon ghx-btn--secondary--text ml-0",class:[`ghx-btn--${_vm.btnStyle}`],attrs:{"large":"","rounded":"","depressed":"","text":"","ripple":false,"min-width":"0","color":"undefined"},on:{"click":_vm.onContinueSteps}},[_vm._v(" Cancel ")]),_c(VSpacer/* default */.Z),_c(VBtn/* default */.Z,{staticClass:"ghx-btn ghx-btn--primary ghx-btn--primary--text col-xs-hide col-sm-hide",class:[`ghx-btn--${_vm.btnStyle}`],attrs:{"loading":_vm.saveSpotBtnLoading,"disabled":!_vm.saveSpotForm,"large":"","rounded":"","depressed":"","color":"undefined","height":"50"},on:{"click":_vm.onClickSaveSpot}},[_vm._v(" "+_vm._s(_vm.currentPage?.btnSaveSpot || "Save My Spot And Exit")+" ")]),_c(VBtn/* default */.Z,{staticClass:"ghx-btn ghx-btn--primary ghx-btn--primary--has-icon col-md-hide col-lg-hide",class:[`ghx-btn--${_vm.btnStyle}`,
                      {'ghx-btn--mobile': _vm.mobileAndTabletCheck}],attrs:{"loading":_vm.saveSpotBtnLoading,"disabled":!_vm.saveSpotForm,"rounded":"","depressed":"","color":"undefined","height":"50"},on:{"click":_vm.onClickSaveSpot}},[_c(VIcon/* default */.Z,{attrs:{"right":""}},[_vm._v("mdi-arrow-right")])],1)]],2)],1)],1):_vm._e()],1)],1):_vm._e()],1)],1)],1)],1)
}
var AudigyStepsvue_type_template_id_6392d526_staticRenderFns = []


;// CONCATENATED MODULE: ./src/constants/questions.js
const PERSONAL = 0
const GENERAL = 1

const SAVE_AND_EXIT = [
  {
    message: 'We’ve Saved Your Spot For You!',
    text: 'Want to continue later? We’ll email <br>your spot to you.',
    instruction: 'All you have to do is click the link in your email and it will take you back to where you left off in our Guided Hearing Experience. <br><br>If you’d like to restart the experience, click or tap ',
    form: {
      type: 'form',
      meta: 'saveAndExit'
    },
    googleAnalytics: [
      {
        type: "btnSaveSpot",
        value: {
          event: "save_my_spot_exit",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "exit_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnCancel",
        value: {
          event: "cancel_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnRestart",
        value: {
          event: "restart_assessment",
          screen_name: "{{text}}"
        }
      }
    ],
    header: { title: 'Your Results', label: '4', },
    meta: null,
    value: null
  }
]

const DEFAULT_GENERAL_QUESTIONS = [
  {
    message: 'First, let\'s get to know you.',
    text: 'Are you here for yourself or a loved one?',
    form: {
      type: 'radio',
      meta: 'type',
      multi_select: false,
      button_size: 'small',
      options: [
        { label: 'Me ', icon: null, el: null, type: PERSONAL },
        { label: 'Loved One', icon: null, el: null, type: GENERAL }
      ]
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "1.1_before-you-begin",
          assessment_question: "{{text}}",
          assessment_answer: "{{value}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: { title: 'About Your<br/>Love One', label: '1', },
    meta: null,
    order: 1,
    step: 1,
    value: null
  },
  {
    message: 'Great! One more question about your loved one.',
    text: 'What is the age range of your loved one?',
    form: {
      type: 'radio',
      meta: 'date_of_birth',
      multi_select: false,
      button_size: 'small',
      options: [
        { label: 'Under 18', icon: null, el: null },
        { label: '18-25', icon: null, el: null },
        { label: '26-40', icon: null, el: null },
        { label: '41-60', icon: null, el: null },
        { label: 'Over 60', icon: null, el: null },
      ]
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "1.2_loved-one-age",
          assessment_question: "{{text}}",
          assessment_answer: "{{value}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: null,
    meta: null,
    order: 2,
    step: 1,
    value: null
  },
  {
    message: 'Now, about your loved one\'s hearing health...',
    text: 'Which statement best describes your loved one? (Select all that apply)',
    form: {
      type: 'radio',
      meta: 'client_description',
      multi_select: true,
      options: [
        { label: 'I want to treat my hearing loss', icon: null, el: null },
        { label: 'I’m ready to test my hearing', icon: null, el: null },
        { label: 'I’m proving I can hear well', icon: null, el: null },
        { label: 'I’m researching my options', icon: null, el: null },
        { label: 'I’m seeking a provider', icon: null, el: null },
        { label: 'My hearing aid needs help', icon: null, el: null },
      ]
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "2.1_best-describes-loved-one",
          assessment_question: "{{text}}",
          assessment_answer: "{{value}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: { title: 'Your Loved One\'s Hearing Health', label: '2', },
    meta: null,
    order: 3,
    step: 2,
    value: null
  },
  {
    message: 'You\'re doing great! Keep going...',
    text: 'Do you have concerns with your loved one experiencing any of the following? (Select all that apply)',
    form: {
      type: 'radio',
      meta: 'client_concern',
      multi_select: true,
      options: [
        { label: 'Sudden hearing loss', icon: null, el: null },
        { label: 'Ringing/buzzing', icon: null, el: null },
        { label: 'Pain/fullness', icon: null, el: null },
        { label: 'Drainage', icon: null, el: null },
        { label: 'Dizziness or vertigo', icon: null, el: null },
        { label: 'None of the Above', icon: null, el: null, customClass: 'ghx-btn-none-of-the-above' }
      ]
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "2.2_concerns-loved-one",
          assessment_question: "{{text}}",
          assessment_answer: "{{value}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: null,
    meta: null,
    order: 4,
    step: 2,
    value: null
  },
  {
    message: 'Almost there...',
    text: 'In which situation(s) do you feel your loved one has difficulty?<br>(Select all that apply)',
    form: {
      type: 'radio',
      meta: 'client_situation',
      multi_select: true,
      options: [
        { label: 'TV', icon: null, el: null },
        { label: 'Telephone', icon: null, el: null },
        { label: 'In the car', icon: null, el: null },
        { label: 'Meetings', icon: null, el: null },
        { label: 'Restaurants', icon: null, el: null },
        { label: 'Church', icon: null, el: null },
        { label: 'Music', icon: null, el: null },
        { label: 'Outdoors', icon: null, el: null },
      ]
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "2.4_situations-hear-better-loved-one",
          assessment_question: "{{text}}",
          assessment_answer: "{{value}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: null,
    meta: null,
    order: 5,
    step: 2,
    value: null
  },
  {
    message: 'Last question about your loved one\'s hearing health...',
    text: 'How often does your loved one use wireless technology like Bluetooth and streaming devices?',
    form: {
      type: 'radio',
      meta: 'client_wireless_situation',
      options: [
        { label: 'They’re tech savvy', icon: null, el: null },
        { label: 'They stream music', icon: null, el: null },
        { label: 'They use a hands-free phone options like Bluetooth', icon: null, el: null },
        { label: 'They don’t know what it is', icon: null, el: null },
      ]
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "2.5_wireless-technology-usage-loved-one",
          assessment_question: "{{text}}",
          assessment_answer: "{{value}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: null,
    meta: null,
    order: 6,
    step: 2,
    value: null
  },
  {
    message: 'Give us your email and we will send you information to share with your loved one to help them take the next steps.',
    text: 'Motivate your loved one today to start their hearing journey.',
    form: {
      type: 'end',
      meta: 'final',
      options: [
        { label: 'How your loved one\'s listening lifestyle could be improved', icon: null, el: null },
        { label: 'The top 5 things your loved one should ask your hearing care expert', icon: null, el: null },
        { label: 'Recommended next steps personalized for your loved one', icon: null, el: null }
      ]
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "4.1_my-results-loved-one",
          assessment_question: "{{text}}",
          assessment_answer: "{{value}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: { title: 'Next Steps for your Loved One', label: '4', },
    meta: null,
    order: 7,
    step: 3,
    value: null
  }
]

const DEFAULT_PERSONAL_QUESTIONS = [
  {
    message: 'First, let\'s get to know you.',
    text: 'Are you here for yourself or a loved one?',
    form: {
      type: 'radio',
      meta: 'type',
      multi_select: false,
      button_size: 'small',
      options: [
        { label: 'Me ', icon: null, el: null, type: PERSONAL },
        { label: 'Loved One', icon: null, el: null, type: GENERAL }
      ]
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "1.1_before-you-begin",
          assessment_question: "{{text}}",
          assessment_answer: "{{value}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: { title: 'About You', label: '1', },
    meta: null,
    order: 1,
    step: 1,
    value: null
  },
  {
    message: 'Great! One more question about yourself.',
    text: 'What year were you born?',
    form: {
      type: 'date',
      meta: 'date_of_birth',
      ear: 'left',
      multi_select: false,
      options: []
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "1.2_year-born",
          assessment_question: "{{text}}",
          assessment_answer: "{{value}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: null,
    meta: null,
    order: 2,
    step: 1,
    value: null
  },
  {
    message: 'Now, about your hearing health...',
    text: 'What best describes you? (Select all that apply)',
    form: {
      type: 'radio',
      meta: 'client_description',
      multi_select: true,
      select: 's',
      options: [
        { label: 'I want to treat my hearing loss', icon: null, el: null },
        { label: 'I’m ready to test my hearing', icon: null, el: null },
        { label: 'I’m proving I can hear well', icon: null, el: null },
        { label: 'I’m researching my options', icon: null, el: null },
        { label: 'I’m seeking a provider', icon: null, el: null },
        { label: 'My hearing aid needs help', icon: null, el: null },
      ]
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "2.1_best-describes",
          assessment_question: "{{text}}",
          assessment_answer: "{{value}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: { title: 'Your Hearing Health', label: '2', },
    meta: null,
    order: 3,
    step: 2,
    value: null
  },
  {
    message: 'You\'re doing great! Keep going...',
    text: 'Do you have concerns with or experience any of the following?<br>(Select all that apply)',
    form: {
      type: 'radio',
      meta: 'client_concern',
      multi_select: true,
      select: 's',
      options: [
        { label: 'Sudden hearing loss', icon: null, el: null },
        { label: 'Ringing/buzzing', icon: null, el: null },
        { label: 'Pain/fullness', icon: null, el: null },
        { label: 'Drainage', icon: null, el: null },
        { label: 'Dizziness or vertigo', icon: null, el: null },
        { label: 'None of the Above', icon: null, el: null, customClass: 'ghx-btn-none-of-the-above' }
      ]
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "2.2_concerns",
          assessment_question: "{{text}}",
          assessment_answer: "{{value}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: null,
    meta: null,
    order: 4,
    step: 2,
    value: null
  },
  {
    message: 'Keep going, only 3 more questions',
    text: 'Which statement describes you best? (Select all that apply)',
    form: {
      type: 'radio',
      meta: 'client_best_description',
      multi_select: true,
      options: [
        { label: 'People say I can’t hear, but I hear fine', icon: null, el: null },
        { label: 'I can hear fine when people don’t mumble', icon: null, el: null },
        { label: 'High voices are harder to understand', icon: null, el: null },
        { label: 'I hear fine but don’t always understand', icon: null, el: null },
        { label: 'I avoid dining out because it’s too noisy', icon: null, el: null },
        { label: 'Socializing is too stressful and tiring', icon: null, el: null },
        { label: 'I want to hear better ASAP. Let’s get going!', icon: null, el: null },
      ]
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "2.3_statement-describes",
          assessment_question: "{{text}}",
          assessment_answer: "{{value}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: null,
    meta: null,
    order: 5,
    step: 2,
    value: null
  },
  {
    message: 'Almost there...',
    text: 'In which situation(s) do you wish you could hear better? (Select all that apply)',
    form: {
      type: 'radio',
      meta: 'client_situation',
      multi_select: true,
      select: 'm',
      options: [
        { label: 'TV', icon: null, el: null },
        { label: 'Telephone', icon: null, el: null },
        { label: 'In the car', icon: null, el: null },
        { label: 'Meetings', icon: null, el: null },
        { label: 'Restaurants', icon: null, el: null },
        { label: 'Church', icon: null, el: null },
        { label: 'Music', icon: null, el: null },
        { label: 'Outdoors', icon: null, el: null },
      ]
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "2.4_situations-hear-better",
          assessment_question: "{{text}}",
          assessment_answer: "{{value}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: null,
    meta: null,
    order: 6,
    step: 2,
    value: null
  },
  {
    message: 'Last question about your hearing health...',
    text: 'How often do you use wireless technology like Bluetooth and streaming devices on a daily basis?',
    form: {
      type: 'radio',
      meta: 'client_wireless_situation',
      multi_select: false,
      options: [
        { label: 'Can’t imagine life without it', icon: null, el: null },
        { label: 'I stream all my music', icon: null, el: null },
        { label: 'I use hands-free phone', icon: null, el: null },
        { label: 'I don’t know what that is', icon: null, el: null },
      ]
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "2.5_wireless-technology-usage",
          assessment_question: "{{text}}",
          assessment_answer: "{{value}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: null,
    meta: null,
    order: 7,
    step: 2,
    value: null
  },
  {
    message: 'Last question about your hearing health...',
    text: 'Let\'s get ready to take the online hearing screener',
    form: {
      type: 'list',
      meta: 'init_experiment',
      ear: 'left',
      multi_select: false,
      options: [
        { label: 'About the Screener', icon: null, el: null },
        { label: 'What You\'ll Need', icon: 'headphones', el: null },
        { label: 'What You\'ll Get', icon: 'fact_check', el: null }
      ]
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "3.1_online-hearing-screener",
          assessment_question: "{{text}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: { title: 'Hearing Screener', label: '3', },
    meta: null,
    order: 8,
    step: 3,
    value: null
  },
  {
    message: 'Lorem ipsum dolor sit, adipiscing elit...',
    text: 'Find a quiet place and put on your headphones',
    form: {
      type: 'custom1',
      meta: '',
      multi_select: false,
      options: [
        { label: 'Set your device to its maximum volume', icon: null, el: null },
        { label: 'Test that your headphones are working properly', icon: null, el: null },
        { label: 'Keep your device at full volume for the entire test', icon: null, el: null }
      ]
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "3.2_quiet-place",
          assessment_question: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnPlaySong",
        value: {
          event: "play_song",
        }
      },
      {
        type: "btnStopSong",
        value: {
          event: "stop_song",
        }
      }
    ],
    header: null,
    meta: null,
    order: 9,
    step: 3,
    value: null
  },
  {
    message: 'Lorem ipsum dolor sit, adipiscing elit...',
    text: 'Now for the test',
    form: {
      type: 'custom2',
      meta: '',
      multi_select: false,
      options: []
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "3.3_starting-test",
          assessment_question: "{{text}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: null,
    meta: null,
    order: 10,
    step: 3,
    value: null
  },
  {
    message: '',
    text: '500Hz - Left ear',
    form: {
      type: 'screener',
      meta: '',
      ear: 'left',
      hz: '500',
      multi_select: false,
      options: []
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "3.4_left-500Hz",
          assessment_question: "{{text}}",
          assessment_answer: "{{value}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: null,
    meta: null,
    order: 11,
    step: 3,
    value: null
  },
  {
    message: '',
    text: '1000Hz - Left ear',
    form: {
      type: 'screener',
      meta: '',
      ear: 'left',
      hz: '1000',
      multi_select: false,
      options: []
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "3.5_left-1000Hz",
          assessment_question: "{{text}}",
          assessment_answer: "{{value}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: null,
    meta: null,
    order: 12,
    step: 3,
    value: null
  },
  {
    message: '',
    text: '2000Hz - Left ear',
    form: {
      type: 'screener',
      meta: '',
      ear: 'left',
      hz: '2000',
      multi_select: false,
      options: []
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "3.6_left-2000Hz",
          assessment_question: "{{text}}",
          assessment_answer: "{{value}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: null,
    meta: null,
    order: 13,
    step: 3,
    value: null
  },
  {
    message: '',
    text: '4000Hz - Left ear',
    form: {
      type: 'screener',
      meta: '',
      ear: 'left',
      hz: '4000',
      options: []
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "3.7_left-4000Hz",
          assessment_question: "{{text}}",
          assessment_answer: "{{value}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: null,
    meta: null,
    order: 14,
    step: 3,
    value: null
  },
  {
    message: 'Lorem ipsum dolor sit, adipiscing elit...',
    text: 'Excellent! You\'re done with the left ear',
    form: {
      type: 'custom3',
      meta: '',
      ear: 'right',
      options: []
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "3.8_left-ear-done",
          assessment_question: "{{text}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: null,
    meta: null,
    order: 15,
    step: 3,
    value: null
  },
  {
    message: '',
    text: '500Hz - Right ear',
    form: {
      type: 'screener',
      meta: '',
      ear: 'right',
      hz: '500',
      options: []
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "3.9_right-500Hz",
          assessment_question: "{{text}}",
          assessment_answer: "{{value}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: null,
    meta: null,
    order: 16,
    step: 3,
    value: null
  },
  {
    message: '',
    text: '1000Hz - Right ear',
    form: {
      type: 'screener',
      meta: '',
      ear: 'right',
      hz: '1000',
      options: []
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "3.9.1_right-1000Hz",
          assessment_question: "{{text}}",
          assessment_answer: "{{value}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: null,
    meta: null,
    order: 17,
    step: 3,
    value: null
  },
  {
    message: '',
    text: '2000Hz - Right ear',
    form: {
      type: 'screener',
      meta: '',
      ear: 'right',
      hz: '2000',
      options: []
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "3.9.2_right-2000Hz",
          assessment_question: "{{text}}",
          assessment_answer: "{{value}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: null,
    meta: null,
    order: 18,
    step: 3,
    value: null
  },
  {
    message: '',
    text: '4000Hz - Right ear',
    form: {
      type: 'screener',
      meta: '',
      ear: 'right',
      hz: '4000',
      options: []
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "3.9.3_right-4000Hz",
          assessment_question: "{{text}}",
          assessment_answer: "{{value}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: null,
    meta: null,
    order: 19,
    step: 3,
    value: null
  },
  {
    message: 'Provide your email or phone number below, and we\'ll send your complete hearing profile with the results that will help you make smarter hearing decisions about your hearing health. ',
    text: 'Get Your Customized Hearing Profile',
    form: {
      type: 'end',
      meta: 'final',
      options: [
        { label: 'Full details on your hearing screener results', icon: null, el: null },
        { label: 'How your listening lifestyle could be improved', icon: null, el: null },
        { label: 'The top 5 things your should ask your hearing care expert', icon: null, el: null },
        { label: 'Recommended next steps personalized for you', icon: null, el: null }
      ]
    },
    googleAnalytics: [
      {
        type: "btnContinue",
        value: {
          event: "4.1_my-results",
          assessment_question: "{{text}}",
          assessment_answer: "{{value}}"
        }
      },
      {
        type: "btnBack",
        value: {
          event: "back_button_click",
          screen_name: "{{text}}"
        }
      },
      {
        type: "btnExit",
        value: {
          event: "close_pop_up_click",
          screen_name: "{{text}}"
        }
      }
    ],
    header: { title: 'Your Results', label: '4', },
    meta: null,
    order: 20,
    step: 4,
    value: null
  }
]
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItem.js
var VItem = __webpack_require__(1689);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js + 2 modules
var VItemGroup = __webpack_require__(5933);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Pages/PageRadio.vue?vue&type=template&id=5b3207fa&scoped=true&










var PageRadiovue_type_template_id_5b3207fa_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c(VContainer/* default */.Z,{staticClass:"ghx-stepper-body pa-0"},[_c(VRow/* default */.Z,[_c(VCol/* default */.Z,{staticClass:"col-lg-12 col-sm-12",attrs:{"cols":"12"}},[_c(VCard/* default */.Z,{staticClass:"ghx-glass-background pa-0",attrs:{"flat":""}},[_c(components_VCard/* VCardText */.ZB,{staticClass:"text-center pa-0"},[(_setup.page.title)?_c('p',{staticClass:"ghx-stepper-content__question",domProps:{"innerHTML":_vm._s(_setup.page.title)}}):_vm._e(),(_setup.page.secondInstuction)?_c('p',{staticClass:"ghx-stepper-content__instruction-2 text-center",domProps:{"innerHTML":_vm._s(_setup.page.secondInstuction)}}):_vm._e()]),_c(components_VCard/* VCardText */.ZB,{staticClass:"text-center ghx-stepper-body__content pb-0"},[_c(VItemGroup/* default */.Z,{key:_setup.details.meta,attrs:{"multiple":_setup.details.multiSelect ? true : false,"active-class":"primary","value":_setup.hasSelectedItem
                ? _setup.hasSelectedItem
                : _setup.details.multiSelect
                ? []
                : ''}},[_c('div',{staticClass:"ghx-question-selector-wrapper"},_vm._l((_setup.page?.form.options),function(item,nkey){return _c('div',{key:nkey,staticClass:"ghx-question-selector",attrs:{"cols":"12","md":"4"}},[_c(VItem/* default */.Z,{attrs:{"value":item.label},scopedSlots:_vm._u([{key:"default",fn:function({ active, toggle }){return [_c(VCard/* default */.Z,{staticClass:"ghx-question-selector-item d-flex align-center ma-1 py-0",class:{ active: active },attrs:{"size":_setup.details?.button_size,"ripple":false},on:{"click":function($event){_setup.onSelectedItem(item.label, active, item.reset);
                      toggle();}}},[_c(transitions/* VScrollYTransition */.OM,[_c('div',{staticClass:"ghx-option-item flex-grow-1 text-center"},[(item.icon)?_c(components_VCard/* VCardText */.ZB,{staticClass:"px-0 pt-0 d-flex justify-center"},[_c(VImg/* default */.Z,{attrs:{"src":item.icon,"height":"48","width":"48","max-width":"48"}})],1):_vm._e(),_vm._v(" "+_vm._s(item.label)+" ")],1)])],1)]}}],null,true)})],1)}),0)])],1)],1)],1)],1)],1)
}
var PageRadiovue_type_template_id_5b3207fa_scoped_true_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 6 modules
var pinia = __webpack_require__(6086);
;// CONCATENATED MODULE: ./src/helpers/Util.js
/* harmony default export */ var Util = ({
 getResourceVal(val, questionItem, type = null) {
    if (type === 'date' || type === 'screener') {
      return {
        selected: { label: val },
        resource: questionItem
      }
    } else {
      return {
        selected: val,
        resource: questionItem
      }
    }
  },
  
  getAge(dateString) {
/*    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;*/
    
    var today = new Date();
    var birthDate = parseInt(dateString);
    
    var age = parseInt(today.getFullYear()) - birthDate;
    
    return age;
  },
  
  setFormData(item) {
    var form_data = new FormData();

    for ( var key in item ) {
      form_data.append(key, item[key]);
    }
      
    return form_data;
  },
    
  // getPairs(obj, keys = []) {
  //     return Object.entries(obj).reduce((pairs, [key, value]) => {
  //         if (value && typeof value === 'object')
  //           pairs.push(...this.getPairs(value, [...keys, key]));
  //         else
  //           pairs.push([[...keys, key], value]);
  //         return pairs;
  //     }, []);
  // },

  convertUrlParams(obj, prefix) {
    
    var str = [],
      p;
    for (p in obj) {
      if (obj.hasOwnProperty(p)) {
        var k = prefix ? prefix + "[" + p + "]" : p,
          v = obj[p];
        str.push(this.convertUrlParamasExtension(v, k));
      }
    }
    return str.join("&");
      // return this.getPairs(obj).map(([[key0, ...keysRest], value]) =>
      //     `${key0}${keysRest.map(a => `[${a}]`).join('')}=${value}`)
      //     .join('&');
  },
  
  convertUrlParamasExtension(v, k) {
    return (v !== null && typeof v === "object") ?
      this.convertUrlParams(v, k) :
      encodeURIComponent(k) + "=" + encodeURIComponent(v)
  },
  
  clone(arg) {
    return JSON.parse(JSON.stringify(arg));
  },
  
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
  
  getUrlParams() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return Object.fromEntries(urlSearchParams.entries());
  },
  
  deleteUrlParams(param) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    urlSearchParams.delete(param);
  },
  
  isValidDate(d) {
    var date = new Date();
    var dateArry = d.split("-");
    date.setFullYear(dateArry[0], dateArry[1], dateArry[2]);
    return date instanceof Date && !isNaN(date);
  },
      
  filterSelectedDefaultValue(data, form) {
    var retVal = [];
    
    if (Array.isArray(data) && form.multiSelect) {
      data.forEach( label => {
        if (form.options.find( item => item.label === label ))
          retVal.push(label)
      });
    }
    else
      return form.options.find( item => item.label === data ) ? data: null;
    
    return retVal;
  },

  is_empty(val) {
    return val === null || val === undefined || val.length === 0 || val.trim() === ""
  },

  setCssProperty(container, theme) {
    if (!container) {
      container = document.documentElement
    }

    const cssObject = {
      "primaryColor": theme.primaryColor,
      "secondaryColor": theme.secondaryColor,
      "secondaryDarkColor": theme.secondaryDarkColor,
      "thirdColor": theme.thirdColor,
      "backgroundColor": theme.backgroundColor,
      "backgroundImage": theme.backgroundImage,
      "cardTextColor": theme.cardTextColor,
      "closeIconColor": theme.closeIconColor,
      "indicatorActiveColor": theme.indicatorActiveColor,
      "fontName": theme.fontName
    }

    for (const key in cssObject) {
      if (!container.style.getPropertyValue("--" + key)) {
        container.style.setProperty("--" + key, cssObject[key]);
      }
    }
  },

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  generateGoogleAnalytics(ga_object, currentPage, value = null) {
    if (ga_object && window?.dataLayer) {
      let event_label = ga_object?.assessment_question
      let event_value = ga_object?.assessment_answer
      let screen_name = ga_object?.screen_name
  
      if (event_label?.startsWith("{{") && event_label?.endsWith("}}"))
        event_label = {assessment_question: currentPage[event_label.slice(2, event_label.length - 2)]}
      else if (event_label)
        event_label = {assessment_question: event_label}
      else
        event_label = {}
  
      if (screen_name?.startsWith("{{") && screen_name?.endsWith("}}"))
        screen_name = {screen_name: currentPage[screen_name.slice(2, screen_name.length - 2)]}
      else if (screen_name)
        screen_name = {screen_name: screen_name}
      else
        screen_name = {}
  
      if (event_value?.startsWith("{{") && event_value?.endsWith("}}")) {
        const key = event_value.slice(2, event_value.length - 2)
        if (key === "value") {
          event_value = {assessment_answer: value}
        }else if(currentPage[key]) {
          event_value = {assessment_answer: currentPage[key]}
        }
      }
      else if (event_value)
        event_value = {event_value: event_value}
      else
        event_value = {}
  
      window?.dataLayer.push({
        'event': ga_object.event,
        ...event_label,
        ...event_value,
        ...screen_name
      });
    }
  },

  mobileAndTabletCheck() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  }
});
;// CONCATENATED MODULE: ./src/store/main.js



const questionnaire = (0,pinia/* defineStore */.Q_)('questionnaire', {
  state: () => ({
    config: __webpack_require__(5676),
    userResponse: {},
    userApiData: {
      Left: null,
      Right: null
    },
    selectedFlow: {},
    audioFiles: {
      500: "assets/audio/warble/warble_500.wav",
      1000: "assets/audio/warble/warble_1000.wav",
      2000: "assets/audio/warble/warble_2000.wav",
      4000: "assets/audio/warble/warble_4000.wav",
    },
    // hzSelectedAudio: {},
    form: {
      first_name: '',
      last_name: '',
      zip_code: '',
      email: ''
    },
    ghxSettings: {},
    settings: {},
  }),
  getters: {
    getUserResponse: (state) => {
      return state.userResponse
    },
    getSelectedFlow: (state) => {
      return state.selectedFlow
    },
    getUserApiData: (state) => {
      return state.userApiData
    },
    getAudioFiles: (state) => {
      return state.audioFiles
    },
    getForm: (state) => {
      return state.form
    },
    getGHXSettings: (state) => {
      return state.ghxSettings
    },
    // getHzSelectedAudio: (state) => {
    //   return state.hzSelectedAudio
    // }
  },
  actions: {
    // setHzSelectedAudio(data, hz) {
    //   let temp = [data]
    //   this.hzSelectedAudio[hz] = this.hzSelectedAudio[hz] || []
    //   this.hzSelectedAudio[hz] = this.hzSelectedAudio[hz].concat(temp)
    // },
    
    setGHXSettings(data) {
      this.ghxSettings = data
    },
    
    addUserResponse(data) {
      this.userResponse[data.field] = data.value
    },
    
    addUserApiData(data) {
      this.userApiData[data.key] = data.value;
    },
/*    setUserApiData(data) {
      this.userApiData = data;
    },*/
    mergeUserApiData(data, ear) {
      ear = Util.capitalizeFirstLetter(ear);
      
      this.userApiData[ear] = {
        ...this.userApiData[ear],
        ...data
      };
      
      if (ear && data?.experiment?.previousTrials)
        this.userApiData[ear].previousTrials = data.experiment.previousTrials
        
    },
    
    setUserApiData (data) {
      this.userApiData = data;
    },
    
    resetUserApiData () {
      this.userApiData = {
        Left: null,
        Right: null
      };
    },
    
    setAudioFiles(data) {
      if (data.value)
        this.audioFiles[data.key] = data.value;
    },
    
    setSelectedFlow(data) {
      this.selectedFlow[data.key] = data.value;
      //this.selectedFlow = data
      //this.userResponse = []
    },
    
    setUserResponse (data) {
      this.userResponse = data
    },
    
    resetUserResponse () {
      this.userResponse = []
    },
    
    resetSelectedFlow () {
      this.selectedFlow = {}
    },
    
    // resetHzSelectedAudio () {
    //   this.hzSelectedAudio = {}
    // },
    
    updateForm (data) {
      this.form = {
        ...this.form,
        ...data
      }
    }
  },
})

const leadProcessor = (0,pinia/* defineStore */.Q_)('leadProcessor', {
    state: () => ({
      token: null
    }),
    
    getters: {
      getToken: (state) => {
        return state.token
      },
    },
    
    actions: {
      setToken (data) {
        this.token = data
      }
    }
})
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Pages/PageRadio.vue?vue&type=script&setup=true&lang=js&





/* harmony default export */ var PageRadiovue_type_script_setup_true_lang_js_ = ({
  __name: 'PageRadio',
  props: {
  page: {
    type: Object,
    default: () => null,
  },
  currentOrder: {
    type: Number,
    default: () => 0,
  },
},
  emits: ["on-item-selected", "on-item-emptied"],
  setup(__props, { emit }) {

const props = __props





const store = questionnaire();

const hasSelectedItem = (0,vue_runtime_esm/* ref */.iH)(null);
const multiSelectedItem = (0,vue_runtime_esm/* ref */.iH)([]);
const selectedItem = (0,vue_runtime_esm/* ref */.iH)(null);
const skip = (0,vue_runtime_esm/* ref */.iH)(false);

const page = (0,vue_runtime_esm/* computed */.Fl)(() => props.page);
const details = (0,vue_runtime_esm/* computed */.Fl)(() => page.value.form);
const currentOrder = (0,vue_runtime_esm/* computed */.Fl)(() => props.currentOrder);

(0,vue_runtime_esm/* onBeforeUnmount */.Jd)(() => {
  skip.value = true;
});

(0,vue_runtime_esm/* onMounted */.bv)(() => {
  const temp = store?.getSelectedFlow?.[details.value.meta] || store?.getUserResponse?.[details.value.meta] || null;
  hasSelectedItem.value = Util.filterSelectedDefaultValue(temp, details.value);


  if (hasSelectedItem.value)
    selectedItem.value = hasSelectedItem.value;
})

;(0,vue_runtime_esm/* watch */.YP)(
  selectedItem,
  (val) => {
    if (val) {
      const resource = {
        selected: val,
        resource: props.page,
      };

      emit("on-item-selected", resource);

      store.setSelectedFlow({ key: details.value.meta, value: val });
    } else emit("on-item-emptied");
  },
  { deep: true }
);

(0,vue_runtime_esm/* watch */.YP)(currentOrder, (val) => {
  if (val === page.value.order && selectedItem.value) {
    var resource = {
      selected: selectedItem.value,
      resource: page.value,
    };

    emit("on-item-selected", resource);
  }
});

function onSelectedItem(data, isActive, reset) {
  if (reset) {
    if (details.value.multiSelect) {
      if (isActive) {
        const index = multiSelectedItem.value.findIndex((val) => val === data);
        multiSelectedItem.value.splice(index, 1);
      } else {
        multiSelectedItem.value = [];
        multiSelectedItem.value.push(data);
      }

      hasSelectedItem.value = multiSelectedItem.value;
    } else hasSelectedItem.value = isActive ? null : data;

    if (!isActive) {
      selectedItem.value = null;
    }

    selectedItem.value = hasSelectedItem.value.length
      ? hasSelectedItem.value
      : null;

    return;
  }

  if (details.value.multiSelect) {
    if (isActive) {
      var index = multiSelectedItem.value.findIndex((val) => val === data);
      multiSelectedItem.value.splice(index, 1);
    } else multiSelectedItem.value.push(data);

    selectedItem.value = multiSelectedItem.value.length
      ? multiSelectedItem.value
      : null;
  } else selectedItem.value = isActive ? null : data;

  if (!reset) {
    var index = multiSelectedItem.value.findIndex(
      (val) => val === "None of the Above"
    );

    if (index > -1) {
      if (details.value.multiSelect) {
        multiSelectedItem.value.splice(index, 1);
        hasSelectedItem.value = multiSelectedItem.value;
      }

      hasSelectedItem.value = selectedItem.value;
      selectedItem.value = null;
      selectedItem.value = hasSelectedItem.value;
    }
  }
}

return { __sfc: true,emit, props, store, hasSelectedItem, multiSelectedItem, selectedItem, skip, page, details, currentOrder, onSelectedItem }
}

});
;// CONCATENATED MODULE: ./src/components/Pages/PageRadio.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var Pages_PageRadiovue_type_script_setup_true_lang_js_ = (PageRadiovue_type_script_setup_true_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/components/Pages/PageRadio.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  Pages_PageRadiovue_type_script_setup_true_lang_js_,
  PageRadiovue_type_template_id_5b3207fa_scoped_true_render,
  PageRadiovue_type_template_id_5b3207fa_scoped_true_staticRenderFns,
  false,
  null,
  "5b3207fa",
  null
  
)

/* harmony default export */ var PageRadio = (component.exports);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 15 modules
var VTextField = __webpack_require__(2548);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Pages/PageDate.vue?vue&type=template&id=7318dfbd&scoped=true&








var PageDatevue_type_template_id_7318dfbd_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c(VContainer/* default */.Z,{staticClass:"ghx-stepper-body pa-0"},[_c(VRow/* default */.Z,[_c(VCol/* default */.Z,{staticClass:"col-lg-12 col-sm-12",attrs:{"cols":"12"}},[_c(VCard/* default */.Z,{staticClass:"ghx-glass-background pa-0",attrs:{"flat":""}},[_c(components_VCard/* VCardText */.ZB,{staticClass:"text-center pa-0"},[(_setup.page.title)?_c('p',{staticClass:"ghx-stepper-content__question",domProps:{"innerHTML":_vm._s(_setup.page.title)}}):_vm._e(),(_setup.page.secondInstuction)?_c('p',{staticClass:"ghx-stepper-content__instruction-2 text-center",domProps:{"innerHTML":_vm._s(_setup.page.secondInstuction)}}):_vm._e()]),_c(components_VCard/* VCardText */.ZB,{staticClass:"text-center ghx-stepper-body__content pb-0"},[_c(VItemGroup/* default */.Z,{key:_setup.details.meta + _setup.details.type,attrs:{"active-class":"primary"}},[_c('div',{staticClass:"ghx-question-selector-wrapper"},[_c(VCard/* default */.Z,{staticClass:"ghx-glass-background ghx-date-picker",attrs:{"flat":"","width":"200"}},[_c(VTextField/* default */.Z,{staticClass:"ghx-form-input mt-2",attrs:{"label":"Year","rules":[_setup.rules.year],"outlined":""},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter"))return null;return _vm.$emit('on-hit-enter')}},model:{value:(_setup.year),callback:function ($$v) {_setup.year=$$v},expression:"year"}})],1)],1)])],1)],1)],1)],1)],1)
}
var PageDatevue_type_template_id_7318dfbd_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Pages/PageDate.vue?vue&type=script&setup=true&lang=js&




/* harmony default export */ var PageDatevue_type_script_setup_true_lang_js_ = ({
  __name: 'PageDate',
  props: {
  page: {
    type: Object,
    default: () => {}
  },
  currentOrder: {
    type: Number,
    default: () => 0
  }
},
  emits: ['initialized', 'on-item-selected', 'on-item-emptied'],
  setup(__props, { emit }) {

const props = __props





const store = questionnaire()

const YEAR_NUMBER_LENGTH = 4;
const hasSelectedItem = (0,vue_runtime_esm/* ref */.iH)(null)
const selectedItem = (0,vue_runtime_esm/* ref */.iH)(null)
const year = (0,vue_runtime_esm/* ref */.iH)('')
const rules = (0,vue_runtime_esm/* ref */.iH)({
  year: value => {
    const x = value.replace(/\D/g, '').match(/(\d{0,4})/);
    const d = new Date();
    year.value = x[1];
    
    return year.value.length === YEAR_NUMBER_LENGTH && year.value <= d.getFullYear() && year.value >= 1900 ? true : 'Invalid Year.'
  }
})
const skip = (0,vue_runtime_esm/* ref */.iH)(false)

const page = (0,vue_runtime_esm/* computed */.Fl)(() => props.page)
const currentOrder = (0,vue_runtime_esm/* computed */.Fl)(() => props.currentOrder)
const details = (0,vue_runtime_esm/* computed */.Fl)(() => page.value.form)

;(0,vue_runtime_esm/* onBeforeUnmount */.Jd)(() => {
  skip.value = true
})

;(0,vue_runtime_esm/* watch */.YP)(selectedItem, (val) => {
  if (val) {
    const value = details.value.type === 'date' ? year.value: val;
    const resource = {
      selected: value,
      resource: page.value
    };

    emit('on-item-selected', resource)
    
    store.setSelectedFlow({key: details.value.meta, value: value});
  } else
      emit('on-item-emptied')
}, {deep: true})

;(0,vue_runtime_esm/* watch */.YP)(year, (val) => {
  const d = new Date();
  selectedItem.value = val.length === YEAR_NUMBER_LENGTH && val <= d.getFullYear() && val >= 1900 ? val: false;
})

;(0,vue_runtime_esm/* watch */.YP)(currentOrder, (val) => {
  if (val === page.value.order && selectedItem.value) {
    const resource = {
      selected: selectedItem.value,
      resource: page.value
    };
    
    emit('on-item-selected', resource)
  }
})

;(0,vue_runtime_esm/* onMounted */.bv)(() => {
  hasSelectedItem.value = store?.getSelectedFlow?.[details.value.meta] || store?.getUserResponse?.[details.value.meta] || null;
    
  if (hasSelectedItem.value)
    year.value = hasSelectedItem.value || null
})

return { __sfc: true,emit, props, store, YEAR_NUMBER_LENGTH, hasSelectedItem, selectedItem, year, rules, skip, page, currentOrder, details }
}

});
;// CONCATENATED MODULE: ./src/components/Pages/PageDate.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var Pages_PageDatevue_type_script_setup_true_lang_js_ = (PageDatevue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./src/components/Pages/PageDate.vue





/* normalize component */
;
var PageDate_component = (0,componentNormalizer/* default */.Z)(
  Pages_PageDatevue_type_script_setup_true_lang_js_,
  PageDatevue_type_template_id_7318dfbd_scoped_true_render,
  PageDatevue_type_template_id_7318dfbd_scoped_true_staticRenderFns,
  false,
  null,
  "7318dfbd",
  null
  
)

/* harmony default export */ var PageDate = (PageDate_component.exports);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Pages/PageInit.vue?vue&type=template&id=20226881&






var PageInitvue_type_template_id_20226881_render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c(VContainer/* default */.Z,{staticClass:"ghx-stepper-body pa-0"},[_c(VRow/* default */.Z,[_c(VCol/* default */.Z,{attrs:{"cols":12}},[_c(VCard/* default */.Z,{staticClass:"ghx-glass-background pa-0",attrs:{"flat":""}},[_c(components_VCard/* VCardText */.ZB,{staticClass:"text-center pa-0"},[(_setup.page.title)?_c('p',{staticClass:"ghx-stepper-content__question",domProps:{"innerHTML":_vm._s(_setup.page.title)}}):_vm._e(),(_setup.page.secondInstuction)?_c('p',{staticClass:"ghx-stepper-content__instruction-2 text-center",domProps:{"innerHTML":_vm._s(_setup.page.secondInstuction)}}):_vm._e()]),_c(components_VCard/* VCardText */.ZB,{staticClass:"text-center pb-0 ghx-stepper-body__content"},[_c('span',{staticClass:"ghx-icon"},[_c('img',{attrs:{"src":_setup.plugin_url + _setup.page.icon,"width":"150","height":"150"}})])])],1)],1)],1)],1)
}
var PageInitvue_type_template_id_20226881_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Pages/PageInit.vue?vue&type=script&setup=true&lang=js&






/* harmony default export */ var PageInitvue_type_script_setup_true_lang_js_ = ({
  __name: 'PageInit',
  props: {
  page: {
    type: Object,
    default: () => {}
  }
},
  setup(__props) {

const props = __props



const store = questionnaire()

const page = (0,vue_runtime_esm/* computed */.Fl)(() => props.page)
const details = (0,vue_runtime_esm/* computed */.Fl)(() => page.value.form)
const plugin_url = (0,vue_runtime_esm/* computed */.Fl)(() => store.ghxSettings?.plugin_url ?? '')

return { __sfc: true,props, store, page, details, plugin_url }
}

});
;// CONCATENATED MODULE: ./src/components/Pages/PageInit.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var Pages_PageInitvue_type_script_setup_true_lang_js_ = (PageInitvue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./src/components/Pages/PageInit.vue





/* normalize component */
;
var PageInit_component = (0,componentNormalizer/* default */.Z)(
  Pages_PageInitvue_type_script_setup_true_lang_js_,
  PageInitvue_type_template_id_20226881_render,
  PageInitvue_type_template_id_20226881_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PageInit = (PageInit_component.exports);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js + 1 modules
var VAvatar = __webpack_require__(5705);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js + 2 modules
var VMenu = __webpack_require__(6657);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Pages/PageScreener.vue?vue&type=template&id=512e05aa&









var PageScreenervue_type_template_id_512e05aa_render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c(VContainer/* default */.Z,{staticClass:"ghx-stepper-body pa-0"},[_c(VRow/* default */.Z,[_c(VCol/* default */.Z,{attrs:{"cols":12}},[_c(VCard/* default */.Z,{staticClass:"ghx-glass-background pa-0",attrs:{"flat":""}},[_c(components_VCard/* VCardText */.ZB,{staticClass:"text-center pa-0 ghx-stepper-body__wrapper"},[(_setup.isStyleOne)?[_c('p',{staticClass:"text-h6 font-weight-medium text-center",domProps:{"innerHTML":_vm._s(_setup.page.firstInstuction)}}),_c('p',{staticClass:"ghx-slide-text-header text-h2 font-weight-medium text--primary",domProps:{"innerHTML":_vm._s(_setup.page.title)}}),_c('p',{staticClass:"text-center text-subtitle-1 font-weight-normal ma-0",domProps:{"innerHTML":_vm._s(_setup.page.secondInstuction)}})]:[_c('div',{staticClass:"ghx-stepper-content__title-wrapper"},[_c(VCol/* default */.Z,{staticClass:"pa-0 text-right col-sm-hide col-xs-hide",attrs:{"cols":6}},[_c(VImg/* default */.Z,{staticClass:"ghx-stepper-content__title-icon",attrs:{"src":_setup.plugin_url + _setup.page.icon,"width":"80","height":"80","max-width":"80"}})],1),_c(VCol/* default */.Z,{staticClass:"pa-0 text-left col-12 col-sm-6 col-sm-hide col-xs-hide"},[_c('p',{staticClass:"ghx-stepper-content__question ma-0",domProps:{"innerHTML":_vm._s(_setup.page.title)}})]),_c(VCol/* default */.Z,{staticClass:"pa-0 text-center col-md-hide col-lg-hide",attrs:{"cols":12}},[_c('p',{staticClass:"ghx-stepper-content__question ma-0",domProps:{"innerHTML":_vm._s(_setup.page.title)}})])],1),_c('div',{staticClass:"ghx-stepper-content__instruction-wrapper"},[_c(VCol/* default */.Z,{staticClass:"pa-0 text-right col-sm-hide col-xs-hide",attrs:{"cols":6}},[_c('p',{staticClass:"ghx-stepper-content__instruction-1 ma-0",domProps:{"innerHTML":_vm._s(_setup.page.firstInstuction)}})]),_c(VCol/* default */.Z,{staticClass:"pa-0 text-left col-sm-hide col-xs-hide",attrs:{"cols":6}},[_c('p',{staticClass:"ghx-stepper-content__instruction-2 ma-0",domProps:{"innerHTML":_vm._s(_setup.page.secondInstuction)}})]),_c(VCol/* default */.Z,{staticClass:"pa-0 text-center col-md-hide col-lg-hide mb-4",attrs:{"cols":12}},[_c('div',{staticClass:"ghx-stepper-content__instruction-1 ma-0 py-2"},[_c('object',{staticClass:"ghx-stepper-content__title-icon",attrs:{"data":_setup.plugin_url + _setup.page.icon,"width":"58","height":"41","max-width":"58"}}),_c('span',{domProps:{"innerHTML":_vm._s(_setup.page.firstInstuction)}})])]),_c(VCol/* default */.Z,{staticClass:"pa-0 text-center col-md-hide col-lg-hide",attrs:{"cols":12}},[_c('p',{staticClass:"ghx-stepper-content__instruction-2 ma-0",domProps:{"innerHTML":_vm._s(_setup.page.secondInstuction)}})])],1)]],2),_c(components_VCard/* VCardText */.ZB,{staticClass:"text-center pb-0 pt-xs-8 ghx-stepper-body__content pb-0"},[_c('div',{staticClass:"pb-0"},_vm._l((_setup.ticksLabels),function(i,k){return _c(VMenu/* default */.Z,{key:_setup.page.order + '-' + k,ref:"menuRef",refInFor:true,attrs:{"eager":"","close-on-content-click":true,"index":k,"nudge-width":200,"min-width":"170","max-width":"220","offset-y":"","position-x":100,"content-class":'ghx-play-tick-instruction ghx-play-tick-instruction--' +  k + ' menu-tick-' + _setup.page.order + `${_setup.is_tick_instruction_closed ? ' ghx-play-tick-instruction--closed': ''} ${_setup.pageStyle ? 'ghx-play-tick-instruction--' + _setup.pageStyle: ''}`},scopedSlots:_vm._u([{key:"activator",fn:function({ on, attrs }){return [_c(VAvatar/* default */.Z,_vm._g(_vm._b({staticClass:"ghx-sound-tick mx-2",class:[{active: _setup.activeTick === i, activated: _setup.activeTick >= i}],attrs:{"color":_setup.activeTick >= i  ? 'primary' : 'grey',"size":40 + (k + k)},on:{"click":function($event){_setup.activeTick = i; _setup.playTick(i)}}},'v-avatar',attrs,false),on),[_c('span',{staticClass:"text-h5 pa-5"},[_vm._v(_vm._s(i))])])]}}],null,true),model:{value:(_setup.menu[`btn${i}`]),callback:function ($$v) {_vm.$set(_setup.menu, `btn${i}`, $$v)},expression:"menu[`btn${i}`]"}},[_c(VCard/* default */.Z,[_c(components_VCard/* VCardText */.ZB,[_c('p',{staticClass:"ma-0 font-weight-bold",domProps:{"innerHTML":_vm._s(_setup.details?.clickedSoundInfo || 'Find the tone that you can barely hear and hit continue')}})])],1)],1)}),1)])],1)],1)],1)],1)
}
var PageScreenervue_type_template_id_512e05aa_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/howler/dist/howler.js
var howler = __webpack_require__(1766);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Pages/PageScreener.vue?vue&type=script&setup=true&lang=js&






/* harmony default export */ var PageScreenervue_type_script_setup_true_lang_js_ = ({
  __name: 'PageScreener',
  props: {
  page: {
    type: Object,
    default: () => {}
  },
  currentOrder: {
      type: Number,
      default: () => 0
  },
  forceStopAudio: {
    type: Boolean,
    default: false
  },
},
  emits: ['on-item-selected', 'on-item-emptied'],
  setup(__props, { expose, emit }) {

const props = __props





const store = questionnaire()

const selectedItem = (0,vue_runtime_esm/* ref */.iH)(null)
const activeTick = (0,vue_runtime_esm/* ref */.iH)(0)
const rangeTick = (0,vue_runtime_esm/* ref */.iH)(1)
const ticksLabels = (0,vue_runtime_esm/* ref */.iH)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
const dbhl = (0,vue_runtime_esm/* ref */.iH)({1: 0, 2: 5, 3: 10, 4: 15, 5: 20, 6: 25, 7: 30, 8: 40, 9: 45, 10: 50, 11: 60, 12: 70 })
const menu = (0,vue_runtime_esm/* ref */.iH)({
  btn1: false,
  btn2: false,
  btn3: false,
  btn4: false,
  btn5: false,
  btn6: false,
  btn7: false,
  btn8: false,
  btn9: false,
  btn10: false,
  btn11: false,
  btn12: false,
})
const menuRef = (0,vue_runtime_esm/* ref */.iH)([])
const is_tick_instruction_closed = (0,vue_runtime_esm/* ref */.iH)(false)
const menuTimeout = (0,vue_runtime_esm/* ref */.iH)(null)
const isPlayed  = (0,vue_runtime_esm/* ref */.iH)(false)
const sound = (0,vue_runtime_esm/* ref */.iH)(null)
const skip = (0,vue_runtime_esm/* ref */.iH)(false)

const page = (0,vue_runtime_esm/* computed */.Fl)(() => props.page)
const currentOrder = (0,vue_runtime_esm/* computed */.Fl)(() => props.currentOrder)
const details = (0,vue_runtime_esm/* computed */.Fl)(() => page.value.form)
const defaultAudio = (0,vue_runtime_esm/* computed */.Fl)(() => {
  var ear = Util.capitalizeFirstLetter(details.value?.ear);
  var hz = details.value?.hz;
  
  return store.getUserApiData?.[ear]?.experiment?.[hz] ?? 25
})
const pageStyle = (0,vue_runtime_esm/* computed */.Fl)(() => page.value.style || 'style-1')
const isStyleOne = (0,vue_runtime_esm/* computed */.Fl)(() => pageStyle.value === 'style-1')
const isStyleTwo = (0,vue_runtime_esm/* computed */.Fl)(() => pageStyle.value === 'style-2')
const plugin_url = (0,vue_runtime_esm/* computed */.Fl)(() => store.ghxSettings?.plugin_url ?? '')

expose({sound, menuTimeout})

;(0,vue_runtime_esm/* onBeforeUnmount */.Jd)(() => {
  skip.value = true
})

;(0,vue_runtime_esm/* watch */.YP)(() => props.forceStopAudio, (val) => {
  if (val)
    sound.value.stop();
})

;(0,vue_runtime_esm/* watch */.YP)(selectedItem, (val) => {
  if (val) {
    var resource = {
        selected: val,
        resource: page.value
    };
    
    emit('on-item-selected', resource)
  } else
      emit('on-item-emptied')
}, {deep: true})

;(0,vue_runtime_esm/* watch */.YP)(currentOrder, (val) => {
  clearSelection()
      
  if (val === page.value.order) {
    const hz = details.value?.hz;
    
    if (hz) {
      if (hz !== '500')
        is_tick_instruction_closed.value = true
          
      var ear = details.value?.ear;
      var defaultVal = defaultAudio.value;
      var tempMenu = menuRef.value[ticksLabels.value.find(item => dbhl.value[item] === defaultVal)]
      ear = Util.capitalizeFirstLetter(ear);
      
      if (tempMenu) {
        tempMenu.value = false
        
        menuTimeout.value = setTimeout(_=> {
          tempMenu.value = true
          
          for (const property in dbhl.value) {
            if (dbhl.value[property] === defaultVal) 
            menu.value['btn' + property] = true
          }
        }, 1000)
      }
      
      if (defaultVal >= 0) {
        var intensityDbHL
        
        Object.entries(dbhl.value).forEach(([key, value]) => {
          if (parseInt(defaultVal) === value) {
            intensityDbHL = parseInt(key)
            return
          }
        })
          
        selectedItem.value = {
          volume: intensityDbHL,
          hz: defaultVal
        }
        
        store.mergeUserApiData({
          experiment: {
            ...store.getUserApiData[ear]?.experiment || {}, 
            ...{ [hz]: defaultVal }
          } 
        }, ear);
        
        activeTick.value = intensityDbHL;
        rangeTick.value = activeTick.value + 1
      }
      else
        emit('on-item-emptied')
    }
  }
  else {
    isPlayed.value = false
    
    if (sound.value) 
      sound.value.stop();
  }
})

function playTick(level) {
  clearSelection()
  
  if (!is_tick_instruction_closed.value) {
    is_tick_instruction_closed.value = true;
    
    for (const property in menu.value) {
      if (menu.value[property] === true) {
        is_tick_instruction_closed.value = false;
        
        return
      }
    }
  }
  
  if (sound.value)
    sound.value.stop();
  
  var ear = details.value?.ear;
  const hz = details.value?.hz;
  const hl_to_spldb = {500: 13.5, 1000:  7.5, 2000: 9.0, 4000: 12.0};
  
  const maxdb = 100.0
  const hlzero = hl_to_spldb[hz]
  
  const lowerdb = Math.max(0, maxdb - (hlzero + dbhl.value[level]))
  
  const volume = Math.pow(10, -lowerdb / 20)
  const audioFile = plugin_url.value + store.getAudioFiles[hz];

  sound.value = new howler.Howl({
    src: audioFile,
    html5: true,
    volume: volume,
    stereo: ear === 'left' ? -1: 1,
    onplay: _=> {
      selectedItem.value = {
        volume: level,
        hz: hz
      };
      
      rangeTick.value = rangeTick.value === activeTick.value ? rangeTick.value + 1: rangeTick.value;
    }
  });

  ear = Util.capitalizeFirstLetter(ear);
  
  store.mergeUserApiData({
    experiment: 
    {
      ...store.getUserApiData[ear]?.experiment || {}, 
      ...{ [hz]: dbhl.value[level] }
    } 
  }, ear);
  
  sound.value.play();
}
    
function clearSelection() {
  clearTimeout(menuTimeout.value)
  
  for (const property in menu.value) {
    menu.value[property] = false
  }
}

return { __sfc: true,emit, props, store, selectedItem, activeTick, rangeTick, ticksLabels, dbhl, menu, menuRef, is_tick_instruction_closed, menuTimeout, isPlayed, sound, skip, page, currentOrder, details, defaultAudio, pageStyle, isStyleOne, isStyleTwo, plugin_url, playTick, clearSelection }
}

});
;// CONCATENATED MODULE: ./src/components/Pages/PageScreener.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var Pages_PageScreenervue_type_script_setup_true_lang_js_ = (PageScreenervue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./src/components/Pages/PageScreener.vue





/* normalize component */
;
var PageScreener_component = (0,componentNormalizer/* default */.Z)(
  Pages_PageScreenervue_type_script_setup_true_lang_js_,
  PageScreenervue_type_template_id_512e05aa_render,
  PageScreenervue_type_template_id_512e05aa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PageScreener = (PageScreener_component.exports);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Pages/PageResult.vue?vue&type=template&id=ace30756&








var PageResultvue_type_template_id_ace30756_render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c(VContainer/* default */.Z,{staticClass:"ghx-stepper-body ghx-result-page pa-0",class:[{'ghx-result-page--active': _setup.animationStarted}]},[_c(VRow/* default */.Z,[_c(VCol/* default */.Z,{attrs:{"cols":12}},[_c(VCard/* default */.Z,{staticClass:"ghx-glass-background pa-0",attrs:{"flat":""}},[_c(components_VCard/* VCardText */.ZB,{staticClass:"text-center pa-0"},[(_setup.page.title)?_c('p',{staticClass:"ghx-stepper-content__question",domProps:{"innerHTML":_vm._s(_setup.page.title)}}):_vm._e(),(_setup.page.secondInstuction)?_c('p',{staticClass:"ghx-stepper-content__instruction-2 text-center",domProps:{"innerHTML":_vm._s(_setup.page.secondInstuction)}}):_vm._e()]),_c(components_VCard/* VCardText */.ZB,{staticClass:"text-center pt-0 ghx-stepper-body__content ghx-screening"},[_c('div',{staticClass:"ghx-screening__left"},[_c('h2',{staticClass:"ghx-screening__title"},[_vm._v("Left Ear")]),_c('h3',{staticClass:"ghx-screening__desc"},[_vm._v("Indication of hearing loss")]),_c('div',{staticClass:"ghx-screening__result"},[_c('div',{staticClass:"ghx-screening__result__wrapper"},[_c(VProgressLinear/* default */.Z,{staticClass:"ghx-screening__result__indicator",attrs:{"value":_setup.leftResultValue,"height":"56","color":"undefined"}}),_c('div',{staticClass:"ghx-screening__result__indicator__borders"},[_c('span',{staticClass:"ghx-screening__result__indicator__borders__item"}),_c('span',{staticClass:"ghx-screening__result__indicator__borders__item"}),_c('span',{staticClass:"ghx-screening__result__indicator__borders__item"}),_c('span',{staticClass:"ghx-screening__result__indicator__borders__item"})])],1),_c('div',{staticClass:"ghx-screening__result__label"},[_c('h3',[_vm._v("Normal")]),_c('h3',[_vm._v("Profound")])])])]),_c('div',{staticClass:"ghx-screening__right"},[_c('h2',{staticClass:"ghx-screening__title"},[_vm._v("Right Ear")]),_c('h3',{staticClass:"ghx-screening__desc"},[_vm._v("Indication of hearing loss")]),_c('div',{staticClass:"ghx-screening__result"},[_c('div',{staticClass:"ghx-screening__result__wrapper"},[_c(VProgressLinear/* default */.Z,{staticClass:"ghx-screening__result__indicator",attrs:{"value":_setup.rightResultValue,"height":"56","color":"undefined"}}),_c('div',{staticClass:"ghx-screening__result__indicator__borders"},[_c('span',{staticClass:"ghx-screening__result__indicator__borders__item"}),_c('span',{staticClass:"ghx-screening__result__indicator__borders__item"}),_c('span',{staticClass:"ghx-screening__result__indicator__borders__item"}),_c('span',{staticClass:"ghx-screening__result__indicator__borders__item"})])],1),_c('div',{staticClass:"ghx-screening__result__label"},[_c('h3',[_vm._v("Normal")]),_c('h3',[_vm._v("Profound")])])])])]),_c(components_VCard/* VCardText */.ZB,{staticClass:"text-center ghx-stepper-body__content ghx-booking"},[_c('div',{staticClass:"ghx-booking__bg"}),_c('div',{staticClass:"ghx-booking__wrapper"},[_c('div',{staticClass:"ghx-booking__content"},[_c('h2',{staticClass:"ghx-booking__title"},[_vm._v("Book a Free Appointment")]),_c('h2',{staticClass:"ghx-booking__quote"},[_vm._v("Take the Next Step")]),_c('p',{staticClass:"ghx-booking__description"},[_vm._v("Living with hearing loss doesn’t need to feel difficult or overwhelming. With hearing aids, you can continue to live life to the fullest and hear what matters the most to you")]),_c('div',{staticClass:"ghx-booking__btns"},[_c(VBtn/* default */.Z,{staticClass:"ghx-btn ghx-btn--primary",class:[`ghx-btn--${_setup.btnStyle}`],attrs:{"large":"","rounded":"","depressed":"","color":"undefined","height":"50"},on:{"click":_setup.onClickAppointment}},[_vm._v(" Book an Appointment ")]),_c(VBtn/* default */.Z,{staticClass:"ghx-btn ghx-btn--secondary",class:[`ghx-btn--${_setup.btnStyle}`],attrs:{"large":"","rounded":"","depressed":"","color":"undefined","height":"50"},on:{"click":_setup.onClickStartChat}},[_vm._v(" Start a Chat ")])],1)])])]),_c(components_VCard/* VCardText */.ZB,{staticClass:"text-center ghx-stepper-body__content ghx-assessment"},[_c('div',{staticClass:"ghx-assessment__image"}),_c('div',{staticClass:"ghx-assessment__content"},[_c('h2',{staticClass:"ghx-assessment__title"},[_vm._v(" Comprehensive Hearing Assesssment ")]),_c('p',{staticClass:"ghx-assessment__description"},[_vm._v(" Untreated hearing loss makes communicating with friends and loved ones difficult and can lead to isolation and other serious health risks. ")]),_c('p',{staticClass:"ghx-assessment__description"},[_vm._v(" If you’re experiencing hearing loss, don’t wait to seek treatment. Visit your local Beltone office for a free hearing assessment that measures your hearing loss and helps your hearing care professional determine if hearing aids are a good fit for you. ")]),_c(VBtn/* default */.Z,{staticClass:"ghx-btn ghx-btn--primary",class:[`ghx-btn--${_setup.btnStyle}`],attrs:{"large":"","rounded":"","depressed":"","color":"undefined","height":"50"},on:{"click":_setup.onClickOfficeVisit}},[_vm._v(" What to Expect at Your Office Visit ")])],1)])],1)],1)],1)],1)
}
var PageResultvue_type_template_id_ace30756_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Pages/PageResult.vue?vue&type=script&setup=true&lang=js&





/* harmony default export */ var PageResultvue_type_script_setup_true_lang_js_ = ({
  __name: 'PageResult',
  props: {
  page: {
    type: Object,
    default: () => {}
  },
  theme: {
    type: Object,
    default: () => {}
  },
  currentOrder: {
    type: Number,
    default: () => 0
  }
},
  setup(__props) {

const props = __props



const store = questionnaire()

const resultValues = (0,vue_runtime_esm/* ref */.iH)([
  { result: 'NoImpairment', value: 7 },
  { result: 'SlightImpairment', value: 25 },
  { result: 'ModerateImpairment', value: 50 },
  { result: 'SevereImpairment', value: 75 },
  { result: 'ProfoundImpairment', value: 100 }
])
const animationStarted = (0,vue_runtime_esm/* ref */.iH)(false)
const timeout = (0,vue_runtime_esm/* ref */.iH)(null)

const page = (0,vue_runtime_esm/* computed */.Fl)(() => props.page)
const theme = (0,vue_runtime_esm/* computed */.Fl)(() => props.theme)
const currentOrder = (0,vue_runtime_esm/* computed */.Fl)(() => props.currentOrder)
const btnStyle = (0,vue_runtime_esm/* computed */.Fl)(() => theme.value.btnStyle || 'style-1')
const leftResultValue = (0,vue_runtime_esm/* computed */.Fl)(() => {
  const result = store.userApiData?.Left?.analyze

  if (!result)
    return 7

  return resultValues.value.find(item => item.result === result).value
})
const rightResultValue = (0,vue_runtime_esm/* computed */.Fl)(() => {
  const result = store.userApiData?.Right?.analyze

  if (!result)
      return 7
  
  return resultValues.value.find(item => item.result === result).value
})

;(0,vue_runtime_esm/* watch */.YP)(currentOrder, (val) => {
  if (val === page.value.order) {
      clearTimeout(timeout.value)

      timeout.value = setTimeout(_=> {
          animationStarted.value = true
          clearTimeout(timeout.value)
      }, 600)
  }
})

function onClickAppointment() {
  const ga_btn = page.value?.googleAnalytics?.find(item => item.type === 'btnAppointment')

  Util.generateGoogleAnalytics(ga_btn.value, page.value)
}

function onClickStartChat() {
  const ga_btn = page.value?.googleAnalytics?.find(item => item.type === 'btnStartChat')

  Util.generateGoogleAnalytics(ga_btn.value, page.value)
}

function onClickOfficeVisit() {
  const ga_btn = page.value?.googleAnalytics?.find(item => item.type === 'btnOfficeVisit')

  Util.generateGoogleAnalytics(ga_btn.value, page.value)
}

return { __sfc: true,props, store, resultValues, animationStarted, timeout, page, theme, currentOrder, btnStyle, leftResultValue, rightResultValue, onClickAppointment, onClickStartChat, onClickOfficeVisit }
}

});
;// CONCATENATED MODULE: ./src/components/Pages/PageResult.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var Pages_PageResultvue_type_script_setup_true_lang_js_ = (PageResultvue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./src/components/Pages/PageResult.vue





/* normalize component */
;
var PageResult_component = (0,componentNormalizer/* default */.Z)(
  Pages_PageResultvue_type_script_setup_true_lang_js_,
  PageResultvue_type_template_id_ace30756_render,
  PageResultvue_type_template_id_ace30756_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PageResult = (PageResult_component.exports);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js + 1 modules
var VListItem = __webpack_require__(5656);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAvatar.js + 1 modules
var VListItemAvatar = __webpack_require__(8208);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 8 modules
var VList = __webpack_require__(6063);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Pages/PageInstruction.vue?vue&type=template&id=3b196802&











var PageInstructionvue_type_template_id_3b196802_render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c(VContainer/* default */.Z,{staticClass:"ghx-stepper-body pa-0",class:['ghx-stepper-body__wrapper--v' + _setup.version]},[_c(VRow/* default */.Z,[_c(VCol/* default */.Z,{attrs:{"cols":12}},[(_setup.page.form.type !== 'info2')?_c(VCard/* default */.Z,{staticClass:"ghx-glass-background pa-0",attrs:{"flat":""}},[_c(components_VCard/* VCardText */.ZB,{staticClass:"text-center pa-0"},[(_setup.page.title)?_c('p',{staticClass:"ghx-stepper-content__question",domProps:{"innerHTML":_vm._s(_setup.page.title)}}):_vm._e(),(_setup.page.secondInstuction)?_c('p',{staticClass:"ghx-stepper-content__instruction-2 text-center",domProps:{"innerHTML":_vm._s(_setup.page.secondInstuction)}}):_vm._e()]),_c(components_VCard/* VCardText */.ZB,{staticClass:"text-center pb-0 ghx-stepper-body__content"},[_c(VRow/* default */.Z,{staticClass:"mt-0 pb-0 justify-center"},_vm._l((_setup.details.options),function(item,nkey){return _c(VCol/* default */.Z,{key:nkey,staticClass:"align-center ghx-instruction-box",class:[_setup.version === '3' ? 'px-3': 'px-2'],attrs:{"cols":"4"}},[_c(VCard/* default */.Z,{staticClass:"pa-2 ghx-screening-info-box ghx-screening-info-box--v1",class:[
                                    {'ghx-instruction-box__no-title': _setup.is_empty(item.label)}],attrs:{"flat":""}},[(item.label)?_c(components_VCard/* VCardText */.ZB,{staticClass:"ghx-instruction-box__title"},[_c('p',{staticClass:"text-title text-left font-weight-bold ma-0 text-center"},[_vm._v(_vm._s(item.label))])]):_vm._e(),(nkey === 0 && _setup.page.form.type === 'info1')?_c(components_VCard/* VCardText */.ZB,{staticClass:"py-0 pt-2 pb-4 text-left"},[_vm._l((item.content),function(content,index){return [_c('p',{key:`${content.label}${index}`,staticClass:"text-subtitle-1 font-weight-medium ma-0 pt-1"},[_c('span',{staticClass:"ghx-icon"},[_c('img',{staticClass:"mr-2",attrs:{"width":"16px","height":"16px","src":_setup.plugin_url + content.icon}})]),_vm._v(" "+_vm._s(content.label)+" ")])]})],2):_vm._e(),(!(nkey === 0 && _setup.page.form.type === 'info1'))?[(Array.isArray(item.content))?_c(components_VCard/* VCardText */.ZB,{staticClass:"pa-0 pb-4",class:{hidden: nkey === 0 && _setup.page.form.type === 'info1'}},[_vm._l((item.content),function(content,index){return [(!content.type || content.type !== 'button')?_c(VListItem/* default */.Z,{key:`content-${index}`,class:{'ghx-instruction-box__content-wrapper--icon-only': !content.label && !content.description}},[_c(VListItemAvatar/* default */.Z,{staticClass:"ghx-instruction-box__avatar",attrs:{"tile":"","rounded":content.icon ? '0': 'sm',"size":content.icon ? '30': '32',"color":content.icon ? 'transparent': ''}},[_c('span',{staticClass:"ghx-icon"},[(content.icon)?_c('img',{staticClass:"force-size-30",attrs:{"width":"30px","height":"30px","src":_setup.plugin_url + content.icon}}):(content.order)?[_vm._v(_vm._s(content.order))]:_vm._e()],2)]),(content.label || content.description)?_c(components_VCard/* VCardText */.ZB,{staticClass:"pa-0 text-left"},[(content.label)?_c('p',{staticClass:"text-subtitle-1 font-weight-medium ma-0 mb-2 pt-1",domProps:{"innerHTML":_vm._s(content.label)}}):_vm._e(),(content.description)?_c(VList/* VListItemSubtitle */.oZ,{staticClass:"ghx-instruction-box__desc text-left pa-0",domProps:{"innerHTML":_vm._s(content.description)}}):_vm._e()],1):_vm._e()],1):_c('div',{key:index,staticClass:"px-4 pb-2 pb-sm-4"},[_c(VBtn/* default */.Z,{staticClass:"ghx-btn ghx-btn--primary ghx-btn ghx-btn--primary--has-icon ghx-btn--primary--text ghx-btn-play-song ghx-btn--animate-right",class:[`ghx-btn--${_setup.btnStyle}`],attrs:{"large":"","rounded":"","depressed":"","text":"","ripple":false,"min-width":"0","color":"undefined"},on:{"click":function($event){return _setup.onPlayPause(_setup.plugin_url + 'assets/audio/hl_sound_check.mp3')}}},[_vm._v(" "+_vm._s(_setup.isPlayed ? content.alterLabel: content.label)+" "),_c(_setup.SvgIcons,{attrs:{"name":"continue"}})],1)],1)]})],2):_c(components_VCard/* VCardText */.ZB,{staticClass:"py-0"},[_c('p',{staticClass:"text-title text-left text-center",domProps:{"innerHTML":_vm._s(item.content)}})])]:_vm._e()],2)],1)}),1)],1)],1):_c(VCard/* default */.Z,{staticClass:"ghx-glass-background pa-0",attrs:{"flat":""}},[_c(components_VCard/* VCardText */.ZB,{staticClass:"text-left pa-0"},[_c('p',{staticClass:"ghx-slide-text-header ghx-stepper-content__question text--primary text-center"},[_vm._v(_vm._s(_setup.page.title))]),_c('p',{staticClass:"text-body-1 text-center"},[_vm._v(" Background noises like air conditioning, fridges, and street traffic can interfere with the test. ")]),_c(components_VCard/* VCardText */.ZB,{staticClass:"text-center pb-0"},[_c(VRow/* default */.Z,{staticClass:"pt-6 pb-0 justify-center"},_vm._l((_setup.details.options),function(i,key){return _c(VCol/* default */.Z,{key:key,staticClass:"align-center px-2 ghx-instruction-box",attrs:{"cols":"4"}},[_c(VCard/* default */.Z,{staticClass:"pa-2 ghx-screening-info-box ghx-screening-info-box--v2",attrs:{"flat":""}},[_c(components_VCard/* VCardText */.ZB,[_c('p',{staticClass:"text-body-1 text-left font-weight-bold text-center mb-0"},[_c('span',{staticClass:"text-body-1 font-weight-bold pr-1"},[_vm._v(_vm._s(key + 1))]),_vm._v(" "+_vm._s(i.content[0].description)+" ")])]),(key === 1)?_c('div',{staticClass:"px-4 pb-4"},[_c('button',{staticClass:"ghx-btn ghx-btn--primary ghx-btn-play-song",on:{"click":function($event){return _setup.onPlayPause(_setup.plugin_url + 'assets/audio/hl_sound_check.mp3')}}},[_vm._v(" "+_vm._s(_setup.isPlayed ? 'Stop Song': 'Play Song')+" "),_c(VIcon/* default */.Z,{attrs:{"right":""}},[_vm._v("mdi-arrow-right")])],1)]):_vm._e()],1)],1)}),1)],1)],1)],1)],1)],1)],1)
}
var PageInstructionvue_type_template_id_3b196802_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Svg/SvgIcons.vue?vue&type=template&id=5c5d625d&
var SvgIconsvue_type_template_id_5c5d625d_render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c(_setup.svgName,{tag:"component"})
}
var SvgIconsvue_type_template_id_5c5d625d_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Svg/SaveMySpotSvg.vue?vue&type=template&id=a20285fe&
var SaveMySpotSvgvue_type_template_id_a20285fe_render = function render(){var _vm=this,_c=_vm._self._c;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24"}},[_c('g',{attrs:{"id":"Layer_2","data-name":"Layer 2"}},[_c('g',{attrs:{"id":"Layer_2-2","data-name":"Layer 2"}},[_c('g',{attrs:{"id":"_08-save-my-spot","data-name":"08-save-my-spot"}},[_c('rect',{staticClass:"ghx-svg-cls-1",attrs:{"width":"24","height":"24"}}),_c('path',{staticClass:"ghx-svg-cls-2",attrs:{"d":"M14.5,8.55h-5"}}),_c('path',{staticClass:"ghx-svg-cls-2",attrs:{"d":"M12,6.11v5"}}),_c('path',{staticClass:"ghx-svg-cls-2",attrs:{"d":"M18.68,21.66l-5.53-3.53a2.13,2.13,0,0,0-2.3,0L5.32,21.66a.53.53,0,0,1-.82-.45V4.39A2.14,2.14,0,0,1,6.64,2.25H17.36A2.14,2.14,0,0,1,19.5,4.39V21.21A.53.53,0,0,1,18.68,21.66Z"}})])])])])
}
var SaveMySpotSvgvue_type_template_id_a20285fe_staticRenderFns = []


;// CONCATENATED MODULE: ./src/components/Svg/SaveMySpotSvg.vue

var script = {}


/* normalize component */
;
var SaveMySpotSvg_component = (0,componentNormalizer/* default */.Z)(
  script,
  SaveMySpotSvgvue_type_template_id_a20285fe_render,
  SaveMySpotSvgvue_type_template_id_a20285fe_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SaveMySpotSvg = (SaveMySpotSvg_component.exports);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Svg/SaveMySportExitSvg.vue?vue&type=template&id=352e11ea&
var SaveMySportExitSvgvue_type_template_id_352e11ea_render = function render(){var _vm=this,_c=_vm._self._c;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24"}},[_c('g',{attrs:{"id":"Layer_2","data-name":"Layer 2"}},[_c('g',{attrs:{"id":"Layer_2-2","data-name":"Layer 2"}},[_c('g',{attrs:{"id":"_09-save-my-spot-exit","data-name":"09-save-my-spot-exit"}},[_c('rect',{staticClass:"ghx-svg-cls-1",attrs:{"width":"24","height":"24"}}),_c('path',{staticClass:"ghx-svg-cls-2",attrs:{"d":"M13.93,6.59,10,10.54"}}),_c('path',{staticClass:"ghx-svg-cls-2",attrs:{"d":"M10,6.64l4,4"}}),_c('path',{staticClass:"ghx-svg-cls-2",attrs:{"d":"M18.68,21.66l-5.53-3.53a2.13,2.13,0,0,0-2.3,0L5.32,21.66a.53.53,0,0,1-.82-.45V4.39A2.14,2.14,0,0,1,6.64,2.25H17.36A2.14,2.14,0,0,1,19.5,4.39V21.21A.53.53,0,0,1,18.68,21.66Z"}})])])])])
}
var SaveMySportExitSvgvue_type_template_id_352e11ea_staticRenderFns = []


;// CONCATENATED MODULE: ./src/components/Svg/SaveMySportExitSvg.vue

var SaveMySportExitSvg_script = {}


/* normalize component */
;
var SaveMySportExitSvg_component = (0,componentNormalizer/* default */.Z)(
  SaveMySportExitSvg_script,
  SaveMySportExitSvgvue_type_template_id_352e11ea_render,
  SaveMySportExitSvgvue_type_template_id_352e11ea_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SaveMySportExitSvg = (SaveMySportExitSvg_component.exports);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Svg/CheckmarkSvg.vue?vue&type=template&id=65cdc7fa&
var CheckmarkSvgvue_type_template_id_65cdc7fa_render = function render(){var _vm=this,_c=_vm._self._c;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24"}},[_c('g',{attrs:{"id":"Layer_2","data-name":"Layer 2"}},[_c('g',{attrs:{"id":"Layer_2-2","data-name":"Layer 2"}},[_c('g',{attrs:{"id":"_19-checkmark","data-name":"19-checkmark"}},[_c('rect',{staticClass:"ghx-svg-cls-1",attrs:{"width":"24","height":"24"}}),_c('path',{staticClass:"ghx-svg-cls-2",attrs:{"d":"M1.92,12l6.71,6.71L22.08,5.29"}})])])])])
}
var CheckmarkSvgvue_type_template_id_65cdc7fa_staticRenderFns = []


;// CONCATENATED MODULE: ./src/components/Svg/CheckmarkSvg.vue

var CheckmarkSvg_script = {}


/* normalize component */
;
var CheckmarkSvg_component = (0,componentNormalizer/* default */.Z)(
  CheckmarkSvg_script,
  CheckmarkSvgvue_type_template_id_65cdc7fa_render,
  CheckmarkSvgvue_type_template_id_65cdc7fa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CheckmarkSvg = (CheckmarkSvg_component.exports);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Svg/ContinueSvg.vue?vue&type=template&id=2c36830f&
var ContinueSvgvue_type_template_id_2c36830f_render = function render(){var _vm=this,_c=_vm._self._c;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24"}},[_c('g',{attrs:{"id":"Layer_2","data-name":"Layer 2"}},[_c('g',{attrs:{"id":"Layer_2-2","data-name":"Layer 2"}},[_c('g',{attrs:{"id":"_18-next","data-name":"18-next"}},[_c('rect',{staticClass:"ghx-svg-cls-1",attrs:{"width":"24","height":"24"}}),_c('path',{staticClass:"ghx-svg-cls-2",attrs:{"d":"M15.22,5.16l6,6a1.13,1.13,0,0,1,0,1.6l-6,6"}}),_c('path',{staticClass:"ghx-svg-cls-2",attrs:{"d":"M2.41,12H21.59"}})])])])])
}
var ContinueSvgvue_type_template_id_2c36830f_staticRenderFns = []


;// CONCATENATED MODULE: ./src/components/Svg/ContinueSvg.vue

var ContinueSvg_script = {}


/* normalize component */
;
var ContinueSvg_component = (0,componentNormalizer/* default */.Z)(
  ContinueSvg_script,
  ContinueSvgvue_type_template_id_2c36830f_render,
  ContinueSvgvue_type_template_id_2c36830f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ContinueSvg = (ContinueSvg_component.exports);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Svg/BackSvg.vue?vue&type=template&id=0888e2b2&
var BackSvgvue_type_template_id_0888e2b2_render = function render(){var _vm=this,_c=_vm._self._c;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24"}},[_c('g',{attrs:{"id":"Layer_2","data-name":"Layer 2"}},[_c('g',{attrs:{"id":"Layer_2-2","data-name":"Layer 2"}},[_c('g',{attrs:{"id":"_20-previous","data-name":"20-previous"}},[_c('rect',{staticClass:"ghx-svg-cls-1",attrs:{"width":"24","height":"24"}}),_c('path',{staticClass:"ghx-svg-cls-2",attrs:{"d":"M8.78,18.84l-6-6a1.13,1.13,0,0,1,0-1.6l6-6"}}),_c('path',{staticClass:"ghx-svg-cls-2",attrs:{"d":"M2.41,12H21.59"}})])])])])
}
var BackSvgvue_type_template_id_0888e2b2_staticRenderFns = []


;// CONCATENATED MODULE: ./src/components/Svg/BackSvg.vue

var BackSvg_script = {}


/* normalize component */
;
var BackSvg_component = (0,componentNormalizer/* default */.Z)(
  BackSvg_script,
  BackSvgvue_type_template_id_0888e2b2_render,
  BackSvgvue_type_template_id_0888e2b2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BackSvg = (BackSvg_component.exports);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Svg/CloseSvg.vue?vue&type=template&id=4ce18a69&
var CloseSvgvue_type_template_id_4ce18a69_render = function render(){var _vm=this,_c=_vm._self._c;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24"}},[_c('g',{attrs:{"id":"Layer_2","data-name":"Layer 2"}},[_c('g',{attrs:{"id":"Layer_2-2","data-name":"Layer 2"}},[_c('g',{attrs:{"id":"_21-close","data-name":"21-close"}},[_c('rect',{staticClass:"ghx-svg-cls-1",attrs:{"width":"24","height":"24"}}),_c('path',{staticClass:"ghx-svg-cls-2",attrs:{"d":"M3.18,20.82,20.82,3.18"}}),_c('path',{staticClass:"ghx-svg-cls-2",attrs:{"d":"M20.82,20.82,3.18,3.18"}})])])])])
}
var CloseSvgvue_type_template_id_4ce18a69_staticRenderFns = []


;// CONCATENATED MODULE: ./src/components/Svg/CloseSvg.vue

var CloseSvg_script = {}


/* normalize component */
;
var CloseSvg_component = (0,componentNormalizer/* default */.Z)(
  CloseSvg_script,
  CloseSvgvue_type_template_id_4ce18a69_render,
  CloseSvgvue_type_template_id_4ce18a69_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CloseSvg = (CloseSvg_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Svg/SvgIcons.vue?vue&type=script&setup=true&lang=js&









/* harmony default export */ var SvgIconsvue_type_script_setup_true_lang_js_ = ({
  __name: 'SvgIcons',
  props: {
    name: {
        type: String,
        default: ''
    }
},
  setup(__props) {

const props = __props



const svgName = (0,vue_runtime_esm/* computed */.Fl)(() => {
    switch (props.name) {
        case 'bookmark':
            return SaveMySpotSvg
        case 'bookmark-exit':
            return SaveMySportExitSvg
        case 'checkmark':
            return CheckmarkSvg
        case 'continue':
            return ContinueSvg
        case 'back':
            return BackSvg
        case 'close':
            return CloseSvg
        default:
            return ''
    }
})

return { __sfc: true,props, svgName }
}

});
;// CONCATENATED MODULE: ./src/components/Svg/SvgIcons.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var Svg_SvgIconsvue_type_script_setup_true_lang_js_ = (SvgIconsvue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./src/components/Svg/SvgIcons.vue





/* normalize component */
;
var SvgIcons_component = (0,componentNormalizer/* default */.Z)(
  Svg_SvgIconsvue_type_script_setup_true_lang_js_,
  SvgIconsvue_type_template_id_5c5d625d_render,
  SvgIconsvue_type_template_id_5c5d625d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SvgIcons = (SvgIcons_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Pages/PageInstruction.vue?vue&type=script&setup=true&lang=js&






/* harmony default export */ var PageInstructionvue_type_script_setup_true_lang_js_ = ({
  __name: 'PageInstruction',
  props: {
  page: {
    type: Object,
    default: () => {}
  },
  currentOrder: {
      type: Number,
      default: 0
  },
  version: {
    type: String,
    default: '1'
  },
  forceStopAudio: {
    type: Boolean,
    default: false
  },
},
  emits: ['on-save-spot'],
  setup(__props, { emit }) {

const props = __props





const store = questionnaire()

const audioExample = (0,vue_runtime_esm/* ref */.iH)(null)
const isPlayed = (0,vue_runtime_esm/* ref */.iH)(false)

const page = (0,vue_runtime_esm/* computed */.Fl)(() => props.page)
const version = (0,vue_runtime_esm/* computed */.Fl)(() => props.version)
const details = (0,vue_runtime_esm/* computed */.Fl)(() => page.value.form)
const config_object = (0,vue_runtime_esm/* computed */.Fl)(() => store.config)
const theme = (0,vue_runtime_esm/* computed */.Fl)(() => config_object.value.theme)
const btnStyle = (0,vue_runtime_esm/* computed */.Fl)(() => theme.value.btnStyle || 'style-1')
const currentOrder = (0,vue_runtime_esm/* computed */.Fl)(() => props.currentOrder)
const plugin_url = (0,vue_runtime_esm/* computed */.Fl)(() => store.ghxSettings?.plugin_url ?? '')

;(0,vue_runtime_esm/* watch */.YP)(() => props.forceStopAudio, (val) => {
  if (val)
    audioControl(isPlayed.value = false);
})

;(0,vue_runtime_esm/* watch */.YP)(currentOrder, (val) => {
  if (val !== page.value.order && audioExample.value)
      audioControl(isPlayed.value = false);
})

;(0,vue_runtime_esm/* onMounted */.bv)(() => {
  let elem = document.querySelector('#save-spot')
  if (elem)
      elem.addEventListener('click', () => emit('on-save-spot') )
})

function is_empty(val) {
  return Util.is_empty(val)
}
 
function onPlayPause(url) {
  let ga_btn_play_song

  if (audioExample.value) {
      audioExample.value.stop()
      ga_btn_play_song = page.value?.googleAnalytics?.find(item => item.type === 'btnStopSong')
  }
  else
      ga_btn_play_song = page.value?.googleAnalytics?.find(item => item.type === 'btnPlaySong')

  Util.generateGoogleAnalytics(ga_btn_play_song.value, page.value)
      
  isPlayed.value = !isPlayed.value
  
  audioExample.value = new Howl({
      src: url,
      html5: true,
      volume: 0.1
  })
  
  audioControl(isPlayed.value);
}
    
function audioControl(isPlayed) {
  if (!audioExample.value)
      return

  if (isPlayed)
      audioExample.value.play()
  else 
      audioExample.value.stop()
}

return { __sfc: true,emit, props, store, audioExample, isPlayed, page, version, details, config_object, theme, btnStyle, currentOrder, plugin_url, is_empty, onPlayPause, audioControl, SvgIcons: SvgIcons }
}

});
;// CONCATENATED MODULE: ./src/components/Pages/PageInstruction.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var Pages_PageInstructionvue_type_script_setup_true_lang_js_ = (PageInstructionvue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./src/components/Pages/PageInstruction.vue





/* normalize component */
;
var PageInstruction_component = (0,componentNormalizer/* default */.Z)(
  Pages_PageInstructionvue_type_script_setup_true_lang_js_,
  PageInstructionvue_type_template_id_3b196802_render,
  PageInstructionvue_type_template_id_3b196802_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PageInstruction = (PageInstruction_component.exports);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Pages/PageForm.vue?vue&type=template&id=69f29662&







var PageFormvue_type_template_id_69f29662_render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c(VContainer/* default */.Z,{staticClass:"ghx-stepper-body pa-0"},[_c(VRow/* default */.Z,[_c(VCol/* default */.Z,{staticClass:"col-lg-12 col-sm-12",attrs:{"cols":"12"}},[_c(VCard/* default */.Z,{staticClass:"ghx-glass-background pa-0",attrs:{"flat":""}},[_c(components_VCard/* VCardText */.ZB,{staticClass:"text-center pa-0"},[_c('p',{staticClass:"ghx-stepper-content__question text--primary mb-0 pb-8",domProps:{"innerHTML":_vm._s(_setup.page.title)}})]),_c(VRow/* default */.Z,[_c(VCol/* default */.Z,{attrs:{"cols":"12","lg":"6","md":"6"}},[_c(components_VCard/* VCardText */.ZB,{staticClass:"ghx-subtitle text-left pt-0 px-0 pb-4"},[_c('p',{staticClass:"text-subtitle-1 font-weight-light",domProps:{"innerHTML":_vm._s(_setup.page.message)}})])],1),_c(VCol/* default */.Z,{attrs:{"cols":"12","lg":"6","md":"6"}},[_c(components_VCard/* VCardText */.ZB,{staticClass:"pa-0 ghx-form"},[_c(VRow/* default */.Z,{staticClass:"my-0"},[_c('div',{domProps:{"innerHTML":_vm._s(_setup.ghxSettings?.ghx_wp_ajax_nonce)}}),_vm._l((_setup.page.form.fields),function(field,index){return _c(VCol/* default */.Z,{key:index,staticClass:"pb-0 pt-1",attrs:{"cols":"12"}},[_c(VTextField/* default */.Z,{staticClass:"ghx-form-input",attrs:{"disabled":_vm.disabled,"label":field.placeholder,"rules":[_setup.rules.required, _setup.rules[field.value]],"outlined":""},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter"))return null;return _vm.$emit('on-hit-enter', $event)}},model:{value:(_setup.form[field.value]),callback:function ($$v) {_vm.$set(_setup.form, field.value, $$v)},expression:"form[field.value]"}})],1)})],2)],1)],1)],1)],1)],1)],1)],1)
}
var PageFormvue_type_template_id_69f29662_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Pages/PageForm.vue?vue&type=script&setup=true&lang=js&





/* harmony default export */ var PageFormvue_type_script_setup_true_lang_js_ = ({
  __name: 'PageForm',
  props: {
  isShow: {
    type: Boolean,
    default: () => false,
  },
  page: {
    type: Object,
    default: () => {},
  },
  currentOrder: {
    type: Number,
    default: () => 0,
  },
  disabled: {
    type: Boolean,
    default: () => false,
  },
},
  emits: [
  "on-item-selected", 
  "on-item-emptied", 
  "on-reset",
  "on-hit-enter"],
  setup(__props, { emit }) {

const props = __props





const store = questionnaire();
const ZIP_CODE_NUMBER_LENGTH = 6;
const PHONE_NUMBER_LENGTH = 14;

const form = (0,vue_runtime_esm/* ref */.iH)({
  first_name: "",
  last_name: "",
  zip_code: "",
  email: "",
  phone_number: "",
});

const rules = (0,vue_runtime_esm/* ref */.iH)({
  required: (value) => !!value || "This field is required.",
  first_name: (value) => true,
  last_name: (value) => true,
  email: (value) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "Invalid e-mail.";
  },
  phone_number: (value) => {
    var x = value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    form.value.phone_number = !x[2]
      ? x[1]
      : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
    return form.value.phone_number.length === PHONE_NUMBER_LENGTH
      ? true
      : "Invalid phone number.";
  },
  zip_code: (value) => {
    var upcase = value.toUpperCase();
    var x = upcase.replace(/[^a-zA-Z0-9]/g, "").match(/([a-zA-Z0-9_-]{0,6})/);
    form.value.zip_code = x[1];

    return form.value.zip_code.length === ZIP_CODE_NUMBER_LENGTH ||
      form.value.zip_code.length === ZIP_CODE_NUMBER_LENGTH - 1
      ? true
      : "Invalid zip code.";
  },
});

const skip = (0,vue_runtime_esm/* ref */.iH)(false);

const config_object = (0,vue_runtime_esm/* computed */.Fl)(() => store.config);
const config = (0,vue_runtime_esm/* computed */.Fl)(() => config_object.value.config);
const page = (0,vue_runtime_esm/* computed */.Fl)(() => props.page);
const currentOrder = (0,vue_runtime_esm/* computed */.Fl)(() => props.currentOrder);
const  ghxSettings = (0,vue_runtime_esm/* computed */.Fl)(() => store.getGHXSettings);

const emptyForms = (0,vue_runtime_esm/* computed */.Fl)(() => {
  let hasEmptyObj = [];
  Object.keys(form.value).forEach((i) => {
    if (form.value[i] === "") {
      hasEmptyObj.push(i);
    }
  });
  return hasEmptyObj;
});
const isEmptyForm = (0,vue_runtime_esm/* computed */.Fl)(() => {
  return emptyForms.value.length > 0 ? true : false;
});
const validEmail = (0,vue_runtime_esm/* computed */.Fl)(() => rules.value.email(form.value.email) === true);
const validPhoneNumber = (0,vue_runtime_esm/* computed */.Fl)(
  () => form.value.phone_number.length === PHONE_NUMBER_LENGTH
);
const validZipCode = (0,vue_runtime_esm/* computed */.Fl)(
  () =>
    form.value.zip_code.length === ZIP_CODE_NUMBER_LENGTH ||
    form.value.zip_code.length === ZIP_CODE_NUMBER_LENGTH - 1
);
const storeForm = (0,vue_runtime_esm/* computed */.Fl)(() => store.getForm);
//const isShow = computed(() => props.isShow);

(0,vue_runtime_esm/* watch */.YP)(
  () => [
    isEmptyForm.value,
    validEmail.value,
    validPhoneNumber.value,
    validZipCode.value,
  ],
  ([val]) => {
    if (
      !val &&
      validEmail.value &&
      validPhoneNumber.value &&
      validZipCode.value
    ) {
      var resource = {
        selected: {
          ...form.value, 
          nonce: document.querySelector("input[name='ghx_nonce_field']").value,
          _wp_http_referer: document.querySelector("input[name='_wp_http_referer']").value,
        },
        resource: page.value,
      };
      
      emit("on-item-selected", resource);
    } else {
      emit("on-item-emptied");
    }
  }
);

// watch(
//   () => isShow.value,
//   (val) => {
//     if (!val) return;

//     if (
//       !isEmptyForm.value &&
//       validEmail.value &&
//       validPhoneNumber.value &&
//       validZipCode.value
//     ) {
//       var resource = {
//         selected: form.value,
//         resource: page.value,
//       };
//       emit("on-item-selected", resource);
//     } else {
//       emit("on-item-emptied");
//     }
//   }
// );

(0,vue_runtime_esm/* watch */.YP)(
  form,
  (val) => {
    store.updateForm(val);
    skip.value = true;
  },
  { deep: true }
);

(0,vue_runtime_esm/* watch */.YP)(
  () => storeForm.value,
  (val) => {
    if (skip.value) {
      skip.value = false;
      return;
    }

    form.value = {
      ...form.value,
      ...val,
    };
  }
);

function onRestart() {
  const ga_btn_exit = page.value?.googleAnalytics?.find(
    (item) => item.type === "btnRestart"
  );

  Util.generateGoogleAnalytics(ga_btn_exit.value, page.value);
  emit("on-reset");
}

return { __sfc: true,emit, props, store, ZIP_CODE_NUMBER_LENGTH, PHONE_NUMBER_LENGTH, form, rules, skip, config_object, config, page, currentOrder, ghxSettings, emptyForms, isEmptyForm, validEmail, validPhoneNumber, validZipCode, storeForm, onRestart }
}

});
;// CONCATENATED MODULE: ./src/components/Pages/PageForm.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var Pages_PageFormvue_type_script_setup_true_lang_js_ = (PageFormvue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./src/components/Pages/PageForm.vue





/* normalize component */
;
var PageForm_component = (0,componentNormalizer/* default */.Z)(
  Pages_PageFormvue_type_script_setup_true_lang_js_,
  PageFormvue_type_template_id_69f29662_render,
  PageFormvue_type_template_id_69f29662_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PageForm = (PageForm_component.exports);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Pages/PageVideo.vue?vue&type=template&id=020bed94&scoped=true&






var PageVideovue_type_template_id_020bed94_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c(VContainer/* default */.Z,{staticClass:"ghx-stepper-body pa-0"},[_c(VCard/* default */.Z,{staticClass:"ghx-glass-background pa-0",attrs:{"flat":""}},[_c(VRow/* default */.Z,[_c(VCol/* default */.Z,{attrs:{"cols":"12"}},[_c(components_VCard/* VCardText */.ZB,{staticClass:"ghx-subtitle text-center pt-0 px-0 pb-4"},[_c('p',{staticClass:"ghx-stepper-content__question text--primary mb-0 pb-8",domProps:{"innerHTML":_vm._s(_setup.page.title)}}),_c('p',{staticClass:"text-subtitle-1 font-weight-light pb-7 mb-0"},[_vm._v(" "+_vm._s(_setup.page.message)+" ")])]),_c('div',{staticClass:"video-wrapper"},[_c('iframe',{attrs:{"src":_setup.videoSrc,"frameborder":"0","allow":"autoplay; fullscreen; picture-in-picture","allowfullscreen":"","mozallowfullscreen":"","webkitallowfullscreen":"","id":"video-player"}})])],1)],1)],1)],1)
}
var PageVideovue_type_template_id_020bed94_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Pages/PageVideo.vue?vue&type=script&setup=true&lang=js&




/* harmony default export */ var PageVideovue_type_script_setup_true_lang_js_ = ({
  __name: 'PageVideo',
  props: {
  isShow: {
    type: Boolean,
    default: false,
  },
  page: {
    type: Object,
    default: () => {},
  },
  currentOrder: {
    type: Number,
    default: 0,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
},
  emits: ["video-start"],
  setup(__props, { expose, emit }) {

const props = __props





const page = (0,vue_runtime_esm/* computed */.Fl)(() => props.page);
const videoSrc = (0,vue_runtime_esm/* computed */.Fl)(() => page.value.form.video);
const player = (0,vue_runtime_esm/* ref */.iH)(null);
const init = () => {
  // add video script
  const jsElm = document.createElement("script");
  jsElm.type = "application/javascript";
  jsElm.src = "https://player.vimeo.com/api/player.js";
  jsElm.id = "vimeo-player-script";
  jsElm.onload = () => {
    const iframe = document.querySelector("#video-player");
    player.value = new Vimeo.Player(iframe);

    player.value.on("play", function () {
      emit("video-start");
    });
  };
  document.body.appendChild(jsElm);
};

(0,vue_runtime_esm/* onMounted */.bv)(() => {
  init();
});

(0,vue_runtime_esm/* onBeforeUnmount */.Jd)(() => {
  // remove video script
  document.getElementById("vimeo-player-script")?.remove();
});
function onRestart() {
  const ga_btn_exit = page.value?.googleAnalytics?.find(
    (item) => item.type === "btnRestart"
  );

  Util.generateGoogleAnalytics(ga_btn_exit.value, page.value);
  emit("on-reset");
}

expose({
  player,
});

return { __sfc: true,emit, props, page, videoSrc, player, init, onRestart }
}

});
;// CONCATENATED MODULE: ./src/components/Pages/PageVideo.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var Pages_PageVideovue_type_script_setup_true_lang_js_ = (PageVideovue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Pages/PageVideo.vue?vue&type=style&index=0&id=020bed94&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Pages/PageVideo.vue?vue&type=style&index=0&id=020bed94&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/Pages/PageVideo.vue



;


/* normalize component */

var PageVideo_component = (0,componentNormalizer/* default */.Z)(
  Pages_PageVideovue_type_script_setup_true_lang_js_,
  PageVideovue_type_template_id_020bed94_scoped_true_render,
  PageVideovue_type_template_id_020bed94_scoped_true_staticRenderFns,
  false,
  null,
  "020bed94",
  null
  
)

/* harmony default export */ var PageVideo = (PageVideo_component.exports);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/SaveAndExit.vue?vue&type=template&id=a022be84&scoped=true&







var SaveAndExitvue_type_template_id_a022be84_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c(VContainer/* default */.Z,{staticClass:"ghx-stepper-body pa-0"},[_c(VRow/* default */.Z,[_c(VCol/* default */.Z,{staticClass:"pb-0 pr-2",attrs:{"cols":"12"}},[_c(VCard/* default */.Z,{staticClass:"ghx-glass-background pa-0",attrs:{"flat":""}},[_c(components_VCard/* VCardText */.ZB,{staticClass:"text-center pa-0 pb-4"},[_c('p',{staticClass:"ghx-stepper-content__question text--primary",domProps:{"innerHTML":_vm._s(_vm.pageDetails.title)}})]),_c(components_VCard/* VCardText */.ZB,{staticClass:"pa-0 ghx-form"},[_c(VRow/* default */.Z,{staticClass:"ma-0"},[_c(VCol/* default */.Z,{attrs:{"cols":"12","lg":"6","md":"6"}},[_c('p',{staticClass:"text-subtitle-1"},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.pageDetails.message)}}),_c('a',{attrs:{"href":"#"},on:{"click":_vm.onRestart}},[_vm._v("Restart")]),_vm._v(". ")])]),_c(VCol/* default */.Z,{attrs:{"cols":"12","lg":"6","md":"6"}},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.ghxSettings?.ghx_wp_ajax_nonce)}}),_c(VCol/* default */.Z,{staticClass:"px-0 pb-0 pt-1",attrs:{"cols":"12","lg":"12","md":"12"}},[_c(VTextField/* default */.Z,{staticClass:"ghx-form-input",attrs:{"label":"Email","rules":[_vm.rules.required, _vm.rules.email],"outlined":""},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}})],1),_c(VCol/* default */.Z,{staticClass:"px-0 pb-0 pt-1",attrs:{"cols":"12","lg":"12","md":"12"}},[_c(VTextField/* default */.Z,{staticClass:"ghx-form-input",attrs:{"label":"First Name","outlined":""},model:{value:(_vm.form.first_name),callback:function ($$v) {_vm.$set(_vm.form, "first_name", $$v)},expression:"form.first_name"}})],1),_c(VCol/* default */.Z,{staticClass:"px-0 pb-0 pt-1",attrs:{"cols":"12","lg":"12","md":"12"}},[_c(VTextField/* default */.Z,{staticClass:"ghx-form-input",attrs:{"label":"Last Name","outlined":""},model:{value:(_vm.form.last_name),callback:function ($$v) {_vm.$set(_vm.form, "last_name", $$v)},expression:"form.last_name"}})],1),_c(VCol/* default */.Z,{staticClass:"px-0 pb-0 pt-1",attrs:{"cols":"12","lg":"12","md":"12"}},[_c(VTextField/* default */.Z,{staticClass:"ghx-form-input",attrs:{"label":"Zip Code","rules":[_vm.rules.zip_code],"outlined":""},model:{value:(_vm.form.zip_code),callback:function ($$v) {_vm.$set(_vm.form, "zip_code", $$v)},expression:"form.zip_code"}})],1)],1)],1)],1)],1)],1)],1)],1)
}
var SaveAndExitvue_type_template_id_a022be84_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/SaveAndExit.vue?vue&type=script&lang=js&





const ZIP_CODE_NUMBER_LENGTH = 6;
const PHONE_NUMBER_LENGTH = 14;

/* harmony default export */ var SaveAndExitvue_type_script_lang_js_ = ({
  name: "SaveAndExit",

  setup() {},

  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      el: 1,
      form: {
        first_name: "",
        last_name: "",
        zip_code: "",
        email: "",
      },
      rules: {
        required: (value) => !!value || "This field is required.",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
        zip_code: (value) => {
          var upcase = value.toUpperCase();
          var x = upcase
            .replace(/[^a-zA-Z0-9]/g, "")
            .match(/([a-zA-Z0-9_-]{0,6})/);
          this.form.zip_code = x[1];

          return this.form.zip_code.length === ZIP_CODE_NUMBER_LENGTH ||
            this.form.zip_code.length === ZIP_CODE_NUMBER_LENGTH - 1
            ? true
            : "Invalid zip code.";
        },
      },
      store: questionnaire(),
      skip: false,
    };
  },

  computed: {
    pageDetails() {
      return this.store.config?.config?.saveForLater;
    },

    isEmptyForm() {
      return this.emptyForms ? true : false;
    },

    emptyForms() {
      /*var hasEmptyObj = []
        Object.keys(this.form).forEach((i) => {
          if (this.form[i] === '') {
            hasEmptyObj.push(i)
          }
        })
        return hasEmptyObj*/
      return this.form.email === "";
    },
    validEmail() {
      return this.rules.email(this.form.email) === true ? true : false;
    },
    validPhoneNumber() {
      return this.form.phone_number.length === PHONE_NUMBER_LENGTH;
    },
    validZipCode() {
      return (
        this.form.zip_code.length === ZIP_CODE_NUMBER_LENGTH ||
        this.form.zip_code.length === ZIP_CODE_NUMBER_LENGTH - 1
      );
    },
    storeForm() {
      return this.store.getForm;
    },
    ghxSettings() {
      return this.store.getGHXSettings;
    },
  },

  watch: {
    isEmptyForm: {
      handler(val) {
        if (!val && this.validEmail) {
          var resource = {
            selected: {
              ...this.form,
              nonce: document.querySelector("input[name='ghx_nonce_field']").value,
              _wp_http_referer: document.querySelector("input[name='_wp_http_referer']").value,
            },
            resource: this.questionItem,
          };
          this.$emit("on-item-selected", resource);
        } else {
          this.$emit("on-item-emptied");
        }
      },
      deep: true,
    },

    isShow(data) {
      if (!data) return;

      if (this.isEmptyForm) this.$emit("on-item-emptied");
      else {
        if (this.validEmail && this.validZipCode && this.validPhoneNumber) {
          var resource = {
            selected: {
              ...this.form,
              nonce: document.querySelector("input[name='ghx_nonce_field']").value,
              _wp_http_referer: document.querySelector("input[name='_wp_http_referer']").value,
            },
            resource: this.questionItem,
          };
          this.$emit("on-item-selected", resource);
        } else {
          this.$emit("on-item-emptied");
        }
        var resource = {
          selected: {
            ...this.form,
              nonce: document.querySelector("input[name='ghx_nonce_field']").value,
              _wp_http_referer: document.querySelector("input[name='_wp_http_referer']").value,
          },
          resource: this.questionItem,
        };
        this.$emit("on-item-selected", resource);
      }
    },

    form: {
      handler(val) {
        this.store.updateForm(val);
        this.skip = true;
      },
      deep: true,
    },

    storeForm(val) {
      if (this.skip) {
        this.skip = false;
        return;
      }

      this.form = {
        ...this.form,
        ...val,
      };
    },
  },

  methods: {
    onRestart() {
      const ga_btn_exit = this.pageDetails?.googleAnalytics?.find(
        (item) => item.type === "btnRestart"
      );

      Util.generateGoogleAnalytics(ga_btn_exit.value, this.pageDetails);

      this.$emit("on-reset");
    },
  },
});

;// CONCATENATED MODULE: ./src/components/SaveAndExit.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SaveAndExitvue_type_script_lang_js_ = (SaveAndExitvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/SaveAndExit.vue





/* normalize component */
;
var SaveAndExit_component = (0,componentNormalizer/* default */.Z)(
  components_SaveAndExitvue_type_script_lang_js_,
  SaveAndExitvue_type_template_id_a022be84_scoped_true_render,
  SaveAndExitvue_type_template_id_a022be84_scoped_true_staticRenderFns,
  false,
  null,
  "a022be84",
  null
  
)

/* harmony default export */ var SaveAndExit = (SaveAndExit_component.exports);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Common/PageLoader.vue?vue&type=template&id=3b701fa0&
var PageLoadervue_type_template_id_3b701fa0_render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c(_setup.CustomOverlay,{class:[`ghx-stepper-content--loader ghx-stepper-content--loader--${_setup.footerStyle}`],attrs:{"active":_vm.active,"absolute":"","blur":"","light":""}},[_c('img',{attrs:{"src":_vm.loadingGIF}})])
}
var PageLoadervue_type_template_id_3b701fa0_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Common/CustomOverlay.vue?vue&type=template&id=3635b915&scoped=true&
var CustomOverlayvue_type_template_id_3635b915_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return (_setup.activeOverlay)?_c('div',{staticClass:"ghx-overlay ghx-overlay--mobile",class:[
    {'ghx-overlay--active': _setup.activeClass},
    {'ghx-overlay--blur': _setup.blur},
    {'ghx-overlay--absolute': _setup.absolute}
  ]},[_c('div',{staticClass:"ghx-overlay__bg",class:[
        {'ghx-overlay__bg--dark': _setup.dark},
        {'ghx-overlay__bg--light': _setup.light}
    ]}),_c('div',{staticClass:"ghx-overlay__content"},[_vm._t("default")],2)]):_vm._e()
}
var CustomOverlayvue_type_template_id_3635b915_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Common/CustomOverlay.vue?vue&type=script&setup=true&lang=js&



/* harmony default export */ var CustomOverlayvue_type_script_setup_true_lang_js_ = ({
  __name: 'CustomOverlay',
  props: {
  active: {
      type: Boolean,
      default: () => false
  },
  blur: {
      type: Boolean,
      default: () => false
  },
  absolute: {
      type: Boolean,
      default: () => false
  },
  dark: {
      type: Boolean,
      default: () => false
  },
  light: {
      type: Boolean,
      default: () => false
  }
},
  setup(__props) {

const props = __props



const activeClass = (0,vue_runtime_esm/* ref */.iH)(false)
const activeOverlay = (0,vue_runtime_esm/* ref */.iH)(false)
const timeout = (0,vue_runtime_esm/* ref */.iH)(null)

const active = (0,vue_runtime_esm/* computed */.Fl)(() => props.active)
const blur = (0,vue_runtime_esm/* computed */.Fl)(() => props.blur)
const absolute = (0,vue_runtime_esm/* computed */.Fl)(() => props.absolute)
const dark = (0,vue_runtime_esm/* computed */.Fl)(() => props.dark)
const light = (0,vue_runtime_esm/* computed */.Fl)(() => props.light)

;(0,vue_runtime_esm/* watch */.YP)(active, (val) => {
  if (val) {
    clearTimeout(timeout.value)
    activeOverlay.value = true

    timeout.value = setTimeout(_ => {
      activeClass.value = true
      clearTimeout(timeout.value)
    }, 100)
  }
  else {
    activeClass.value = false

    timeout.value = setTimeout(_ => {
      activeOverlay.value = false
      clearTimeout(timeout.value)
    }, 300)
  }
})

return { __sfc: true,props, activeClass, activeOverlay, timeout, active, blur, absolute, dark, light }
}

});
;// CONCATENATED MODULE: ./src/components/Common/CustomOverlay.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var Common_CustomOverlayvue_type_script_setup_true_lang_js_ = (CustomOverlayvue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Common/CustomOverlay.vue?vue&type=style&index=0&id=3635b915&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Common/CustomOverlay.vue?vue&type=style&index=0&id=3635b915&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./src/components/Common/CustomOverlay.vue



;


/* normalize component */

var CustomOverlay_component = (0,componentNormalizer/* default */.Z)(
  Common_CustomOverlayvue_type_script_setup_true_lang_js_,
  CustomOverlayvue_type_template_id_3635b915_scoped_true_render,
  CustomOverlayvue_type_template_id_3635b915_scoped_true_staticRenderFns,
  false,
  null,
  "3635b915",
  null
  
)

/* harmony default export */ var CustomOverlay = (CustomOverlay_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Common/PageLoader.vue?vue&type=script&setup=true&lang=js&




/* harmony default export */ var PageLoadervue_type_script_setup_true_lang_js_ = ({
  __name: 'PageLoader',
  props: {
  active: {
    type: Boolean,
    default: () => false
  },
  resultPage: {
    type: Object,
    default: () => null
  },
  footerStyle: {
    type: String,
    default: () => ''
  },
  loadingGIF: {
    type: String,
    default: () => ''
  }
},
  setup(__props) {

const props = __props



const resultPage = (0,vue_runtime_esm/* computed */.Fl)(() => props.resultPage)
const footerStyle = (0,vue_runtime_esm/* computed */.Fl)(() => props.footerStyle)

return { __sfc: true,props, resultPage, footerStyle, CustomOverlay: CustomOverlay }
}

});
;// CONCATENATED MODULE: ./src/components/Common/PageLoader.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var Common_PageLoadervue_type_script_setup_true_lang_js_ = (PageLoadervue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./src/components/Common/PageLoader.vue





/* normalize component */
;
var PageLoader_component = (0,componentNormalizer/* default */.Z)(
  Common_PageLoadervue_type_script_setup_true_lang_js_,
  PageLoadervue_type_template_id_3b701fa0_render,
  PageLoadervue_type_template_id_3b701fa0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PageLoader = (PageLoader_component.exports);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DisplayResult.vue?vue&type=template&id=cffc47be&



var DisplayResultvue_type_template_id_cffc47be_render = function render(){var _vm=this,_c=_vm._self._c;return _c(VCol/* default */.Z,{staticClass:"pa-0 ghx-stepper-content",attrs:{"col":"12"}},[_c(VCol/* default */.Z,{attrs:{"col":"12"}},[(_vm.getFormData)?_c(VRow/* default */.Z,[_c(VCol/* default */.Z,{staticClass:"col-12 pb-0",attrs:{"col":"12"}},[_c('label',[_vm._v("Full Name:")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.getFormData.first_name)+" "+_vm._s(_vm.getFormData.last_name))])]),_c(VCol/* default */.Z,{staticClass:"col-12 pb-0",attrs:{"col":"12"}},[_c('label',[_vm._v("Email Address:")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.getFormData.email))])]),_c(VCol/* default */.Z,{staticClass:"col-4 pb-0",attrs:{"col":"4"}},[_c('lable',[_vm._v("Phone Number:")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.getFormData.phone_number))])],1),_c(VCol/* default */.Z,{staticClass:"col-8 pb-0",attrs:{"col":"8"}},[_c('label',[_vm._v("Zip Code:")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.getFormData.zip_code))])]),_vm._l((_vm.getUserInfo),function(item,index){return [_c(VCol/* default */.Z,{key:'info' + index,staticClass:"col-12 pb-0",attrs:{"col":"12"}},[_c('label',[_vm._v(_vm._s(item.label))])]),_c(VCol/* default */.Z,{key:'info' + index,staticClass:"col-12 pb-0 pt-0",attrs:{"col":"12"}},[(Array.isArray(item.value))?_vm._l((item.value),function(val,index){return _c(VCol/* default */.Z,{key:val.label + index,staticClass:"col-12 pb-0 pt-0",attrs:{"col":"12"}},[_c('span',[_vm._v(_vm._s(val.label))])])}):_c(VCol/* default */.Z,{staticClass:"col-12 pb-0 pt-0",attrs:{"col":"12"}},[_c('span',[_vm._v(_vm._s(item.value))])])],2)]})],2):_vm._e()],1),_vm._l((_vm.getResultValue(_vm.store.getUserApiData)),function(item,i){return [(item)?_c(VCol/* default */.Z,{key:`ghx-api-result-${i}`,staticClass:"pb-0",attrs:{"col":"12"}},[_c(VRow/* default */.Z,[_c(VCol/* default */.Z,{staticClass:"pb-0",attrs:{"col":"12"}},[_c('label',[_vm._v("Ear: ")]),_c('span',[_vm._v(_vm._s(item.experiment.ear))])])],1),_c(VRow/* default */.Z,[_c(VCol/* default */.Z,{staticClass:"pb-0",attrs:{"col":"12"}},[_c('label',[_vm._v("Result: ")]),_c('span',[_vm._v(_vm._s(item.analyze))])])],1),_c(VRow/* default */.Z,[_c(VCol/* default */.Z,{attrs:{"col":"12"}},[_c('label',[_vm._v("Trial Result: ")]),_vm._l((item.experiment.trialResults),function(tr,index){return _c(VCol/* default */.Z,{key:`tr${index}`,attrs:{"col":"12"}},[_c(VRow/* default */.Z,[_c(VCol/* default */.Z,{staticClass:"pb-0",attrs:{"col":"12"}},[_c('label',[_vm._v("Frequency:")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(tr.tone.frequency)+" hz")])]),_c(VCol/* default */.Z,{staticClass:"pb-0",attrs:{"col":"12"}},[_c('label',[_vm._v("Sound Intensity:")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(tr.tone.intensityDbHL)+" db")])]),_c(VCol/* default */.Z,{staticClass:"pb-0",attrs:{"col":"12"}},[_c('label',[_vm._v("Audible:")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(tr.audible))])])],1)],1)})],2)],1)],1):_vm._e()]})],2)
}
var DisplayResultvue_type_template_id_cffc47be_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DisplayResult.vue?vue&type=script&lang=js&

  


/* harmony default export */ var DisplayResultvue_type_script_lang_js_ = ({
  setup () {
    const store = questionnaire();
    
    return {
      store
    }
  },
  
  props: {
    selectedQuestion: {
      type: Array,
      default: () => []
    },
    selectedFlow: {
      type: Number,
      defult: 0
    }
  },
  
  computed: {
    getFormData() {
      return this.store?.getUserResponse?.final
    },
    
    getUserInfo() {
      var items = [];
      var userResponsed = this.store.getUserResponse;
      var filtered = this.selectedQuestion?.filter( item => (item.form.type === 'radio' && item.form.meta != 'type') || item.form.type === 'date');
      filtered.forEach( item => {
        var data = userResponsed[item.form.meta];
        
        if (data)
          items.push({label: item.form.type === 'date' ? 'Date of Birth:': item.text, value: data})
      })
      
      return items;
    }
  },
  
  methods: {
    getResultValue(apiData) {
      var data = [];
      
      Object.entries(apiData).forEach(([key, value]) => {
          data.push(value);
      })
      
      return data;
    }
  }
});

;// CONCATENATED MODULE: ./src/components/DisplayResult.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DisplayResultvue_type_script_lang_js_ = (DisplayResultvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/DisplayResult.vue





/* normalize component */
;
var DisplayResult_component = (0,componentNormalizer/* default */.Z)(
  components_DisplayResultvue_type_script_lang_js_,
  DisplayResultvue_type_template_id_cffc47be_render,
  DisplayResultvue_type_template_id_cffc47be_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DisplayResult = (DisplayResult_component.exports);
;// CONCATENATED MODULE: ./src/models/Axios.js


const AxiosPost = axios_default().create({
    baseURL: window?.site_location_obj?.ajax_url,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});
;// CONCATENATED MODULE: ./src/models/Api.js


/* harmony default export */ var Api = ({
    
    createLPApi(path, data) {
        return this.isSiteURLSet() && AxiosPost.post(path, data)
    },
    
    createWPApi(data) {
        return this.isSiteURLSet() && AxiosPost.post('', data)
    },
    
    isSiteURLSet() {
        return window?.site_location_obj?.ajax_url
    }
});
;// CONCATENATED MODULE: ./src/models/Audigy.js




/* harmony default export */ var Audigy = ({
    
    async saveExperimentData(url, meta, hz, ear) {
      var store = questionnaire();
      var response, newMeta;
          
      var data = store?.getUserResponse[meta || ear + hz];
      
      ear = Util.capitalizeFirstLetter(ear);
      
      if ((!data && meta !== 'init_experiment') || (meta === 'init_experiment' && store?.getUserApiData[ear]?.experiment))
          return
      
      switch(meta) {
        case 'final':
          this.prepareResult();
          break;
        
        default:
          break;
      }
    },

    prepareResult() {
      var store = questionnaire();

      Object.entries(store.getUserApiData).forEach(([key, value]) => {
        if (value) {
          store.addUserApiData({
            key: key,
            value: {
              ...value,
              analyze: this.getResult(value)
            }
            
          })
        }
      })
    },
    
    getResult(data) {
      var result = 0
      
      Object.entries(data?.experiment).forEach(([key, value]) => {
        result += parseInt(value) < 20 ? 20: parseInt(value)
      })
      
      result = result / Object.entries(data?.experiment).length
      
      return this.getAnalyze(result)
    },
    
    getAnalyze(result) {
      if (result <= 25)
        return 'NoImpairment'
      else if(result >= 26 && result <= 40)
        return 'SlightImpairment'
      else if(result >= 41 && result <= 60)
        return 'ModerateImpairment'
      else if(result >= 61 && result <= 80)
        return 'SevereImpairment'
      else
        return 'ProfoundImpairment'
    },
    
    async getLpToken() {

      var args = {
        action: "get_lp_token"
      }
      
      return await Api.createLPApi('', Util.convertUrlParams(args));
    },
    
    async saveFinalData(id, questionaire, form, submissionType) {
      var store = leadProcessor();
      var data = this.prepareLPData(id, questionaire, form, submissionType);
      var formData = form || questionnaire()?.getUserResponse?.final;

      if (!store.getToken)
        return await this.is_lp_api_failed_to_save(data)
      
      var args = {
        action: "save_data_to_lp",
        nonce: formData?.nonce || "",
        _wp_http_referer: formData?._wp_http_referer || "",
        data: data,
        token: store.getToken
      }
      
      var response = await Api.createLPApi('', Util.convertUrlParams(args));
      
      if (response.status != 200 || !response.success)
        return {data: data};
      
      return {
        response: response.data,
        data: data
      };
        
    },
    
    async is_lp_api_failed_to_save(data) {
        var args = {
          action: "lp_api_failed_to_save",
          data: data
        }
        
        await Api.createLPApi('', Util.convertUrlParams(args));
        
        return {data: data};
      
    },
    
    setExpiry(minutes) {
      var date = new Date();
      return date.setMinutes(date.getMinutes() + minutes);
    },
    
    prepareLPData(id, questionaire, form, submissionType) {
      var store = questionnaire();
      var formData = form || store?.getUserResponse?.final;
      var experimentData = store?.getUserApiData;
      
      return {
        id: id,
        birthYear: store?.getUserResponse?.date_of_birth || '',
        firstName: formData?.first_name || "",
        lastName: formData?.last_name || "",
        email: formData?.email,
        phone: formData?.phone_number || "",
        message: "",
        postalCode: formData?.zip_code || "",
        city: "",
        state: "",
        geoLatitude: 0,
        geoLongtitude: 0,
        timestamp: "",
        screenerResults: {
            "version": "2.0",
            "result": [
                experimentData
            ]
        },
        questionnaireResults: {
            "version": "2.0",
            "result": this.prepareQuestionaireData(questionaire)
        },
        locationInfo: {},
        origin: {
          "submissionType": submissionType, //One of three values: SaveMySpot, SubmitResults, SubmitResultsToProvider
          "formName": "GHX", //Should always be “GHX”
          "formUrl": window.location.origin //Can either simply be the root URL (ex: https://www.hearingloss.com) or the full URL of the form if that’s realistic, but it should always be populated
        }
      }
    },
    
    generateWPId() {
      return `${Math.floor(Math.random() * 99999)}${Date.now()}`;
    },
    
    prepareQuestionaireData(questionaire) {
      var store = questionnaire();
      var data = store?.getUserResponse;
      var retVal = [];
      
      questionaire.forEach(item => {
        if (item.form?.type === 'radio' && item.form?.meta != 'date_of_birth' && item.form?.meta != 'type' && data[item.form.meta])
          retVal.push({question: item.text, answer: data[item.form.meta]})
      });
      
      return retVal;
    },
    
    prepSubject(data) {
      return {
        "gender": data.gender,
        "age": data.age
      }
    },
    
    async saveSpotForLater(email, firstName, nonce, _wp_http_referer, urlUserId, selectedFlow, lastPage, type, isResultPage, link, finalResult) {
      var id = urlUserId || this.generateWPId();
      var lpData = {};
      
      if (isResultPage) {
        var storage_data = {
          firstName: finalResult?.data?.firstName || "",
          lastName: finalResult?.data?.lastName || "",
          email: finalResult?.data?.email || "",
          phone: finalResult?.data?.phone || "",
          postalCode: finalResult?.data?.postalCode || ""
        };
        
        lpData = {
          lpData: {
            screenerResults: finalResult?.data?.screenerResults || "",
            questionnaireResults: finalResult?.data?.questionnaireResults || "",
            origin: finalResult?.data?.origin || ""
          }
        }
        
        var CryptoJS = __webpack_require__(1354);
        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(storage_data), `ghx-uuid-${id}`).toString();
        
        window.sessionStorage.setItem("lp_data", ciphertext);
        window.sessionStorage.setItem("spot_id", id);
      }
      
      var args = {
        action: 'save_spot',
        id: id,
        email: email,
        nonce: nonce,
        _wp_http_referer: _wp_http_referer,
        firstName: firstName,
        resultPage: isResultPage,
        link: link,
        data: this.prepareWPData(selectedFlow, lastPage, type, lpData)
      }
      
      return await Api.createWPApi(Util.convertUrlParams(args));
    },

    saveToLocalStorage(
      email, 
      firstName, 
      urlUserId, 
      selectedFlow, 
      lastPage, 
      type, 
      isResultPage, 
      link, 
      finalResult
    ) {
      var id = urlUserId || this.generateWPId();
      var lpData = {};
      var saveSpotData = {};

      if (isResultPage) {
        lpData = {
          lpData: finalResult
        }

      }
      else {
        saveSpotData = {
          action: 'save_spot',
          id: id,
          email: email,
          firstName: firstName,
          resultPage: isResultPage,
          link: link,
        }
      }

      const data = {
        ...saveSpotData,
        data: this.prepareWPData(selectedFlow, lastPage, type, lpData)
      }

      const objectString = JSON.stringify(data);

      window.localStorage.setItem("ghx_nf_saved_data", objectString);

      // var data = this.prepareLPData(id, questionaire, form, submissionType);

      // var args = {
      //   action: "save_data_to_lp",
      //   data: data,
      //   token: store.getToken
      // }
    },
    
    getMessage(isResultPage, link) {
      
      var message = "";
      
      if (isResultPage) {
        message  = "Hello. Thank you for using the Guided Hearing Experience on HearingLoss.com. You can view your results at the link below: <br><br> ";
        message += '<a href="' + link + '">Link</a> <br><br>';
        message += "Thank you."
      }
      else {
        message  = "Hello. Thank you for using the Guided Hearing Experience on HearingLoss.com. When you are ready to resume your hearing loss journey, please click the link below. <br><br> ";
        message += '<a href="' + link + '">Link</a> <br><br>';
        message += "Thank you."
      }
      
      return message
    },
    
    async getSavedSpotData(id) {
      var args = {
        action: 'get_spot_data',
        id: id
      }
      
      return await Api.createWPApi(Util.convertUrlParams(args));
    },
    
    prepareWPData(selectedFlow, lastPage, type, lpData) {
      var store = questionnaire();
      var userData = store?.getUserResponse;
      var experimentData = store?.getUserApiData;
      
      return {
        userData: userData,
        experimentData: experimentData,
        ...this.prepareLastExitedScreen(selectedFlow, lastPage, type),
        ...lpData
      }
    },
    
    prepareLastExitedScreen(selectedFlow, lastPage, type) {
      selectedFlow = Util.clone(selectedFlow).reverse();
      var page = selectedFlow.find( item => item.order <= lastPage && (item.form.type === 'radio' || item.form.type === 'date' || item.form.type === 'screener') );
      
      var step = selectedFlow.find( item => item.step === page.step && item.header );
      var left_ear = null;
      var right_ear = null;
      
      if (type === 1) {
        left_ear = { left_ear: lastPage > 13 ? 'complete': 'incomplete' };
        right_ear = { right_ear: lastPage > 18 ? 'complete': 'incomplete' };
      }

      //console.log('prepareLastExitedScreen', selectedFlow, page, step)
      
      return {
        lastPage: lastPage,
        step_num: `${page.step}.${page.order}`,
        step: step.header.title,
        sub_step: page.title,
        ...left_ear,
        ...right_ear
      }
    },
    
    getFormData(object) {
      const formData = new FormData();
      Object.keys(object).forEach(key => formData.append(key, object[key]));
      return formData;
    },

    async setGHXSettings() {
      var store = questionnaire();

      var args = {
        action: "get_ghx_options"
      }
      
      const response = await Api.createWPApi(Util.convertUrlParams(args));

      if (response) {
        const plugin_url = response?.data?.plugin_url ?? '';
        
        store?.setGHXSettings(response?.data);

        if (response?.data?.ghx_logo) {
          store.config.config.desktopLogo = response?.data?.ghx_logo;
        }
        else {
          store.config.config.desktopLogo = plugin_url + store.config.config.desktopLogo;
        }

        if (response?.data?.ghx_brand_color) {
          store.config.theme.primaryColor = response?.data?.ghx_brand_color;
        }

        if (response?.data?.ghx_secondary_color) {
          store.config.theme.thirdColor = response?.data?.ghx_secondary_color;
        }
      }
    }
});   
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AudigySteps.vue?vue&type=script&lang=js&



















/* harmony default export */ var AudigyStepsvue_type_script_lang_js_ = ({
  setup() {
    const store = questionnaire();
    const el = (0,vue_runtime_esm/* ref */.iH)(0);
    const animationStartAt = (0,vue_runtime_esm/* ref */.iH)(0);
    const activity = (0,vue_runtime_esm/* ref */.iH)(0);
    const lastPage = (0,vue_runtime_esm/* ref */.iH)(0);
    const selectedItem = (0,vue_runtime_esm/* ref */.iH)(null);
    const saveSpotForm = (0,vue_runtime_esm/* ref */.iH)(null);
    const forceContinue = (0,vue_runtime_esm/* ref */.iH)(false);
    const excludedBtns = (0,vue_runtime_esm/* ref */.iH)(["info1", "info2", "info3", "init", "video"]); //ref([8, 9, 10, 15, 19])
    const selectedFlow = (0,vue_runtime_esm/* ref */.iH)(0);
    const isShowSaveForm = (0,vue_runtime_esm/* ref */.iH)(false);
    const skipInitExperiment = (0,vue_runtime_esm/* ref */.iH)(false);
    const isExitClicked = (0,vue_runtime_esm/* ref */.iH)(false);
    const isVideoPlayed = (0,vue_runtime_esm/* ref */.iH)(false);
    const handleVideoStart = () => {
      isVideoPlayed.value = true;
    };
    const config_object = (0,vue_runtime_esm/* computed */.Fl)(() => store.config);
    const config = (0,vue_runtime_esm/* computed */.Fl)(() => config_object.value.config);
    const theme = (0,vue_runtime_esm/* computed */.Fl)(() => config_object.value.theme);
    const saveForLater = (0,vue_runtime_esm/* computed */.Fl)(() => config.value.saveForLater);
    const btnStyle = (0,vue_runtime_esm/* computed */.Fl)(() => theme.value.btnStyle || "style-1");
    const headerStyle = (0,vue_runtime_esm/* computed */.Fl)(() => theme.value.headerStyle || "style-1");
    const footerStyle = (0,vue_runtime_esm/* computed */.Fl)(() => theme.value.footerStyle || "style-1");
    const loadingGIF = (0,vue_runtime_esm/* computed */.Fl)(() => theme.value.loadingGIF);
    const saveForLaterStyle = (0,vue_runtime_esm/* computed */.Fl)(
      () => saveForLater.value.style || "style-1"
    );
    const isSaveForLaterStyle1 = (0,vue_runtime_esm/* computed */.Fl)(
      () => saveForLaterStyle.value === "style-1"
    );
    const isSaveForLaterStyle2 = (0,vue_runtime_esm/* computed */.Fl)(
      () => saveForLaterStyle.value === "style-2"
    );
    const flowSelector = (0,vue_runtime_esm/* computed */.Fl)(() => {
      return config.value?.activities[selectedFlow.value].pages;
    });
    const currentPage = (0,vue_runtime_esm/* computed */.Fl)(() => flowSelector.value[el.value - 1]);
    const progressValue = (0,vue_runtime_esm/* computed */.Fl)(() => {
      return (el.value / flowSelector.value.length) * 100;
    });
    const isExcludedBtn = (0,vue_runtime_esm/* computed */.Fl)(
      () =>
        excludedBtns.value?.indexOf(
          flowSelector.value?.[el.value - 1]?.form?.type
        ) < 0
    );
    const isStyleOne = (0,vue_runtime_esm/* computed */.Fl)(() => currentPage.value?.style === "style-1");
    const isStyleTwo = (0,vue_runtime_esm/* computed */.Fl)(() => currentPage.value?.style === "style-2");
    const hasScreeners = (0,vue_runtime_esm/* computed */.Fl)(() => flowSelector.value.find(item => item.form.type === 'screener'))
    const mobileAndTabletCheck = (0,vue_runtime_esm/* computed */.Fl)(() => Util.mobileAndTabletCheck())

    ;(0,vue_runtime_esm/* watch */.YP)(el, async (currentValue) => {
      forceContinue.value = !isExcludedBtn.value;

      onSetStepIndicatorWidth(currentValue);
    });

    const concatText = (args) => {
      var str = "";
      args.forEach((item) => {
        str = `${str}${item}`;
      });

      return str;
    };

    // Methods
    const onSelectItem = (data) => {
      selectedItem.value = data;
      if (data?.resource?.form?.meta === "type") {
        selectedFlow.value = data?.resource?.form?.options.findIndex(
          (item) => item.label === data.selected
        );
      }
    };

    const onEmptyItem = (type) => {
      selectedItem.value = null;
    };

    const onEmptyForm = () => {
      console.log('onEmptyForm')
      saveSpotForm.value = null;
    };

    const onFilledForm = (data) => {
      saveSpotForm.value = data;
    };

    const onContinue = () => {
      var selectedItemValue = selectedItem.value;
      var meta =
        selectedItemValue.resource?.form?.meta === "final"
          ? selectedItemValue.resource?.form?.meta
          : concatText([
              selectedItemValue.resource.form.meta,
              selectedItemValue.resource.form.hz
                ? selectedItemValue.resource.form.hz
                : "",
            ]);
      skipInitExperiment.value = false;

      if (meta === "date_of_birth") {
        var prevVal = store.getUserResponse[meta];

        skipInitExperiment.value = selectedItemValue.selected === prevVal;
      }
      
      store.addUserResponse({
        field: meta,
        value: selectedItemValue.selected,
      });
    };

    const onContinueScreener = () => {
      if (!forceContinue.value) {
        store.addUserResponse({
          field: concatText([
            selectedItem.value.resource.form.meta,
            selectedItem.value.resource.form.hz
              ? selectedItem.value.resource.form.hz
              : "",
          ]),
          value: selectedItem.value.selected,
        });
      }
    };

    const onPrevious = () => {
      const ga_btn_back = currentPage.value?.googleAnalytics?.find(
        (item) => item.type === "btnBack"
      );

      Util.generateGoogleAnalytics(ga_btn_back.value, currentPage.value);

      el.value--;

      var prevItem = flowSelector.value.find((item) => item.order === el.value);

      selectedItem.value = {
        selected: {
          label:
            store?.getUserResponse[
              prevItem?.form?.meta + prevItem?.form?.hz
                ? prevItem?.form?.hz
                : ""
            ],
        },
        resource: prevItem,
      };
    };

    const onSaveSpotForm = (isExit = true) => {
      isExitClicked.value = isExit;
      let ga_btn;

      if (!isExit) {
        ga_btn = saveForLater.value?.googleAnalytics?.find(
          (item) => item.type === "btnSaveSpot"
        );

        Util.generateGoogleAnalytics(ga_btn.value, saveForLater.value);
      }

      if (store.ghxSettings.ghx_form === "Ninja Forms") {
        onSaveToLocal(
          false, 
          'ghx_nf_save_spot_url',
        );
      }
      else {
        isShowSaveForm.value = true;
      }
    };

    const onSaveToLocal = (isResultPage = true, url_key) => {
      var id = Util.getUrlParams()?.savedSpot || Audigy.generateWPId();
      var link = "";

      
      if (isResultPage) {
        Audigy.prepareResult();
        link = window.location.origin + "/guided-hearing-experience/results?guid=" + id;
      }
      else
        link = window.location.origin + "?savedSpot=" + id;
      
      var finalResult = Audigy.prepareLPData(
        id,
        flowSelector.value,
        saveSpotForm.value?.selected,
        isResultPage,
      );

      Audigy.saveToLocalStorage(
        !isResultPage
          ? saveSpotForm.value?.selected?.email
          : store?.getUserResponse?.final?.email,
        !isResultPage
          ? saveSpotForm.value?.selected?.first_name
          : store?.getUserResponse?.final?.first_name,
        id,
        flowSelector.value, //this.selectedQuestion,
        lastPage.value,
        selectedFlow.value,
        isResultPage,
        link,
        finalResult,
      );
      
      window.location = store.ghxSettings[url_key];
    };

    const onContinueSteps = () => {
      // const ga_btn_cancel = saveForLater.value?.googleAnalytics?.find(
      //   (item) => item.type === "btnCancel"
      // );

      // Util.generateGoogleAnalytics(ga_btn_cancel.value, saveForLater.value);

      isShowSaveForm.value = false;
      isExitClicked.value = false;
    };

    const onInitialization = (data) => {
      selectedFlow.value = data === "Loved One" ? GENERAL : PERSONAL;
    };

    const onGetTotalItems = (key, value, items) => {
      return items.filter((item) => item[key] === value);
    };

    const onIntStepIndicator = async (data) => {
      await (0,vue_runtime_esm/* nextTick */.Y3)();

      var steps = document.querySelectorAll(".ghx-stepper-step");

      steps.forEach((stp, i) => {
        var isLastLine = i === steps.length - 1;
        var divider = stp.querySelector(".ghx-divider");
        var nextIndex = isLastLine ? 0 : i + 1;
        var nextSibling = steps[nextIndex];

        var startLine = stp.clientWidth / 2 + stp.offsetLeft;
        var endLine = nextSibling.clientWidth / 2 + nextSibling.offsetLeft;

        var lineWidth = Math.abs(endLine - startLine);

        if (isLastLine) divider.style.width = lineWidth + "px";
        else
          divider.setAttribute(
            "data-step-width",
            lineWidth / parseInt(divider.getAttribute("data-items"))
          );
      });
    };

    const onSetStepIndicatorWidth = async (currentValue) => {
      if (flowSelector.value.length === currentValue - 1) return;
      var data = flowSelector.value.find((item) => item.order === currentValue);
      var step = data.step;
      var stepItems = onGetTotalItems("step", step, flowSelector.value);
      var orderIndex = stepItems.findIndex(
        (item) => item.order === currentValue
      );
      
      if (step > 1 && !orderIndex) {
        var prevDivider = document.querySelector(
          ".ghx-stepper-step" + (step - 1) + " .ghx-divider"
        );
        
        prevDivider.style.width =
          parseInt(prevDivider.getAttribute("data-step-width")) *
            parseInt(prevDivider.getAttribute("data-items")) +
          "px";
      }

      var stepElems = document.querySelectorAll(".ghx-stepper-step");

      stepElems.forEach((stepElem) => {
        var divider = stepElem.querySelector(".ghx-divider");
        divider.classList.remove("active");

        if (stepElem.classList.contains("ghx-stepper-step" + step)) {
          divider.classList.add("active");
          divider.style.width = parseInt(divider.getAttribute("data-step-width")) * orderIndex + "px";
        }
      });
    };

    const onResize = async () => {
      onIntStepIndicator(flowSelector.value);
      onSetStepIndicatorWidth(el.value);
    };

    return {
      config_object,
      config,
      theme,
      saveForLater,
      btnStyle,
      headerStyle,
      footerStyle,
      saveForLaterStyle,
      isSaveForLaterStyle1,
      isSaveForLaterStyle2,
      forceContinue,
      store,
      el,
      activity,
      lastPage,
      selectedItem,
      saveSpotForm,
      currentPage,
      flowSelector,
      isExcludedBtn,
      isStyleOne,
      isStyleTwo,
      hasScreeners,
      progressValue,
      animationStartAt,
      loadingGIF,
      onSelectItem,
      onEmptyItem,
      onEmptyForm,
      onFilledForm,
      onContinue,
      onContinueScreener,
      onPrevious,
      //onSaveSpot,
      onSaveSpotForm,
      onContinueSteps,
      onInitialization,
      onGetTotalItems,
      onIntStepIndicator,
      onSetStepIndicatorWidth,
      onResize,
      onSaveToLocal,
      excludedBtns,
      selectedFlow,
      isShowSaveForm,
      skipInitExperiment,
      isExitClicked,
      isVideoPlayed,
      handleVideoStart,
      mobileAndTabletCheck
    };
  },

  props: {
    defaultLastPage: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      finalResult: null,
      buttonLoading: false,
      saveSpotBtnLoading: false,
      showInfo: false,
      isShowLoader: false,
      isShowRedirectLoader: false,
    };
  },

  components: {
    PageLoader: PageLoader,
    PageRadio: PageRadio,
    PageDate: PageDate,
    PageInit: PageInit,
    PageScreener: PageScreener,
    PageResult: PageResult,
    PageVideo: PageVideo,
    PageInstruction: PageInstruction,
    PageForm: PageForm,
    SaveAndExit: SaveAndExit,
    SvgIcons: SvgIcons,
  },

  computed: {
    ghxSettings() {
      return this.store.ghxSettings;
    },
    plugin_url() {
      return this.ghxSettings?.plugin_url ?? '';
    },
    personalQuestions() {
      return DEFAULT_PERSONAL_QUESTIONS;
    },
    generalQuestions() {
      return DEFAULT_GENERAL_QUESTIONS;
    },
    general() {
      return GENERAL;
    },
    personal() {
      return PERSONAL;
    },

    isShowSaveFormPage() {
      return this.isShowSaveForm;
    },

    selectedQuestion() {
      if (this.selectedFlow === this.personal) return this.personalQuestions;
      else return this.generalQuestions;
    },

    isFinalPage() {
      //var activity = this.config?.activities?.[this.activity].pages.find(item => item.order === this.el);
      return this.currentPage?.form?.meta === "final"; //activity?.form?.meta === 'final'
    },

    isResultPage() {
      return this.currentPage?.form?.meta === "result"; //activity?.form?.meta === 'final'
    },

    isShowFinalPage() {
      const params = Util.getUrlParams();

      return params?.testing === "true";
    },

    getUrlParams() {
      return Util.getUrlParams();
    },

    hasResultPage() {
      return this.flowSelector.find((item) => item.form.type === "end");
    },

    hideSaveSpotBtnInFinalPage() {
      return (
        !(this.isFinalPage && (this.currentPage?.form?.type === "form" || this.currentPage?.form?.type === "end")) &&
        !this.isResultPage &&
        !this.isShowLoader
      );
    },
  },

  watch: {
    flowSelector(currentValue) {
      this.onIntStepIndicator(currentValue);
    },

    async el(val) {
      await Util.sleep(100);
      this.animationStartAt = val;

      /**
       *  Pause or reset the video when navigating away from video page
       */
      if (this.$refs["videoStep"] && this.isVideoPlayed) {
        if (this.selectedFlow === 0) {
          /**
           *  Video page for "Me" option
           */
          if (val < 20) {
            this.$refs["videoStep"][0]?.player.pause();
          } else if (val == 20) {
            this.$refs["videoStep"][0]?.player.play();
          } else if (val > 20) {
            this.$refs["videoStep"][0]?.player.setCurrentTime(0);
            this.$refs["videoStep"][0]?.player.pause();
          }
        } else if (this.selectedFlow === 1) {
          /**
           *  Video page for "Loved One" option
           */
          if (val < 7) {
            this.$refs["videoStep"][0]?.player.pause();
          } else if (val == 7) {
            this.$refs["videoStep"][0]?.player.play();
          } else if (val > 7) {
            this.$refs["videoStep"][0]?.player.setCurrentTime(0);
            this.$refs["videoStep"][0]?.player.pause();
          }
        }
      }
    },
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize, { passive: true });
    window.removeEventListener("keypress", this.keypress);
  },

  mounted() {
    window.addEventListener("resize", this.onResize, { passive: true });
    this.el = parseInt(this.defaultLastPage);
    this.lastPage = this.el;
    this.onIntStepIndicator(this.flowSelector);
    window.addEventListener("keypress", this.keypress);
  },

  methods: {
    is_empty(val) {
      return Util.is_empty(val);
    },

    async onClickContinue(skip = false) {
      this.buttonLoading = true;
      this.$emit("on-show-loader");

      if (skip) this.onContinueScreener();
      else this.onContinue();

      const ga_btn_continue = this.currentPage?.googleAnalytics?.find(
        (item) => item.type === "btnContinue"
      );
      
      Util.generateGoogleAnalytics(
        ga_btn_continue.value,
        this.currentPage,
        this.selectedItem?.selected?.volume ?? this.selectedItem?.selected
      );

      if (this.currentPage?.form?.meta === "final" && this.hasScreeners) {
        this.isShowLoader = true;
        const screener =
          this.$refs[
            `screener${this.currentPage.order}${this.currentPage?.form?.hz}`
          ]?.[0];
        if (screener) {
          const sound = screener?.sound;

          clearTimeout(screener?.menuTimeout);

          if (sound) {
            sound.stop();
          }
        }

        await Audigy.saveExperimentData(
          "",
          this.selectedItem.resource.form.meta,
          this.selectedItem.resource?.form?.hz
            ? this.selectedItem.resource.form.hz
            : "",
          this.selectedItem.resource?.form?.ear
            ? this.selectedItem.resource.form.ear
            : ""
        );
      }

      if (this.isFinalPage) {
        this.finalResult = await this.saveMySpotAndLP(
          null,
          true
        );

        if (!this.isShowFinalPage) {
          this.getResult();
          return;
        }
      }

      this.el++;

      if (this.currentPage?.form?.meta === "result") {
        await Util.sleep(300);
        this.isShowLoader = false;
      }

      if (this.lastPage < this.el) this.lastPage++;

      if (
        this.currentPage?.form?.meta === "final"  &&
        this.store.ghxSettings.ghx_form === "Ninja Forms"
      ) {
        this.isShowRedirectLoader = true;
        this.onSaveToLocal(
          true, 
          this.selectedFlow === PERSONAL 
            ? 'ghx_nf_for_me_url'
            : 'ghx_nf_loved_one_url',
        );
      }

      this.selectedItem = null;
      this.buttonLoading = false;
      this.$emit("on-show-loader");
    },

    async onSaveSpot(id, link, isResultPage, finalResult = null) {
      if (!this.saveSpotForm && !isResultPage) return;

      var response = await Audigy.saveSpotForLater(
        !isResultPage
          ? this.saveSpotForm?.selected?.email
          : this.store?.getUserResponse?.final?.email,
        !isResultPage
          ? this.saveSpotForm?.selected?.first_name
          : this.store?.getUserResponse?.final?.first_name,
        !isResultPage
          ? this.saveSpotForm?.selected?.nonce
          : this.store?.getUserResponse?.final?.nonce,
        !isResultPage
          ? this.saveSpotForm?.selected?._wp_http_referer
          : this.store?.getUserResponse?.final?._wp_http_referer,
        id,
        this.flowSelector, //this.selectedQuestion,
        this.lastPage,
        this.selectedFlow,
        isResultPage,
        link,
        finalResult
      );
    },

    async saveMySpotAndLP(form, isResultPage = false) {
      var id = this.getUrlParams?.savedSpot || Audigy.generateWPId();
      var finalResult = await Audigy.saveFinalData(
        id,
        this.flowSelector,
        form,
        isResultPage ? "GetMyResults" : "SaveMySpot"
      );

      var link = "";
      
      if (isResultPage)
        link = window.location.origin + "/guided-hearing-experience/results?guid=" + id ;
      else
        link = window.location.origin + "?savedSpot=" + id;

      await this.onSaveSpot(id, link, isResultPage, finalResult);

      return finalResult;
    },

    async onClickSaveSpot() {
      this.$emit("on-show-loader");
      this.saveSpotBtnLoading = true;
      await this.saveMySpotAndLP(this.saveSpotForm?.selected);
      if (this.ghxSettings?.ghx_save_spot_redirect) {
        window.location = this.ghxSettings?.ghx_save_spot_redirect;
      } else {
        this.resetAndClose();
        this.saveSpotBtnLoading = false;
      }
    },

    resetAndClose() {
      this.$emit("on-reset");
      this.$emit("on-close");
    },

    onClickedExit() {
      if (this.saveSpotForm) {
        this.onClickSaveSpot();
        return;
      }

      this.resetAndClose();
    },

    getResult() {
      const redirectOption = this.store?.ghxSettings?.ghx_redirect_option;

      switch (redirectOption) {
        case "Current Page":
          this.isExitClicked = true;
          this.onClickExit();
          break;
      
        case "Custom Page":
          window.location = this.store?.ghxSettings?.ghx_custom_url;
        break;
    
        default:
          var dataId = this.getUrlParams?.savedSpot || this.finalResult.data.id || "";
          var flow = "loved-one";

          if (this.selectedFlow === this.personal) flow = "for-me";
          
          window.location = `${window.location.origin}/guided-hearing-experience/results/${flow}?guid=${dataId}`;
          break;
      }
    },

    onClickExit() {
      if (this.isExitClicked) {
        const ga_btn_exit = this.saveForLater?.googleAnalytics?.find(
          (item) => item.type === "btnExit"
        );

        Util.generateGoogleAnalytics(ga_btn_exit.value, this.saveForLater);

        this.resetAndClose();
      } else {
        const ga_btn_exit = this.currentPage?.googleAnalytics?.find(
          (item) => item.type === "btnExit"
        );

        Util.generateGoogleAnalytics(ga_btn_exit.value, this.currentPage);

        this.onSaveSpotForm();
      }
    },

    keypress(e) {
      if (e.target.classList.contains("ghx-btn-play-song")) e.preventDefault();

      var modals = document.querySelectorAll(".menu-tick-" + this.el);
      modals.forEach((item) => {
        item.style.display = "none";
      });

      if (e.key === "Enter") this.onHitEnter();
    },

    onHitEnter() {
      var excludedBtn = this.isExcludedBtn;
      if (this.isShowSaveFormPage && this.saveSpotForm) this.onClickSaveSpot();
      else if (this.selectedItem || !excludedBtn)
        this.onClickContinue(!excludedBtn);
    },

    onHitEnterOnInput(e) {
      e.target.blur();
    },

    getVersion(type) {
      switch (type) {
        case "info1":
          return "1";
        case "info2":
          return "2";
        default:
          return "3";
      }
    },
  },
});

;// CONCATENATED MODULE: ./src/components/AudigySteps.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AudigyStepsvue_type_script_lang_js_ = (AudigyStepsvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/AudigySteps.vue





/* normalize component */
;
var AudigySteps_component = (0,componentNormalizer/* default */.Z)(
  components_AudigyStepsvue_type_script_lang_js_,
  AudigyStepsvue_type_template_id_6392d526_render,
  AudigyStepsvue_type_template_id_6392d526_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AudigySteps = (AudigySteps_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Audigy.vue?vue&type=script&lang=js&






/* harmony default export */ var Audigyvue_type_script_lang_js_ = ({
  name: "AudigyApp",
  setup() {
    const store = questionnaire();

    return {
      store,
    };
  },

  components: {
    AudigySteps: AudigySteps,
  },

  data: () => ({
    isReady: false,
    dialog: false,
    loader: false,
    key: Date.now(),
    el: 1,
  }),

  computed: {
    getUrlParams() {
      return Util.getUrlParams();
    },

    isDialog() {
      return this.store?.settings?.dialog;
    }
  },

  watch: {
    dialog(data) {
      if (!data) document.querySelector("html").style.overflow = null;
      else {
        Util.generateGoogleAnalytics(
          { event: "online_hearing_test_click", }, 
          {}
        );

        // dataLayer.push({
        //   event: "online_hearing_test_click",
        // });

        document.querySelector("html").style.overflow = "hidden";
      }
    },
  },

  mounted() {
    this.registerForScreenTestTriggers();
    this.continueSavedSpot();
  },

  methods: {
    registerForScreenTestTriggers() {
      const modalTriggers = document.querySelectorAll(
        ".ghx-test-open"
      );

      modalTriggers?.forEach((triggerElement) =>
        triggerElement.addEventListener("click", () => {
          const ga_btn_open = this.store.config?.config?.googleAnalytics[0]
          Util.generateGoogleAnalytics(ga_btn_open.value, {});
          this.dialog = true
        })
      );
    },

    async continueSavedSpot() {
      if (this.getUrlParams?.savedSpot) {
        var res = await Audigy.getSavedSpotData(this.getUrlParams?.savedSpot);

        if (res.data.userdata) {
          var data = res.data.userdata;
          this.store.setUserApiData(data.experimentData);
          this.store.setUserResponse(data.userData);
          if (this.isDialog)
            this.dialog = true;
          this.el = parseInt(data.lastPage);
        }
      }

      this.isReady = true;
    },

    resetModal() {
      this.key = Date.now();
      this.store.resetUserApiData();
      this.store.resetUserResponse();
      this.store.resetSelectedFlow();
      //this.store.resetHzSelectedAudio();
    },
  },
});

;// CONCATENATED MODULE: ./src/components/Audigy.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Audigyvue_type_script_lang_js_ = (Audigyvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/Audigy.vue





/* normalize component */
;
var Audigy_component = (0,componentNormalizer/* default */.Z)(
  components_Audigyvue_type_script_lang_js_,
  Audigyvue_type_template_id_80381630_render,
  Audigyvue_type_template_id_80381630_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_Audigy = (Audigy_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&



//import Api from '@/models/Api'




/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'App',
  
  setup() {
    const store_lp = leadProcessor()
    const store = questionnaire()

    const container = (0,vue_runtime_esm/* ref */.iH)(null)
    
    return {
      store,
      store_lp,
      container
    }
  },

  components: {
    Audigy: components_Audigy,
  },

  computed: {
    theme() {
      return this.store.config.theme
    },

    settingsWidth() {
      return this.store?.settings?.width;
    },

    settingsHeight() {
      return this.store?.settings?.height;
    },

    plugin_url() {
      return this.store.ghxSettings?.plugin_url ?? window.location.origin + '/';
    }
  },

  created(){
    this.store.settings = this.$parent.$options?.settings;
    this.store.settings.width = this.store?.settings?.width ?? '100%';
    this.store.settings.height = this.store?.settings?.height ?? 'auto';

    if (!this.theme.font)
      return

    var fontStyle = document.createElement('style');
    fontStyle.appendChild(document.createTextNode(`@import url('${this.theme.font}')`));

    document.head.appendChild(fontStyle);
  },
  
  async mounted() {
    if (!this.store_lp.getToken) {
      //var requestToken = await Api.requestToken();
      
      var requestToken = await Audigy.getLpToken();
      if (requestToken?.data?.body) {
        var access_token = JSON.parse(requestToken?.data?.body);
        access_token = access_token?.access_token
        
        this.store_lp.setToken(access_token);
      }

      await Audigy.setGHXSettings();
    }
    
    Util.setCssProperty(null, this.theme)
    window.getLpData();
  },
});

;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=900b9772&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/App.vue?vue&type=style&index=0&id=900b9772&prod&lang=scss&

;// CONCATENATED MODULE: ./src/App.vue



;


/* normalize component */

var App_component = (0,componentNormalizer/* default */.Z)(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (App_component.exports);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ListComp.vue?vue&type=template&id=27b76e68&
var ListCompvue_type_template_id_27b76e68_render = function render(){var _vm=this,_c=_vm._self._c;return _c('ul',_vm._l((_vm.item),function(v,n){return _c('li',{key:n},[_vm._v(_vm._s(n)+": "),(typeof v === 'object')?_c('span',[_c('list-comp',{attrs:{"item":v}})],1):_c('span',[_vm._v(" "+_vm._s(v)+" ")])])}),0)
}
var ListCompvue_type_template_id_27b76e68_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ListComp.vue?vue&type=script&lang=js&

/* harmony default export */ var ListCompvue_type_script_lang_js_ = ({
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
});

;// CONCATENATED MODULE: ./src/components/ListComp.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ListCompvue_type_script_lang_js_ = (ListCompvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/ListComp.vue





/* normalize component */
;
var ListComp_component = (0,componentNormalizer/* default */.Z)(
  components_ListCompvue_type_script_lang_js_,
  ListCompvue_type_template_id_27b76e68_render,
  ListCompvue_type_template_id_27b76e68_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ListComp = (ListComp_component.exports);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/vue/App.vue?vue&type=template&id=ec9c2b56&
var Appvue_type_template_id_ec9c2b56_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"ghx-admin"},[_vm._m(0),_c('div',{staticClass:"content-table"},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('SaveButton'),_c('div',{staticClass:"about-you-container"},[_c('div',{staticClass:"accordion",attrs:{"id":"accordionExample"}},[_c('div',{staticClass:"accordion-item"},[_vm._m(1),_c('div',{staticClass:"accordion-collapse collapse show",attrs:{"id":"collapseOne","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"}},[_c('div',{staticClass:"accordion-body"},[_c('AboutFirstLevel'),_c('AboutSecondLevel')],1)])]),_c('div',{staticClass:"accordion-item"},[_vm._m(2),_c('div',{staticClass:"accordion-collapse collapse",attrs:{"id":"collapseTwo","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"}},[_c('div',{staticClass:"accordion-body"},[_c('HearingFirstLevel'),_c('HearingSecondLevel'),_c('HearingThirdLevel'),_c('HearingFourthLevel'),_c('HearingFifthLevel')],1)])]),_vm._m(3),_vm._m(4)])]),_c('SaveButton')],1)])])])
}
var Appvue_type_template_id_ec9c2b56_staticRenderFns = [function (){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"plugin-container"},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('h1',{staticClass:"audigy-page-title"},[_vm._v("Content")])])])])
},function (){var _vm=this,_c=_vm._self._c;return _c('h2',{staticClass:"accordion-header",attrs:{"id":"headingOne"}},[_c('button',{staticClass:"accordion-button",attrs:{"type":"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[_vm._v(" About You ")])])
},function (){var _vm=this,_c=_vm._self._c;return _c('h2',{staticClass:"accordion-header",attrs:{"id":"headingTwo"}},[_c('button',{staticClass:"accordion-button collapsed",attrs:{"type":"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}},[_vm._v(" Your Hearing Health ")])])
},function (){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"accordion-item"},[_c('h2',{staticClass:"accordion-header",attrs:{"id":"headingThree"}},[_c('button',{staticClass:"accordion-button collapsed",attrs:{"type":"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}},[_vm._v(" Hearing Screener ")])]),_c('div',{staticClass:"accordion-collapse collapse",attrs:{"id":"collapseThree","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"}},[_c('div',{staticClass:"accordion-body"})])])
},function (){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"accordion-item"},[_c('h2',{staticClass:"accordion-header",attrs:{"id":"headingThree"}},[_c('button',{staticClass:"accordion-button collapsed",attrs:{"type":"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}},[_vm._v(" Your Results ")])]),_c('div',{staticClass:"accordion-collapse collapse",attrs:{"id":"collapseThree","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"}},[_c('div',{staticClass:"accordion-body"})])])
}]


;// CONCATENATED MODULE: ./src/vue/App.vue?vue&type=template&id=ec9c2b56&

;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/vue/about-us-components/FirstLevel.vue?vue&type=template&id=057978f4&
var FirstLevelvue_type_template_id_057978f4_render = function render(){var _vm=this,_c=_vm._self._c;return _c('ul',{staticClass:"list-group parent-list-group"},[_c('li',{staticClass:"list-group-item list-item list-item-heading"},[_c('EditableListInput',{attrs:{"list-label":_vm.list[0],"list-id":0},on:{"onInputChange":function($event){return _vm.getInput($event)}}})],1),_c('ul',{staticClass:"list-group sub-list-group"},[_c('li',{staticClass:"list-group-item list-item"},[_c('EditableListInput',{attrs:{"list-label":_vm.list[1],"list-id":1},on:{"onInputChange":function($event){return _vm.getInput($event)}}})],1),_c('li',{staticClass:"list-group-item list-item"},[_c('EditableListInput',{attrs:{"list-label":_vm.list[2],"list-id":2},on:{"onInputChange":function($event){return _vm.getInput($event)}}})],1),_vm._m(0)])])
}
var FirstLevelvue_type_template_id_057978f4_staticRenderFns = [function (){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"options-form"},[_c('h2',{staticClass:"options_title"},[_vm._v("Options")]),_c('div',{staticClass:"question_container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-6"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"}),_c('div',{staticClass:"col-sm-9"},[_c('h2',{staticClass:"options_header"},[_vm._v("Selection Text")])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('label',{staticClass:"col-sm-3 col-form-label",attrs:{"for":"staticEmail"}},[_vm._v("Unselected")])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 1")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 2")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])])]),_c('div',{staticClass:"col-sm-6"},[_c('h2',{staticClass:"options_header"},[_vm._v("Condition Message Text")]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])])])])])])
}]


;// CONCATENATED MODULE: ./src/vue/about-us-components/FirstLevel.vue?vue&type=template&id=057978f4&

;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/vue/components/EditableInput.vue?vue&type=template&id=a4e4cae8&
var EditableInputvue_type_template_id_a4e4cae8_render = function render(){var _vm=this,_c=_vm._self._c;return _c('p',{attrs:{"id":"account-info"}},[_c('span',{staticClass:"list-item-label",attrs:{"list-id":_vm.listId}},[_vm._v(_vm._s(_vm.listLabel))]),_c('span',{staticClass:"list-item-icon",on:{"click":_vm.onInput}},[_c('i',{staticClass:"fa-solid fa-pencil"})])])
}
var EditableInputvue_type_template_id_a4e4cae8_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/vue/components/EditableInput.vue?vue&type=script&lang=js&

/* harmony default export */ var EditableInputvue_type_script_lang_js_ = ({
 props: ['listLabel', 'listId'],
 methods: {
	    onInput(e) {
	      this.$emit("onInputChange", e.target);
	    },
	},
});

;// CONCATENATED MODULE: ./src/vue/components/EditableInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_EditableInputvue_type_script_lang_js_ = (EditableInputvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/vue/components/EditableInput.vue





/* normalize component */
;
var EditableInput_component = (0,componentNormalizer/* default */.Z)(
  components_EditableInputvue_type_script_lang_js_,
  EditableInputvue_type_template_id_a4e4cae8_render,
  EditableInputvue_type_template_id_a4e4cae8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EditableInput = (EditableInput_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/vue/about-us-components/FirstLevel.vue?vue&type=script&lang=js&


	

	/* harmony default export */ var FirstLevelvue_type_script_lang_js_ = ({
		components: {
		   EditableListInput: EditableInput
		},
		data() {
		    return {
		      list: [
		      	"First, let's get to know.",
		      	"Are you here for you or a loved one?",
		      	"(Make a selection and continue)"
		      ],
		    }
		},
		methods: {
		    getInput(e) {
		        var el = jQuery(e).parent().parent().find('.list-item-label');
		      

		      if(el.attr('contentEditable')){
		      	el.removeAttr('contentEditable');

		      	this.list[el.attr('list-id')] = el.text();

		      }else{
		      	
		      	el.attr('contentEditable', true);
		      }

		    },
		},
	});

;// CONCATENATED MODULE: ./src/vue/about-us-components/FirstLevel.vue?vue&type=script&lang=js&
 /* harmony default export */ var about_us_components_FirstLevelvue_type_script_lang_js_ = (FirstLevelvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/vue/about-us-components/FirstLevel.vue





/* normalize component */
;
var FirstLevel_component = (0,componentNormalizer/* default */.Z)(
  about_us_components_FirstLevelvue_type_script_lang_js_,
  FirstLevelvue_type_template_id_057978f4_render,
  FirstLevelvue_type_template_id_057978f4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FirstLevel = (FirstLevel_component.exports);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/vue/about-us-components/SecondLevel.vue?vue&type=template&id=7d343873&
var SecondLevelvue_type_template_id_7d343873_render = function render(){var _vm=this,_c=_vm._self._c;return _c('ul',{staticClass:"list-group parent-list-group"},[_c('li',{staticClass:"list-group-item list-item list-item-heading"},[_c('EditableListInput',{attrs:{"list-label":_vm.list[0],"list-id":0},on:{"onInputChange":function($event){return _vm.getInput($event)}}})],1),_c('ul',{staticClass:"list-group sub-list-group"},[_c('li',{staticClass:"list-group-item list-item"},[_c('EditableListInput',{attrs:{"list-label":_vm.list[1],"list-id":1},on:{"onInputChange":function($event){return _vm.getInput($event)}}})],1),_c('li',{staticClass:"list-group-item list-item",staticStyle:{"background-color":"#f5f5f5","font-weight":"400","margin-bottom":"15px"}},[_c('EditableListInput',{attrs:{"list-label":_vm.list[2],"list-id":2},on:{"onInputChange":function($event){return _vm.getInput($event)}}})],1),_vm._m(0)])])
}
var SecondLevelvue_type_template_id_7d343873_staticRenderFns = [function (){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"options-form"},[_c('h2',{staticClass:"options_title"},[_vm._v("Options")]),_c('div',{staticClass:"question_container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-6"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"}),_c('div',{staticClass:"col-sm-9"},[_c('h2',{staticClass:"options_header"},[_vm._v("Selection Text")])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('label',{staticClass:"col-sm-3 col-form-label",attrs:{"for":"staticEmail"}},[_vm._v("Unselected")])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 1")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 2")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 3")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 4")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 5")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 6")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 7")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])])]),_c('div',{staticClass:"col-sm-6"},[_c('h2',{staticClass:"options_header"},[_vm._v("Condition Message Text")]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])])])])])])
}]


;// CONCATENATED MODULE: ./src/vue/about-us-components/SecondLevel.vue?vue&type=template&id=7d343873&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/vue/about-us-components/SecondLevel.vue?vue&type=script&lang=js&

  	
	/* harmony default export */ var SecondLevelvue_type_script_lang_js_ = ({
	  components: {
	     EditableListInput: EditableInput
	  },
	  data() {
	    return {
	      list: [
	      	"Great! One more question about yourself.",
	      	"What is your age range",
	      	"(Make a selection and continue)"
	      ],
	    }
	  },
	  methods: {
		    getInput(e) {
		        var el = jQuery(e).parent().parent().find('.list-item-label');
		      

		      if(el.attr('contentEditable')){
		      	el.removeAttr('contentEditable');

		      	this.list[el.attr('list-id')] = el.text();

		      }else{
		      	
		      	el.attr('contentEditable', true);
		      }

		    },
	  },
	});

;// CONCATENATED MODULE: ./src/vue/about-us-components/SecondLevel.vue?vue&type=script&lang=js&
 /* harmony default export */ var about_us_components_SecondLevelvue_type_script_lang_js_ = (SecondLevelvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/vue/about-us-components/SecondLevel.vue





/* normalize component */
;
var SecondLevel_component = (0,componentNormalizer/* default */.Z)(
  about_us_components_SecondLevelvue_type_script_lang_js_,
  SecondLevelvue_type_template_id_7d343873_render,
  SecondLevelvue_type_template_id_7d343873_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SecondLevel = (SecondLevel_component.exports);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/vue/hearing-health-components/FirstLevel.vue?vue&type=template&id=8e9ad026&
var FirstLevelvue_type_template_id_8e9ad026_render = function render(){var _vm=this,_c=_vm._self._c;return _c('ul',{staticClass:"list-group"},[_c('li',{staticClass:"list-group-item list-item list-item-heading"},[_c('EditableListInput',{attrs:{"list-label":_vm.list[0],"list-id":0},on:{"onInputChange":function($event){return _vm.getInput($event)}}})],1),_c('ul',{staticClass:"list-group sub-list-group"},[_c('li',{staticClass:"list-group-item list-item"},[_c('EditableListInput',{attrs:{"list-label":_vm.list[1],"list-id":1},on:{"onInputChange":function($event){return _vm.getInput($event)}}})],1),_c('li',{staticClass:"list-group-item list-item"},[_c('EditableListInput',{attrs:{"list-label":_vm.list[2],"list-id":2},on:{"onInputChange":function($event){return _vm.getInput($event)}}})],1),_vm._m(0)])])
}
var FirstLevelvue_type_template_id_8e9ad026_staticRenderFns = [function (){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"options-form"},[_c('h2',{staticClass:"options_title"},[_vm._v("Options")]),_c('div',{staticClass:"question_container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-6"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"}),_c('div',{staticClass:"col-sm-9"},[_c('h2',{staticClass:"options_header"},[_vm._v("Selection Text")])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('label',{staticClass:"col-sm-3 col-form-label",attrs:{"for":"staticEmail"}},[_vm._v("Unselected")])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 1")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 2")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 3")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 4")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 5")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 6")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 7")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])])]),_c('div',{staticClass:"col-sm-6"},[_c('h2',{staticClass:"options_header"},[_vm._v("Condition Message Text")]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])])])])])])
}]


;// CONCATENATED MODULE: ./src/vue/hearing-health-components/FirstLevel.vue?vue&type=template&id=8e9ad026&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/vue/hearing-health-components/FirstLevel.vue?vue&type=script&lang=js&

  
  /* harmony default export */ var hearing_health_components_FirstLevelvue_type_script_lang_js_ = ({
    components: {
       EditableListInput: EditableInput
    },
    data() {
      return {
        list: [
          "Now, About your hearing health",
          "What best describes you",
          "(Choose all that apply)",
        ],
      }
    },
    methods: {
        getInput(e) {
            var el = jQuery(e).parent().parent().find('.list-item-label');
          

          if(el.attr('contentEditable')){
            el.removeAttr('contentEditable');

            this.list[el.attr('list-id')] = el.text();

          }else{
            
            el.attr('contentEditable', true);
          }

        },
    },
  });

;// CONCATENATED MODULE: ./src/vue/hearing-health-components/FirstLevel.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_hearing_health_components_FirstLevelvue_type_script_lang_js_ = (hearing_health_components_FirstLevelvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/vue/hearing-health-components/FirstLevel.vue





/* normalize component */
;
var hearing_health_components_FirstLevel_component = (0,componentNormalizer/* default */.Z)(
  vue_hearing_health_components_FirstLevelvue_type_script_lang_js_,
  FirstLevelvue_type_template_id_8e9ad026_render,
  FirstLevelvue_type_template_id_8e9ad026_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var hearing_health_components_FirstLevel = (hearing_health_components_FirstLevel_component.exports);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/vue/hearing-health-components/SecondLevel.vue?vue&type=template&id=705b8208&
var SecondLevelvue_type_template_id_705b8208_render = function render(){var _vm=this,_c=_vm._self._c;return _c('ul',{staticClass:"list-group parent-list-group"},[_c('li',{staticClass:"list-group-item list-item list-item-heading"},[_c('EditableListInput',{attrs:{"list-label":_vm.list[2],"list-id":2},on:{"onInputChange":function($event){return _vm.getInput($event)}}})],1),_c('ul',{staticClass:"list-group sub-list-group"},[_c('li',{staticClass:"list-group-item list-item"},[_c('EditableListInput',{attrs:{"list-label":_vm.list[1],"list-id":1},on:{"onInputChange":function($event){return _vm.getInput($event)}}})],1),_c('li',{staticClass:"list-group-item list-item",staticStyle:{"background-color":"#f5f5f5","font-weight":"400","margin-bottom":"15px"}},[_c('EditableListInput',{attrs:{"list-label":_vm.list[2],"list-id":2},on:{"onInputChange":function($event){return _vm.getInput($event)}}})],1),_vm._m(0)])])
}
var SecondLevelvue_type_template_id_705b8208_staticRenderFns = [function (){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"options-form"},[_c('h2',{staticClass:"options_title"},[_vm._v("Options")]),_c('div',{staticClass:"question_container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-6"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"}),_c('div',{staticClass:"col-sm-9"},[_c('h2',{staticClass:"options_header"},[_vm._v("Selection Text")])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('label',{staticClass:"col-sm-3 col-form-label",attrs:{"for":"staticEmail"}},[_vm._v("Unselected")])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 1")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 2")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 3")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 4")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 5")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 6")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])])]),_c('div',{staticClass:"col-sm-6"},[_c('h2',{staticClass:"options_header"},[_vm._v("Condition Message Text")]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])])])])])])
}]


;// CONCATENATED MODULE: ./src/vue/hearing-health-components/SecondLevel.vue?vue&type=template&id=705b8208&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/vue/hearing-health-components/SecondLevel.vue?vue&type=script&lang=js&

	
	/* harmony default export */ var hearing_health_components_SecondLevelvue_type_script_lang_js_ = ({
	    components: {
	       EditableListInput: EditableInput
	    },
	  data() {
	    return {
	      list: [
	      	"You are doing great! keep going...",
	      	"Do you have concerns with or experience any of the following?",
	      	"(Choose all that apply)",
	      	"What is your age range",
	      	"(Make a selection and continue)"
	      ],
	    }
	  },
	  methods: {
	        getInput(e) {
	            var el = jQuery(e).parent().parent().find('.list-item-label');
	          

	          if(el.attr('contentEditable')){
	            el.removeAttr('contentEditable');

	            this.list[el.attr('list-id')] = el.text();

	          }else{
	            
	            el.attr('contentEditable', true);
	          }

	        },
	   },
	});

;// CONCATENATED MODULE: ./src/vue/hearing-health-components/SecondLevel.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_hearing_health_components_SecondLevelvue_type_script_lang_js_ = (hearing_health_components_SecondLevelvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/vue/hearing-health-components/SecondLevel.vue





/* normalize component */
;
var hearing_health_components_SecondLevel_component = (0,componentNormalizer/* default */.Z)(
  vue_hearing_health_components_SecondLevelvue_type_script_lang_js_,
  SecondLevelvue_type_template_id_705b8208_render,
  SecondLevelvue_type_template_id_705b8208_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var hearing_health_components_SecondLevel = (hearing_health_components_SecondLevel_component.exports);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/vue/hearing-health-components/ThirdLevel.vue?vue&type=template&id=1827787c&
var ThirdLevelvue_type_template_id_1827787c_render = function render(){var _vm=this,_c=_vm._self._c;return _c('ul',{staticClass:"list-group parent-list-group"},[_c('li',{staticClass:"list-group-item list-item list-item-heading"},[_c('EditableListInput',{attrs:{"list-label":_vm.list[0],"list-id":0},on:{"onInputChange":function($event){return _vm.getInput($event)}}})],1),_c('ul',{staticClass:"list-group sub-list-group"},[_c('li',{staticClass:"list-group-item list-item"},[_c('EditableListInput',{attrs:{"list-label":_vm.list[1],"list-id":1},on:{"onInputChange":function($event){return _vm.getInput($event)}}})],1),_c('li',{staticClass:"list-group-item list-item",staticStyle:{"background-color":"#f5f5f5","font-weight":"400","margin-bottom":"15px"}},[_c('EditableListInput',{attrs:{"list-label":_vm.list[2],"list-id":2},on:{"onInputChange":function($event){return _vm.getInput($event)}}})],1),_vm._m(0)])])
}
var ThirdLevelvue_type_template_id_1827787c_staticRenderFns = [function (){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"options-form"},[_c('h2',{staticClass:"options_title"},[_vm._v("Options")]),_c('div',{staticClass:"question_container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-6"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"}),_c('div',{staticClass:"col-sm-9"},[_c('h2',{staticClass:"options_header"},[_vm._v("Selection Text")])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('label',{staticClass:"col-sm-3 col-form-label",attrs:{"for":"staticEmail"}},[_vm._v("Unselected")])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 1")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 2")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 3")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 4")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 5")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])])]),_c('div',{staticClass:"col-sm-6"},[_c('h2',{staticClass:"options_header"},[_vm._v("Condition Message Text")]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])])])])])])
}]


;// CONCATENATED MODULE: ./src/vue/hearing-health-components/ThirdLevel.vue?vue&type=template&id=1827787c&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/vue/hearing-health-components/ThirdLevel.vue?vue&type=script&lang=js&

	
	/* harmony default export */ var ThirdLevelvue_type_script_lang_js_ = ({
	  components: {
	     EditableListInput: EditableInput
	  },
	  data() {
	    return {
	      list: [
	      	"Keep going, only 3 more questions.",
	      	"Which statement describes you best?",
	      	"(Choose all that apply)",
	      ],
	    }
	  },
	  methods: {
	        getInput(e) {
	            var el = jQuery(e).parent().parent().find('.list-item-label');
	          

	          if(el.attr('contentEditable')){
	            el.removeAttr('contentEditable');

	            this.list[el.attr('list-id')] = el.text();

	          }else{
	            
	            el.attr('contentEditable', true);
	          }

	        },
	  },
	});

;// CONCATENATED MODULE: ./src/vue/hearing-health-components/ThirdLevel.vue?vue&type=script&lang=js&
 /* harmony default export */ var hearing_health_components_ThirdLevelvue_type_script_lang_js_ = (ThirdLevelvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/vue/hearing-health-components/ThirdLevel.vue





/* normalize component */
;
var ThirdLevel_component = (0,componentNormalizer/* default */.Z)(
  hearing_health_components_ThirdLevelvue_type_script_lang_js_,
  ThirdLevelvue_type_template_id_1827787c_render,
  ThirdLevelvue_type_template_id_1827787c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ThirdLevel = (ThirdLevel_component.exports);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/vue/hearing-health-components/FourthLevel.vue?vue&type=template&id=8d9f6944&
var FourthLevelvue_type_template_id_8d9f6944_render = function render(){var _vm=this,_c=_vm._self._c;return _c('ul',{staticClass:"list-group parent-list-group"},[_c('li',{staticClass:"list-group-item list-item list-item-heading"},[_c('EditableListInput',{attrs:{"list-label":_vm.list[0],"list-id":0},on:{"onInputChange":function($event){return _vm.getInput($event)}}})],1),_c('ul',{staticClass:"list-group sub-list-group"},[_c('li',{staticClass:"list-group-item list-item"},[_c('EditableListInput',{attrs:{"list-label":_vm.list[1],"list-id":1},on:{"onInputChange":function($event){return _vm.getInput($event)}}})],1),_c('li',{staticClass:"list-group-item list-item",staticStyle:{"background-color":"#f5f5f5","font-weight":"400","margin-bottom":"15px"}},[_c('EditableListInput',{attrs:{"list-label":_vm.list[2],"list-id":2},on:{"onInputChange":function($event){return _vm.getInput($event)}}})],1),_vm._m(0)])])
}
var FourthLevelvue_type_template_id_8d9f6944_staticRenderFns = [function (){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"options-form"},[_c('h2',{staticClass:"options_title"},[_vm._v("Options")]),_c('div',{staticClass:"question_container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-6"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"}),_c('div',{staticClass:"col-sm-9"},[_c('h2',{staticClass:"options_header"},[_vm._v("Selection Text")])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('label',{staticClass:"col-sm-3 col-form-label",attrs:{"for":"staticEmail"}},[_vm._v("Unselected")])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 1")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 2")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 3")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 4")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 5")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 6")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 7")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 8")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])])]),_c('div',{staticClass:"col-sm-6"},[_c('h2',{staticClass:"options_header"},[_vm._v("Condition Message Text")]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])])])])])])
}]


;// CONCATENATED MODULE: ./src/vue/hearing-health-components/FourthLevel.vue?vue&type=template&id=8d9f6944&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/vue/hearing-health-components/FourthLevel.vue?vue&type=script&lang=js&

	
	/* harmony default export */ var FourthLevelvue_type_script_lang_js_ = ({
	  components: {
	     EditableListInput: EditableInput
	  },
	  data() {
	    return {
	      list: [
	        "Almost there.",
	      	"In which situation do you wish to hear better",
	      	"(Choose all that apply)",
	      ],
	    }
	  },
	  methods: {
	        getInput(e) {
	            var el = jQuery(e).parent().parent().find('.list-item-label');
	          

	          if(el.attr('contentEditable')){
	            el.removeAttr('contentEditable');

	            this.list[el.attr('list-id')] = el.text();

	          }else{
	            
	            el.attr('contentEditable', true);
	          }

	        },
	  },
	});

;// CONCATENATED MODULE: ./src/vue/hearing-health-components/FourthLevel.vue?vue&type=script&lang=js&
 /* harmony default export */ var hearing_health_components_FourthLevelvue_type_script_lang_js_ = (FourthLevelvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/vue/hearing-health-components/FourthLevel.vue





/* normalize component */
;
var FourthLevel_component = (0,componentNormalizer/* default */.Z)(
  hearing_health_components_FourthLevelvue_type_script_lang_js_,
  FourthLevelvue_type_template_id_8d9f6944_render,
  FourthLevelvue_type_template_id_8d9f6944_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FourthLevel = (FourthLevel_component.exports);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/vue/hearing-health-components/FifthLevel.vue?vue&type=template&id=fa63a57a&
var FifthLevelvue_type_template_id_fa63a57a_render = function render(){var _vm=this,_c=_vm._self._c;return _c('ul',{staticClass:"list-group parent-list-group"},[_c('li',{staticClass:"list-group-item list-item list-item-heading"},[_c('EditableListInput',{attrs:{"list-label":_vm.list[0],"list-id":0},on:{"onInputChange":function($event){return _vm.getInput($event)}}})],1),_c('ul',{staticClass:"list-group sub-list-group"},[_c('li',{staticClass:"list-group-item list-item"},[_c('EditableListInput',{attrs:{"list-label":_vm.list[1],"list-id":1},on:{"onInputChange":function($event){return _vm.getInput($event)}}})],1),_c('li',{staticClass:"list-group-item list-item",staticStyle:{"background-color":"#f5f5f5","font-weight":"400","margin-bottom":"15px"}},[_c('EditableListInput',{attrs:{"list-label":_vm.list[2],"list-id":2},on:{"onInputChange":function($event){return _vm.getInput($event)}}})],1),_vm._m(0)])])
}
var FifthLevelvue_type_template_id_fa63a57a_staticRenderFns = [function (){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"options-form"},[_c('h2',{staticClass:"options_title"},[_vm._v("Options")]),_c('div',{staticClass:"question_container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-6"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"}),_c('div',{staticClass:"col-sm-9"},[_c('h2',{staticClass:"options_header"},[_vm._v("Selection Text")])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('label',{staticClass:"col-sm-3 col-form-label",attrs:{"for":"staticEmail"}},[_vm._v("Unselected")])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 1")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 2")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 3")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3"},[_c('label',[_vm._v("Option 4")])]),_c('div',{staticClass:"col-sm-9"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])])]),_c('div',{staticClass:"col-sm-6"},[_c('h2',{staticClass:"options_header"},[_vm._v("Condition Message Text")]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])]),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('input',{staticClass:"form-control-plaintext question_inputs",attrs:{"type":"text","value":"The default conditional text message goes here."}})])])])])])])])
}]


;// CONCATENATED MODULE: ./src/vue/hearing-health-components/FifthLevel.vue?vue&type=template&id=fa63a57a&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/vue/hearing-health-components/FifthLevel.vue?vue&type=script&lang=js&

	
	/* harmony default export */ var FifthLevelvue_type_script_lang_js_ = ({
	  components: {
	     EditableListInput: EditableInput
	  },
	  data() {
	    return {
	      list: [
	        "Last question about your hearing health.",
	      	"How often do you use wireless technology like bluetooth and streaming devices on a daily basis?",
	      	"(Choose all that apply)",
	      ],
	    }
	  },
	  methods: {
	        getInput(e) {
	            var el = jQuery(e).parent().parent().find('.list-item-label');
	          

	          if(el.attr('contentEditable')){
	            el.removeAttr('contentEditable');

	            this.list[el.attr('list-id')] = el.text();

	          }else{
	            
	            el.attr('contentEditable', true);
	          }

	        },
	  },
	});

;// CONCATENATED MODULE: ./src/vue/hearing-health-components/FifthLevel.vue?vue&type=script&lang=js&
 /* harmony default export */ var hearing_health_components_FifthLevelvue_type_script_lang_js_ = (FifthLevelvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/vue/hearing-health-components/FifthLevel.vue





/* normalize component */
;
var FifthLevel_component = (0,componentNormalizer/* default */.Z)(
  hearing_health_components_FifthLevelvue_type_script_lang_js_,
  FifthLevelvue_type_template_id_fa63a57a_render,
  FifthLevelvue_type_template_id_fa63a57a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FifthLevel = (FifthLevel_component.exports);
;// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/vue/components/SaveButton.vue?vue&type=template&id=2d08a27e&
var SaveButtonvue_type_template_id_2d08a27e_render = function render(){var _vm=this,_c=_vm._self._c;return _vm._m(0)
}
var SaveButtonvue_type_template_id_2d08a27e_staticRenderFns = [function (){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"save-btn-container"},[_c('button',{staticClass:"btn save-btn"},[_vm._v("Save")])])
}]


;// CONCATENATED MODULE: ./src/vue/components/SaveButton.vue?vue&type=template&id=2d08a27e&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/vue/components/SaveButton.vue?vue&type=script&lang=js&

/* harmony default export */ var SaveButtonvue_type_script_lang_js_ = ({
 
});

;// CONCATENATED MODULE: ./src/vue/components/SaveButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SaveButtonvue_type_script_lang_js_ = (SaveButtonvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/vue/components/SaveButton.vue





/* normalize component */
;
var SaveButton_component = (0,componentNormalizer/* default */.Z)(
  components_SaveButtonvue_type_script_lang_js_,
  SaveButtonvue_type_template_id_2d08a27e_render,
  SaveButtonvue_type_template_id_2d08a27e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SaveButton = (SaveButton_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/vue/App.vue?vue&type=script&lang=js&










/*Components*/


/* harmony default export */ var vue_Appvue_type_script_lang_js_ = ({
  components: {
    AboutFirstLevel: FirstLevel,
    AboutSecondLevel: SecondLevel,
    HearingFirstLevel: hearing_health_components_FirstLevel,
    HearingSecondLevel: hearing_health_components_SecondLevel,
    HearingThirdLevel: ThirdLevel,
    HearingFourthLevel: FourthLevel,
    HearingFifthLevel: FifthLevel,
    SaveButton: SaveButton
  }
});

;// CONCATENATED MODULE: ./src/vue/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_vue_Appvue_type_script_lang_js_ = (vue_Appvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/vue/App.vue?vue&type=style&index=0&id=ec9c2b56&prod&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/vue/App.vue?vue&type=style&index=0&id=ec9c2b56&prod&lang=css&

;// CONCATENATED MODULE: ./src/vue/App.vue



;


/* normalize component */

var vue_App_component = (0,componentNormalizer/* default */.Z)(
  src_vue_Appvue_type_script_lang_js_,
  Appvue_type_template_id_ec9c2b56_render,
  Appvue_type_template_id_ec9c2b56_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_App = (vue_App_component.exports);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/framework.js + 20 modules
var framework = __webpack_require__(371);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/colors.js
var colors = __webpack_require__(6403);
;// CONCATENATED MODULE: ./src/plugins/vuetify.js





vue_runtime_esm/* default.use */.ZP.use(framework/* default */.Z);

/* harmony default export */ var vuetify = (new framework/* default */.Z({
  theme: {
    themes: {
      light: {
        primary: '#6548c6', // #E53935
        secondary: '#e9e2ff', // #FFCDD2
        navy: '#29313E', // #FFCDD2
        accent: colors/* default.indigo.base */.Z.indigo.base, // #3F51B5
        previousBtn: '#cecbe3',
        nextBtn: '#8cc93d'
      },
    },
  }
}));

;// CONCATENATED MODULE: ./src/main.js






//import '@/assets/js/ghx-lp-form-submit.js'


window.getLpData = function () {
  try {
    let local_data = window.sessionStorage.getItem("lp_data");
    let UID = window.sessionStorage.getItem("spot_id");

    if (!local_data) return false;

    var CryptoJS = __webpack_require__(1354);
    var bytes = CryptoJS.AES.decrypt(local_data, `ghx-uuid-${UID}`);

    var data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    // if (data.expiry <= Date.now()) {
    //   window.sessionStorage.removeItem("lp_data");
    //   window.sessionStorage.removeItem('lp_id');

    //   return false
    // }

    return data;
  } catch (e) {
    return false;
  }
};

vue_runtime_esm/* default.component */.ZP.component("list-comp", ListComp);
vue_runtime_esm/* default.use */.ZP.use(pinia/* PiniaVuePlugin */.og);
const main_pinia = (0,pinia/* createPinia */.WB)();

vue_runtime_esm/* default.config.productionTip */.ZP.config.productionTip = false;
const appRoot =  true ? ".hl-ghx" : 0;
var container = document.querySelector(appRoot); //#app .hl-ghx

if (container) {
  new vue_runtime_esm/* default */.ZP({
    vuetify: vuetify,
    pinia: main_pinia,
    settings: {dialog: container?.dataset?.dialog === "false" ? false: true},
    render: (h) => h(App),
  }).$mount(container);
}

var content = document.querySelector("#content-containers");

if (content) {
  new vue_runtime_esm/* default */.ZP({
    el: "#content-containers",
    render: (h) => h(vue_App),
  }).$mount(content);
}


/***/ }),

/***/ 5629:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 5676:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"config":{"title":"Guided Hearing Experience","mobileLogo":"assets/images/hl-logo.png","desktopLogo":"assets/images/hearingloss_tm.png","activities":[{"name":"Me","pages":[{"title":"Are you here for yourself or a loved one?","icon":"","message":"","firstInstuction":"","secondInstuction":"","form":{"type":"radio","meta":"type","multiSelect":false,"button_size":"small","options":[{"label":"Me","content":null,"icon":null},{"label":"Loved One","content":null,"icon":null}],"info":null},"googleAnalytics":[{"type":"btnContinue","value":{"event":"0.0.4_me-lovedone","assessment_question":"{{title}}","assessment_answer":"{{value}}"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":{"title":"About Your<br/>Love One","label":"1"},"order":1,"step":1,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"What year were you born?","icon":null,"message":"","firstInstuction":"","secondInstuction":"","form":{"type":"date","meta":"date_of_birth","multiSelect":false,"options":null,"info":{"label":"","description":"","icon":""}},"googleAnalytics":[{"type":"btnContinue","value":{"event":"1.1.0_age-me","assessment_question":"{{title}}","assessment_answer":"{{value}}"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":null,"order":2,"step":1,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"What best describes you? <br/> (Select all that apply)","icon":null,"message":"","firstInstuction":"","secondInstuction":"","form":{"type":"radio","meta":"client_description","multiSelect":true,"options":[{"label":"I want to treat my hearing loss","content":null,"icon":null},{"label":"I’m ready to test my hearing","content":null,"icon":null},{"label":"I’m proving I can hear well","content":null,"icon":null},{"label":"I’m researching my options","content":null,"icon":null},{"label":"I’m seeking a provider","content":null,"icon":null},{"label":"My hearing aid needs help","content":null,"icon":null}],"info":{"label":"","description":"","icon":""}},"googleAnalytics":[{"type":"btnContinue","value":{"event":"1.2.0_best-describes-me","assessment_question":"{{title}}","assessment_answer":"{{value}}"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":{"title":"Your Hearing Health","label":"2"},"order":3,"step":2,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"Do you have concerns with or experience any of the following? <br/> (Select all that apply)","icon":null,"message":"","firstInstuction":"","secondInstuction":"","form":{"type":"radio","meta":"client_concern","multiSelect":true,"options":[{"label":"Sudden hearing loss","content":null,"icon":null},{"label":"Ringing/buzzing","content":null,"icon":null},{"label":"Pain/fullness","content":null,"icon":null},{"label":"Drainage","content":null,"icon":null},{"label":"Dizziness or vertigo","content":null,"icon":null},{"label":"None of the Above","content":null,"icon":null,"reset":true}],"info":null},"googleAnalytics":[{"type":"btnContinue","value":{"event":"1.2.1_fda-symptoms-me","assessment_question":"{{title}}","assessment_answer":"{{value}}"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":null,"order":4,"step":2,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"Which statement describes you best? <br/> (Select all that apply)","icon":null,"message":"","firstInstuction":"","secondInstuction":"","form":{"type":"radio","meta":"client_best_description","multiSelect":true,"options":[{"label":"People say I can’t hear, but I hear fine","content":null,"icon":null},{"label":"I can hear fine when people don’t mumble","content":null,"icon":null},{"label":"High voices are harder to understand","content":null,"icon":null},{"label":"I hear fine but don’t always understand","content":null,"icon":null},{"label":"I avoid dining out because it’s too noisy","content":null,"icon":null},{"label":"Socializing is too stressful and tiring","content":null,"icon":null},{"label":"I want to hear better ASAP. Let’s get going!","content":null,"icon":null}],"info":null},"googleAnalytics":[{"type":"btnContinue","value":{"event":"1.2.2_statement-describes-me","assessment_question":"{{title}}","assessment_answer":"{{value}}"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":null,"order":5,"step":2,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"In which situation(s) do you wish you could hear better?  <br/> (Select all that apply)","icon":null,"message":"","firstInstuction":"","secondInstuction":"","form":{"type":"radio","meta":"client_situation","multiSelect":true,"options":[{"label":"TV","content":null,"icon":null},{"label":"Telephone","content":null,"icon":null},{"label":"In the car","content":null,"icon":null},{"label":"Meetings","content":null,"icon":null},{"label":"Restaurants","content":null,"icon":null},{"label":"Church","content":null,"icon":null},{"label":"Music","content":null,"icon":null},{"label":"Outdoors","content":null,"icon":null}],"info":null},"googleAnalytics":[{"type":"btnContinue","value":{"event":"1.2.3_situations-hear-better-me","assessment_question":"{{title}}","assessment_answer":"{{value}}"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnPlaySong","value":{"event":"play_song"}},{"type":"btnStopSong","value":{"event":"stop_song"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"order":6,"step":2,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"How often do you use wireless technology like Bluetooth and streaming devices on a daily basis?","icon":"","message":"","firstInstuction":"","secondInstuction":"","form":{"type":"radio","meta":"client_wireless_situation","multiSelect":false,"options":[{"label":"Can’t imagine life without it","content":null,"icon":null},{"label":"I stream all my music","content":null,"icon":null},{"label":"I use hands-free phone","content":null,"icon":null},{"label":"I don’t know what that is","content":null,"icon":null}],"info":null},"googleAnalytics":[{"type":"btnContinue","value":{"event":"1.2.4_wireless-technology-usage-me","assessment_question":"{{title}}","assessment_answer":"{{value}}"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":null,"order":7,"step":2,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"Let\'s get ready to take the online hearing screener","icon":null,"message":"","firstInstuction":"","secondInstuction":"","form":{"type":"info1","meta":"init_experiment","multiSelect":false,"shortList":true,"options":[{"label":"About the Screener","content":[{"label":"Quick","description":"","icon":"assets/icons/ghx_icon_check.svg","type":"list"},{"label":"Easy","description":"","icon":"assets/icons/ghx_icon_check.svg","type":"list"},{"label":"Informative","description":"","icon":"assets/icons/ghx_icon_check.svg","type":"list"}],"icon":null},{"label":"What You\'ll Need","content":[{"label":"Quiet Place","description":"All you need is a quiet space and a phone or a computer.","icon":"assets/icons/ghx_icon_quiet.svg","type":"list"},{"label":"Headphones","description":"Need to grab headphones? No problem, <a id=\\"save-spot\\" href=\\"#\\">save your spot here!</a>","icon":"assets/icons/ghx_icon_headphones.svg","type":"list"}],"icon":null},{"label":"What You\'ll Get","content":[{"label":"A Personalized Hearing Profile","description":"Our suggestions are unique to your answers and online hearing screener results.","icon":"assets/icons/ghx_icon_form.svg","type":"list"}],"icon":null}],"info":null},"googleAnalytics":[{"type":"btnContinue","value":{"event":"1.3.0_get-ready-me"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":{"title":"Hearing Screener","label":"3"},"order":8,"step":3,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"Find a quiet place and put on your headphones","icon":null,"message":"","firstInstuction":"","secondInstuction":"","form":{"type":"info2","meta":"","multiSelect":false,"shortList":false,"options":[{"label":"","content":[{"label":"","description":"Set your device to its maximum volume.","icon":null,"order":1},{"label":null,"description":null,"icon":null}],"icon":null},{"label":"","content":[{"label":"","description":"Test that your headphones are working properly.","icon":null,"order":2},{"label":"Play Song","alterLabel":"Stop Song","description":"","icon":"mdi-arrow-right","btnType":"primary","type":"button"}],"icon":null},{"label":"","content":[{"label":"","description":"Keep your device at full volume for the entire test.","icon":null,"order":3},{"label":null,"description":null,"icon":null}],"icon":null}],"info":null},"googleAnalytics":[{"type":"btnContinue","value":{"event":"1.3.1_find-quiet-place-me"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnPlaySong","value":{"event":"play_song"}},{"type":"btnStopSong","value":{"event":"stop_song"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":null,"order":9,"step":3,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"Now for the test","icon":"assets/icons/ghx_icon_left_ear.svg","message":"","firstInstuction":"","secondInstuction":"Lets start with the left ear.","form":{"type":"init","meta":"","multiSelect":false,"options":null,"info":null},"googleAnalytics":[{"type":"btnContinue","value":{"event":"1.3.2_start-left-ear-test-me"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":null,"order":10,"step":3,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"500Hz - Left ear","icon":null,"message":"","firstInstuction":"Maximum volume. Headphones on.","secondInstuction":"Starting at #6, click up or down until you can just barely hear the tone.","form":{"type":"screener","meta":"","ear":"left","hz":"500","multiSelect":false,"options":[],"clickedSoundInfo":"Click up or down until you can just barely hear the tone."},"googleAnalytics":[{"type":"btnContinue","value":{"event":"1.3.3_left-500Hz","assessment_question":"{{title}}","assessment_answer":"{{value}}"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":null,"order":11,"step":3,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"1000Hz","icon":null,"message":"","firstInstuction":"Maximum volume. Headphones on.","secondInstuction":"Starting at #6, click up or down until you can just barely hear the tone.","form":{"type":"screener","meta":"","ear":"left","hz":"1000","multiSelect":false,"options":[],"clickedSoundInfo":"Click up or down until you can just barely hear the tone."},"googleAnalytics":[{"type":"btnContinue","value":{"event":"1.3.4_left-1000Hz","assessment_question":"{{title}}","assessment_answer":"{{value}}"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":null,"order":12,"step":3,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"2000Hz","icon":null,"message":"","firstInstuction":"Maximum volume. Headphones on.","secondInstuction":"Starting at #6, click up or down until you can just barely hear the tone.","form":{"type":"screener","meta":"","ear":"left","hz":"2000","multiSelect":false,"options":[],"clickedSoundInfo":"Click up or down until you can just barely hear the tone."},"googleAnalytics":[{"type":"btnContinue","value":{"event":"1.3.5_left-2000Hz","assessment_question":"{{title}}","assessment_answer":"{{value}}"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":null,"order":13,"step":3,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"4000Hz","icon":null,"message":"","firstInstuction":"Maximum volume. Headphones on.","secondInstuction":"Starting at #6, click up or down until you can just barely hear the tone.","form":{"type":"screener","meta":"","ear":"left","hz":"4000","multiSelect":false,"options":[],"clickedSoundInfo":"Click up or down until you can just barely hear the tone."},"googleAnalytics":[{"type":"btnContinue","value":{"event":"1.3.6_left-4000Hz","assessment_question":"{{title}}","assessment_answer":"{{value}}"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":null,"order":14,"step":3,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"Excellent! You\'re done with the left ear","icon":"assets/icons/ghx_icon_right_ear.svg","message":"","firstInstuction":"","secondInstuction":"Let\'s move on with your right ear.","form":{"type":"init","meta":"","multiSelect":false,"options":null,"info":null},"googleAnalytics":[{"type":"btnContinue","value":{"event":"1.3.7_right-ear-start-me","assessment_question":"{{title}}"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":null,"order":15,"step":3,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"500Hz","icon":null,"message":"","firstInstuction":"Maximum volume. Headphones on.","secondInstuction":"Starting at #6, click up or down until you can just barely hear the tone.","form":{"type":"screener","meta":"","ear":"right","hz":"500","multiSelect":false,"options":[],"clickedSoundInfo":"Click up or down until you can just barely hear the tone."},"googleAnalytics":[{"type":"btnContinue","value":{"event":"1.3.8_right-500Hz-me","assessment_question":"{{title}}","assessment_answer":"{{value}}"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":null,"order":16,"step":3,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"1000Hz","icon":null,"message":"","firstInstuction":"Maximum volume. Headphones on.","secondInstuction":"Starting at #6, click up or down until you can just barely hear the tone.","form":{"type":"screener","meta":"","ear":"right","hz":"1000","multiSelect":false,"options":[],"clickedSoundInfo":"Click up or down until you can just barely hear the tone."},"googleAnalytics":[{"type":"btnContinue","value":{"event":"1.3.9_right-1000Hz-me","assessment_question":"{{title}}","assessment_answer":"{{value}}"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":null,"order":17,"step":3,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"2000Hz","icon":null,"message":"","firstInstuction":"Maximum volume. Headphones on.","secondInstuction":"Starting at #6, click up or down until you can just barely hear the tone.","form":{"type":"screener","meta":"","ear":"right","hz":"2000","multiSelect":false,"options":[],"clickedSoundInfo":"Click up or down until you can just barely hear the tone."},"googleAnalytics":[{"type":"btnContinue","value":{"event":"1.3.10_right-2000Hz-me","assessment_question":"{{title}}","assessment_answer":"{{value}}"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":null,"order":18,"step":3,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"4000Hz","icon":null,"message":"","firstInstuction":"Maximum volume. Headphones on.","secondInstuction":"Starting at #6, click up or down until you can just barely hear the tone.","form":{"type":"screener","meta":"","ear":"right","hz":"4000","multiSelect":false,"options":[],"clickedSoundInfo":"Click up or down until you can just barely hear the tone."},"googleAnalytics":[{"type":"btnContinue","value":{"event":"1.3.11_right-4000Hz-me","assessment_question":"{{title}}","assessment_answer":"{{value}}"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":null,"order":19,"step":3,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"Get Your Customized Hearing Profile","icon":"","message":"Please provide your email and phone number and we\'ll send your complete hearing profile results and other helpful content about hearing that will help you make informed decisions about your hearing health. Our communications will always include an unsubscribe option. Congratulations on taking proactive steps in your hearing health journey! ","firstInstuction":"","secondInstuction":"","form":{"type":"end","meta":"final","fields":[{"type":"email","label":null,"value":"email","placeholder":"Email"},{"type":"text","label":null,"value":"first_name","placeholder":"First Name"},{"type":"text","label":null,"value":"last_name","placeholder":"Last Name"},{"type":"text","label":null,"value":"phone_number","placeholder":"Phone Number"},{"type":"text","label":null,"value":"zip_code","placeholder":"Zip Code"}]},"googleAnalytics":[{"type":"btnContinue","value":{"event":"1.4.0_result-me"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":{"title":"Your Results","label":"4"},"order":20,"step":4,"value":null,"btnContinue":"See My Assessment","btnSaveSpot":"Get My Results","style":"style-1"}]},{"name":"Loved One","pages":[{"title":"Are you here for yourself or a loved one?","icon":"","message":"","firstInstuction":"","secondInstuction":"","form":{"type":"radio","meta":"type","multiSelect":false,"button_size":"small","options":[{"label":"Me","content":null,"icon":null},{"label":"Loved One","content":null,"icon":null}],"info":null},"googleAnalytics":[{"type":"btnContinue","value":{"event":"0.0.4_me-lovedone","assessment_question":"{{title}}","assessment_answer":"{{value}}"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":{"title":"About Your<br/>Love One","label":"1"},"order":1,"step":1,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"What is the age range of your loved one?","icon":null,"message":"","firstInstuction":"","secondInstuction":"","form":{"type":"radio","meta":"date_of_birth","multiSelect":false,"options":[{"label":"Under 18","content":null,"icon":null},{"label":"18-25","content":null,"icon":null},{"label":"26-40","content":null,"icon":null},{"label":"41-60","content":null,"icon":null},{"label":"Over 60","content":null,"icon":null}],"info":{"label":"","description":"","icon":""}},"googleAnalytics":[{"type":"btnContinue","value":{"event":"2.1.1_loved-one-age","assessment_question":"{{title}}","assessment_answer":"{{value}}"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":null,"order":2,"step":1,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"Which statement best describes your loved one? <br/> (Select all that apply)","icon":null,"message":"","firstInstuction":"","secondInstuction":"","form":{"type":"radio","meta":"client_description","multiSelect":true,"options":[{"label":"They want to treat their hearing loss","content":null,"icon":null},{"label":"They’re ready to test their hearing","content":null,"icon":null},{"label":"They’re proving they can hear well","content":null,"icon":null},{"label":"They’re researching their options","content":null,"icon":null},{"label":"They’re seeking a provider","content":null,"icon":null},{"label":"Their hearing aid needs help","content":null,"icon":null}],"info":{"label":"","description":"","icon":""}},"googleAnalytics":[{"type":"btnContinue","value":{"event":"2.2.0_best-describes-loved-one","assessment_question":"{{title}}","assessment_answer":"{{value}}"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":{"title":"Your Loved One\'s Hearing Health","label":"2"},"order":3,"step":2,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"Do you have concerns with your loved one experiencing any of the following? <br/> (Select all that apply)","icon":null,"message":"","firstInstuction":"","secondInstuction":"","form":{"type":"radio","meta":"client_concern","multiSelect":true,"options":[{"label":"Sudden hearing loss","content":null,"icon":null},{"label":"Ringing/buzzing","content":null,"icon":null},{"label":"Pain/fullness","content":null,"icon":null},{"label":"Drainage","content":null,"icon":null},{"label":"Dizziness or vertigo","content":null,"icon":null},{"label":"None of the Above","content":null,"icon":null,"reset":true}],"info":null},"googleAnalytics":[{"type":"btnContinue","value":{"event":"2.2.1_fda-symptoms-loved-one","assessment_question":"{{title}}","assessment_answer":"{{value}}"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":null,"order":4,"step":2,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"In which situation(s) do you feel your loved one has difficulty? <br/> (Select all that apply)","icon":null,"message":"","firstInstuction":"","secondInstuction":"","form":{"type":"radio","meta":"client_situation","multiSelect":true,"options":[{"label":"TV","content":null,"icon":null},{"label":"Telephone","content":null,"icon":null},{"label":"In the car","content":null,"icon":null},{"label":"Meetings","content":null,"icon":null},{"label":"Restaurants","content":null,"icon":null},{"label":"Church","content":null,"icon":null},{"label":"Music","content":null,"icon":null},{"label":"Outdoors","content":null,"icon":null}],"info":null},"googleAnalytics":[{"type":"btnContinue","value":{"event":"2.2.2_situations-hear-better-loved-one","assessment_question":"{{title}}"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnPlaySong","value":{"event":"play_song"}},{"type":"btnStopSong","value":{"event":"stop_song"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":null,"order":5,"step":2,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"How often does your loved one use wireless technology like Bluetooth and streaming devices?","icon":"","message":"","firstInstuction":"","secondInstuction":"","form":{"type":"radio","meta":"client_wireless_situation","multiSelect":false,"options":[{"label":"They’re tech savvy","content":null,"icon":null},{"label":"They stream music","content":null,"icon":null},{"label":"They use a hands-free phone options like Bluetooth","content":null,"icon":null},{"label":"They don’t know what it is","content":null,"icon":null}],"info":null},"googleAnalytics":[{"type":"btnContinue","value":{"event":"2.2.3_wireless-technology-usage-loved-one","assessment_question":"{{title}}"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":null,"order":6,"step":2,"value":null,"btnContinue":"Continue","btnSaveSpot":"Save my spot and exit","style":"style-1"},{"title":"Motivate your loved one today to start their hearing journey.","icon":"","message":"Please provide your email and phone number and we\'ll send you helpful content to help you and your loved one make informed decisions about their hearing health. Our communications will always include an unsubscribe option. Congratulations on taking the first step to helping a loved one start their hearing journey!","firstInstuction":"","secondInstuction":"","form":{"type":"end","meta":"final","fields":[{"type":"email","label":null,"value":"email","placeholder":"Email"},{"type":"text","label":null,"value":"first_name","placeholder":"First Name"},{"type":"text","label":null,"value":"last_name","placeholder":"Last Name"},{"type":"text","label":null,"value":"phone_number","placeholder":"Phone Number"},{"type":"text","label":null,"value":"zip_code","placeholder":"Zip Code"}]},"googleAnalytics":[{"type":"btnContinue","value":{"event":"2.3.0_results-loved-one","assessment_question":"{{title}}","assessment_answer":"{{value}}"}},{"type":"btnBack","value":{"event":"0.0.2_back","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}}],"header":{"title":"Next Steps for your Loved One","label":"3"},"order":7,"step":3,"value":null,"btnContinue":"See My Assessment","btnSaveSpot":"Get Information","style":"style-1"}]}],"saveForLater":{"title":"Want to continue later? We’ll email <br>your spot to you.","message":"Please provide your email, and we\'ll send you a reminder with a link that takes you right back to where you left off in our Guided Hearing Experience. You\'ll also receive helpful content about hearing that will help you make informed decisions. Our communications always include an option to unsubscribe. <br><br>If you\'d like to restart the experience, simply click or tap ","form":{"type":"form","meta":"saveAndExit","field":{}},"googleAnalytics":[{"type":"btnSaveSpot","value":{"event":"0.0.3_save-my-spot-and-exit","screen_name":"{{title}}"}},{"type":"btnExit","value":{"event":"0.0.1_close","screen_name":"{{title}}"}},{"type":"btnCancel","value":{"event":"cancel_button_click","screen_name":"{{title}}"}},{"type":"btnRestart","value":{"event":"restart_assessment","screen_name":"{{title}}"}}],"meta":null,"value":null,"btnContinue":"Save my spot and exit","style":"style-1"},"hearingConditions":[{"label":"NoImpairment","value":25},{"label":"SlightImpairment","value":40},{"label":"ModerateImpairment","value":60},{"label":"SevereImpairment","value":80},{"label":"ProfoundImpairment","value":100}],"googleAnalytics":[{"type":"btnOpenApp","value":{"event":"0.0.0_online_hearing_test"}}]},"theme":{"font":"//fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap","fontName":"Urbanist","headerStyle":"style-1","footerStyle":"style-1","btnStyle":"style-1","primaryColor":"#6548c6","secondaryColor":"#000000de","secondaryDarkColor":"#0e5588","thirdColor":"#8f7bd2","cardTextColor":"#6548c6","closeIconColor":"#000000de","indicatorActiveColor":"#6548c6","backgroundColor":null,"backgroundImage":null,"loadingGIF":"assets/icons/loading.gif"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhl_ghx"] = self["webpackChunkhl_ghx"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [998], function() { return __webpack_require__(9163); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;