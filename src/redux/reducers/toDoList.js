export default {
  namespace: "toDoList",
  state: {
    list: [
      { text: "test1", time: "2018-12-06 09:39:17", completed: false },
      { text: "test2", time: "2018-12-07 09:39:17", completed: false },
      { text: "test3", time: "2018-12-08 09:39:17", completed: true },
      { text: "test4", time: "2018-12-09 09:39:17", completed: true },
      { text: "test5", time: "2018-12-10 09:39:17", completed: false }
    ]
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    test(state){
      console.log("test")
      return {...state};
    }
  }
};
