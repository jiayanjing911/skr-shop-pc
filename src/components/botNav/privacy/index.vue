<!-- 隐私政策 -->
<template>
  <div class="privacy">
    <div class="privacy-our">
      <span>隐私政策</span>
    </div>
    <!-- 内容 -->
    <div class="privacy-content">
      <!-- 头部文字 -->
      <div class="main_text">
        <p>
          Double U Concept Korea
          Co.，Ltd.（以下简称``公司''）重视用户信息并遵守相关法律法规。
        </p>
        <p>
          因此，公司已根据《信息和通信网络使用促进和信息保护法》和《个人信息保护法》等相关法律制定了个人信息处理政策，并在公司网站上进行了披露，以便用户可以随时轻松浏览。
        </p>
        <p>
          本政策可能会根据公司政策不时更改，如果重要内容发生更改，我们将通过网站通知用户，以便用户可以检查更改。
        </p>
      </div>
      <!-- 总则 -->
      <div class="rule">
        <div class="rule-item">
          <p>第一条总则</p>
          <p>第二条个人信息的收集和使用</p>
          <p>第三条向第三方提供个人信息</p>
          <p>第四条链接网站</p>
          <p>第5条个人信息的处理委托</p>
        </div>
        <div class="col"></div>
        <div class="rule-item">
          <p>第一条总则</p>
          <p>第二条个人信息的收集和使用</p>
          <p>第三条向第三方提供个人信息</p>
          <p>第四条链接网站</p>
          <p>第5条个人信息的处理委托</p>
        </div>
        <div class="col"></div>
        <div class="rule-item">
          <p>第一条总则</p>
          <p>第二条个人信息的收集和使用</p>
          <p>第三条向第三方提供个人信息</p>
          <p>第四条链接网站</p>
          <p>第5条个人信息的处理委托</p>
        </div>
      </div>
      <!-- 两条内容 -->
      <div class="list_content">
        <h3>第一条总则</h3>
        <p class="title">
          1.“个人信息”是指有关在世个人的信息，包括可用于通过姓名，移动电话号码等来识别个人的信息（包括即使特定个人无法将其与其他信息轻松组合的信息）仅由信息识别）说。
        </p>
        <p class="title">
          2.公司遵守相关法律法规，安全处理有价值用户的个人信息。通过个人信息处理政策，公司告知使用用户提供的个人信息的目的和方法，以及正在采取哪些措施来保护个人信息。
        </p>
        <p class="title">
          3.公司在网站的第一个屏幕上披露隐私政策，以便用户可以随时轻松查看它。
        </p>
        <p class="title">
          4.为了不断改进个人信息处理策略，建立了修改个人信息处理策略的必要步骤，并且在进行修改时，通过版本管理，用户可以轻松地查看修改后的事项。
        </p>
        <h3>第二条总则</h3>
        <p class="title">
          1.“个人信息”是指有关在世个人的信息，包括可用于通过姓名，移动电话号码等来识别个人的信息（包括即使特定个人无法将其与其他信息轻松组合的信息）仅由信息识别）说。
        </p>
      </div>
      <div class="privacy_table">
        <template>
          <el-table style="width: 100%">
            <el-table-column prop="date" label="Name" width="280">
            </el-table-column>
            <el-table-column prop="name" label="收集目的" width="280">
            </el-table-column>
            <el-table-column prop="address" label="分配" width="280">
            </el-table-column>
            <el-table-column prop="cloct" label="收集物品" width="282">
            </el-table-column>
            <div slot="empty" style="text-align: left" class="empty">
              <svg
                width="64"
                height="41"
                viewBox="0 0 64 41"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(0 1)" fill="none" fillRule="evenodd">
                  <ellipse
                    fill="#F5F5F5"
                    cx="32"
                    cy="33"
                    rx="32"
                    ry="7"
                  ></ellipse>
                  <g fillRule="nonzero" stroke="#D9D9D9">
                    <path
                      d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
                    ></path>
                    <path
                      d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                      fill="#FAFAFA"
                    ></path>
                  </g>
                </g>
              </svg>
              <p>No Data</p>
            </div>
          </el-table>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Privacy",
  data() {
    return {};
  },
};
</script>

<style lang="scss" >
.privacy {
  width: 100%;

  .privacy-our {
    box-sizing: border-box;
    height: 200px;
    width: 1342px;
    padding-top: 80px;
    margin: 0 auto;
    span {
      font-size: 44px;
      line-height: 100%;
    }
  }
  .privacy-content {
    margin: 0 auto;
    width: 1123px;
    p {
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
      text-align: left;
    }
    .rule {
      width: 1123px;
      height: 145px;
      margin: 0 auto;
      padding: 20px;
      background-color: rgb(248, 248, 248);
      margin-top: 20px;
      box-sizing: border-box;
      .rule-item {
        display: inline-block;
        width: 200px;
        p {
          width: 317px;
        }
      }
      .col {
        width: 3px;
        height: 110px;
        display: inline-block;
        border-right: 2px solid rgb(204, 204, 204);
        margin: 0 118px;
        margin-bottom: -20px;
      }
    }
    h3 {
      font-size: 18px;
      margin: 40px 0 10px;
      text-align: left;
      color: #000000d9;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
        "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica,
        Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol";
      font-weight: 500;
    }
    .privacy_table {
      width: 1123px;
      margin: 0 auto;
      border: 1px solid rgb(236, 236, 236);
      .el-table_1_column_1,
      .el-table_1_column_2,
      .el-table_1_column_3,
      .el-table_1_column_4 {
        background-color: #fafafa;
        height: 54px;
        box-sizing: border-box;
      }
      .el-table_1_column_1,
      .el-table_1_column_2,
      .el-table_1_column_3 {
        border-right: 1px solid rgb(236, 236, 236);
      }
      .cell {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
          "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue",
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        color: #000;
        font-size: 14px;
        font-weight: 500;
      }
      .el-table__empty-block {
        width: 100%;
        height: 168px;
      }
      .empty {
        width: 100%;
        height: 168px;
        svg {
          display: block;
          margin: 60px auto 0;
        }
        p {
          display: block;
          text-align: center;
        }
      }
    }
  }
}
</style>