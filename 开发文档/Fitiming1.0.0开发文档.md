# Fitiming 开发文档

## 版本修订

| 版本号 | 修订人 | 修订时间 | 修订内容                                                     |
| ------ | ------ | -------- | ------------------------------------------------------------ |
| v1.0.0 | 徐瑞柏 | 20.12.25 | 大致的结构框架和简介，以及各模块概况及规划。                 |
| v1.0.1 | 颜尔汛 | 20.1.5   | TimeFormCard组件初版                                         |
| v1.0.2 | 徐瑞柏 | 20.1.9   | 新增组件及页面<br/>新增colorUI<br/>新增基于colorUI的自定义Tabbar |

## 简介

本开发文档旨在及时记录开发进度，统一开发方向。

Fitiming1.0.0计划以Qscamera为参照对象，分前端/后端云函数/后端云数据库三块进行开发。

附上Qscamera的Github https://github.com/Fantast416/WxApp_QsCamera.git



## 前端

### 概况及规划

前端应当采用采用类MVVM形式开发，尽可能多的使用组件化开发，便于后续版本迭代更新。



### Color UI

ColorUI是一个css库，在这个项目中，我们借助 Color UI-使用原生小程序开发 加快前端开发

参考：[Color UI Github](https://github.com/weilanwl/ColorUI)



### 组件(待完善)

1. 自定义Tabbar

   基于colorUI

   大致流程可参照 [微信小程序ColorUI自定义底部导航条Tabbar](https://mp.weixin.qq.com/s/rny7nKdARJWJ0U6clOiwsA)

2. TimeFormCard

   时间统计信息卡片组件

   <img src=".\pictures\TimeFormCard.jpg" alt="image-20201225125643648" style="zoom:33%;" />

3. TimeFormQuest

   时间统计处理请求组件

   <img src=".\pictures\TimeFormQuest.jpg" alt="image-20201225125643648" style="zoom:33%;" />

4. TimeBar

   时间轴组件

   1个时间轴组件由1个日期，24个小时时间段icon颗粒组成（最后选中时间段颗粒的逻辑类似音乐收藏）

   后续可在Analysis时间统计分析页和分享出去的表单页中调用

   <img src=".\pictures\TimeBar.jpg" alt="TimeBar" style="zoom:33%;" />

5. TimePoint

   时间点组件

   1个时间点组件由25个时间点（0:00到24:00）标识组成

   后续同样可在Analysis时间统计分析页和分享出去的表单页中调用

   <img src=".\pictures\TimePoint.jpg" alt="TimePoint" style="zoom:33%;" />

6. AnalysisForm

   分析表单组件

   1个分析表单组件由1个统计标题、1个当前选中时间颗粒、若干当前选中时间颗粒有空（由用户自己事先选定）的不同用户的头像和账号昵称 组成

   <img src=".\pictures\AnalysisForm.jpg" alt="AnalysisForm" style="zoom:33%;" />

 

### 页面(待完善)

1. My Timing

   我的时间统计页

   点击导航栏icon（左）进入

   

2. More

   更多页
   
   点击导航栏icon（右）进入



3. MyCenter

   个人中心页

   由更多页进入



4. NewTiming

   新建时间统计页

   点击导航栏icon（中）进入



5. Analysis页

   时间统计分析页

   由 组件：时间统计处理请求-统计分析 选项 进入





## 后端云函数

### 概况及规划

后端应当采用微信云开发，利用云函数与云开发数据库进行交互。

建议像Qscamera一样，将所有云函数均放在 cloudfunction中，可以被前端封装好的,Model模型函数调用。



## 后端云数据库

### 概况及规划

此处应当列出所有会被用到的集合类型信息。

