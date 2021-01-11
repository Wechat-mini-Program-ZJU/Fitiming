// var index =null;
// var howmany = null;

var formlist = [
  {
    formName: "大内建时间意向调查",
    formStatus: "已发布",
    peopleCount: 29,
    quest: false,
    date: "2020-12-10",
    notes: "一起来玩呀",
  },
  {
    formName: "1",
    formStatus: "未发布",
    peopleCount: 0,
    quest: false,
    date: "2021-1-12",
    notes: null,
  },
  {
    formName: "思修小组会议",
    formStatus: "已停止",
    peopleCount: 6,
    quest: false,
    date: "2019-11-11",
    notes: "请准时到场，不到需请假",
  }
]

function NewTimeForm( array ) {
  formlist.push({
    formName: array.formName,
    formStatus: array.formStatus,
    peopleCount: array.peopleCount,
    quest: array.quest,
    date: array.date,
    notes: array.notes,
  })
  console.log("NewTimeForm is run in formList.js")
}

function DeleteTimeForm( index,howmany ) {
  formlist.splice(index,howmany)
  console.log("DeleteTimeForm is run in formList.js")
}

module.exports={
  formlist: formlist,
  NewTimeForm: NewTimeForm,
  DeleteTimeForm: DeleteTimeForm,
}