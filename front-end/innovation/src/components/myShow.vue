<template>
  <section class="sectionthree">
    <div class="container c-container-3 c--tab">
      <div class="biaotione">
        <div class="titlecn">本届创新创业成果展示</div>
      </div>
      <div class="c-tab-head-container">
        <button type="button"
                class="c-tab-head active"
                data-tab-id="学术论文">
          学术论文
        </button>
        <button type="button"
                class="c-tab-head"
                data-tab-id="改革成果项目">
          改革成果项目
        </button>
        <button type="button"
                class="c-tab-head"
                data-tab-id="创业推介项目">
          创业推介项目
        </button>
      </div>
      <div class="c-tab-content-container">
        <div class="c-tab-content active"
             data-tab-id="学术论文">
          <div class="c--load-PartialView c-index-container">
            <div class="change-module no-box-shadow"
                 style="background: transparent">
              <div class="content">
                <div class="c-data-empty noselect c-column"
                     style="height: 324px">
                  <p>
                    <i class="c-data-empty-icon flaticon-open-box"></i>暂无<span>学术论文</span>相关信息！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="c-tab-content"
             data-tab-id="改革成果项目">
          <div class="c--load-PartialView c-index-container">
            <div class="change-module no-box-shadow"
                 style="background: transparent">
              <!-- <div class="content">
                <div
                  class="c-data-empty noselect c-column"
                  style="height: 324px"
                >
                  <p>
                    <i class="c-data-empty-icon flaticon-open-box"></i
                    >暂无<span>改革成果项目</span>相关信息！
                  </p>
                </div>
              </div> -->
            </div>
          </div>
        </div>
        <div class="c-tab-content"
             data-tab-id="创业推介项目">
          <div class="c--load-PartialView c-index-container">
            <div class="change-module no-box-shadow"
                 style="background: transparent">
              <!-- <div class="content">
                <div
                  class="c-data-empty noselect c-column"
                  style="height: 324px"
                >
                  <p>
                    <i class="c-data-empty-icon flaticon-open-box"></i
                    >暂无<span>创业推介项目</span>相关信息！
                  </p>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "myShow",
};
</script>

<style scoped>
.sectionthree {
  background-color: #f6f6f6;
  padding: 20px 0;
}

.c-tab-head-container {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 20px;
}

.c-tab-head-container > .c-tab-head.active,
.c-tab-head-container > .c-tab-head:focus,
.c-tab-head-container > .c-tab-head:hover {
  border: 1px solid #352ddb;
  background-color: #352ddb;
  color: #fff;
}

.c-tab-head-container > .c-tab-head {
  outline: 0 none;
  text-decoration: none;
  margin: 4px 6px;
  border-radius: 20px;
  height: 40px;
  width: 170px;
  border: 1px solid #d6d6d6;
  background-color: #fff;
  color: #333;
  font-size: 18px;
  line-height: 40px;
  cursor: pointer;
  transition: 0.3s all ease-out;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
}

.c-tab-content-container > .c-tab-content.active {
  display: block;
  background: #fff;
}

.c-data-empty.c-column {
  flex-direction: column;
}

.c-data-empty {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  letter-spacing: 2px;
  font-size: 20px;
  color: #ddd;
  text-align: center;
}

.c-data-empty > p {
  color: #e6cbcb !important;
  flex-wrap: wrap;
  height: auto;
}

.c-data-empty > p {
  color: inherit;
  width: 100%;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  margin: 0;
}

.c-data-empty i.c-data-empty-icon {
  margin: 0 4px;
  font-size: inherit;
  font-weight: inherit;
}
</style>