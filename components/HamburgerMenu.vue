<template>
 <div>
  <div class="hambergerMenu">
    <div class="hambergerMenu-overlay-01"></div>
    <div class="hambergerMenu-overlay-02">
      <div class="hambergerMenu-contents">
        <div class="hambergerMenu-title">
          <div class="hambergerMenu-title-wrapper-01 js-click-target">
            <button>
              <span class="app-text-animation">
                <span class="app-text-animation-wrapper">
                  <span class="app-text-animation-block">aaaa</span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <button class="hambergerMenu-btn js-click-target">
      <span class="hambergerMenu-hover">
        <span class="hambergerMenu-openarea">
          <span class="hambergerMenu-openarea-line hambergerMenu-openarea-line-01"></span>
          <span class="hambergerMenu-openarea-line hambergerMenu-openarea-line-02"></span>
        </span>
      </span>
    </button>
  </div>
 </div>
</template>

<script>
export default {
 name: 'HamburgerMenu',
}
</script>
