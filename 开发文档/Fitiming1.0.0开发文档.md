# Fitiming 开发文档

# 版本修订

| 版本号 | 修订人            | 修订时间 | 修订内容                                                     |
| ------ | ----------------- | -------- | ------------------------------------------------------------ |
| v1.0.0 | 徐瑞柏            | 20.12.25 | 新建开发文档<br/>大致的结构框架和简介，以及各模块概况及规划。 |
| v1.0.1 | 颜尔汛            | 20.1.5   | 完成TimeFormCard组件初版，更新开发日志                       |
| v1.0.2 | 徐瑞柏            | 20.1.9   | 新增colorUI相关内容<br/>新增组件及页面：新增基于colorUI的自定义Tabbar |
| v1.0.3 | 徐瑞柏            | 20.1.10  | 更新开发日志<br/>删除TimeFormQuest组件<br/>更新有关My Timing页面的描述<br/>细化其他一些页面的描述 |
| v1.0.4 | 颜尔汛<br/>徐瑞柏 | 20.1.10  | 更新开发日志<br/>TimeBar, TimePoint, AnalysisForm组件及Analysis页面初版<br/>NewTiming页面初版<br/>More页面初版 |
| v1.0.5 | 徐瑞柏            | 20.1.11  | 更新开发日志<br/>分离版本修订及开发日志<br/>开发文档大纲（标题层级修订） |
| v1.0.6 | 徐瑞柏            | 20.1.12  | 更新开发日志<br/>新增 架构-前端-关键数据结构                 |

# 简介

本开发文档旨在及时记录开发进度，统一开发方向。

Fitiming1.0.0计划以Qscamera为参照对象，分前端/后端云函数/后端云数据库三块进行开发。

附上Qscamera的Github https://github.com/Fantast416/WxApp_QsCamera.git



# 架构

## 前端

### 概况及规划

前端应当采用采用类MVVM形式开发，尽可能多的使用组件化开发，便于后续版本迭代更新。



### Color UI

ColorUI是一个css库，在这个项目中，我们借助 Color UI-使用原生小程序开发 加快前端开发

参考：[Color UI Github](https://github.com/weilanwl/ColorUI)



### 组件(待完善)

#### 自定义Tabbar

基于colorUI

大致流程可参照 [微信小程序ColorUI自定义底部导航条Tabbar](https://mp.weixin.qq.com/s/rny7nKdARJWJ0U6clOiwsA)



#### TimeFormCard

时间统计信息卡片组件

<img src=".\pictures\TimeFormCard.jpg" alt="image-20201225125643648" style="zoom:33%;" />

#### TimeBar

时间轴组件

1个时间轴组件由1个日期，24个小时时间段icon颗粒组成（最后选中时间段颗粒的逻辑类似音乐收藏）

后续可在Analysis时间统计分析页和分享出去的表单页中调用

<img src=".\pictures\TimeBar.jpg" alt="TimeBar" style="zoom:33%;" />



#### TimePoint

时间点组件

1个时间点组件由25个时间点（0:00到24:00）标识组成

后续同样可在Analysis时间统计分析页和分享出去的表单页中调用

<img src=".\pictures\TimePoint.jpg" alt="TimePoint" style="zoom:33%;" />



#### AnalysisForm

分析表单组件

1个分析表单组件由1个统计标题、1个当前选中时间颗粒、若干当前选中时间颗粒有空（由用户自己事先选定）的不同用户的头像和账号昵称 组成

<img src=".\pictures\AnalysisForm.jpg" alt="AnalysisForm" style="zoom:33%;" />

 

### 页面(待完善)

#### My Timing

我的时间统计页

点击导航栏icon（左）进入

调用组件：TimeFormCard；

下端有底部窗口，点击页面内调用的TimeFormCard组件可触发



#### More

更多页

点击导航栏icon（右）进入



#### MyCenter

个人中心页

由更多页进入



#### NewTiming

新建时间统计页

点击导航栏icon（中）进入



#### Analysis页

时间统计分析页

调用组件：TimePoint；TimeBar；AnalysisForm

由 组件：时间统计处理请求-统计分析 选项 进入



### 关键数据结构

#### 存储

##### formList.js



##### Users.js



#### 值传递

##### MyTiming页面内传递



##### Analysis页面内传递

Analysis页面获取formList和Users信息，处理后向TabBar组件传递

TabBar组件获取点击对象下标index，向Analysis页面传递

Analysis页面获取下标index及formList和Users信息，处理后向AnalysisForm组件传递





## 后端云函数

### 概况及规划

后端应当采用微信云开发，利用云函数与云开发数据库进行交互。

建议像Qscamera一样，将所有云函数均放在 cloudfunction中，可以被前端封装好的,Model模型函数调用。



## 后端云数据库

### 概况及规划

此处应当列出所有会被用到的集合类型信息。



# 开发日志

| 版本号 | 开发者                       | 开发时间 | 开发内容                                                     |
| ------ | ---------------------------- | -------- | ------------------------------------------------------------ |
| v0.0.0 | 徐瑞柏                       | 20.11.19 | 完成初版产品需求文档（PRD）<br/>开展会议，达成一致<br/>确定产品命名 |
| v0.1.0 | 黄余飞                       | 20.12.23 | 初始化Github，测试push                                       |
| v0.1.1 | 徐瑞柏                       | 20.12.25 | 制作初版原型<br/>撰写初版开发文档，撰写产品大致的结构框架和简介，以及各模块概况及规划。 |
| v0.2.0 | 徐瑞柏                       | 20.1.4   | 新建miniprogram相关文件夹                                    |
| v0.2.1 | 颜尔汛                       | 20.1.5   | 完成TimeFormCard组件初版                                     |
| v0.3.0 | 徐瑞柏                       | 20.1.9   | 更新产品原型<br/>更新开发文档<br/>新建cloudfunction文件夹<br/>导入Color UI库<br/>新增若干Tab页<br/>创建基于colorUI的自定义Tabbar |
| v0.3.1 | 徐瑞柏                       | 20.1.9   | 实现自定义tabBar切换可以高亮<br/>实现Tab页My Timing 和 More页面正常跳转<br/>更新全局样式<br/>更新TimeFormCard组件样式<br/>完成My Timing页面初版<br/>实现More页面上半部分<br/>实现TimeFormCard状态颜色可见<br/>完成基于colorUI的底部窗口界面撰写<br/>新增analyseForm函数，实现页面跳转<br/>优化控制台显示 |
| v0.3.2 | 颜尔汛                       | 20.1.9   | 合并开发分支                                                 |
| v0.3.3 | 颜尔汛<br/>黄余飞<br/>徐瑞柏 | 20.1.10  | 更新开发文档<br/>新增images文件夹<br/>新增独立绘制的svg图片若干<br/>更新部分页面样式<br/>完成TimeBar, TimePoint, AnalysisForm组件<br/>实现NewTiming页面正常跳转<br/>完成NewTiming页面初版<br/>完成More页面初版<br/>新增More相关索引页面<br/>合并开发分支 |
| v0.3.4 | 徐瑞柏                       | 20.1.11  | 更新开发文档：分离版本修订及开发日志<br/>实现新建模拟时间统计<br/>实现模拟时间统计删除<br/>更新NewTiming页面样式 |